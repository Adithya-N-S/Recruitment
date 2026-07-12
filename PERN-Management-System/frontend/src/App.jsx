import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import AddEvent from './pages/AddEvent';
import EditEvent from './pages/EditEvent';
import About from './pages/About';

// Base API URL for backend endpoints running on port 5000
const API_URL = "http://localhost:5000/events";

// Standard functional component for the App
function App() {
  // Initialize events list as empty state array
  const [events, setEvents] = useState([]);

  // Fetch all events when the component first mounts (loads)
  useEffect(() => {
    fetchEvents();
  }, []);

  // GET: Fetch all events from Express API
  const fetchEvents = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch events.");
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error loading events:", error);
    }
  };

  // POST: Send new event details to Express API
  const addEvent = async (newEvent) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
      });
      if (!response.ok) throw new Error("Failed to create event.");
      const createdEvent = await response.json();
      
      // Update local state to immediately display the newly created event
      setEvents([...events, createdEvent]);
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  // PUT: Send modified event details to Express API matching ID
  const updateEvent = async (updatedEvent) => {
    try {
      const response = await fetch(`${API_URL}/${updatedEvent.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedEvent)
      });
      if (!response.ok) throw new Error("Failed to update event.");
      const updatedData = await response.json();
      
      // Map over our local state and replace the modified event
      setEvents(events.map(event => event.id === updatedData.id ? updatedData : event));
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  // DELETE: Send delete instruction to Express API matching ID
  const deleteEvent = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) throw new Error("Failed to delete event.");
      
      // Filter out the deleted event from our local React state
      setEvents(events.filter(event => event.id !== id));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    // Flex-col structure ensures footer stays at the bottom of the viewport
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Shared Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/events" 
            element={<Events events={events} onDelete={deleteEvent} />} 
          />
          <Route 
            path="/add-event" 
            element={<AddEvent onAdd={addEvent} />} 
          />
          <Route 
            path="/edit-event/:id" 
            element={<EditEvent events={events} onUpdate={updateEvent} />} 
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}

export default App;
