import type { SkillGroup } from '../types/portfolio'

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', icon: '</>', skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'C'] },
  { title: 'Backend', icon: '≡', skills: ['Spring Boot', 'Spring Security', 'FastAPI', 'Hibernate JPA', 'REST APIs', 'JWT'] },
  { title: 'Frontend', icon: '▣', skills: ['React.js', 'Angular', 'HTML', 'CSS'] },
  { title: 'Data & AI', icon: '◎', skills: ['MySQL', 'MongoDB', 'Qdrant', 'RAG', 'Vector Search', 'Semantic Search'] },
  { title: 'AI / ML', icon: '✦', skills: ['CrewAI', 'Ollama', 'FastChat', 'TensorFlow', 'OpenCV', 'Agentic AI'] },
  { title: 'Tools & Platforms', icon: '⌘', skills: ['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code', 'PyCharm', 'Linux'] },
]
