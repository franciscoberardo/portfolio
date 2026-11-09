import senioImage from '../assets/senioia.png'
import venttiumImage from '../assets/venttium.png'
import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'senio-ia',
    name: {
      en: 'Senio IA',
      es: 'Senio IA'
    },
    category: {
      en: 'EdTech · AI',
      es: 'EdTech · IA'
    },
    description: {
      en: 'An AI-powered platform that helps educators identify students at risk of academic failure or dropout, understand contributing factors, and deliver personalized interventions.',
      es: 'Una plataforma con IA que ayuda a docentes a identificar estudiantes en riesgo de fracaso o abandono escolar, comprender los factores que influyen e implementar intervenciones personalizadas.'
    },
    tags: {
      en: ['Education', 'AI', 'Analytics'],
      es: ['Educación', 'IA', 'Analítica']
    },
    href: 'https://senioia.com/',
    image: {
      src: senioImage,
      width: 2412,
      height: 1406,
      alt: {
        es: 'Vista de Senio IA con herramientas de seguimiento del aprendizaje',
        en: 'Senio IA preview showing learning progress tools'
      }
    }
  },
  {
    id: 'enterprise-ai-agent',
    hidden: true,
    name: {
      en: 'Enterprise AI Agent',
      es: 'Agente de IA empresarial'
    },
    category: {
      en: 'AI Systems',
      es: 'Sistemas de IA'
    },
    description: {
      en: 'A business assistant that combines documentation, data and approved tools to deliver grounded operational answers.',
      es: 'Un asistente de negocio que combina documentación, datos y herramientas aprobadas para ofrecer respuestas operativas fundamentadas.'
    },
    tags: {
      en: ['LangGraph', 'FastAPI', 'Gemini', 'RAG'],
      es: ['LangGraph', 'FastAPI', 'Gemini', 'RAG']
    }
  },
  {
    id: 'demand-predictor',
    hidden: true,
    name: {
      en: 'Demand Predictor',
      es: 'Predictor de demanda'
    },
    category: {
      en: 'Applied ML',
      es: 'ML aplicado'
    },
    description: {
      en: 'A forecasting platform translating sales data into inventory, purchasing and planning recommendations.',
      es: 'Una plataforma de forecasting que transforma ventas en recomendaciones de inventario, compras y planificación.'
    },
    tags: {
      en: ['Python', 'LightGBM', 'PostgreSQL', 'React'],
      es: ['Python', 'LightGBM', 'PostgreSQL', 'React']
    }
  },
  {
    id: 'venttium',
    name: {
      en: 'Venttium',
      es: 'Venttium'
    },
    category: {
      en: 'B2B Platform',
      es: 'Plataforma B2B'
    },
    description: {
      en: 'A B2B business management platform that centralizes sales, orders, payments, customer accounts, and daily operations into a unified system.',
      es: 'Una plataforma de gestión empresarial B2B que centraliza ventas, pedidos, pagos, cuentas de clientes y operaciones diarias en un solo sistema.'
    },
    tags: {
      en: ['Operations', 'B2B', 'Full Stack'],
      es: ['Operaciones', 'B2B', 'Full Stack']
    },
    href: 'https://venttium.com/',
    image: {
      src: venttiumImage,
      width: 2980,
      height: 1562,
      alt: {
        es: 'Vista de Venttium con panel de gestión empresarial y ventas',
        en: 'Venttium preview showing business management and sales dashboard'
      }
    }
  }
]
