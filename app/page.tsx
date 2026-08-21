"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const roles = [
  { period: "2025 — 2026", company: "Oracle", role: "Engineering Manager · AI Data Platform", summary: "Led a nine-engineer connectivity pod delivering 14 production ingestion connectors for Oracle 23ai, establishing the VECTOR and JSON CRUD foundation, cutting read latency 70% through Spark pushdown, and securing FIPS 140-3 certification.", wins: ["14 production connectors", "70% lower read latency", "85%+ test coverage", "FIPS 140-3 certified"], tech: ["Oracle 23ai", "Apache Spark", "Java", "Python", "Scala", "OCI", "Kubernetes", "Docker", "Snowflake", "Salesforce", "Grafana"] },
  { period: "2021 — 2024", company: "Fynd · Reliance Industries", role: "Engineering Manager · Platform & Integrations", summary: "Built and led the 20-engineer organisation behind Metro B2B and Ajio B2B, migrating JioMart Partners with zero downtime and architecting the CDC pipeline that powered live commerce analytics and AI product recommendations.", wins: ["Team scaled 5 → 20", "5M+ active merchants", "3M+ SKUs", "Zero-downtime migration"], tech: ["MongoDB", "Kafka", "Debezium", "Delta Lake", "Medallion Architecture", "Java", "Node.js", "React", "AWS", "Kubernetes", "Docker", "Redis", "Elasticsearch", "Jenkins", "Helm", "Grafana", "Coralogix", "New Relic", "Sentry", "PagerDuty", "OpenTelemetry"] },
  { period: "2010 — 2021", company: "CDAC · Government of India", role: "SDE 2 → SDE 3 → Architect → Engineering Manager", summary: "Progressed from individual contributor to technical architect and engineering manager, ultimately leading 12 engineers across IoT and AR at India’s national government R&D institute. Owned a ₹300 Cr+ programme portfolio and delivered public systems spanning smart water infrastructure, COVID monitoring, education, mobility, Smart Cities, and identity verification.", wins: ["12-engineer organisation", "₹300 Cr+ portfolio", "10+ public products", "1.2M+ app downloads", "8,000 IoT sensors", "4-state COVID deployment"], tech: ["Java", "Android SDK", "Node.js", "Angular", "React", "IoT Data Pipelines"] },
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

const articles = [
  { title: "Automated Canary Deployments: Strategies for Safer Software Releases", href: "https://www.linkedin.com/pulse/automated-canary-deployments-strategies-safer-software-utkarsh-mankad-jgu5c", date: "Apr 23, 2025", topic: "DevOps / Reliability", description: "A practical guide to progressive delivery, metric-driven promotion, automated rollback, and safer production releases." },
  { title: "Unlocking the Power of Big Data: Understanding the Architecture of Spark Connectors", href: "https://www.linkedin.com/pulse/unlocking-power-big-data-understanding-architecture-spark-mankad-6bawe", date: "Apr 18, 2025", topic: "Data Engineering", description: "An architectural walkthrough of how Spark connectors bridge distributed applications and diverse external data sources." },
];

const leadershipCompetencies = ["Organisation design", "Executive stakeholder management", "Budget & portfolio ownership", "OKR & goal setting", "Cross-functional programme delivery", "Hiring & talent development", "Performance management"];

function SectionTitle({ number, label, children }: { number: string; label: string; children: React.ReactNode }) {
  return <header className="section-title"><p><span>{number}</span>{label}</p><h2>{children}</h2></header>;
}

