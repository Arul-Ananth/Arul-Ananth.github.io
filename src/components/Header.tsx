import { useState } from 'react'
import { navigation } from '../data/links'
import { profile } from '../data/profile'

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="logo" href="#home" aria-label="Arul Ananth home">AA<span>&lt;/&gt;</span></a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={open ? 'open' : ''} aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        </nav>
        <a
          className="button button-small nav-resume"
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open resume PDF in a new tab"
        >
          Resume
        </a>
      </div>
    </header>
  )
}
