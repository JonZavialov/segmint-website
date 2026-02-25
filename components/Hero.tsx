import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="py-24 md:py-32 flex flex-col items-center text-center border-b border-border-dark">
      <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono font-medium">
        <span className="relative flex h-2 w-2">
          <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        v0.2.1 — 10 MCP tools
      </div>

      <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-white leading-none">
        Segmint
      </h1>

      <p className="text-xl md:text-2xl font-light text-text-secondary mb-6 tracking-tight max-w-2xl mx-auto">
        A semantic Git runtime for AI agents.
      </p>

      <a
        href="https://jonzav.me"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-10 inline-flex items-center gap-2 text-sm text-text-primary font-mono hover:text-white transition-colors group"
      >
        <span className="text-text-secondary">by</span>
        <span className="font-medium underline underline-offset-4 decoration-primary">Jon Zavialov</span>
        <span className="material-symbols-outlined text-base text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">arrow_outward</span>
      </a>

      <div className="max-w-2xl w-full bg-surface-dark border border-border-dark rounded-md p-6 mb-12 text-left mx-auto shadow-2xl shadow-black/50 overflow-hidden">
        <div className="flex justify-between items-center mb-4 border-b border-border-dark pb-2">
          <span className="text-xs font-mono text-text-secondary">
            MCP Response: repo_status
          </span>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-border-dark"></div>
            <div className="w-2 h-2 rounded-full bg-border-dark"></div>
          </div>
        </div>
        <pre className="font-mono text-xs text-text-secondary leading-relaxed overflow-x-auto">
{`{ `}<span className="text-primary">"is_git_repo"</span>{`: `}<span className="text-yellow-400">true</span>{`,
  `}<span className="text-primary">"head"</span>{`: { `}<span className="text-primary">"branch"</span>{`: `}<span className="text-green-400">"main"</span>{`, `}<span className="text-primary">"short_sha"</span>{`: `}<span className="text-yellow-400">"e8b7f92"</span>{` },
  `}<span className="text-primary">"staged"</span>{`: [`}<span className="text-green-400">"src/server.ts"</span>{`],
  `}<span className="text-primary">"unstaged"</span>{`: [`}<span className="text-green-400">"src/models.ts"</span>{`] }`}
        </pre>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
        <a
          href="https://github.com/JonZavialov/segmint"
          className="h-12 w-full sm:w-auto px-8 flex items-center justify-center rounded-md bg-white text-black font-mono text-sm font-bold hover:bg-gray-200 transition-all"
        >
          <svg className="size-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
          </svg>
          View on GitHub
        </a>
        <a
          href="https://www.npmjs.com/package/segmint"
          className="h-12 w-full sm:w-auto px-8 flex items-center justify-center rounded-md border border-border-dark bg-surface-dark text-text-primary font-mono text-sm font-medium hover:border-white/30 hover:text-white transition-all"
        >
          npm install segmint
        </a>
      </div>
    </section>
  );
};

export default Hero;
