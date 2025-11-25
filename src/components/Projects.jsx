import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ExternalLink } from 'lucide-react';

// Mock data for the mini-charts in project cards

// HR Data (Attrition/Retention metrics)
const DATA_HR = [
  { name: 'Sales', val: 15 },
  { name: 'Tech', val: 8 },
  { name: 'HR', val: 4 },
  { name: 'Ops', val: 12 }
];

// Banking Data (Loan Status)
const DATA_LOANS = [
  { name: 'Good', val: 75 },
  { name: 'Bad', val: 25 }
];
const LOAN_COLORS = ['#2dd4bf', '#0f172a'];

// Efficiency Data (Internship - Before vs After)
const DATA_EFFICIENCY = [
  { name: 'Before', val: 45 }, { name: 'After', val: 90 }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white/80 backdrop-blur-lg border border-slate-200 p-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-8 items-center text-slate-800 relative overflow-hidden group"
    >
      <div className="flex-1 z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold uppercase rounded-full tracking-wider">
            {project.type}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-slate-900">{project.title}</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {project.metrics.map((m) => (
            <div key={m.label} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <p className="text-xs text-slate-500 uppercase font-semibold">{m.label}</p>
              <p className="text-xl font-bold text-navy-900">{m.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map(t => (
            <span key={t} className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">#{t}</span>
          ))}
        </div>
      </div>

      {/* Dynamic Mini Visualization based on Project Type */}
      <div className="w-full md:w-1/3 h-48 bg-slate-50 rounded-xl p-4 border border-slate-100 overflow-hidden relative shadow-inner">
        <ResponsiveContainer width="100%" height="100%">
          {index === 0 ? (
            <BarChart data={DATA_HR}>
              <Bar dataKey="val" fill="#2dd4bf" radius={[4, 4, 0, 0]} animationDuration={1500} />
              <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            </BarChart>
          ) : index === 1 ? (
            <PieChart>
              <Pie
                data={DATA_LOANS}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                paddingAngle={5}
                dataKey="val"
              >
                {DATA_LOANS.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={LOAN_COLORS[index % LOAN_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: '8px' }} />
            </PieChart>
          ) : (
            <BarChart data={DATA_EFFICIENCY} layout="vertical">
              <XAxis type="number" hide />
              <Bar dataKey="val" fill="#0f766e" radius={[0, 4, 4, 0]} barSize={20} animationDuration={1500} />
              <Tooltip cursor={{ fill: 'transparent' }} />
            </BarChart>
          )}
        </ResponsiveContainer>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-teal-50 hover:text-teal-600 hover:scale-110 transition-all z-20 group/link"
            title="View Project Source"
          >
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover/link:text-teal-600" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section className="min-h-screen py-24 px-6 z-10 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Featured Projects</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Applying data analytics to real-world problems. From reducing HR reporting time to segmenting financial risk.
          </p>
        </motion.div>

        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};