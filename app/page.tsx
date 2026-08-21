"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const roles = [
  { period: "2025 — 2026", company: "Oracle", role: "Engineering Manager · AI Data Platform", summary: "Led the connectivity layer that brings enterprise data into Oracle 23ai—turning a complex integration surface into a reliable, compliant platform.", wins: ["14 production connectors", "70% lower read latency", "85%+ test coverage", "FIPS 140-3 certified"] },
  { period: "2021 — 2024", company: "Fynd · Reliance Industries", role: "Engineering Manager · Platform & Integrations", summary: "Built the engineering organisation behind one of Reliance Retail’s largest B2B commerce migrations, connecting product, inventory, and orders at national scale.", wins: ["Team scaled 5 → 20", "5M+ active merchants", "3M+ SKUs", "Zero-downtime migration"] },
  { period: "2010 — 2021", company: "CDAC · Government of India", role: "SDE → Architect → Engineering Manager", summary: "Grew from individual contributor to engineering leader, shipping public digital infrastructure spanning mobility, health, water, IoT, and education.", wins: ["1.2M+ app downloads", "8,000 IoT sensors", "₹300 Cr+ portfolio", "10+ public products"] },
];

const products = [
  { name: "Oracle AI Data Platform", href: "https://www.oracle.com/ai-data-platform/", meta: "Enterprise AI · Oracle", description: "A secure connectivity layer that turns fragmented enterprise data into an AI-ready foundation." },
  { name: "Reliance B2B Commerce", href: "https://www.fynd.com/", meta: "Commerce at scale · Fynd", description: "The platform backbone behind nationwide B2B journeys for millions of merchants and millions of SKUs." },
  { name: "Namma Metro", href: "https://play.google.com/store/apps/details?id=com.aum.nammametro", meta: "Public mobility · BMRCL", description: "Bengaluru’s official metro companion—putting routes, fares, and travel information in 1.2M+ pockets." },
  { name: "Smart Water Network", href: "https://www.cdac.in/", meta: "Urban infrastructure · C-DAC", description: "An IoT data platform that made 8,000 sensors across 40 locations observable and actionable." },
];

const projects = [
  { name: "Job Tracker", href: "https://github.com/utkarshmankad/job-tracker", tech: "Python · React", description: "A private, local-first command centre that turns job emails into a live application pipeline." },
  { name: "JD Fit Checker", href: "https://jd-fit-checker.vercel.app", tech: "Next.js · AI", description: "An AI screening copilot that scores roles, exposes gaps, and helps job seekers focus their search." },
  { name: "ReportAPI", href: "https://reportapi.vercel.app", tech: "TypeScript · Next.js", description: "A modern web product for creating and sharing useful reports without the usual reporting friction." },
  { name: "Chandy–Misra–Haas", href: "https://github.com/utkarshmankad/Chandy-Misra-Haas-AND-model", tech: "C++ · Distributed systems", description: "A hands-on implementation of probe-based deadlock detection for distributed AND models." },
  { name: "Inverted Index Search", href: "https://github.com/utkarshmankad/inverted-index-boolean-search", tech: "Python · NLP", description: "A compact search engine that indexes documents and resolves Boolean queries with NLTK." },
  { name: "Suzuki–Kasami Broadcast", href: "https://github.com/utkarshmankad/suzuki-kasami-broadcast-algorithm", tech: "C++ · Algorithms", description: "A token-based simulation that makes distributed mutual exclusion tangible and testable." },
];

const capabilities = ["Engineering leadership", "AI & data platforms", "Distributed systems", "Organisation design", "Cloud-native SaaS", "Reliability & SRE", "Executive alignment", "Talent development"];

function SectionTitle({ number, label, children }: { number: string; label: string; children: React.ReactNode }) {
  return <header className="section-title"><p><span>{number}</span>{label}</p><h2>{children}</h2></header>;
}

