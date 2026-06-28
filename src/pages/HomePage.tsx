import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Details } from '../components/Details'
import { Experience } from '../components/Experience'
import { FeaturedProjects } from '../components/FeaturedProjects'
import { Hero } from '../components/Hero'
import { Skills } from '../components/Skills'
import { sections } from '../config/sections'

export function HomePage() {
  return (
    <main>
      <Hero />
      {sections.about && <About />}
      {sections.skills && <Skills />}
      {sections.projects && <FeaturedProjects />}
      {sections.experience && <Experience />}
      {(sections.education || sections.achievements || sections.certifications) && <Details />}
      {sections.contact && <Contact />}
    </main>
  )
}
