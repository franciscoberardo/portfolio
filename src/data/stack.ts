import type { StackGroup } from '../types'

export const stackGroups: StackGroup[] = [
  {
    id: 'frontend',
    name: {
      en: 'Frontend & Mobile',
      es: 'Frontend y Mobile'
    },
    technologies: ['React', 'React Native', 'TypeScript', 'Next.js', 'Tailwind CSS']
  },
  {
    id: 'backend',
    name: {
      en: 'Backend & APIs',
      es: 'Backend y APIs'
    },
    technologies: ['Node.js', 'Express', 'NestJS', 'Python', 'FastAPI', 'PHP/Symfony']
  },
  {
    id: 'databases',
    name: {
      en: 'Databases',
      es: 'Bases de datos'
    },
    technologies: ['PostgreSQL', 'MySQL', 'Prisma', 'SQL']
  },
  {
    id: 'ai',
    name: {
      en: 'AI & Machine Learning',
      es: 'IA y Machine Learning'
    },
    technologies: ['LangChain', 'LangGraph', 'OpenAI', 'Gemini', 'RAG', 'LLMs', 'scikit-learn', 'LightGBM']
  },
  {
    id: 'cloud',
    name: {
      en: 'Cloud & DevOps',
      es: 'Cloud y DevOps'
    },
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Git', 'CI/CD']
  }
]
