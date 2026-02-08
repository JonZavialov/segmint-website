import React from 'react';

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 grid md:grid-cols-2 gap-16 border-b border-border-dark">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-6 text-white">Project Roadmap</h2>
        <p className="text-text-secondary mb-8">
          Segmint is evolving from a read-only substrate to a complete git interface for agents.
        </p>
        
        <div className="p-6 border border-border-dark bg-surface-dark rounded-md">
          <h3 className="font-bold text-white mb-4">Philosophy</h3>
          <p className="text-sm text-text-secondary font-mono leading-relaxed">
            &gt; Git is the source of truth.<br/>
            &gt; Agents must see real repository state.<br/>
            &gt; Substrate before workflows.<br/>
            &gt; Meaning before automation.
          </p>
        </div>
        
        <p className="mt-8 text-xs text-text-secondary opacity-50 font-mono">
          * Phases beyond Phase 3 are not yet in active development.
        </p>
      </div>
      
      <div className="relative pl-8 border-l border-border-dark space-y-8">
        {/* Item 1 */}
        <div className="relative">
          <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background-dark"></span>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-primary font-mono text-xs border border-primary/30 bg-primary/10 px-2 py-0.5 rounded">DONE</span>
            <h4 className="font-bold text-white">Phase 1: Git Substrate</h4>
          </div>
          <p className="text-sm text-text-secondary">Fundamental git binding and MCP server setup.</p>
        </div>
        
        {/* Item 2 */}
        <div className="relative">
          <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background-dark"></span>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-primary font-mono text-xs border border-primary/30 bg-primary/10 px-2 py-0.5 rounded">DONE</span>
            <h4 className="font-bold text-white">Phase 2: Structured Diffs</h4>
          </div>
          <p className="text-sm text-text-secondary">Transformation of raw diffs into typed primitives.</p>
        </div>
        
        {/* Item 3 */}
        <div className="relative">
          <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background-dark"></span>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-primary font-mono text-xs border border-primary/30 bg-primary/10 px-2 py-0.5 rounded">DONE</span>
            <h4 className="font-bold text-white">Phase 3: Semantic Grouping</h4>
          </div>
          <p className="text-sm text-text-secondary">Embedding-based clustering of related changes.</p>
        </div>
        
        {/* Item 4 */}
        <div className="relative">
          <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-background-dark border-2 border-border-dark"></span>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-text-secondary font-mono text-xs border border-border-dark bg-surface-dark px-2 py-0.5 rounded">PLANNED</span>
            <h4 className="text-text-secondary font-bold">Phase 4: Commit Planning</h4>
          </div>
          <p className="text-sm text-text-secondary opacity-50">Proposing staged commits based on groupings.</p>
        </div>

        {/* Item 5 */}
        <div className="relative">
          <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-background-dark border-2 border-border-dark"></span>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-text-secondary font-mono text-xs border border-border-dark bg-surface-dark px-2 py-0.5 rounded">PLANNED</span>
            <h4 className="text-text-secondary font-bold">Phase 5: Real Git Mutations</h4>
          </div>
          <p className="text-sm text-text-secondary opacity-50">Applying commits to the repository.</p>
        </div>

        {/* Item 6 */}
        <div className="relative">
          <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-background-dark border-2 border-border-dark"></span>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-text-secondary font-mono text-xs border border-border-dark bg-surface-dark px-2 py-0.5 rounded">PLANNED</span>
            <h4 className="text-text-secondary font-bold">Phase 6: Semantic Patch Operations</h4>
          </div>
          <p className="text-sm text-text-secondary opacity-50">Advanced patch manipulation.</p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;