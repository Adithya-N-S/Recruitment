import React from 'react';
import { Sparkles, Github } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo Brand Footer */}
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-base tracking-tight">
              Freshers Hub
            </span>
            <span className="h-4 w-px bg-slate-800 hidden md:inline"></span>
            <p className="text-xs text-slate-500">
              College Event Management System Assignment
            </p>
          </div>

          {/* Academic Info & Copywrite */}
          <div className="flex flex-col items-center md:items-end text-xs text-slate-500 gap-1">
            <p className="flex items-center gap-1">
              Made with <Sparkles size={12} className="text-indigo-400 animate-pulse" /> for CSE Branch S3
            </p>
            <p>
              &copy; {new Date().getFullYear()} Freshers Event Portal. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
