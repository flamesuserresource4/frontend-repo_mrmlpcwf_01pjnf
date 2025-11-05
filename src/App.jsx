import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import Connect from './components/Connect';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Intro loader timing
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // SEO Meta
    document.title = 'Prathamesh More — Portfolio';
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Personal portfolio of Prathamesh More — projects, skills, experience, and contact.';
    if (!meta.parentElement) document.head.appendChild(meta);

    // Favicon (emoji SVG data URL)
    const link = document.querySelector("link[rel='icon']") || document.createElement('link');
    link.setAttribute('rel', 'icon');
    const svg = encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="0.9em" font-size="90">🚀</text></svg>'
    );
    link.setAttribute('href', `data:image/svg+xml,${svg}`);
    if (!link.parentElement) document.head.appendChild(link);

    // Smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Loader overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-zinc-950">
          <div className="animate-pulse text-center">
            <div className="mx-auto mb-4 h-14 w-14 animate-[spin_1.2s_linear_infinite] rounded-full border-4 border-emerald-500 border-t-transparent" />
            <div className="text-lg font-semibold text-white">Loading portfolio…</div>
          </div>
        </div>
      )}

      <Hero />
      <AboutSkills />
      <Projects />
      <Connect />
    </div>
  );
};

export default App;
