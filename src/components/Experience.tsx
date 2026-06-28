import { experience } from '../data/experience'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading eyebrow="Where I've contributed" title="Experience" />
        <div className="timeline">
          {experience.map((item) => (
            <article className="experience-item" key={`${item.company}-${item.role}`}>
              <div className="experience-date">{item.duration}<small>{item.location}</small></div>
              <div className="timeline-dot" />
              <div className="experience-body">
                <h3>{item.role}</h3><h4>{item.company}</h4><p>{item.description}</p>
                <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                <div className="tag-list compact">{item.techStack.map((tech) => <span key={tech}>{tech}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
