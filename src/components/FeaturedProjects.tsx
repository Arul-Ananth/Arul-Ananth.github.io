import { projects } from '../data/projects'
import { SectionHeading } from './SectionHeading'
import { ProjectCard } from './ProjectCard'

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured)
  return (
    <section id="projects" className="section section-white">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Featured Projects" description="A few systems I've designed and built across backend, frontend, and AI." />
        <div className="project-grid">{featured.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
      </div>
    </section>
  )
}
