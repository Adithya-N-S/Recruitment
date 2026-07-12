import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Save, PlusCircle } from 'lucide-react';

function AddEvent({ onAdd }) {
  // Use React Router's useNavigate hook to redirect pages programmatically
  const navigate = useNavigate();

  // Local state to keep track of the form inputs
  const [formData, setFormData] = useState({
    event_name: "",
    venue: "",
    date: "",
    coordinator: "",
    description: ""
  });

  // Local state to handle error validation messages
  const [error, setError] = useState("");

  // Handler to update form fields dynamically on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler for form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Simple validation: Check if any fields are empty
    const { event_name, venue, date, coordinator, description } = formData;
    if (!event_name.trim() || !venue.trim() || !date.trim() || !coordinator.trim() || !description.trim()) {
      setError("Please fill in all the fields before submitting!");
      return;
    }

    // Call the parent handler function passed via props
    onAdd(formData);

    // Redirect the user back to the Events list page
    navigate("/events");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 py-4">
      
      {/* Back Link */}
      <Link
        to="/events"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-600 transition-colors font-medium"
      >
        <ArrowLeft size={16} />
        Back to Events
      </Link>

      {/* Form Container Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8 space-y-6">
        
        {/* Title Header */}
        <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
            <PlusCircle size={20} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">Create Freshers Event</h2>
            <p className="text-slate-500 text-xs mt-0.5">Publish a new activity for incoming students.</p>
          </div>
        </div>

        {/* Validation Error Alert Banner */}
        {error && (
          <div className="p-4 bg-rose-50 border border-rose-100 text-rose-700 text-sm font-medium rounded-xl">
            {error}
          </div>
        )}

        {/* The Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Event Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="event_name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Event Name
            </label>
            <input
              type="text"
              id="event_name"
              name="event_name"
              value={formData.event_name}
              onChange={handleChange}
              placeholder="e.g. Talent Hunt & Cultural Night"
              className="px-4 py-2.5 bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200/80 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Grid for Venue and Date */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Venue */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="venue" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Venue
              </label>
              <input
                type="text"
                id="venue"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                placeholder="e.g. Main Auditorium"
                className="px-4 py-2.5 bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200/80 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>

            {/* Date */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="date" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="px-4 py-2.5 bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200/80 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>
          </div>

          {/* Coordinator */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="coordinator" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Coordinator Name
            </label>
            <input
              type="text"
              id="coordinator"
              name="coordinator"
              value={formData.coordinator}
              onChange={handleChange}
              placeholder="e.g. Dr. Susan Matthew"
              className="px-4 py-2.5 bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200/80 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="description" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Explain what the event is about, guidelines for joining, and other details..."
              className="px-4 py-2.5 bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200/80 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-y"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-slate-100">
            {/* Cancel Button */}
            <Link
              to="/events"
              className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-slate-55 border border-slate-200 text-slate-700 font-semibold rounded-xl text-sm hover:bg-slate-100 hover:text-slate-800 transition-colors"
            >
              Cancel
            </Link>

            {/* Save Button */}
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-sm shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all active:scale-[0.98]"
            >
              <Save size={16} />
              Save Event
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}

export default AddEvent;
