import type { Language } from '../types'

export const translations = {
  en: {
    meta: {
      title: 'Francisco Berardo — Senior Software Engineer',
      description: 'Portfolio of Francisco Berardo, Senior Software Engineer and AI Engineer.'
    },
    navigation: {
      label: 'Main navigation',
      languageLabel: 'Language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      items: [
        {
          id: 'work',
          label: 'Projects'
        },
        {
          id: 'stack',
          label: 'Stack'
        },
        {
          id: 'experience',
          label: 'Experience'
        },
        {
          id: 'about',
          label: 'About me'
        },
        {
          id: 'contact',
          label: 'Contact'
        }
      ]
    },
    hero: {
      title: 'Senior Software Engineer',
      specialty: 'Full Stack Development & Artificial Intelligence',
      description: 'Software Engineer with 6+ years of experience building enterprise applications, e-commerce platforms, and AI-powered products. I specialize in full-stack development, backend architecture, and integrating AI agents and LLMs into real-world applications.',
      projectsLink: 'View projects',
      contactLink: 'Contact me',
      availability: 'Available for international remote opportunities'
    },
    terminal: {
      label: 'Code introduction',
      role: 'Senior Engineer',
      stack: 'Full Stack + AI',
      focus: 'Scalable systems'
    },
    projects: {
      heading: {
        eyebrow: '02 / Projects',
        title: 'Latest projects'
      },
      placeholder: 'Screenshot placeholder',
      visit: 'Visit'
    },
    experience: {
      heading: {
        eyebrow: '04 / Experience',
        title: 'Professional experience'
      },
      progression: 'Internal progression',
      linkedinLink: 'View full profile on LinkedIn'
    },
    stack: {
      heading: {
        eyebrow: '03 / Technologies',
        title: 'Technologies'
      }
    },
    about: {
      heading: {
        eyebrow: '05 / About',
        title: 'About'
      },
      introduction: 'I bring 6+ years across enterprise applications, international commerce, cloud architecture and AI solutions. I work comfortably from systems design to polished interfaces, with the ownership and communication expected in senior roles.',
      teaching: 'I also teach programming and databases at Universidad Nacional del Litoral, a practice that keeps my technical thinking clear and my collaboration patient.'
    },
    contact: {
      heading: {
        eyebrow: '06 / Contact',
        title: "Let's work together"
      },
      availability: "I'm open to remote opportunities as a Senior Software Engineer, Full Stack Engineer, or AI Engineer.",
      invitation: 'Interested in working together? Feel free to reach out.',
      emailLink: 'Get in touch'
    },
    footer: {
      role: 'Senior Software Engineer · AI Engineer'
    }
  },
  es: {
    meta: {
      title: 'Francisco Berardo — Ingeniero de Software Senior',
      description: 'Portfolio de Francisco Berardo, Ingeniero de Software Senior e Ingeniero de IA.'
    },
    navigation: {
      label: 'Navegación principal',
      languageLabel: 'Idioma',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      items: [
        {
          id: 'work',
          label: 'Proyectos'
        },
        {
          id: 'stack',
          label: 'Stack'
        },
        {
          id: 'experience',
          label: 'Experiencia'
        },
        {
          id: 'about',
          label: 'Sobre mí'
        },
        {
          id: 'contact',
          label: 'Contacto'
        }
      ]
    },
    hero: {
      title: 'Ingeniero de Software Senior',
      specialty: 'Desarrollo Full Stack e Inteligencia Artificial',
      description: 'Ingeniero de software con más de 6 años de experiencia creando aplicaciones empresariales, plataformas de e-commerce y productos con IA. Me especializo en desarrollo full stack, arquitectura backend e integración de agentes de IA y LLMs en aplicaciones reales.',
      projectsLink: 'Ver proyectos',
      contactLink: 'Contactarme',
      availability: 'Disponible para oportunidades remotas internacionales'
    },
    terminal: {
      label: 'Presentación en código',
      role: 'Ingeniero Senior',
      stack: 'Full Stack + IA',
      focus: 'Escalabilidad'
    },
    projects: {
      heading: {
        eyebrow: '02 / Proyectos',
        title: 'Últimos proyectos'
      },
      placeholder: 'Espacio para captura',
      visit: 'Visitar'
    },
    experience: {
      heading: {
        eyebrow: '04 / Experiencia',
        title: 'Experiencia profesional'
      },
      progression: 'Progresión interna',
      linkedinLink: 'Ver perfil completo en LinkedIn'
    },
    stack: {
      heading: {
        eyebrow: '03 / Tecnologías',
        title: 'Stack tecnológico'
      }
    },
    about: {
      heading: {
        eyebrow: '05 / Sobre mí',
        title: 'Sobre mí'
      },
      introduction: 'Tengo más de seis años de experiencia en aplicaciones enterprise, e-commerce internacional, arquitecturas cloud y soluciones de IA. Puedo trabajar desde el diseño de sistemas hasta una interfaz pulida, con la autonomía y comunicación que se espera de un perfil senior.',
      teaching: 'También enseño programación y bases de datos en la Universidad Nacional del Litoral; una práctica que mantiene mi pensamiento técnico claro y mi colaboración paciente.'
    },
    contact: {
      heading: {
        eyebrow: '06 / Contacto',
        title: 'Trabajemos juntos'
      },
      availability: 'Estoy abierto a oportunidades remotas como Ingeniero de Software Senior, Ingeniero Full Stack o Ingeniero de IA.',
      invitation: '¿Te interesa trabajar conmigo? Escribime.',
      emailLink: 'Contactar por mail'
    },
    footer: {
      role: 'Ingeniero de Software Senior · Ingeniero de IA'
    }
  }
}

export type PortfolioCopy = (typeof translations)[Language]
