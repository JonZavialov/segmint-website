import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 flex flex-col md:flex-row justify-between items-end gap-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-2 text-white">Ready to integrate?</h2>
        <p className="text-text-secondary text-sm mb-6">Segmint is currently in closed alpha.</p>
        <a className="inline-flex items-center gap-2 text-white font-mono hover:text-primary transition-colors border-b border-primary pb-0.5" href="mailto:hello@segmint.dev">
          hello@segmint.dev <span className="material-symbols-outlined text-sm">arrow_outward</span>
        </a>
      </div>
      
      <div className="text-right">
        <div className="flex gap-6 justify-end mb-4">
          {/* Removed Documentation link as requested */}
          <a className="text-text-secondary hover:text-white transition-colors" href="#">Twitter</a>
          <a className="text-text-secondary hover:text-white transition-colors" href="#">GitHub</a>
        </div>
        <p className="text-xs text-text-secondary font-mono opacity-50">
          © 2024 Segmint Inc. All systems operational.
        </p>
      </div>
    </footer>
  );
};

export default Footer;