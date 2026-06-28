import { profile } from '../data/profile'
import { socialLinks } from '../data/links'
import { SectionHeading } from './SectionHeading'
import { toTelephoneHref } from '../utils/links'

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-box">
        <div><SectionHeading eyebrow="Let's connect" title={profile.contactHeading} /><p>{profile.contactText}</p></div>
        <div className="contact-links">
          <a className="button" href={`mailto:${profile.email}`}>Send an email →</a>
          <a className="button button-secondary" href={toTelephoneHref(profile.phone)}>{profile.phone}</a>
          {socialLinks.filter((link) => link.label !== 'Email').map((link) => <a className="button button-secondary" href={link.url} key={link.label}>{link.label}</a>)}
        </div>
      </div>
    </section>
  )
}
