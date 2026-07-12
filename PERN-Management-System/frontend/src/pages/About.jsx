import React from 'react';
import { Info, Code, Database, Layers } from 'lucide-react';

function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-10 py-4 animate-fade-in">
      
      {/* Page Header */}
      <div className="text-center space-y-2">
        <div className="p-3 bg-indigo-50 text-indigo-600 rounded-full inline-block">
          <Info size={32} />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          About the Project
        </h1>
        <p className="text-slate-500 text-sm max-w-md mx-auto">
          Learn about the academic course details, code implementation constraints, and schema layout.
        </p>
      </div>

      {/* Course Context Block */}
      <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8 space-y-4">
        <h2 className="text-lg font-bold text-slate-800 tracking-tight flex items-center gap-2">
          <Layers size={18} className="text-indigo-500" />
          Academic Overview
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          This project was developed as a term assignment for the **S3 Computer Science & Engineering (CSE)** course curriculum. The primary objective is to demonstrate core CRUD operations using the **PERN stack** in their simplest, most transparent form.
        </p>
      </section>

      {/* Constraints & Simplicity Highlights */}
      <section className="grid md:grid-cols-2 gap-6">
        
        {/* Left Card: Stack Used */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
          <h3 className="text-base font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <Code size={18} className="text-violet-500" />
            Approved Stack Only
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
              <strong>Frontend:</strong> React, React Router v6
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
              <strong>Backend:</strong> Node.js, Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
              <strong>Database:</strong> PostgreSQL with <code className="px-1 py-0.5 bg-slate-100 rounded text-xs">pg</code>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
              <strong>Styling:</strong> Tailwind CSS v3
            </li>
          </ul>
        </div>

        {/* Right Card: Simplified Design Rules */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
          <h3 className="text-base font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <Database size={18} className="text-emerald-500" />
            Database Entity: Event
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            The project operates under a strict **Single Entity** rule. The database uses a single table <code className="px-1.5 py-0.5 bg-slate-100 rounded text-xs">events</code> with the following schema:
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-slate-50 p-3 rounded-xl border border-slate-100 text-slate-700">
            <div>id (Serial PK)</div>
            <div>date (DATE)</div>
            <div>event_name (VARCHAR)</div>
            <div>coordinator (VARCHAR)</div>
            <div>venue (VARCHAR)</div>
            <div>description (TEXT)</div>
          </div>
        </div>

      </section>

      {/* Pedagogy Notice */}
      <section className="p-4 bg-indigo-50/50 border border-indigo-100/50 rounded-2xl text-center">
        <p className="text-xs text-indigo-700 font-medium">
          Note: This frontend utilizes prop-based React state variables for instant interactive CRUD simulations without needing the active backend running.
        </p>
      </section>

    </div>
  );
}

export default About;
