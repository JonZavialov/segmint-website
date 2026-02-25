import React from 'react';

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => (
  <div className="flex flex-col gap-2 p-4 border border-border-dark bg-surface-dark/50 rounded-sm">
    <h3 className="text-lg font-bold text-white font-mono">{title}</h3>
    <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-20 border-b border-border-dark grid md:grid-cols-12 gap-12">
      <div className="md:col-span-4">
        <h2 className="text-2xl font-bold tracking-tight mb-4 text-white">Runtime Capabilities</h2>
        <p className="text-text-secondary text-base">
          Segmint is a read-only substrate for AI agents to query repository state, plus controlled workspace mutation tools — all exposed as structured MCP primitives over stdio.
        </p>
      </div>

      <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
        <FeatureItem
          title="Structured Diffs"
          description="Git diffs are parsed into typed Change and Hunk objects rather than raw text, providing deterministic inputs for agent reasoning."
        />
        <FeatureItem
          title="MCP Native"
          description="Exposes 10 tools over the Model Context Protocol via stdio transport — compatible with Claude, Cursor, and any MCP-capable agent."
        />
        <FeatureItem
          title="Blame & History"
          description="Line-level blame attribution and structured commit history with full diff details, parent refs, and author metadata."
        />
        <FeatureItem
          title="Workspace Mutation"
          description="Tier 2 tools for staging and unstaging files with dry-run guardrails — agents can safely compose commits without destructive operations."
        />
      </div>
    </section>
  );
};

export default Features;