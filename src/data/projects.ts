export type ProjectCategory = 'all' | 'saas' | 'ai' | 'fintech' | 'telemetry';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  features: string[];
  stack: string[];
  color: string;
  image: string;
  link?: string;
  github?: string;
  badge?: string;
  category: ProjectCategory;
}

export const projects: ProjectData[] = [
  {
    id: 'gym_os',
    title: 'GymOS SaaS',
    description: 'SaaS multi-sede de gestión integral para gimnasios, cobros y asistencia QR.',
    features: [
      'Control de socios, membresías y cobros automáticos',
      'Marcación de asistencia con escáner QR en tiempo real',
      'Dashboard de ingresos, retención y estadísticas visuales',
      'Generación de recibos PDF y notificaciones'
    ],
    stack: ['Next.js 16', 'Prisma 7', 'PostgreSQL', 'Better Auth', 'Tailwind v4', 'Shadcn UI'],
    color: 'from-blue-600 to-indigo-900',
    image: '/images/mockups/gym_os.jpg',
    link: 'https://gym-os-seven-omega.vercel.app/',
    github: 'https://github.com/Jackson-sch/GymOs',
    badge: 'Gym OS SaaS',
    category: 'saas'
  },
  {
    id: 'sistema_escolar',
    title: 'Sistema Escolar IA Pro',
    description: 'Plataforma académica integral impulsada por Gemini 2.0 IA.',
    features: [
      'Asistente IA para docentes y directores con Gemini Pro 2.0',
      'Boletas de notas y certificados digitales verificables',
      'Portal unificado para Alumnos, Padres y Profesores',
      'Seguimiento de rutas de transporte escolar en tiempo real'
    ],
    stack: ['Next.js 16', 'Vercel AI SDK', 'Gemini IA', 'NextAuth v5', 'Prisma', 'MapLibre GL'],
    color: 'from-indigo-600 to-purple-900',
    image: '/images/mockups/sistema_escolar.png',
    github: 'https://github.com/Jackson-sch',
    badge: 'AI Educational SaaS',
    category: 'ai'
  },
  {
    id: 'sistema_encomiendas',
    title: 'Agencia Transporte & Encomiendas',
    description: 'SaaS nacional de logística, tracking de carga y encomiendas.',
    features: [
      'Emisión e impresión de guías con código QR dinámico',
      'Gestión de sucursales, manifiestos y rutas nacionales',
      'Tracking en tiempo real para clientes finales',
      'Control de caja e itinerario de choferes'
    ],
    stack: ['Next.js 16', 'Prisma 7', 'PostgreSQL', 'Better Auth', 'QR Lib', 'Tailwind v4'],
    color: 'from-blue-600 to-zinc-900',
    image: '/images/mockups/coal_cargo.png',
    github: 'https://github.com/Jackson-sch/sistema-transporte',
    badge: 'Logistics & Tracking',
    category: 'saas'
  },
  {
    id: 'maquinaria_pro',
    title: 'Maquinaria Pro - Fuel Calc',
    description: 'Software de telemetría y control de consumo para maquinaria pesada.',
    features: [
      'Cálculo predictivo de consumo por horómetro y galonaje',
      'Registro de abastecimientos en campo con geolocalización',
      'Alertas automáticas de mantenimiento preventivo',
      'Analítica de eficiencia operativa por máquina'
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'PWA'],
    color: 'from-amber-600 to-orange-950',
    image: '/images/mockups/maquinaria_pro.jpg',
    github: 'https://github.com/Jackson-sch/maquinaria-pesada-pro',
    badge: 'Heavy Machinery Telemetry',
    category: 'telemetry'
  },
  {
    id: 'sistema_joyeria',
    title: 'Joyería Master POS',
    description: 'ERP y POS exclusivo para joyerías, metales preciosos y gemas.',
    features: [
      'Valoración dinámica por gramos, quilates y precio de oro',
      'Punto de venta (POS) multitabla para joyas finas',
      'Certificados de autenticidad e inventario de gemas',
      'Control de compras, empeños y rentabilidad'
    ],
    stack: ['Next.js', 'React 19', 'Tailwind v4', 'PostgreSQL', 'Prisma'],
    color: 'from-yellow-600 to-amber-950',
    image: '/images/mockups/sistema_joyeria.jpg',
    github: 'https://github.com/Jackson-sch/joyeria',
    badge: 'Luxury Gold & Gem POS',
    category: 'fintech'
  },
  {
    id: 'car_wash',
    title: 'Car Wash Manager',
    description: 'Sistema táctil operativo para lavaderos de vehículos y servicios.',
    features: [
      'Interfaz táctil optimizada para bahías de lavado',
      'Asignación de lavadores y cálculo de comisiones',
      'Control de stock de ceras, champús e insumos',
      'Programa de fidelización y seguimiento de clientes'
    ],
    stack: ['Next.js 16', 'React 19', 'Tailwind v4', 'Prisma'],
    color: 'from-cyan-600 to-blue-900',
    image: '/images/mockups/car_wash.jpg',
    github: 'https://github.com/Jackson-sch/car-wash',
    badge: 'Automotive Service POS',
    category: 'saas'
  },
  {
    id: 'finance_flow',
    title: 'FinTrax - FinanceFlow SaaS',
    description: 'Plataforma de control financiero, presupuestos y flujo de caja.',
    features: [
      'Dashboard interactivo de ingresos y egresos en tiempo real',
      'Categorización de gastos e inteligencia presupuestaria',
      'Proyecciones de caja y analítica gráfica interactiva',
      'Reportes exportables para contabilidad y decisiones'
    ],
    stack: ['Next.js 16', 'React 19', 'Tailwind v4', 'Recharts', 'Prisma'],
    color: 'from-emerald-600 to-teal-950',
    image: '/images/mockups/finance_flow.jpg',
    github: 'https://github.com/Jackson-sch/fintrax',
    badge: 'Corporate Finance SaaS',
    category: 'fintech'
  },
  {
    id: 'bun_ai',
    title: 'Bun AI API Backend',
    description: 'Backend API de ultra-alta velocidad en Bun para servicios de IA.',
    features: [
      'Ejecución de endpoints IA con tiempos de respuesta de 15ms',
      'Arquitectura modular para integración con LLMs',
      'Manejo asíncrono optimizado con Bun Runtime',
      'Monitor de latencia y métricas en tiempo real'
    ],
    stack: ['Bun', 'TypeScript', 'REST API', 'Vercel AI', 'Cloudflare'],
    color: 'from-fuchsia-600 to-purple-950',
    image: '/images/mockups/bun_ai.jpg',
    github: 'https://github.com/Jackson-sch/bun-ai-api',
    badge: 'High Speed AI API',
    category: 'ai'
  },
  {
    id: 'control_asistencia',
    title: 'Control de Asistencia QR',
    description: 'Sistema corporativo de marcación de personal vía código QR.',
    features: [
      'Marcación de entrada/salida mediante QR dinámico en móvil',
      'Control de tardanzas, permisos y horas extra',
      'Dashboard en tiempo real con estado del personal activo',
      'Exportación de reportes semanales y mensuales a Excel/PDF'
    ],
    stack: ['Next.js 16', 'React 19', 'Prisma', 'Tailwind v4', 'HTML5 QR Scanner'],
    color: 'from-teal-600 to-slate-900',
    image: '/images/mockups/control_asistencia.jpg',
    github: 'https://github.com/Jackson-sch',
    badge: 'HR & Attendance OS',
    category: 'telemetry'
  },
  {
    id: 'fake_bcp',
    title: 'Banca Móvil FinTech UI',
    description: 'Prototipo interactivo de alta fidelidad para banca digital móvil.',
    features: [
      'Simulación de transferencias bancarias y pagos QR',
      'Transiciones micro-interactivas con Framer Motion',
      'Dashboard de saldos, movimientos e inversiones',
      'Diseño ultra-fiel optimizado para experiencia móvil'
    ],
    stack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    color: 'from-sky-600 to-blue-950',
    image: '/images/mockups/coal_cargo.png',
    github: 'https://github.com/Jackson-sch',
    badge: 'FinTech Mobile Concept',
    category: 'fintech'
  }
];



