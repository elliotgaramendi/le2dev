import { contentManifest } from './contentManifest'

export type Course = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  path?: string
}

export type WeekProject = {
  id: string
  slug: string
  title: string
  sourcePath: string
  sourceUrl: string
}

export type Week = {
  id: string
  slug: string
  order: number
  title: string
  description: string
  projects: WeekProject[]
}

export const weeksCatalog: Week[] = contentManifest.weeksCatalog.map((week) => ({
  id: week.id,
  slug: week.slug,
  order: week.order,
  title: week.title,
  description: week.description,
  projects: week.projects.map((project) => ({
    id: project.id,
    slug: project.slug,
    title: project.title,
    sourcePath: project.sourcePath,
    sourceUrl: project.sourceUrl,
  })),
}))

export const coursesConfig: Course[] = [
  {
    id: 1,
    title: 'Diseño UX-UI',
    description:
      'Crea interfaces atractivas y enfocadas en la experiencia del usuario, dominando prototipado y arquitectura de información.',
    image: 'https://sourcemediakw.com/wp-content/uploads/2023/04/UIUX-1024x536.png',
    tags: ['User Research', 'Figma', 'Prototyping'],
  },
  {
    id: 2,
    title: 'Desarrollo Frontend',
    description:
      'Aprende a construir aplicaciones web con HTML, CSS, JavaScript y React, orientadas a empleabilidad real.',
    image: 'https://i.postimg.cc/x9MyhM3D/react-system.webp',
    tags: ['HTML', 'CSS', 'JS', 'React'],
    path: '/desarrollo-frontend',
  },
  {
    id: 3,
    title: 'Desarrollo de Aplicativos Móviles',
    description:
      'Crea apps escalables para Android y iOS usando React Native, navegación y consumo de APIs externas.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*GnbqpCYzIJwcq6nvjZqO0g.png',
    tags: ['React Native', 'Android', 'iOS', 'JS'],
  },
  {
    id: 4,
    title: 'Desarrollo Backend',
    description:
      'Conecta tus aplicaciones con bases de datos, autenticación y APIs robustas para escenarios reales.',
    image: 'https://wallpapercave.com/wp/wp5070716.jpg',
    tags: ['Node.js', 'Express', 'NoSQL', 'SQL'],
  },
  {
    id: 5,
    title: 'Creación de Aplicaciones con IA',
    description:
      'Domina LLMs y herramientas modernas para construir productos con inteligencia artificial aplicada.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*Kq_jYlfqI69BDNNZsz24fw.jpeg',
    tags: ['Python', 'AI', 'LLM', 'OpenAI'],
  },
]

export const navConfig = {
  brand: 'Le2Dev',
  links: [
    { label: 'Cursos', path: '/frontend' },
    { label: 'Retos', path: '/desarrollo-frontend' },
    { label: 'Proyectos', path: '/desarrollo-frontend' },
  ],
  cta: { label: 'Iniciar sesión', path: '#' },
}

export const heroConfig = {
  title: 'Conviértete en AI Engineer gratis con los mejores',
  highlightedText: 'AI Engineer',
  description:
    'El mejor centro educativo del Perú, aprende todo en un solo lugar, gratis e impulsa tu futuro.',
  ctaLabel: 'Empezar a aprender',
  ctaPath: '/desarrollo-frontend',
}
