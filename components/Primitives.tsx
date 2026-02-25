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
        <span className="font-mono text-xs text-text-secondary hidden sm:block">src/models.ts</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:grid-rows-2">
        <PrimitiveCard
          type="interface"
          title="RepoStatus"
          description="Structured repository snapshot: HEAD ref, branch, staged/unstaged/untracked files, upstream tracking, and merge/rebase state."
        />
        <PrimitiveCard
          type="interface"
          title="Change"
          description="A single file's diff — file path, unique ID, and an array of Hunk objects representing each discrete edit region."
        />
        <PrimitiveCard
          type="interface"
          title="Hunk"
          description="A discrete diff segment with the full @@ header, old/new line numbers, and the raw content lines for agent consumption."
        />
        <PrimitiveCard
          type="interface"
          title="LogCommit"
          description="A commit history entry: SHA, short SHA, subject, author name/email/date, and parent refs for graph traversal."
        />
        <PrimitiveCard
          type="interface"
          title="CommitDetail"
          description="Full commit metadata including body, committer info, affected file list, and a structured diff with Change objects."
        />
        <PrimitiveCard
          type="interface"
          title="BlameResult"
          description="Line-level attribution for a file: each line carries its content, line number, and the commit that last touched it."
        />
        <PrimitiveCard
          type="interface"
          title="StageResult"
          description="Result of a stage_changes operation: the paths that were staged and whether the call was a dry run."
        />
        <PrimitiveCard
          type="interface"
          title="ChangeSummary"
          description="Lightweight diff stats (hunk count, insertions, deletions) for a file — returned by list_changes in summary_only mode."
        />
      </div>
    </section>
  );
};

export default Primitives;