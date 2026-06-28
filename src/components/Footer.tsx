import { navigation } from '../config/navigation'
import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer><div className="container footer-inner"><a className="logo logo-light" href="#home">{profile.logoText}<span>&lt;/&gt;</span></a><p>© {new Date().getFullYear()} {profile.footerName}. Built with React & TypeScript.</p><nav aria-label="Footer navigation">{navigation.slice(0, 4).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></div></footer>
  )
}
