import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Database, Binary, PieChart, Activity, Terminal } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 z-10 overflow-hidden">

      {/* Background Decorative "Data Signs" for Hero */}
      <motion.div
        className="absolute top-1/4 left-10 md:left-32 opacity-20 text-teal-400"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Binary size={64} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-8 md:right-24 opacity-20 text-purple-400"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <PieChart size={80} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-20 md:right-1/4 opacity-10 text-cyan-300"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Activity size={48} />
      </motion.div>

      <motion.div
        className="absolute top-20 left-1/2 opacity-5 text-white"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Terminal size={120} />
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <div className="inline-flex items-center justify-center p-3 mb-8 rounded-full bg-navy-800/50 border border-teal-400/30 backdrop-blur-sm shadow-[0_0_15px_rgba(45,212,191,0.2)]">
          <Database className="w-5 h-5 text-teal-400 mr-2" />
          <span className="text-teal-200 text-sm font-mono tracking-wide">DATA ANALYST & BI DEVELOPER</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
          {RESUME_DATA.name}
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          {RESUME_DATA.intro}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-teal-500 hover:bg-teal-400 text-navy-900 font-bold rounded-full transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)]"
          >
            View Work
          </a>
          <a
            href={RESUME_DATA.contact.github}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-transparent border border-teal-500/30 hover:border-teal-400 text-teal-400 rounded-full transition-all hover:bg-teal-500/10"
          >
            GitHub Profile
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-slate-500" />
      </motion.div>
    </section>
  );
};