export default function Home() {
  const [dark, setDark] = useState(true);
  useEffect(() => { const saved = localStorage.getItem("theme"); queueMicrotask(() => setDark(saved ? saved === "dark" : true)); }, []);
  useEffect(() => { document.documentElement.dataset.theme = dark ? "dark" : "light"; localStorage.setItem("theme", dark ? "dark" : "light"); }, [dark]);

  return <main id="top">
    <nav className="nav shell" aria-label="Primary navigation">
      <a className="brand" href="#top">UM<span>.</span></a>
      <div className="nav-links"><a href="#work">Work</a><a href="#products">Products</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div>
      <button className="theme-button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}><span aria-hidden>{dark ? "☼" : "◐"}</span>{dark ? "Light" : "Dark"}</button>
    </nav>

    <header className="hero shell">
      <div className="portrait"><Image src="/utkarsh.jpg" alt="Utkarsh Mankad" fill priority sizes="(max-width: 820px) 100vw, 340px" /></div>
      <div className="hero-copy"><p className="location"><span className="status-dot" />Bengaluru, India · Open to conversations</p><h1>I build teams that build systems that matter.</h1><p className="intro">Engineering leader with 16 years across enterprise AI, high-scale commerce, and public digital infrastructure.</p><div className="actions"><a className="button primary" href="#work">Explore my work <span>↘</span></a><a className="button" href="mailto:utkarsh.mankad@gmail.com">Start a conversation</a></div><div className="stats"><span><b>16</b> years in technology</span><span><b>20</b> engineers led</span><span><b>4</b> teams built</span><span><b>5M+</b> merchants served</span></div></div>
    </header>

    <section className="section shell" id="work"><SectionTitle number="01" label="Selected impact">From research labs to enterprise AI.</SectionTitle><div className="timeline">{roles.map(role => <article className="timeline-row" key={role.company}><time>{role.period}</time><div><h3>{role.company}</h3><p className="role-title">{role.role}</p><p className="summary">{role.summary}</p><ul className="tags">{role.wins.map(win => <li key={win}>{win}</li>)}</ul></div></article>)}</div></section>

    <section className="section shell" id="products"><SectionTitle number="02" label="Products shipped">Platforms built for real-world scale.</SectionTitle><div className="product-list">{products.map(product => <a className="product-row" href={product.href} target="_blank" rel="noreferrer" key={product.name}><span className="meta">{product.meta}</span><span><b>{product.name}</b><small>{product.description}</small></span><i aria-hidden>↗</i></a>)}</div></section>

    <section className="section shell" id="projects"><SectionTitle number="03" label="Open source & experiments">Ideas made executable.</SectionTitle><div className="project-table" role="table" aria-label="Selected projects"><div className="project-head" role="row"><span>Project</span><span>Stack</span><span>Description</span><span /></div>{projects.map(project => <a className="project-row" href={project.href} target="_blank" rel="noreferrer" role="row" key={project.name}><b>{project.name}</b><span>{project.tech}</span><span>{project.description}</span><i aria-hidden>↗</i></a>)}</div></section>

    <section className="section narrow" id="about"><SectionTitle number="04" label="How I lead">Clarity over noise. Outcomes over activity.</SectionTitle><p className="about-lead">I’m at my best where technology, people, and purpose meet.</p><p>My path from hands-on engineer to organisational leader taught me that durable systems and durable teams are built the same way: with clear interfaces, honest feedback, calm ownership, and room to grow.</p><blockquote>“Turn ambiguity into direction—and leave every system stronger than you found it.”</blockquote></section>

    <section className="section shell" id="skills"><SectionTitle number="05" label="What I bring">Leadership with technical depth.</SectionTitle><ul className="skill-tags">{capabilities.map(capability => <li key={capability}>{capability}</li>)}</ul><p className="stack">Java · Python · Scala · Spark · TypeScript · React · Node.js · Kafka · MongoDB · PostgreSQL · Kubernetes · AWS · GCP · OCI · RAG · LangGraph</p></section>

    <section className="section shell" id="writing"><SectionTitle number="06" label="Ideas in practice">I write to make complexity useful.</SectionTitle><div className="writing-list"><a href="https://www.linkedin.com/in/utkarsh-mankad/" target="_blank" rel="noreferrer"><span><small>Engineering practice · 2025</small>Automated Canary Deployments: Strategies for Safer Software Releases</span><b>Read on LinkedIn ↗</b></a><a href="https://www.linkedin.com/in/utkarsh-mankad/" target="_blank" rel="noreferrer"><span><small>Data platforms · 2025</small>Unlocking the Power of Big Data: Understanding Spark Connector Architecture</span><b>Read on LinkedIn ↗</b></a></div></section>

    <footer className="shell" id="contact"><SectionTitle number="07" label="Let’s connect">Building something that should matter?</SectionTitle><a className="button primary email" href="mailto:utkarsh.mankad@gmail.com">utkarsh.mankad@gmail.com ↗</a><div className="footer-bottom"><span>© {new Date().getFullYear()} Utkarsh Mankad</span><div><a href="https://github.com/utkarshmankad" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/utkarsh-mankad/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
