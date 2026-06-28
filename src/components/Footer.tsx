import { navigation } from '../data/links'

export function Footer() {
  return (
    <footer><div className="container footer-inner"><a className="logo logo-light" href="#home">AA<span>&lt;/&gt;</span></a><p>© {new Date().getFullYear()} Arul Ananth. Built with React & TypeScript.</p><nav aria-label="Footer navigation">{navigation.slice(0, 4).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></div></footer>
  )
}
