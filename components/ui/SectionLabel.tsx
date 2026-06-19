export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-4"
      style={{ background: 'rgba(255,107,0,0.12)', color: 'var(--accent)', border: '1px solid rgba(255,107,0,0.2)' }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
      {children}
    </span>
  );
}
