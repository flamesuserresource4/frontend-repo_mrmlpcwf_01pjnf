import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Phone } from 'lucide-react';

const eminemLines = [
  "Success is my only option, failure's not.",
  "You only get one shot, do not miss your chance to blow.",
  "I am whatever you say I am.",
  "Look, if you had one shot or one opportunity…",
  "I'ma be what I set out to be, without a doubt, undoubtedly.",
  "The moment, you own it, you better never let it go.",
];

const Experience = () => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
      <h3 className="text-xl font-semibold">Experience Highlights</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
        <li>Built and scaled responsive web apps with React and Node.</li>
        <li>Designed delightful interfaces with strong accessibility.</li>
        <li>Worked across the stack: frontend, backend, and databases.</li>
      </ul>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="mailto:hello@example.com?subject=Request%20Resume&body=Hi%20Prathamesh%2C%20please%20share%20your%20latest%20resume."
          className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-violet-500 px-4 py-2 font-medium text-white transition hover:from-fuchsia-400 hover:to-violet-400"
        >
          <Download className="h-4 w-4" /> Request Resume
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 font-medium text-white transition hover:bg-white/20"
        >
          <Linkedin className="h-4 w-4" /> View LinkedIn
        </a>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(`Hi Prathamesh,\n\nName: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
      <h3 className="text-xl font-semibold">Contact</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm text-zinc-300">Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-md border border-white/10 bg-zinc-900/60 px-3 py-2 outline-none ring-fuchsia-400/30 placeholder:text-zinc-500 focus:ring"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-sm text-zinc-300">Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md border border-white/10 bg-zinc-900/60 px-3 py-2 outline-none ring-fuchsia-400/30 placeholder:text-zinc-500 focus:ring"
            placeholder="you@example.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm text-zinc-300">Message</label>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 w-full rounded-md border border-white/10 bg-zinc-900/60 px-3 py-2 outline-none ring-fuchsia-400/30 placeholder:text-zinc-500 focus:ring"
            placeholder="Tell me about your project…"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-violet-500 px-5 py-2.5 font-medium text-white transition hover:from-fuchsia-400 hover:to-violet-400"
      >
        <Mail className="h-4 w-4" /> Send
      </button>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-zinc-300">
        <a className="inline-flex items-center gap-2 hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer">
          <Github className="h-5 w-5" /> GitHub
        </a>
        <a className="inline-flex items-center gap-2 hover:text-white" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <Linkedin className="h-5 w-5" /> LinkedIn
        </a>
        <a className="inline-flex items-center gap-2 hover:text-white" href="tel:+910000000000">
          <Phone className="h-5 w-5" /> +91 00000 00000
        </a>
      </div>
    </form>
  );
};

const Quote = () => {
  const line = useMemo(() => eminemLines[Math.floor(Math.random() * eminemLines.length)], []);
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 text-center text-zinc-200"
    >
      <p className="text-lg italic">“{line}”</p>
      <footer className="mt-2 text-sm text-zinc-400">— Eminem</footer>
    </motion.blockquote>
  );
};

const Connect = () => {
  return (
    <section id="contact" className="w-full bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Let’s Connect</h2>
          <p className="mt-2 text-zinc-300">Have an idea? I’d love to help bring it to life.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Experience />
          <ContactForm />
        </div>

        <div className="mt-10">
          <Quote />
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-zinc-400">
          © 2025 • Built with ❤️ by Prathamesh More
        </div>
      </div>
    </section>
  );
};

export default Connect;
