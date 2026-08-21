"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const roles = [
  { period: "2025 — 2026", company: "Oracle", role: "Engineering Manager · AI Data Platform", summary: "Led the connectivity layer that brings enterprise data into Oracle 23ai—turning a complex integration surface into a reliable, compliant platform.", wins: ["14 production connectors", "70% lower read latency", "85%+ test coverage", "FIPS 140-3 certified"] },
  { period: "2021 — 2024", company: "Fynd · Reliance Industries", role: "Engineering Manager · Platform & Integrations", summary: "Built the engineering organisation behind one of Reliance Retail’s largest B2B commerce migrations, connecting product, inventory, and orders at national scale.", wins: ["Team scaled 5 → 20", "5M+ active merchants", "3M+ SKUs", "Zero-downtime migration"] },
  { period: "2010 — 2021", company: "CDAC · Government of India", role: "SDE → Architect → Engineering Manager", summary: "Grew from individual contributor to engineering leader, shipping public digital infrastructure spanning mobility, health, water, IoT, and education.", wins: ["1.2M+ app downloads", "8,000 IoT sensors", "₹300 Cr+ portfolio", "10+ public products"] },
];

const products = [
  { name: "Oracle AI Data Platform", href: "https://www.oracle.com/ai-data-platform/", meta: "Enterprise AI", description: "A secure connectivity layer that turns fragmented enterprise data into an AI-ready foundation." },
  { name: "Reliance B2B Commerce", href: "https://www.fynd.com/", meta: "Commerce at scale", description: "The platform backbone behind nationwide B2B journeys for millions of merchants and millions of SKUs." },
  { name: "Namma Metro", href: "https://play.google.com/store/apps/details?id=com.aum.nammametro", meta: "Public mobility", description: "Bengaluru’s official metro companion—putting routes, fares, and travel information in 1.2M+ pockets." },
  { name: "Smart Water Network", href: "https://www.cdac.in/", meta: "Urban infrastructure", description: "An IoT data platform that made 8,000 sensors across 40 locations observable and actionable." },
];

const projects = [
  { name: "Isha — Smart Helpdesk Assistant", href: "https://github.com/utkarshmankad/isha-indigo-rag", tech: "LangGraph / RAG", description: "A production-minded airline helpdesk assistant with hybrid retrieval, confidence-aware cited answers, memory, multilingual support, and an embeddable API." },
  { name: "Job Tracker", href: "https://github.com/utkarshmankad/job-tracker", tech: "Python / React", description: "A private, local-first command centre that turns job emails into a live application pipeline." },
  { name: "JD Fit Checker", href: "https://jd-fit-checker.vercel.app", tech: "Next.js / AI", description: "An AI screening copilot that scores roles, exposes gaps, and helps job seekers focus their search." },
  { name: "ReportAPI", href: "https://reportapi.vercel.app", tech: "TypeScript / Next.js", description: "A modern web product for creating and sharing useful reports without the usual reporting friction." },
];

