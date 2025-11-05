import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const data = [
  {
    title: 'Interactive Dashboard',
    desc: 'Real-time analytics with charts and role-based access.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    code: '#',
    tags: ['React', 'D3', 'WebSockets'],
  },
  {
    title: 'E-commerce UI',
    desc: 'Delightful storefront with smooth checkout flow.',
    img: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    code: '#',
    tags: ['Vite', 'Stripe', 'Tailwind'],
  },
  {
    title: 'Portfolio Starter',
    desc: 'Polished starter template for creatives and founders.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    code: '#',
    tags: ['React', 'Framer', 'SEO'],
  },
  {
    title: 'API Boilerplate',
    desc: 'Clean API architecture with auth and testing.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    code: '#',
    tags: ['Node', 'JWT', 'MongoDB'],
  },
  {
    title: 'Design System',
    desc: 'Reusable components with tokens and theming.',
    img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    code: '#',
    tags: ['Storybook', 'TypeScript', 'A11y'],
  },
  {
    title: 'Chat App',
    desc: 'Fast, reliable 1:1 and group messaging.',
    img: 'https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    code: '#',
    tags: ['React', 'Socket.io', 'Express'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-zinc-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
          <p className="mt-2 text-zinc-300">A selection of things I’ve built recently.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm text-zinc-300">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-zinc-200">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/90 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-emerald-500"
                  >
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                  <a
                    href={p.code}
                    className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/20"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
