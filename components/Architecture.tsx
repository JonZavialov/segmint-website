import React from 'react';

const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-24 border-b border-border-dark">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">System Architecture</h2>
        <p className="text-text-secondary font-mono text-sm">Runtime Data Flow</p>
      </div>
      
      {/* Added pt-12 to prevent the absolute positioned labels (-top-3) from being clipped by overflow-hidden/auto */}
      <div className="relative w-full overflow-x-auto pt-12 pb-8 scrollbar-thin">
        <div className="min-w-[900px] flex items-center justify-between relative px-8">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-border-dark -z-10"></div>
          
          {/* Step 1 */}
          <div className="bg-surface-dark border border-border-dark p-6 w-52 rounded-md relative z-10 flex flex-col gap-2">
            <span className="absolute -top-3 left-4 bg-background-dark px-2 text-xs font-mono text-text-secondary border border-border-dark rounded">Source</span>
            <div className="size-8 rounded bg-white/5 border border-border-dark flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-sm text-text-secondary">folder_data</span>
            </div>
            <h4 className="font-bold text-white">Git Repository</h4>
            <p className="text-xs text-text-secondary">Raw blobs & refs</p>
          </div>
          
          <div className="text-text-secondary">
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
          
          {/* Step 2 */}
          <div className="bg-surface-dark border border-primary/30 p-6 w-64 rounded-md relative z-10 flex flex-col gap-2 shadow-[0_0_20px_-10px_rgba(23,84,207,0.3)]">
            <span className="absolute -top-3 left-4 bg-background-dark px-2 text-xs font-mono text-primary border border-primary/30 rounded">Runtime</span>
            <div className="size-8 rounded bg-primary/20 border border-primary/30 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-sm text-primary">terminal</span>
            </div>
            <h4 className="font-bold text-white">Segmint MCP Server</h4>
            <p className="text-xs text-text-secondary">10 tools · typed primitives · stdio</p>
          </div>

          <div className="text-text-secondary">
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>

          {/* Step 3 */}
          <div className="bg-surface-dark border border-border-dark p-6 w-52 rounded-md relative z-10 flex flex-col gap-2">
            <span className="absolute -top-3 left-4 bg-background-dark px-2 text-xs font-mono text-text-secondary border border-border-dark rounded">Transport</span>
            <div className="size-8 rounded bg-white/5 border border-border-dark flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-sm text-text-secondary">swap_horiz</span>
            </div>
            <h4 className="font-bold text-white">stdio / JSON-RPC</h4>
            <p className="text-xs text-text-secondary">MCP protocol</p>
          </div>

          <div className="text-text-secondary">
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>

          {/* Step 4 */}
          <div className="bg-surface-dark border border-border-dark p-6 w-52 rounded-md relative z-10 flex flex-col gap-2">
            <span className="absolute -top-3 left-4 bg-background-dark px-2 text-xs font-mono text-text-secondary border border-border-dark rounded">Consumer</span>
            <div className="size-8 rounded bg-white/5 border border-border-dark flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-sm text-text-secondary">smart_toy</span>
            </div>
            <h4 className="font-bold text-white">AI Agent</h4>
            <p className="text-xs text-text-secondary">Claude, Cursor, any MCP host</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;