const contributions = [
  { project: "AutoMQ", status: "Merged", href: "https://github.com/AutoMQ/automq/pull/3485", code: "PR #3485", title: "Hardened WAL failure handling", detail: "Made the S3 stream write path fail safely when WAL preparation breaks." },
  { project: "AutoMQ", status: "Merged", href: "https://github.com/AutoMQ/automq/pull/3487", code: "PR #3487", title: "Sharper cache diagnostics", detail: "Separated capacity evictions from TTL expiry so operators get actionable warnings." },
  { project: "RisingWave", status: "Open", href: "https://github.com/risingwavelabs/risingwave/pull/26586", code: "PR #26586", title: "Extended PostgreSQL query support", detail: "Added PREPARE, EXECUTE, and DEALLOCATE support to simple-query mode." },
  { project: "FIWARE", status: "Merged", href: "https://github.com/FIWARE/tutorials.Application-Mashup/pull/5", code: "PR #5", title: "Fixed tutorial configuration", detail: "Corrected an indentation issue in the Application Mashup learning path." },
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
    <nav className="nav shell" aria-label="Primary navigation"><a className="brand" href="#top"><span>U</span>M_</a><div className="nav-links"><a href="#work">01.Work</a><a href="#products">02.Products</a><a href="#projects">03.Builds</a><a href="#open-source">04.OSS</a><a href="#contact">05.Contact</a></div><button className="theme-button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}><span aria-hidden>{dark ? "☼" : "◐"}</span>{dark ? "Light" : "Dark"}</button></nav>

    <header className="hero shell"><div className="hero-intro"><div><div className="hero-signal"><span>SYS.STATUS</span><b>ONLINE</b><i /></div><p className="eyebrow">Engineering leader / Systems thinker / Builder</p></div><figure className="profile-photo"><Image src="/utkarsh.jpg" alt="Utkarsh Mankad" width={72} height={72} priority /><figcaption>UTKARSH.JPG</figcaption></figure></div><h1>Building teams.<br />Engineering <em>impact.</em></h1><div className="hero-bottom"><p>16 years turning complex systems into dependable platforms—from enterprise AI and commerce at national scale to public digital infrastructure.</p><div className="command"><span>$</span><a href="#work">explore --work</a><i>↵</i></div></div><div className="metrics"><article><small>EXP_YRS</small><b>16</b></article><article><small>ENGINEERS_LED</small><b>20</b></article><article><small>TEAMS_BUILT</small><b>04</b></article><article><small>MERCHANTS_SERVED</small><b>5M+</b></article></div></header>

    <section className="section shell" id="work"><SectionTitle number="01" label="Career runtime">Systems that operate at scale.</SectionTitle><div className="timeline">{roles.map((role, index) => <article className="timeline-row" key={role.company}><div className="node">0{index + 1}</div><time>{role.period}</time><div><h3>{role.company}</h3><p className="role-title">{role.role}</p><p>{role.summary}</p><ul>{role.wins.map(win => <li key={win}>{win}</li>)}</ul></div></article>)}</div></section>

    <section className="section shell" id="products"><SectionTitle number="02" label="Products built">AI products, cloud platforms, and public infrastructure.</SectionTitle><div className="product-grid">{products.map((product, index) => <a href={product.href} target="_blank" rel="noreferrer" key={product.name}><small>0{index + 1} / {product.meta}</small><h3>{product.name}</h3><p>{product.description}</p><span>Open project ↗</span></a>)}</div></section>

    <section className="section shell" id="projects"><SectionTitle number="03" label="Independent builds">Products, not placeholders.</SectionTitle><div className="project-grid">{projects.map(project => <a href={project.href} target="_blank" rel="noreferrer" key={project.name}><span className="project-tech">{project.tech}</span><h3>{project.name}</h3><p>{project.description}</p><b>Explore build ↗</b></a>)}</div></section>

    <section className="oss-section" id="open-source"><div className="shell"><SectionTitle number="04" label="Open source signal">Contributing beyond my own repositories.</SectionTitle><div className="oss-grid">{contributions.map(item => <a href={item.href} target="_blank" rel="noreferrer" key={`${item.project}-${item.code}`}><div><span>{item.project}</span><i className={item.status.toLowerCase()}>{item.status}</i></div><small>{item.code}</small><h3>{item.title}</h3><p>{item.detail}</p><b>Inspect contribution ↗</b></a>)}</div></div></section>

    <section className="section shell split-section"><div><SectionTitle number="05" label="Leadership protocol">Clarity over noise. Outcomes over activity.</SectionTitle><p>Durable systems and durable teams are built the same way: with clear interfaces, honest feedback, calm ownership, and room to grow.</p><blockquote>Turn ambiguity into direction—and leave every system stronger than you found it.</blockquote></div><div id="skills"><p className="skill-label">CORE_CAPABILITIES[]</p><ul className="skill-list">{capabilities.map((capability, index) => <li key={capability}><span>{String(index).padStart(2, "0")}</span>{capability}</li>)}</ul><p className="stack">Java / Python / Scala / Spark / TypeScript / React / Kafka / PostgreSQL / Kubernetes / AWS / GCP / OCI / RAG / LangGraph</p></div></section>

    <footer id="contact"><div className="shell"><p className="footer-code">READY_FOR_NEXT_CHALLENGE = TRUE</p><h2>Let’s engineer<br /><em>what’s next.</em></h2><a className="contact-link" href="mailto:utkarsh.mankad@gmail.com">utkarsh.mankad@gmail.com <span>↗</span></a><div className="footer-bottom"><span>© {new Date().getFullYear()} Utkarsh Mankad</span><div><a href="https://github.com/utkarshmankad" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/utkarsh-mankad/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><a href="#top">Back to top ↑</a></div></div></footer>
  </main>;
}
