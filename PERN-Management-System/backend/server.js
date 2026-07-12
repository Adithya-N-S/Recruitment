// Import required libraries
const express = require('express'); // Web framework for Node.js
const cors = require('cors');       // Middleware to allow frontend to contact backend
const db = require('./db');         // Import our database query helper from db.js

// Initialize the Express application
const app = express();

// Define the port number our server will listen on
const PORT = 5000;

// ==========================================
// MIDDLEWARES
// ==========================================

// Enable Cross-Origin Resource Sharing (CORS).
// This allows your React app running on port 5173 to fetch data from this server on port 5000.
app.use(cors());

// Enable JSON Body Parsing.
// This allows Express to read JSON data sent in the request body (e.g., from POST and PUT requests)
// and makes it available under req.body.
app.use(express.json());


// ==========================================
// REST API ENDPOINTS
// ==========================================

/**
 * 1. GET /events
 * Description: Retrieves a list of all events stored in the database.
 * Response: Status 200 with an array of event objects, or Status 500 on database error.
 */
app.get('/events', async (req, res) => {
  try {
    // Run SQL query to select all records from 'events' table, ordered by date
    const result = await db.query('SELECT * FROM events ORDER BY date ASC');
    
    // Send back the rows of events as a JSON array
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching events:', error);
    // Send a 500 Internal Server Error response if database query fails
    res.status(500).json({ error: 'Failed to retrieve events from the database.' });
  }
});

/**
 * 2. GET /events/:id
 * Description: Retrieves a single event matching the given ID.
 * Response: Status 200 with the event object if found.
 *           Status 404 if no event matches the ID.
 *           Status 500 on database error.
 */
app.get('/events/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the URL path parameter

    // Parameterized SQL query: '$1' acts as a placeholder that will be replaced by the ID.
    // This is secure and protects against SQL Injection.
    const result = await db.query('SELECT * FROM events WHERE id = $1', [id]);

    // Check if any event was found
    if (result.rows.length === 0) {
      return res.status(404).json({ error: `Event with ID ${id} not found.` });
    }

    // Return the single event object found (first row of result)
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching event by ID:', error);
    res.status(500).json({ error: 'Failed to retrieve event from the database.' });
  }
});

/**
 * 3. POST /events
 * Description: Creates a new event record in the database.
 * Request Body: JSON containing event_name, venue, date, coordinator, and description.
 * Response: Status 201 with the newly created event object.
 *           Status 400 if any required field is missing.
 *           Status 500 on database error.
 */
app.post('/events', async (req, res) => {
  try {
    // Destructure required fields from the request body
    const { event_name, venue, date, coordinator, description } = req.body;

    // Simple validation: Ensure all fields are filled
    if (!event_name || !venue || !date || !coordinator || !description) {
      return res.status(400).json({ error: 'All fields (event_name, venue, date, coordinator, description) are required.' });
    }

    // Parameterized INSERT query.
    // 'RETURNING *' tells PostgreSQL to return the newly inserted row (including its auto-generated ID).
    const queryText = `
      INSERT INTO events (event_name, venue, date, coordinator, description)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const queryParams = [event_name, venue, date, coordinator, description];

    const result = await db.query(queryText, queryParams);

    // Send back status 201 (Created) and the newly created event record
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Failed to save the new event to the database.' });
  }
});

/**
 * 4. PUT /events/:id
 * Description: Updates an existing event record in the database matching the given ID.
 * Request Body: JSON containing updated values for event_name, venue, date, coordinator, and description.
 * Response: Status 200 with the updated event object.
 *           Status 400 if any required field is missing.
 *           Status 404 if no event matches the ID.
 *           Status 500 on database error.
 */
app.put('/events/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the URL path parameter
    const { event_name, venue, date, coordinator, description } = req.body; // Get update values

    // Simple validation: Ensure all fields are filled
    if (!event_name || !venue || !date || !coordinator || !description) {
      return res.status(400).json({ error: 'All fields (event_name, venue, date, coordinator, description) are required.' });
    }

    // Parameterized UPDATE query.
    // 'RETURNING *' returns the row after it has been updated in the database.
    const queryText = `
      UPDATE events 
      SET event_name = $1, venue = $2, date = $3, coordinator = $4, description = $5 
      WHERE id = $6 
      RETURNING *;
    `;
    const queryParams = [event_name, venue, date, coordinator, description, id];

    const result = await db.query(queryText, queryParams);

    // Check if the update affected any rows (if rowCount is 0, event didn't exist)
    if (result.rowCount === 0) {
      return res.status(404).json({ error: `Event with ID ${id} not found.` });
    }

    // Send back the updated event object
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'Failed to update event in the database.' });
  }
});

/**
 * 5. DELETE /events/:id
 * Description: Deletes an event record from the database matching the given ID.
 * Response: Status 200 with success confirmation and the deleted event object.
 *           Status 404 if no event matches the ID.
 *           Status 500 on database error.
 */
app.delete('/events/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the URL path parameter

    // Parameterized DELETE query.
    // 'RETURNING *' returns the row that was deleted.
    const result = await db.query('DELETE FROM events WHERE id = $1 RETURNING *', [id]);

    // Check if any row was deleted
    if (result.rowCount === 0) {
      return res.status(404).json({ error: `Event with ID ${id} not found.` });
    }

    // Send back the deleted event details as confirmation
    res.status(200).json({ 
      message: 'Event successfully deleted.', 
      deleted_event: result.rows[0] 
    });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'Failed to delete event from the database.' });
  }
});


// ==========================================
// START SERVER
// ==========================================

// Start listening for incoming HTTP requests on the specified port
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🚀 Freshers Event System Server is running!`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`👉 Press Ctrl+C to terminate the server`);
  console.log(`==================================================`);
});
