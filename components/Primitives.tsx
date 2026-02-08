import React from 'react';

interface PrimitiveCardProps {
  type: string;
  title: string;
  description: string;
}

const PrimitiveCard: React.FC<PrimitiveCardProps> = ({ type, title, description }) => (
  <div className="group bg-surface-dark border border-border-dark p-6 rounded-md hover:border-white/20 transition-colors cursor-default">
    <div className="font-mono text-xs text-primary mb-3">{type}</div>
    <h3 className="font-mono text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-text-secondary text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const Primitives: React.FC = () => {
  return (
    <section id="primitives" className="py-24 border-b border-border-dark">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white">Core Primitives</h2>
        <span className="font-mono text-xs text-text-secondary hidden sm:block">src/domain/models.rs</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <PrimitiveCard 
          type="struct"
          title="RepoStatus"
          description="Current working directory state, including branch ref, tracked/untracked files, and HEAD hash."
        />
        <PrimitiveCard 
          type="struct"
          title="Change"
          description="A typed modification record containing file path, change type (add/mod/del), and associated metadata."
        />
        <PrimitiveCard 
          type="struct"
          title="Hunk"
          description="A discrete segment of code diff, containing source lines, line numbers, and context anchors."
        />
        <PrimitiveCard 
          type="type"
          title="ChangeGroup"
          description="A collection of Change objects logically related by semantic similarity (via local embeddings)."
        />
      </div>
    </section>
  );
};

export default Primitives;