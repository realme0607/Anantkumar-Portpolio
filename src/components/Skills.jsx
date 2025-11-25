import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, EDUCATION, CERTIFICATIONS } from '../constants';
import { Code2, PenTool, BrainCircuit, Table, FileSpreadsheet, Network, GraduationCap, Award } from 'lucide-react';

const SkillCard = ({ skill, index }) => {
  const Icon = skill.category === 'Languages' ? Code2 : skill.category === 'Tools' ? PenTool : BrainCircuit;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-navy-800/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-xl hover:border-teal-400/50 transition-colors group relative overflow-hidden"
    >
      {/* Subtle background decoration inside card */}
      <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 text-teal-400">
        <Icon size={80} />
      </div>

      <div className="flex items-center justify-between mb-4 relative z-10">
        <h3 className="text-lg font-semibold text-slate-100 group-hover:text-teal-300 transition-colors">{skill.name}</h3>
        <Icon className="w-5 h-5 text-slate-400 group-hover:text-teal-400" />
      </div>
      <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden relative z-10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-400"
        />
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-20 z-10 relative overflow-hidden">

      {/* Background Decorative Data Signs for Skills Section */}
      <div className="absolute top-20 right-10 opacity-5 rotate-12">
        <Table size={200} className="text-slate-300" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-5 -rotate-12">
        <Network size={180} className="text-teal-300" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
        <FileSpreadsheet size={400} className="text-white" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1 w-12 bg-teal-400 rounded-full"></div>
            <span className="text-teal-400 font-mono text-sm tracking-widest uppercase">Technical Proficiency</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Structuring the Data</h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Leveraging Python, SQL, and Power BI to transform raw information into structured intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Education & Certifications Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="text-teal-400" size={24} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="bg-navy-800/40 border border-slate-700/50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-slate-100">{EDUCATION.degree}</h4>
              <p className="text-teal-400 mt-1">{EDUCATION.college}</p>
              <div className="flex justify-between items-center mt-4 text-slate-400 text-sm">
                <span>{EDUCATION.year}</span>
                <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">CGPA: {EDUCATION.cgpa}</span>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-purple-400" size={24} />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <ul className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 bg-navy-800/20 p-3 rounded-lg border border-slate-700/30">
                  <div className="min-w-[6px] h-[6px] mt-2.5 rounded-full bg-purple-400" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};