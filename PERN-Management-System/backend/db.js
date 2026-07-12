// Import the 'Pool' class from the 'pg' (node-postgres) library
const { Pool } = require('pg');

// Create a connection Pool instance.
// Pools manage multiple active database connections to make queries faster and safer.
// Change these settings to match your local PostgreSQL database credentials.
const pool = new Pool({
  user: 'postgres',          // Your PostgreSQL username (default is 'postgres')
  host: 'localhost',          // Database server location (usually 'localhost')
  database: 'freshers_db',    // Name of the database you created in PostgreSQL
  password: 'admin',          // Your PostgreSQL password
  port: 5432,                 // PostgreSQL port (default is 5432)
});

// A helper function to query the database.
// This allows us to run database commands easily from server.js.
// It takes two parameters:
// 1. text: The SQL query string (e.g., 'SELECT * FROM events WHERE id = $1')
// 2. params: An array of values that replace placeholders like $1, $2 (helps prevent SQL injection)
const query = (text, params) => {
  // Return the promise from the pool query execution
  return pool.query(text, params);
};

// Export the query helper so it can be required in server.js
module.exports = {
  query
};
