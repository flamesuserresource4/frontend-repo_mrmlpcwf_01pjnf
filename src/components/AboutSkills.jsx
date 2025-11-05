import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Rocket, Award } from 'lucide-react';

const skills = [
  { name: 'React & TypeScript', level: 90, icon: Code },
  { name: 'Node.js & APIs', level: 85, icon: Rocket },
  { name: 'MongoDB', level: 80, icon: Database },
  { name: 'UI/UX & Accessibility', level: 88, icon: Palette },
];

const AboutSkills = () => {
  return (
    <section id="about" className="relative w-full bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">About Me</h2>
            <p className="text-zinc-300">
              I am a developer who blends clean code with thoughtful design. I love building products end-to-end,
              from idea to launch — with strong fundamentals in frontend engineering, API design, and databases.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-zinc-300">
                <Award className="h-5 w-5 text-violet-300" />
                <span>Track record of shipping polished features quickly</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <Award className="h-5 w-5 text-violet-300" />
                <span>Focus on performance, accessibility, and DX</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="mb-6 text-xl font-semibold">Skills</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {skills.map(({ name, level, icon: Icon }) => (
                <div key={name} className="">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-violet-300" />
                      <span>{name}</span>
                    </div>
                    <span className="text-sm text-zinc-400">{level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-zinc-800">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-500"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
