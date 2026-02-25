import React from 'react';

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 grid md:grid-cols-2 gap-16 border-b border-border-dark">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-6 text-white">Project Roadmap</h2>
        <p className="text-text-secondary mb-8">
          Segmint expands tier by tier — read-only inspection first, then controlled mutation, then irreversible operations with explicit safety gating.
        </p>

        <div className="p-6 border border-border-dark bg-surface-dark rounded-md">
          <h3 className="font-bold text-white mb-4">Philosophy</h3>
          <p className="text-sm text-text-secondary font-mono leading-relaxed">
            &gt; Git is the source of truth.<br/>
            &gt; Agents must see real repository state.<br/>
            &gt; Substrate before workflows.<br/>
            &gt; The agent reasons — Segmint provides data.
          </p>
        </div>

        <p className="mt-8 text-xs text-text-secondary opacity-50 font-mono">
          * Tier 3 operations are not yet in active development.
        </p>
      </div>

      <div className="relative pl-8 border-l border-border-dark space-y-8">
        {/* Item 1 */}
        <div className="relative">
          <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background-dark"></span>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-primary font-mono text-xs border border-primary/30 bg-primary/10 px-2 py-0.5 rounded">DONE</span>
            <h4 className="font-bold text-white">Tier 1: Read-Only Substrate</h4>
          </div>
          <p className="text-sm text-text-secondary">8 tools: repo_status, list_changes, log, show_commit, diff_between_refs, blame, set_repo_root, get_repo_root.</p>
        </div>

        {/* Item 2 */}
        <div className="relative">
          <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background-dark"></span>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-primary font-mono text-xs border border-primary/30 bg-primary/10 px-2 py-0.5 rounded">DONE</span>
            <h4 className="font-bold text-white">Tier 2: Workspace Mutation</h4>
          </div>
          <p className="text-sm text-text-secondary">stage_changes and unstage_changes with dry_run guardrails. Reversible index operations only.</p>
        </div>

        {/* Item 3 */}
        <div className="relative">
          <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-background-dark border-2 border-border-dark"></span>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-text-secondary font-mono text-xs border border-border-dark bg-surface-dark px-2 py-0.5 rounded">PLANNED</span>
            <h4 className="text-text-secondary font-bold">Tier 1 Expansion</h4>
          </div>
          <p className="text-sm text-text-secondary opacity-50">list_branches, list_tags, list_remotes — more read-only introspection primitives.</p>
        </div>

        {/* Item 4 */}
        <div className="relative">
          <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-background-dark border-2 border-border-dark"></span>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-text-secondary font-mono text-xs border border-border-dark bg-surface-dark px-2 py-0.5 rounded">PLANNED</span>
            <h4 className="text-text-secondary font-bold">Tier 2 Expansion</h4>
          </div>
          <p className="text-sm text-text-secondary opacity-50">apply_patch, checkout_branch, stash_save, reset_soft — additional reversible workspace tools.</p>
        </div>

        {/* Item 5 */}
        <div className="relative">
          <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-background-dark border-2 border-border-dark"></span>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-text-secondary font-mono text-xs border border-border-dark bg-surface-dark px-2 py-0.5 rounded">FUTURE</span>
            <h4 className="text-text-secondary font-bold">Tier 3: Irreversible Operations</h4>
          </div>
          <p className="text-sm text-text-secondary opacity-50">push, rebase, reset --hard — gated behind explicit safety and preview mechanisms.</p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;