export default function Home() {
  const [dark, setDark] = useState(true);
  useEffect(() => { const saved = localStorage.getItem("theme"); queueMicrotask(() => setDark(saved ? saved === "dark" : true)); }, []);
  useEffect(() => { document.documentElement.dataset.theme = dark ? "dark" : "light"; localStorage.setItem("theme", dark ? "dark" : "light"); }, [dark]);

  return <main id="top">
    <nav className="nav shell" aria-label="Primary navigation"><a className="brand" href="#top"><span>U</span>M_</a><div className="nav-links"><a href="#work">01.Work</a><a href="#products">02.Products</a><a href="#projects">03.Builds</a><a href="#open-source">04.OSS</a><a href="#writing">05.Writing</a><a href="#contact">06.Contact</a></div><button className="theme-button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}><span aria-hidden>{dark ? "☼" : "◐"}</span>{dark ? "Light" : "Dark"}</button></nav>

    <header className="hero shell"><div className="hero-intro"><div><div className="hero-signal"><span>SYS.STATUS</span><b>ONLINE</b><i /></div><p className="eyebrow">Engineering leader / Systems thinker / Builder</p></div><div className="profile-photo"><Image src="/utkarsh.jpg" alt="Utkarsh Mankad" width={88} height={88} priority /></div></div><h1>Building teams.<br />Engineering <em>impact.</em></h1><div className="hero-bottom"><p>16 years turning complex systems into dependable platforms—from enterprise AI and commerce at national scale to public digital infrastructure.</p><div className="command"><span>$</span><a href="#work">explore --work</a><i>↵</i></div></div><div className="metrics"><article><small>EXP_YRS</small><b>16</b></article><article><small>ENGINEERS_LED</small><b>20</b></article><article><small>TEAMS_BUILT</small><b>04</b></article><article><small>MERCHANTS_SERVED</small><b>5M+</b></article></div></header>

    <section className="section shell" id="work"><SectionTitle number="01" label="Career runtime">Systems that operate at scale.</SectionTitle><div className="timeline">{roles.map((role, index) => <article className="timeline-row" key={role.company}><div className="node">0{index + 1}</div><time>{role.period}</time><div><h3>{role.company}</h3><p className="role-title">{role.role}</p><p>{role.summary}</p><ul className="role-wins">{role.wins.map(win => <li key={win}>{win}</li>)}</ul><div className="role-stack"><span>TECH_STACK[]</span><ul>{role.tech.map(technology => <li key={technology}>{technology}</li>)}</ul></div></div></article>)}</div></section>

    <section className="section shell" id="products"><SectionTitle number="02" label="Products built">AI products, cloud platforms, and public infrastructure.</SectionTitle><div className="product-grid">{products.map((product, index) => <a href={product.href} target="_blank" rel="noreferrer" key={product.name}><small>0{index + 1} / {product.meta}</small><h3>{product.name}</h3><p>{product.description}</p><span>Open project ↗</span></a>)}</div></section>

    <section className="section shell" id="projects"><SectionTitle number="03" label="Independent builds">Products, not placeholders.</SectionTitle><div className="project-grid">{projects.map(project => <a href={project.href} target="_blank" rel="noreferrer" key={project.name}><span className="project-tech">{project.tech}</span><h3>{project.name}</h3><p>{project.description}</p><b>Explore build ↗</b></a>)}</div></section>

    <section className="oss-section" id="open-source"><div className="shell"><SectionTitle number="04" label="Open source signal">Contributing beyond my own repositories.</SectionTitle><div className="oss-grid">{contributions.map(item => <a href={item.href} target="_blank" rel="noreferrer" key={`${item.project}-${item.code}`}><div><span>{item.project}</span><i className={item.status.toLowerCase()}>{item.status}</i></div><small>{item.code}</small><h3>{item.title}</h3><p>{item.detail}</p><b>Inspect contribution ↗</b></a>)}</div></div></section>

    <section className="section shell" id="writing"><SectionTitle number="05" label="Selected writing">Ideas translated into practical engineering guidance.</SectionTitle><div className="article-grid">{articles.map(article => <a href={article.href} target="_blank" rel="noreferrer" key={article.title}><div><span>{article.topic}</span><time>{article.date}</time></div><h3>{article.title}</h3><p>{article.description}</p><b>Read on LinkedIn ↗</b></a>)}</div></section>

    <section className="section shell leadership-section"><SectionTitle number="06" label="Leadership protocol">Clarity over noise. Outcomes over activity.</SectionTitle><div className="leadership-content"><p>My leadership practice connects organisation health, executive alignment, and accountable delivery—turning strategy into systems that teams can execute with confidence.</p><ul>{leadershipCompetencies.map((competency, index) => <li key={competency}><span>{String(index + 1).padStart(2, "0")}</span>{competency}</li>)}</ul><blockquote>Turn ambiguity into direction—and leave every system stronger than you found it.</blockquote></div></section>

    <footer id="contact"><div className="shell"><p className="footer-code">READY_FOR_NEXT_CHALLENGE = TRUE</p><h2>Let’s engineer<br /><em>what’s next.</em></h2><a className="contact-link" href="mailto:utkarsh.mankad@gmail.com">utkarsh.mankad@gmail.com <span>↗</span></a><div className="footer-bottom"><span>© {new Date().getFullYear()} Utkarsh Mankad</span><div><a href="https://github.com/utkarshmankad" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/utkarsh-mankad/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><a href="#top">Back to top ↑</a></div></div></footer>
  </main>;
}
