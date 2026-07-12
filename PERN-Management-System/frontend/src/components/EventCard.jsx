import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, User, Edit2, Trash2 } from 'lucide-react';

// Reusable card component for single event rendering
function EventCard({ event, onDelete }) {
  // Destructure event properties
  const { id, event_name, venue, date, coordinator, description } = event;

  // Simple date formatter helper (e.g., "Aug 15, 2026")
  const formatDate = (dateString) => {
    try {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full overflow-hidden">
      
      {/* Visual Accent Header with gradient */}
      <div className="h-2 bg-gradient-to-r from-indigo-500 to-violet-600"></div>
      
      {/* Content Section */}
      <div className="p-6 flex-grow flex flex-col">
        
        {/* Title */}
        <h3 className="text-lg font-bold text-slate-800 tracking-tight leading-snug mb-3">
          {event_name}
        </h3>

        {/* Metadata items */}
        <div className="space-y-2 mb-4 text-sm text-slate-600">
          {/* Date */}
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-indigo-500 shrink-0" />
            <span>{formatDate(date)}</span>
          </div>

          {/* Venue */}
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-violet-500 shrink-0" />
            <span className="line-clamp-1">{venue}</span>
          </div>

          {/* Coordinator */}
          <div className="flex items-center gap-2">
            <User size={16} className="text-emerald-500 shrink-0" />
            <span className="font-medium text-slate-700">Coord: {coordinator}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Action Button Section at bottom */}
        <div className="flex gap-2 pt-4 border-t border-slate-50 mt-auto">
          {/* Edit Link Button */}
          <Link
            to={`/edit-event/${id}`}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-50 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl text-xs font-semibold tracking-wide transition-colors"
          >
            <Edit2 size={13} />
            Edit
          </Link>

          {/* Delete Button */}
          <button
            onClick={() => {
              if (window.confirm(`Are you sure you want to delete "${event_name}"?`)) {
                onDelete(id);
              }
            }}
            type="button"
            className="flex items-center justify-center p-2 text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors"
            title="Delete Event"
          >
            <Trash2 size={15} />
          </button>
        </div>

      </div>
    </div>
  );
}

export default EventCard;
