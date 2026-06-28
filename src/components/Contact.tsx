import { profile } from '../data/profile'
import { socialLinks } from '../data/links'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-box">
        <div><SectionHeading eyebrow="Let's connect" title="Have a project or opportunity in mind?" /><p>I'm seeking software development, backend, full-stack, and AI application development opportunities.</p></div>
        <div className="contact-links">
          <a className="button" href={`mailto:${profile.email}`}>Send an email →</a>
          <a className="button button-secondary" href="tel:+917339348490">{profile.phone}</a>
          {socialLinks.filter((link) => link.label !== 'Email').map((link) => <a className="button button-secondary" href={link.url} key={link.label}>{link.label}</a>)}
        </div>
      </div>
    </section>
  )
}
