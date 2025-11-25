import React from 'react';
import { motion } from 'framer-motion';
import { Binary, PieChart, Activity, FileText } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const About = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20 px-6 z-10 overflow-hidden">

      {/* Background Decorative Data Signs for About Section */}
      <motion.div
        className="absolute top-20 right-10 text-teal-400 opacity-10"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Binary size={120} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 text-purple-400 opacity-10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <PieChart size={100} />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-300 opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Activity size={300} />
      </motion.div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-20">

        {/* Profile Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            {/* Image Border/Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-400 to-purple-500 rounded-2xl transform rotate-6 scale-105 opacity-50 group-hover:rotate-3 transition-transform duration-500 blur-sm"></div>
            <div className="absolute inset-0 bg-navy-900 rounded-2xl transform -rotate-3 scale-105 opacity-80"></div>

            {/* The Image - Pulling from GitHub for a reliable portfolio image */}
            <img
              src="/profile.jpg"
              alt={RESUME_DATA.name}
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-teal-500/30 z-10"
            />
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-teal-400"></span>
            <span className="text-teal-400 font-mono text-sm tracking-widest uppercase">About Me</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Turning Complex Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Business Growth</span>
          </h2>

          <div className="text-slate-300 text-lg leading-relaxed space-y-6">
            <p>
              {RESUME_DATA.about}
            </p>
            <p>
              I specialize in bridging the gap between raw data and decision-making. Whether it's automating boring Excel tasks or building dynamic Power BI dashboards, my goal is always the same: <strong>make data speak.</strong>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-navy-800/50 px-4 py-2 rounded-full border border-teal-500/20 text-teal-200 text-sm">
              <FileText size={16} />
              <span>Report Automation</span>
            </div>
            <div className="flex items-center gap-2 bg-navy-800/50 px-4 py-2 rounded-full border border-teal-500/20 text-teal-200 text-sm">
              <Binary size={16} />
              <span>Data Cleaning</span>
            </div>
            <div className="flex items-center gap-2 bg-navy-800/50 px-4 py-2 rounded-full border border-teal-500/20 text-teal-200 text-sm">
              <Activity size={16} />
              <span>KPI Tracking</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};