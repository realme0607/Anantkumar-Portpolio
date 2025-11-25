import React from 'react';
import { DataBackground } from './components/DataBackground';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';

import { RESUME_DATA } from './constants';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const App = () => {
  return (
    <main className="relative w-full overflow-hidden">
      <DataBackground />

      <div className="relative z-10">
        {/* Intro Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Skills & Education */}
        <Skills />

        {/* Projects & Experience */}
        <div id="projects">
          <Projects />
        </div>

        <Experience />

        <footer className="py-20 text-center text-slate-500 bg-white/50 backdrop-blur-sm relative z-10">
          <div className="mb-12 max-w-3xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-navy-900 mb-6">Let's Connect</h3>
            <p className="text-slate-600 mb-10 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col items-center gap-8">
              {/* Primary CTA */}
              <div className="flex flex-col items-center gap-3">
                <a
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-teal-400/30 hover:-translate-y-1"
                >
                  <Mail size={20} />
                  Say Hello via Email
                </a>
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-slate-500 font-medium hover:text-teal-600 transition-colors">
                  {RESUME_DATA.contact.email}
                </a>
                {/* Added Phone Number */}
                <a href={`tel:${RESUME_DATA.contact.phone}`} className="flex items-center gap-2 text-slate-500 font-medium hover:text-teal-600 transition-colors mt-2">
                  <Phone size={18} />
                  {RESUME_DATA.contact.phone}
                </a>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href={RESUME_DATA.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-xl border border-slate-100 transition-all hover:-translate-y-1"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={22} className="text-[#0077b5] group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-700 group-hover:text-navy-900">LinkedIn</span>
                </a>

                <a
                  href={RESUME_DATA.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-xl border border-slate-100 transition-all hover:-translate-y-1"
                  aria-label="GitHub Profile"
                >
                  <Github size={22} className="text-[#171515] group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-700 group-hover:text-navy-900">GitHub</span>
                </a>
              </div>
            </div>
          </div>
          <p className="font-medium text-slate-700">© {new Date().getFullYear()} {RESUME_DATA.name}</p>
        </footer>
      </div>

    </main>
  );
};

export default App;