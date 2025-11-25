import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:flex items-start gap-8 group">

        {/* Timeline (Desktop) */}
        <div className="hidden md:block w-32 pt-2 text-right shrink-0">
          <div className="text-teal-400 font-mono text-sm font-bold mb-1">{experience.period}</div>
          <div className="text-slate-500 text-xs">Internship</div>
        </div>

        {/* Timeline Line & Dot (Desktop) */}
        <div className="hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px bg-slate-700/50 -translate-x-1/2">
          <div className="w-3 h-3 rounded-full bg-teal-500 absolute top-2.5 left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(20,184,166,0.5)] group-hover:scale-125 transition-transform" />
        </div>

        {/* Content Card */}
        <div className="flex-1 bg-navy-800/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-xl hover:border-teal-500/30 transition-all group-hover:bg-navy-800/60 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-300 transition-colors">
                {experience.role}
              </h3>
              <div className="text-lg text-slate-400 font-medium flex items-center gap-2">
                <Briefcase size={16} className="text-teal-500" />
                {experience.company}
              </div>
            </div>
            {/* Mobile Period */}
            <div className="md:hidden flex items-center gap-1.5 px-3 py-1 bg-teal-500/10 rounded-full text-teal-300 text-xs font-mono border border-teal-500/20">
              <Calendar size={12} />
              {experience.period}
            </div>
          </div>

          <p className="text-slate-300 mb-6 leading-relaxed">
            {experience.description}
          </p>

          <div className="space-y-3 mb-6">
            {experience.achievements.map((achievement, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-teal-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">{achievement}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium text-teal-200/80 bg-teal-500/10 px-2.5 py-1 rounded-md border border-teal-500/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  return (
    <section className="py-20 px-6 z-10 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-center gap-4"
        >
          <div className="p-3 bg-teal-500/10 rounded-xl border border-teal-500/20">
            <Briefcase className="w-8 h-8 text-teal-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Experience</h2>
            <p className="text-slate-400 text-sm mt-1">Professional journey & internships</p>
          </div>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};