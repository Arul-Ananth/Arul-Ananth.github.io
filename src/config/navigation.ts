import type { NavigationItem } from '../types/portfolio'
import { sections } from './sections'

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about', section: 'about' },
  { label: 'Projects', href: '#projects', section: 'projects' },
  { label: 'Experience', href: '#experience', section: 'experience' },
  { label: 'Skills', href: '#skills', section: 'skills' },
  { label: 'Education', href: '#education', section: 'education' },
  { label: 'Achievements', href: '#achievements', section: 'achievements' },
  { label: 'Contact', href: '#contact', section: 'contact' },
]

export const navigation = navigationItems.filter(
  (item) => !item.section || sections[item.section],
)
