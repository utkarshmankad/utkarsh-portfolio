export type Role = {
  period: string;
  company: string;
  role: string;
  summary: string;
  wins: string[];
  tech: string[];
};

export type LinkedCard = {
  name: string;
  href: string;
  description: string;
};

export const roles: Role[] = [
  { period: "2025 — 2026", company: "Oracle", role: "Engineering Manager · AI Data Platform", summary: "Led a nine-engineer connectivity pod delivering 14 production ingestion connectors for Oracle 23ai, establishing the VECTOR and JSON CRUD foundation, cutting read latency 70% through Spark pushdown, and securing FIPS 140-3 certification.", wins: ["14 production connectors", "70% lower read latency", "85%+ test coverage", "FIPS 140-3 certified"], tech: ["Oracle 23ai", "Apache Spark", "Java", "Python", "Scala", "OCI", "Kubernetes", "Docker", "Snowflake", "Salesforce", "Grafana"] },
  { period: "2021 — 2024", company: "Fynd · Reliance Industries", role: "Engineering Manager · Platform & Integrations", summary: "Built and led the 20-engineer organisation behind Metro B2B and Ajio B2B, migrating JioMart Partners with zero downtime and architecting the CDC pipeline that powered live commerce analytics and AI product recommendations.", wins: ["Team scaled 5 → 20", "5M+ active merchants", "3M+ SKUs", "Zero-downtime migration"], tech: ["MongoDB", "Kafka", "Debezium", "Delta Lake", "Medallion Architecture", "Java", "Node.js", "React", "AWS", "Kubernetes", "Docker", "Redis", "Elasticsearch", "Jenkins", "Helm", "Grafana", "Coralogix", "New Relic", "Sentry", "PagerDuty", "OpenTelemetry"] },
  { period: "2010 — 2021", company: "CDAC · Government of India", role: "SDE 2 → SDE 3 → Architect → Engineering Manager", summary: "Progressed from individual contributor to technical architect and engineering manager, ultimately leading 12 engineers across IoT and AR at India’s national government R&D institute. Owned a ₹300 Cr+ programme portfolio and delivered public systems spanning smart water infrastructure, COVID monitoring, education, mobility, Smart Cities, and identity verification.", wins: ["12-engineer organisation", "₹300 Cr+ portfolio", "10+ public products", "1.2M+ app downloads", "8,000 IoT sensors", "4-state COVID deployment"], tech: ["Java", "Android SDK", "Node.js", "Angular", "React", "IoT Data Pipelines"] },
];

export const products = [
  { name: "Oracle AI Data Platform", href: "https://www.oracle.com/ai-data-platform/", meta: "Enterprise AI", description: "I led the connectivity pod responsible for 14 production ingestion connectors, including the VECTOR and JSON CRUD foundations for Oracle 23ai." },
  { name: "Reliance B2B Commerce", href: "https://www.fynd.com/", meta: "Commerce at scale", description: "I built the engineering organisation and integration platform behind B2B journeys serving more than five million active merchants." },
  { name: "Namma Metro", href: "https://play.google.com/store/apps/details?id=com.aum.nammametro", meta: "Public mobility", description: "I helped take Bengaluru’s official metro companion from a public-service idea to an app used by more than 1.2 million commuters." },
  { name: "Smart Water Network", href: "https://www.cdac.in/", meta: "Urban infrastructure", description: "I led delivery of an IoT monitoring platform covering 8,000 sensors across 40 locations, giving operations teams a usable view of the network." },
];

export const projects = [
  { name: "Isha — Smart Helpdesk Assistant", href: "https://github.com/utkarshmankad/isha-indigo-rag", tech: "LangGraph / RAG", description: "I built Isha to test what a trustworthy airline support assistant needs in practice: hybrid retrieval, cited answers, confidence checks, memory, multilingual support, and a clean API." },
  { name: "Job Tracker", href: "https://github.com/utkarshmankad/job-tracker", tech: "Python / React", description: "I wanted one private place to follow a job search, so I built a local-first tool that turns incoming job emails into an application pipeline." },
  { name: "JD Fit Checker", href: "https://jd-fit-checker.vercel.app", tech: "Next.js / AI", description: "I built this to answer a practical question quickly: is a role worth pursuing? It scores the match, explains gaps, and keeps the decision visible." },
  { name: "ReportAPI", href: "https://reportapi.vercel.app", tech: "TypeScript / Next.js", description: "An experiment in making report creation and sharing simpler, with the workflow reduced to the parts people actually need." },
];

export const contributions = [
  { project: "AutoMQ", status: "Merged", href: "https://github.com/AutoMQ/automq/pull/3485", code: "PR #3485", title: "Hardened WAL failure handling", detail: "Made the S3 stream write path fail safely when WAL preparation breaks." },
  { project: "AutoMQ", status: "Merged", href: "https://github.com/AutoMQ/automq/pull/3487", code: "PR #3487", title: "Sharper cache diagnostics", detail: "Separated capacity evictions from TTL expiry so operators get actionable warnings." },
  { project: "RisingWave", status: "Open", href: "https://github.com/risingwavelabs/risingwave/pull/26586", code: "PR #26586", title: "Extended PostgreSQL query support", detail: "Added PREPARE, EXECUTE, and DEALLOCATE support to simple-query mode." },
  { project: "FIWARE", status: "Merged", href: "https://github.com/FIWARE/tutorials.Application-Mashup/pull/5", code: "PR #5", title: "Fixed tutorial configuration", detail: "Corrected an indentation issue in the Application Mashup learning path." },
];

export const articles = [
  { title: "JobSnob: Building Fast AI and RAG JD Screening Pipelines", href: "https://www.linkedin.com/pulse/jobsnob-building-fast-ai-rag-jd-screening-pipelines-utkarsh-mankad-6hx2c", date: "Aug 25, 2026", publishedAt: "2026-08-25", topic: "AI Systems / RAG", description: "How a two-speed AI and RAG architecture replaced per-job LLM calls with cached semantic context and deterministic local scoring—cutting screening latency while preserving explainable results." },
  { title: "Automated Canary Deployments: Strategies for Safer Software Releases", href: "https://www.linkedin.com/pulse/automated-canary-deployments-strategies-safer-software-utkarsh-mankad-jgu5c", date: "Apr 23, 2025", publishedAt: "2025-04-23", topic: "DevOps / Reliability", description: "A practical guide to progressive delivery, metric-driven promotion, automated rollback, and safer production releases." },
  { title: "Unlocking the Power of Big Data: Understanding the Architecture of Spark Connectors", href: "https://www.linkedin.com/pulse/unlocking-power-big-data-understanding-architecture-spark-mankad-6bawe", date: "Apr 18, 2025", publishedAt: "2025-04-18", topic: "Data Engineering", description: "An architectural walkthrough of how Spark connectors bridge distributed applications and diverse external data sources." },
];

export const leadershipCompetencies = ["Organisation design", "Executive stakeholder management", "Budget & portfolio ownership", "OKR & goal setting", "Cross-functional programme delivery", "Hiring & talent development", "Performance management"];
