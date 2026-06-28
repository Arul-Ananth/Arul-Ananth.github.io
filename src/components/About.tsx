import { profile, stats } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="section section-white">
      <div className="container about-layout">
        <div>
          <SectionHeading title="About Me" />
          <p className="about-copy">{profile.about}</p>
          <a className="text-link" href="#experience">More about my work →</a>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}><span className="stat-icon">{stat.icon}</span><strong>{stat.label}</strong><small>{stat.value}</small></div>
          ))}
        </div>
      </div>
    </section>
  )
}
