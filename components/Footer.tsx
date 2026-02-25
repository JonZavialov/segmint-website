import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-16 flex flex-col md:flex-row justify-between items-end gap-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-2 text-white">
          Ready to integrate?
        </h2>
        <p className="text-text-secondary text-sm mb-6">
          Available now on npm. Install and connect any MCP-compatible agent.
        </p>
        <a
          className="inline-flex items-center gap-2 text-white font-mono hover:text-primary transition-colors border-b border-primary pb-0.5"
          href="https://jonzav.me"
        >
          Jonathan Zavialov
          <span className="material-symbols-outlined text-sm">
            arrow_outward
          </span>
        </a>
      </div>

      <div className="text-right">
        <div className="flex gap-6 justify-end mb-4">
          <a
            className="text-text-secondary hover:text-white transition-colors"
            href="https://github.com/JonZavialov/segmint"
          >
            GitHub
          </a>
        </div>
        <p className="text-xs text-text-secondary font-mono opacity-50">
          © 2026 Jonathan Zavialov. All systems operational.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
