import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, CalendarOff } from 'lucide-react';
import EventCard from '../components/EventCard';

function Events({ events, onDelete }) {
  // Local state to keep track of the search input text
  const [searchTerm, setSearchTerm] = useState("");

  // Filter events based on search term matching the event name or coordinator name
  const filteredEvents = events.filter((event) => {
    const term = searchTerm.toLowerCase();
    return (
      event.event_name.toLowerCase().includes(term) ||
      event.coordinator.toLowerCase().includes(term) ||
      event.venue.toLowerCase().includes(term)
    );
  });

  return (
    <div className="space-y-8 py-4">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            Schedule of Events
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Browse, search, and manage all freshers orientation activities in one place.
          </p>
        </div>

        {/* Add Event Navigation CTA */}
        <Link
          to="/add-event"
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold tracking-wide shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all active:scale-[0.98]"
        >
          <Plus size={16} />
          Add New Event
        </Link>
      </div>

      {/* Search Input Bar */}
      <div className="relative max-w-md bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Search size={18} />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by event name, venue, or coordinator..."
          className="block w-full pl-10 pr-4 py-3 bg-transparent text-slate-800 placeholder-slate-400 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
        />
      </div>

      {/* Events Grid / Lists */}
      {filteredEvents.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onDelete={onDelete} 
            />
          ))}
        </div>
      ) : (
        // Empty State View
        <div className="text-center py-16 bg-white border border-slate-100 rounded-2xl shadow-sm flex flex-col items-center max-w-lg mx-auto">
          <div className="p-4 bg-slate-50 rounded-full text-slate-400 mb-4">
            <CalendarOff size={40} />
          </div>
          <h3 className="text-lg font-bold text-slate-800 tracking-tight">No Events Found</h3>
          <p className="text-slate-500 text-sm mt-1 max-w-xs mx-auto">
            {searchTerm 
              ? "We couldn't find any events matching your search criteria. Try a different search term!" 
              : "There are currently no events registered. Be the first to create one!"}
          </p>
          <div className="mt-6">
            {searchTerm ? (
              <button
                onClick={() => setSearchTerm("")}
                className="px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-xl text-sm hover:bg-slate-200 transition-colors"
              >
                Clear Search
              </button>
            ) : (
              <Link
                to="/add-event"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-sm transition-colors"
              >
                Create Event Now
              </Link>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default Events;
