import type { Profile, Stat } from '../types/portfolio'

export const profile: Profile = {
  name: 'A. Arul Ananth',
  shortName: 'Arul',
  footerName: 'Arul Ananth',
  logoText: 'AA',
  greeting: "Hi, I'm",
  role: 'Full Stack & AI Application Developer',
  summary: 'I build secure full-stack systems and AI-powered applications using modern backend, frontend, RAG, and agentic AI technologies.',
  about: 'Third-year Computer Science undergraduate with hands-on experience in full-stack development, backend engineering, and AI-powered applications. I focus on secure backend systems, agentic AI, RAG, local LLMs, orchestration, and AI-assisted software development with human review and validation.',
  contactHeading: 'Have a project or opportunity in mind?',
  contactText: "I'm seeking software development, backend, full-stack, and AI application development opportunities.",
  repositoryIntro: 'Open-source projects and experiments from my GitHub profile.',
  codeProfile: {
    name: 'Arul',
    builds: ['web', 'APIs', 'AI'],
    mindset: 'ship & improve',
  },
  email: 'a.arul.ananth.2006@gmail.com',
  phone: '+91 73393 48490',
  location: 'Chennai, Tamil Nadu',
  availability: 'Internship / Entry-level',
  resumeUrl: '/resume/Arul-Ananth-Resume.pdf',
  heroTech: ['React', 'Spring Boot', 'Java', 'Python', 'FastAPI', 'Qdrant'],
}

export const stats: Stat[] = [
  { label: 'Location', value: profile.location, icon: '⌖' },
  { label: 'Education', value: 'B.E. CSE · Third Year', icon: '◇' },
  { label: 'CGPA', value: '8.52 / 10', icon: '↗' },
  { label: 'Availability', value: profile.availability, icon: '○' },
  { label: 'Experience', value: '2 Internships', icon: '□' },
]
