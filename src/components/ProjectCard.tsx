import type { Project } from '../types/portfolio'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className={`project-mark mark-${(index % 5) + 1}`}><span>{String(index + 1).padStart(2, '0')}</span></div>
      <div className="project-content">
        <div className="project-meta"><span>{project.category}</span><small>{project.status}</small></div>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="tag-list compact">{project.techStack.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="project-links">
          <a href={project.githubUrl} aria-label={`${project.title} source code`}>Source ↗</a>
          {project.liveUrl && <a href={project.liveUrl}>Live ↗</a>}
          {project.caseStudyUrl && <a href={project.caseStudyUrl}>Details ↗</a>}
        </div>
      </div>
    </article>
  )
}
