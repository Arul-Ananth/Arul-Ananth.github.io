import { profile } from '../data/profile'
import { socialLinks } from '../data/links'

export function Hero() {
  const github = socialLinks.find((link) => link.label === 'GitHub')
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-greeting">{profile.greeting}</p>
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <p className="hero-summary">{profile.summary}</p>
          <div className="tag-list" aria-label="Primary technologies">
            {profile.heroTech.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
          <div className="hero-actions">
            <a className="button" href="#projects">View My Projects <span>→</span></a>
            <a className="button button-secondary" href={github?.url}>GitHub</a>
            <a
              className="button button-secondary"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume PDF in a new tab"
            >
              Resume
            </a>
            <a className="button button-secondary" href="#contact">Contact Me</a>
          </div>
        </div>
        <div className="hero-signal" aria-hidden="true">
          <div className="code-card">
            <div className="code-top"><i /><i /><i /></div>
            <pre><span>const</span> engineer = {'{'}{'\n'}  name: <b>'Arul'</b>,{'\n'}  builds: [<b>'web'</b>, <b>'APIs'</b>, <b>'AI'</b>],{'\n'}  mindset: <b>'ship & improve'</b>{'\n'}{'}'}</pre>
          </div>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        </div>
      </div>
    </section>
  )
}
