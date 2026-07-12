import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CalendarDays, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

function Home() {
  return (
    <div className="space-y-16 py-4 animate-fade-in">
      
      {/* 1. Hero Welcome Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white px-6 py-16 md:p-20 shadow-xl border border-indigo-950">
        
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={12} className="animate-pulse" />
            Class of 2026 Induction
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
            Welcome to the Freshers Event Hub
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
            Empowering first-year students to connect, explore, and participate in all official orientation programs, cultural talent hunts, and ice-breaking sessions. Your journey starts here!
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold tracking-wide shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all active:scale-[0.98]"
            >
              Explore Events
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/add-event"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white rounded-xl text-sm font-semibold tracking-wide border border-slate-700/60 transition-all active:scale-[0.98]"
            >
              Add Event
            </Link>
          </div>
        </div>
      </section>

      {/* 2. System Overview Features Grid */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            A simple, lightweight application to manage academic and extra-curricular events seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shadow-inner">
              <CalendarDays size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 tracking-tight">Stay Scheduled</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Find complete lists of events, complete with coordinators, exact timings, and location venues to make sure you never miss an session.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600 shadow-inner">
              <MapPin size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 tracking-tight">Find Venues</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Whether it's the main auditorium, the open-air theatre, or computer labs, get clear directions for each scheduled event instantly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shadow-inner">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 tracking-tight">Coordinator Guided</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Each event is assigned a dedicated faculty or senior coordinator whose name is listed. Reach out for any questions or guidelines!
            </p>
          </div>
        </div>
      </section>

      {/* 3. Fun Statistics Highlight */}
      <section className="bg-slate-100/50 rounded-3xl p-8 border border-slate-200/40">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-3xl md:text-4xl font-extrabold text-indigo-600 tracking-tight">12+</span>
            <p className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider">Active Events</p>
          </div>
          <div className="space-y-1 font-sans">
            <span className="text-3xl md:text-4xl font-extrabold text-violet-600 tracking-tight">450+</span>
            <p className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider">Registered Freshers</p>
          </div>
          <div className="space-y-1 col-span-2 md:col-span-1">
            <span className="text-3xl md:text-4xl font-extrabold text-emerald-600 tracking-tight">3</span>
            <p className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider">Dynamic Venues</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
