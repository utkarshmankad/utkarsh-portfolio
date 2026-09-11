import Image from "next/image";
import { articles, contributions, leadershipCompetencies, products, projects, roles } from "./content";
import { SectionTitle } from "./components/section-title";
import { SiteControls } from "./components/site-controls";
import { LiveAnalytics } from "./components/live-analytics";
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
      <div className="hero-intro"><div><p className="hero-signal"><span aria-hidden>●</span> Open to engineering leadership roles</p><p className="eyebrow">Engineering leadership · AI and data platforms · Distributed systems</p></div><div className="profile-photo"><Image src="/utkarsh.jpg" alt="Utkarsh Mankad" width={88} height={88} priority /></div></div>
      <h1>I’m Utkarsh Mankad.<br />I build teams and platforms <em>for scale.</em></h1>
      <div className="hero-bottom"><p>I lead engineering teams through the difficult middle: turning an ambitious product goal into a system that works reliably, and an organisation that can keep improving it.</p><div className="hero-actions" aria-label="Portfolio actions"><a className="primary-action" href="#work" data-analytics-event="cta_click" data-analytics-label="selected_work">See my experience</a><a href="/utkarsh-mankad-resume.pdf" download data-analytics-event="resume_download" data-analytics-label="hero">Download my résumé</a><a href="#contact" data-analytics-event="cta_click" data-analytics-label="contact">Get in touch</a></div></div>
      <div className="metrics"><article><small>EXP_YRS</small><b>16</b></article><article><small>ENGINEERS_LED</small><b>20</b></article><article><small>TEAMS_BUILT</small><b>04</b></article><article><small>MERCHANTS_SERVED</small><b>5M+</b></article></div>
    </header>

    <section className="section shell" id="work" aria-labelledby="work-title"><SectionTitle number="01" label="Experience" id="work-title">What I’ve led—and what changed.</SectionTitle><div className="timeline">{roles.map((role, index) => <article className="timeline-row" key={role.company}><div className="node">0{index + 1}</div><time>{role.period}</time><div><h3>{role.company}</h3><p className="role-title">{role.role}</p><p>{role.summary}</p><ul className="role-wins">{role.wins.map(win => <li key={win}>{win}</li>)}</ul><div className="role-stack"><span>Technology</span><ul>{role.tech.map(technology => <li key={technology}>{technology}</li>)}</ul></div></div></article>)}</div></section>

    <section className="section shell" id="products" aria-labelledby="products-title"><SectionTitle number="02" label="Products" id="products-title">Platforms and public systems I helped bring to life.</SectionTitle><div className="product-grid">{products.map((product, index) => <a href={product.href} target="_blank" rel="noreferrer" key={product.name} data-analytics-event="product_click" data-analytics-label={product.name}><small>0{index + 1} / {product.meta}</small><h3>{product.name}</h3><p>{product.description}</p><span>View the product ↗</span></a>)}</div></section>

    <section className="section shell" id="projects" aria-labelledby="projects-title"><SectionTitle number="03" label="Independent work" id="projects-title">Tools I built to solve problems I know firsthand.</SectionTitle><div className="project-grid">{projects.map(project => <a href={project.href} target="_blank" rel="noreferrer" key={project.name} data-analytics-event="project_click" data-analytics-label={project.name}><span className="project-tech">{project.tech}</span><h3>{project.name}</h3><p>{project.description}</p><b>View the project ↗</b></a>)}</div></section>

    <section className="oss-section" id="open-source" aria-labelledby="oss-title"><div className="shell"><SectionTitle number="04" label="Open source" id="oss-title">Changes I’ve contributed to other teams’ codebases.</SectionTitle><div className="oss-grid">{contributions.map(item => <a href={item.href} target="_blank" rel="noreferrer" key={`${item.project}-${item.code}`} data-analytics-event="oss_click" data-analytics-label={`${item.project} ${item.code}`}><div><span>{item.project}</span><i className={item.status.toLowerCase()}>{item.status}</i></div><small>{item.code}</small><h3>{item.title}</h3><p>{item.detail}</p><b>View the pull request ↗</b></a>)}</div></div></section>

    <section className="section shell" id="writing" aria-labelledby="writing-title"><SectionTitle number="05" label="Writing" id="writing-title">Notes from building data, AI, and delivery systems.</SectionTitle><div className="article-grid">{articles.map(article => <a href={article.href} target="_blank" rel="noreferrer" key={article.title} data-analytics-event="article_click" data-analytics-label={article.title}><div><span>{article.topic}</span><time dateTime={article.publishedAt}>{article.date}</time></div><h3>{article.title}</h3><p>{article.description}</p><b>Read the article ↗</b></a>)}</div></section>

    <section className="section shell leadership-section" aria-labelledby="leadership-title"><SectionTitle number="06" label="Leadership" id="leadership-title">How I lead teams and work with stakeholders.</SectionTitle><div className="leadership-content"><p>I make ownership explicit, keep technical decisions close to the people doing the work, and give executives a clear view of trade-offs. My job is to create enough direction for teams to move independently without losing sight of the outcome.</p><ul>{leadershipCompetencies.map((competency, index) => <li key={competency}><span>{String(index + 1).padStart(2, "0")}</span>{competency}</li>)}</ul><blockquote>A useful plan should make the next decision easier—not merely make the status meeting shorter.</blockquote></div></section>

    <LiveAnalytics />

    <footer id="contact"><div className="shell"><p className="footer-code">Available for engineering leadership roles</p><h2>If the problem is difficult<br /><em>and worth solving, let’s talk.</em></h2><div className="contact-actions"><a className="contact-link" href={`mailto:${siteConfig.email}`} data-analytics-event="contact_click" data-analytics-label="email">Email me <span>↗</span></a><a className="resume-link" href="/utkarsh-mankad-resume.pdf" download data-analytics-event="resume_download" data-analytics-label="footer">Download my résumé</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Utkarsh Mankad</span><div><a href={siteConfig.github} target="_blank" rel="noreferrer" data-analytics-event="social_click" data-analytics-label="github">GitHub ↗</a><a href={siteConfig.linkedin} target="_blank" rel="noreferrer" data-analytics-event="social_click" data-analytics-label="linkedin">LinkedIn ↗</a></div><a href="#top">Back to top ↑</a></div></div></footer>
  </main>;
}
