import Image from "next/image";
import { articles, contributions, leadershipCompetencies, products, projects, roles } from "./content";
import { SectionTitle } from "./components/section-title";
import { SiteControls } from "./components/site-controls";
import { siteConfig, siteUrl } from "./site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", "@id": `${siteUrl}/#person`, name: siteConfig.name, url: siteUrl, image: `${siteUrl}/utkarsh.jpg`, jobTitle: "Senior Engineering Leader", description: siteConfig.description, sameAs: [siteConfig.github, siteConfig.linkedin], knowsAbout: ["AI data platforms", "Distributed systems", "Engineering leadership", "Cloud platforms", "Data engineering"] },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: `${siteConfig.name} Portfolio`, description: siteConfig.description, author: { "@id": `${siteUrl}/#person` } },
    ...articles.map((article) => ({ "@type": "Article", headline: article.title, url: article.href, datePublished: article.publishedAt, author: { "@id": `${siteUrl}/#person` }, description: article.description })),
    ...projects.map((project) => ({ "@type": "SoftwareSourceCode", name: project.name, codeRepository: project.href, description: project.description, author: { "@id": `${siteUrl}/#person` } })),
  ],
};

export default function Home() {
  return <main id="top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <a className="skip-link" href="#content">Skip to content</a>
    <nav className="nav shell" aria-label="Primary navigation"><a className="brand" href="#top" aria-label="Utkarsh Mankad, back to top"><span>U</span>M_</a><SiteControls /></nav>

    <header className="hero shell" id="content" tabIndex={-1}>
      <div className="hero-intro"><div><div className="hero-signal"><span>SYS.STATUS</span><b>OPEN_TO_LEADERSHIP_ROLES</b><i /></div><p className="eyebrow">Senior engineering leader / AI &amp; data platforms / Distributed systems</p></div><div className="profile-photo"><Image src="/utkarsh.jpg" alt="Utkarsh Mankad" width={88} height={88} priority /></div></div>
      <h1>Building teams.<br />Engineering <em>impact.</em></h1>
      <div className="hero-bottom"><p>{siteConfig.description}</p><div className="hero-actions" aria-label="Portfolio actions"><a className="primary-action" href="#work" data-analytics-event="cta_click" data-analytics-label="selected_work"><span aria-hidden>$</span> View selected work</a><a href="/utkarsh-mankad-resume.pdf" download data-analytics-event="resume_download" data-analytics-label="hero">Download résumé ↓</a><a href="#contact" data-analytics-event="cta_click" data-analytics-label="contact">Contact me ↘</a></div></div>
      <div className="metrics"><article><small>EXP_YRS</small><b>16</b></article><article><small>ENGINEERS_LED</small><b>20</b></article><article><small>TEAMS_BUILT</small><b>04</b></article><article><small>MERCHANTS_SERVED</small><b>5M+</b></article></div>
    </header>

    <section className="section shell" id="work" aria-labelledby="work-title"><SectionTitle number="01" label="Career runtime" id="work-title">Systems that operate at scale.</SectionTitle><div className="timeline">{roles.map((role, index) => <article className="timeline-row" key={role.company}><div className="node">0{index + 1}</div><time>{role.period}</time><div><h3>{role.company}</h3><p className="role-title">{role.role}</p><p>{role.summary}</p><ul className="role-wins">{role.wins.map(win => <li key={win}>{win}</li>)}</ul><div className="role-stack"><span>TECH_STACK[]</span><ul>{role.tech.map(technology => <li key={technology}>{technology}</li>)}</ul></div></div></article>)}</div></section>

    <section className="section shell" id="products" aria-labelledby="products-title"><SectionTitle number="02" label="Products built" id="products-title">AI products, cloud platforms, and public infrastructure.</SectionTitle><div className="product-grid">{products.map((product, index) => <a href={product.href} target="_blank" rel="noreferrer" key={product.name} data-analytics-event="product_click" data-analytics-label={product.name}><small>0{index + 1} / {product.meta}</small><h3>{product.name}</h3><p>{product.description}</p><span>Open project ↗</span></a>)}</div></section>

    <section className="section shell" id="projects" aria-labelledby="projects-title"><SectionTitle number="03" label="Independent builds" id="projects-title">Products, not placeholders.</SectionTitle><div className="project-grid">{projects.map(project => <a href={project.href} target="_blank" rel="noreferrer" key={project.name} data-analytics-event="project_click" data-analytics-label={project.name}><span className="project-tech">{project.tech}</span><h3>{project.name}</h3><p>{project.description}</p><b>Explore build ↗</b></a>)}</div></section>

    <section className="oss-section" id="open-source" aria-labelledby="oss-title"><div className="shell"><SectionTitle number="04" label="Open source signal" id="oss-title">Contributing beyond my own repositories.</SectionTitle><div className="oss-grid">{contributions.map(item => <a href={item.href} target="_blank" rel="noreferrer" key={`${item.project}-${item.code}`} data-analytics-event="oss_click" data-analytics-label={`${item.project} ${item.code}`}><div><span>{item.project}</span><i className={item.status.toLowerCase()}>{item.status}</i></div><small>{item.code}</small><h3>{item.title}</h3><p>{item.detail}</p><b>Inspect contribution ↗</b></a>)}</div></div></section>

    <section className="section shell" id="writing" aria-labelledby="writing-title"><SectionTitle number="05" label="Selected writing" id="writing-title">Ideas translated into practical engineering guidance.</SectionTitle><div className="article-grid">{articles.map(article => <a href={article.href} target="_blank" rel="noreferrer" key={article.title} data-analytics-event="article_click" data-analytics-label={article.title}><div><span>{article.topic}</span><time dateTime={article.publishedAt}>{article.date}</time></div><h3>{article.title}</h3><p>{article.description}</p><b>Read on LinkedIn ↗</b></a>)}</div></section>

    <section className="section shell leadership-section" aria-labelledby="leadership-title"><SectionTitle number="06" label="Leadership protocol" id="leadership-title">Clarity over noise. Outcomes over activity.</SectionTitle><div className="leadership-content"><p>My leadership practice connects organisation health, executive alignment, and accountable delivery—turning strategy into systems that teams can execute with confidence.</p><ul>{leadershipCompetencies.map((competency, index) => <li key={competency}><span>{String(index + 1).padStart(2, "0")}</span>{competency}</li>)}</ul><blockquote>Turn ambiguity into direction—and leave every system stronger than you found it.</blockquote></div></section>

    <footer id="contact"><div className="shell"><p className="footer-code">READY_FOR_NEXT_CHALLENGE = TRUE</p><h2>Let’s engineer<br /><em>what’s next.</em></h2><div className="contact-actions"><a className="contact-link" href={`mailto:${siteConfig.email}`} data-analytics-event="contact_click" data-analytics-label="email">Email Utkarsh <span>↗</span></a><a className="resume-link" href="/utkarsh-mankad-resume.pdf" download data-analytics-event="resume_download" data-analytics-label="footer">Download résumé ↓</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Utkarsh Mankad</span><div><a href={siteConfig.github} target="_blank" rel="noreferrer" data-analytics-event="social_click" data-analytics-label="github">GitHub ↗</a><a href={siteConfig.linkedin} target="_blank" rel="noreferrer" data-analytics-event="social_click" data-analytics-label="linkedin">LinkedIn ↗</a></div><a href="#top">Back to top ↑</a></div></div></footer>
  </main>;
}
