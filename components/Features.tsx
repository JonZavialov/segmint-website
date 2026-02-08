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
          Segmint functions as a read-only substrate for LLMs to query repository state. It bridges raw git binaries to the Model Context Protocol.
        </p>
      </div>
      
      <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
        <FeatureItem 
          title="Structured Diffs" 
          description="Git diffs are parsed into typed objects (Change, Hunk) rather than raw text, providing deterministic inputs for agent reasoning." 
        />
        <FeatureItem 
          title="MCP Native" 
          description="Exposes repository state via the Model Context Protocol, allowing Claude and other agents to query git internals directly." 
        />
        <FeatureItem 
          title="Semantic Grouping" 
          description="Leverages embeddings to cluster related edits into logical ChangeGroups, helping agents understand feature boundaries." 
        />
        <FeatureItem 
          title="Repository Truth" 
          description="Binds directly to git status and log to ensure the agent's context model exactly matches the on-disk state." 
        />
      </div>
    </section>
  );
};

export default Features;