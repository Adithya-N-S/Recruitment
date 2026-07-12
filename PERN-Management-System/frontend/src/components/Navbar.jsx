import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Calendar, Menu, X, Sparkles } from 'lucide-react';

function Navbar() {
  // Local state to toggle the mobile menu dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Helper styling for active links in our navigation
  const getLinkClass = ({ isActive }) =>
    `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-indigo-50 text-indigo-600 shadow-sm'
        : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
    }`;

  // Helper styling for active mobile links
  const getMobileLinkClass = ({ isActive }) =>
    `flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${
      isActive
        ? 'bg-indigo-50 text-indigo-600 font-semibold'
        : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
    }`;

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo Brand area */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <div className="p-2 bg-indigo-600 text-white rounded-xl shadow-md shadow-indigo-100">
                <Calendar size={20} />
              </div>
              <div>
                <span className="font-bold text-slate-800 tracking-tight text-lg block leading-none">Freshers Hub</span>
                <span className="text-[10px] text-indigo-600 font-semibold uppercase tracking-wider block mt-0.5">Event Management</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
            <NavLink to="/events" className={getLinkClass}>
              Events
            </NavLink>
            <NavLink to="/add-event" className={getLinkClass}>
              Add Event
            </NavLink>
            <NavLink to="/about" className={getLinkClass}>
              About
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-1 shadow-inner">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={getMobileLinkClass}>
              Home
            </NavLink>
            <NavLink to="/events" onClick={() => setIsOpen(false)} className={getMobileLinkClass}>
              Events
            </NavLink>
            <NavLink to="/add-event" onClick={() => setIsOpen(false)} className={getMobileLinkClass}>
              Add Event
            </NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={getMobileLinkClass}>
              About
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
