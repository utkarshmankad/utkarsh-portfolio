export function SectionTitle({ number, label, children, id }: { number: string; label: string; children: React.ReactNode; id: string }) {
  return <header className="section-title"><p><span>{number}</span>{label}</p><h2 id={id}>{children}</h2></header>;
}
