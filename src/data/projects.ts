export type ProjectCategory = 'all' | 'saas' | 'fintech' | 'ai' | 'web';

export type PreviewVariant =
  | 'image'
  | 'c4'
  | 'pos'
  | 'botica'
  | 'api'
  | 'transport'
  | 'cargo'
  | 'realestate'
  | 'books'
  | 'raffle'
  | 'academy3d'
  | 'curator';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  features: string[];
  stack: string[];
  architecture?: string[];
  image?: string;
  previewVariant?: PreviewVariant;
  link?: string;
  github?: string;
  badge: string;
  category: Exclude<ProjectCategory, 'all'>;
  featured?: boolean;
  year: string;
}

export const projects: ProjectData[] = [
  {
    id: 'sentinel',
    title: 'Sentinel C4',
    description:
      'Plataforma operativa C2/C4 para centros de videovigilancia, gestión táctica de incidentes, radar vehicular y control RBAC.',
    features: [
      'Monitoreo de cámaras en tiempo real con mapas tácticos Leaflet y Google Maps',
      'Bitácora de incidentes, alertas de vehículos sospechosos y mantenimiento técnico',
      'Matriz modular de control de acceso basada en roles (RBAC)',
      'Asistencia con Gemini AI y exportación de reportes ejecutivos PDF/Excel'
    ],
    stack: ['React 19', 'Vite', 'Express', 'Prisma', 'PostgreSQL', 'Gemini AI', 'Leaflet', 'D3'],
    architecture: ['C4 Command', 'RBAC Matrix', 'Real-Time Maps'],
    previewVariant: 'c4',
    github: 'https://github.com/Jackson-sch',
    badge: 'Security & C4 Ops',
    category: 'ai',
    featured: true,
    year: '2026'
  },
  {
    id: 'sistema_escolar_pro',
    title: 'Sistema Escolar Pro',
    description:
      'Plataforma académica integral para instituciones educativas con asistente Gemini AI, boletas PDF y seguimiento de rutas.',
    features: [
      'Asistente IA para docentes y directores con Vercel AI SDK y Google Gemini',
      'Generación de boletas de notas, certificados PDF y reportes XLSX estilizados',
      'Portal unificado para alumnos, apoderados, docentes y administración',
      'Geolocalización y monitoreo de rutas escolares con MapLibre GL'
    ],
    stack: ['Next.js 16', 'Vercel AI SDK', 'Gemini IA', 'Prisma', 'NextAuth v5', 'MapLibre GL'],
    architecture: ['Multi-Role Portal', 'AI Assistant', 'PDF/XLSX Engine'],
    image: '/images/mockups/sistema_escolar.webp',
    previewVariant: 'image',
    github: 'https://github.com/Jackson-sch',
    badge: 'EdTech & AI SaaS',
    category: 'ai',
    featured: true,
    year: '2026'
  },
  {
    id: 'novamarket_pos',
    title: 'NovaMarket POS',
    description:
      'Sistema de Punto de Venta (POS) y Facturación Electrónica SUNAT UBL 2.1 con arquitectura SaaS Multi-Tenant.',
    features: [
      'Emisión de comprobantes electrónicos SUNAT UBL 2.1 con QR y ticket térmico',
      'Arquitectura Multi-Tenant aislada con Drizzle ORM y Supabase PostgreSQL',
      'Gestión de caja, inventarios, variantes y tablero de ventas en tiempo real',
      'Interfaz rápida optimizada para operación continua con Zustand y TanStack Table'
    ],
    stack: ['Next.js 16', 'TypeScript', 'Drizzle ORM', 'Supabase', 'Zustand', 'Recharts'],
    architecture: ['Multi-Tenant SaaS', 'SUNAT UBL 2.1', 'Server Actions'],
    previewVariant: 'pos',
    github: 'https://github.com/Jackson-sch',
    badge: 'POS & SUNAT SaaS',
    category: 'fintech',
    featured: true,
    year: '2026'
  },
  {
    id: 'sistema_botica',
    title: 'Sistema Botica & Farmacia',
    description:
      'POS farmacéutico Offline-First con sincronización en la nube, control de lotes, vencimientos y lectura de códigos de barras.',
    features: [
      'Operación Offline-First mediante Dexie (IndexedDB) y sincronización con Supabase',
      'Control estricto de lotes, fechas de vencimiento y alertas de stock mínimo',
      'Lectura e impresión de códigos de barras (JSBarcode) y QR',
      'Exportación contable a Excel y reportes de rentabilidad por laboratorio'
    ],
    stack: ['Next.js 16', 'Dexie IndexedDB', 'Supabase', 'TanStack Table', 'Recharts', 'Zustand'],
    architecture: ['Offline-First', 'Sync Engine', 'Batch Tracking'],
    previewVariant: 'botica',
    github: 'https://github.com/Jackson-sch',
    badge: 'Healthcare POS',
    category: 'fintech',
    featured: true,
    year: '2026'
  },
  {
    id: 'sunat_billing_api',
    title: 'SUNAT Billing API',
    description:
      'Microservicio REST de alta velocidad en Bun y Hono para firma XML, empaquetado ZIP y envío de comprobantes a SUNAT.',
    features: [
      'Firma digital de XML UBL 2.1 con certificados .pfx mediante node-forge',
      'Documentación interactiva OpenAPI con Scalar y validación estricta Zod',
      'Generación de CDR, gestión de series y envío directo a WebServices SUNAT',
      'Latencia ultrabaja sobre Bun Runtime con arquitectura modular'
    ],
    stack: ['Bun', 'Hono', 'TypeScript', 'Zod', 'Scalar API', 'node-forge'],
    architecture: ['REST Microservice', 'XML Digital Sign', 'UBL 2.1'],
    previewVariant: 'api',
    github: 'https://github.com/Jackson-sch',
    badge: 'Billing Microservice',
    category: 'fintech',
    year: '2026'
  },
  {
    id: 'gym_os',
    title: 'GymOS SaaS',
    description:
      'SaaS multi-sede de gestión integral para gimnasios, membresías, cobros automáticos y control de asistencia por QR.',
    features: [
      'Control de socios, membresías y cobros recurrentes por sede',
      'Marcación de asistencia con escáner QR en tiempo real',
      'Dashboard de ingresos, retención y estadísticas visuales',
      'Generación de recibos PDF y notificaciones automatizadas'
    ],
    stack: ['Next.js 16', 'Prisma 7', 'PostgreSQL', 'Better Auth', 'Tailwind v4', 'Shadcn UI'],
    architecture: ['Multi-Branch SaaS', 'QR Check-in'],
    image: '/images/mockups/gym_os.webp',
    previewVariant: 'image',
    link: 'https://gym-os-seven-omega.vercel.app/',
    github: 'https://github.com/Jackson-sch/GymOs',
    badge: 'Fitness SaaS',
    category: 'saas',
    year: '2026'
  },
  {
    id: 'transportes',
    title: 'Transportes Interprovincial',
    description:
      'Plataforma de venta de pasajes interprovinciales, mapa interactivo de asientos por piso, rutas y manifiestos PDF.',
    features: [
      'Selector visual de asientos en buses de 1 y 2 pisos en tiempo real',
      'Gestión de terminales, itinerarios, tarifas dinámicas y tripulación',
      'Emisión de boletos con QR y manifiestos de pasajeros en React-PDF',
      'Analítica de ocupación por ruta y control de caja por turno'
    ],
    stack: ['Next.js 16', 'Prisma', 'Better Auth', 'React-PDF', 'D3', 'TanStack Table'],
    architecture: ['Seat Map Engine', 'PDF Ticketing'],
    previewVariant: 'transport',
    github: 'https://github.com/Jackson-sch',
    badge: 'Mobility & Ticketing',
    category: 'saas',
    year: '2026'
  },
  {
    id: 'sistema_encomiendas',
    title: 'Agencia Transporte & Encomiendas',
    description:
      'SaaS nacional de logística, tracking de carga en tiempo real, manifiestos y emisión de guías con código QR.',
    features: [
      'Emisión e impresión de guías con código QR dinámico',
      'Gestión de sucursales, manifiestos y rutas nacionales',
      'Tracking en tiempo real para clientes finales',
      'Control de caja e itinerario de choferes'
    ],
    stack: ['Next.js 16', 'Prisma 7', 'PostgreSQL', 'Better Auth', 'QR Lib', 'Tailwind v4'],
    image: '/images/mockups/coal_cargo.webp',
    previewVariant: 'image',
    github: 'https://github.com/Jackson-sch/sistema-transporte',
    badge: 'Logistics & Tracking',
    category: 'saas',
    year: '2026'
  },
  {
    id: 'cargamaster_pro',
    title: 'CargaMaster Pro',
    description:
      'Sistema de gestión logística para transporte de carga pesada, liquidaciones, guías PDF y analítica de rutas.',
    features: [
      'Control de órdenes de carga, fletes y liquidaciones de choferes',
      'Generación de guías y reportes operativos en PDF y Excel',
      'Visualización de métricas logísticas con D3.js',
      'Base de datos PostgreSQL con Drizzle ORM y Supabase'
    ],
    stack: ['Next.js 16', 'Drizzle ORM', 'Supabase', 'D3', 'React-PDF', 'ExcelJS'],
    previewVariant: 'cargo',
    github: 'https://github.com/Jackson-sch',
    badge: 'Fleet & Cargo ERP',
    category: 'saas',
    year: '2026'
  },
  {
    id: 'inmobiliaria',
    title: 'Plataforma Inmobiliaria',
    description:
      'Sitio web y portal inmobiliario moderno para gestión de propiedades, captación de leads y galería optimizada.',
    features: [
      'Catálogo filtrable de propiedades por zona, tipo y presupuesto',
      'Gestión multimedia de alta resolución con Cloudinary CDN',
      'Panel administrativo autenticado con Supabase Auth y PostgreSQL',
      'Formularios validados con React Hook Form y Zod'
    ],
    stack: ['Next.js 16', 'React 19', 'Supabase', 'Cloudinary', 'Tailwind v4', 'Zod'],
    previewVariant: 'realestate',
    github: 'https://github.com/Jackson-sch',
    badge: 'Real Estate Platform',
    category: 'web',
    year: '2026'
  },
  {
    id: 'libreria',
    title: 'Librería & Papelería POS',
    description:
      'Sistema POS e inventario para librerías con cálculo monetario exacto, códigos de barras e historial de campañas.',
    features: [
      'Cálculos financieros sin errores de punto flotante con Decimal.js',
      'Etiquetado e impresión de códigos de barras (JSBarcode) y QR',
      'Búsqueda ultrarrápida de SKU, útiles y textos escolares',
      'Exportación de inventarios y cierres de caja a Excel'
    ],
    stack: ['Next.js 16', 'Supabase', 'TanStack Query', 'Decimal.js', 'JSBarcode', 'Shadcn UI'],
    previewVariant: 'books',
    github: 'https://github.com/Jackson-sch',
    badge: 'Retail & Inventory',
    category: 'fintech',
    year: '2026'
  },
  {
    id: 'barber_saas',
    title: 'Barbería SaaS',
    description:
      'Plataforma multi-barbería para reserva de citas, gestión de barberos, comisiones y catálogo de servicios.',
    features: [
      'Agenda interactiva de citas por barbero y sucursal',
      'Cálculo automático de comisiones y liquidación diaria',
      'Panel de administración con estado global en Zustand',
      'Notificaciones instantáneas y control de clientes frecuentes'
    ],
    stack: ['Next.js 16', 'Supabase', 'Zustand', 'Tailwind v4', 'Zod'],
    image: '/images/mockups/barberia_concept.webp',
    previewVariant: 'image',
    github: 'https://github.com/Jackson-sch',
    badge: 'Booking SaaS',
    category: 'saas',
    year: '2026'
  },
  {
    id: 'sistema_joyeria',
    title: 'Joyería Master POS',
    description:
      'ERP y POS exclusivo para joyerías, metales preciosos y gemas con valoración dinámica por quilates.',
    features: [
      'Valoración dinámica por gramos, quilates y precio del oro',
      'Punto de venta (POS) multitabla para joyas finas',
      'Certificados de autenticidad e inventario de gemas',
      'Control de compras, empeños y rentabilidad'
    ],
    stack: ['Next.js', 'React 19', 'Tailwind v4', 'PostgreSQL', 'Prisma'],
    image: '/images/mockups/sistema_joyeria.webp',
    previewVariant: 'image',
    github: 'https://github.com/Jackson-sch/joyeria',
    badge: 'Luxury Gold POS',
    category: 'fintech',
    year: '2026'
  },
  {
    id: 'car_wash',
    title: 'Car Wash Manager',
    description:
      'Sistema táctil operativo para lavaderos de vehículos, asignación de bahías, comisiones e insumos.',
    features: [
      'Interfaz táctil optimizada para bahías de lavado',
      'Asignación de lavadores y cálculo de comisiones',
      'Control de stock de ceras, champús e insumos',
      'Programa de fidelización y seguimiento de clientes'
    ],
    stack: ['Next.js 16', 'React 19', 'Tailwind v4', 'Prisma'],
    image: '/images/mockups/car_wash.webp',
    previewVariant: 'image',
    github: 'https://github.com/Jackson-sch/car-wash',
    badge: 'Automotive POS',
    category: 'saas',
    year: '2026'
  },
  {
    id: 'finance_flow',
    title: 'FinTrax - FinanceFlow',
    description:
      'Plataforma de control financiero personal y corporativo, presupuestos inteligentes y proyecciones de flujo de caja.',
    features: [
      'Dashboard interactivo de ingresos y egresos en tiempo real',
      'Categorización de gastos e inteligencia presupuestaria',
      'Proyecciones de caja y analítica gráfica con Recharts',
      'Reportes exportables para contabilidad y toma de decisiones'
    ],
    stack: ['Next.js 16', 'React 19', 'Tailwind v4', 'Recharts', 'Prisma'],
    image: '/images/mockups/finance_flow.webp',
    previewVariant: 'image',
    github: 'https://github.com/Jackson-sch/fintrax',
    badge: 'Finance SaaS',
    category: 'fintech',
    year: '2026'
  },
  {
    id: 'maquinaria_pro',
    title: 'Maquinaria Pro - Fuel Calc',
    description:
      'Software de telemetría y control de consumo de combustible para flotas de maquinaria pesada.',
    features: [
      'Cálculo predictivo de consumo por horómetro y galonaje',
      'Registro de abastecimientos en campo con geolocalización',
      'Alertas automáticas de mantenimiento preventivo',
      'Analítica de eficiencia operativa por máquina'
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'PWA'],
    image: '/images/mockups/maquinaria_pro.webp',
    previewVariant: 'image',
    github: 'https://github.com/Jackson-sch/maquinaria-pesada-pro',
    badge: 'Heavy Telemetry',
    category: 'ai',
    year: '2026'
  },
  {
    id: 'control_asistencia',
    title: 'Control de Asistencia QR',
    description:
      'Sistema corporativo de marcación de personal mediante código QR dinámico y cálculo de horas extra.',
    features: [
      'Marcación de entrada y salida mediante QR dinámico en móvil',
      'Control de tardanzas, permisos y horas extra',
      'Dashboard en tiempo real con estado del personal activo',
      'Exportación de reportes semanales y mensuales a Excel/PDF'
    ],
    stack: ['Next.js 16', 'React 19', 'Prisma', 'Tailwind v4', 'HTML5 QR Scanner'],
    image: '/images/mockups/control_asistencia.webp',
    previewVariant: 'image',
    github: 'https://github.com/Jackson-sch',
    badge: 'HR & Attendance',
    category: 'ai',
    year: '2026'
  },
  {
    id: 'capturas_curator',
    title: 'Capturas Curator AI',
    description:
      'Herramienta de automatización visual que captura pantallas con Playwright y las cataloga con Gemini AI.',
    features: [
      'Captura automatizada de interfaces web mediante Playwright headless',
      'Clasificación, etiquetado y análisis visual con Google Generative AI',
      'Almacenamiento estructurado en PostgreSQL y Supabase',
      'Galería curada con búsqueda instantánea por atributos'
    ],
    stack: ['Next.js', 'Playwright', 'Gemini AI', 'Supabase', 'PostgreSQL'],
    previewVariant: 'curator',
    github: 'https://github.com/Jackson-sch',
    badge: 'AI Automation',
    category: 'ai',
    year: '2026'
  },
  {
    id: 'bun_ai',
    title: 'Bun AI API Backend',
    description:
      'Backend API de ultra-alta velocidad en Bun para orquestación de múltiples proveedores LLM (Gemini, Groq, Cerebras).',
    features: [
      'Enrutamiento unificado para Gemini, Groq, Cerebras, OpenRouter y SambaNova',
      'Ejecución de endpoints IA con latencia mínima sobre Bun Runtime',
      'Arquitectura modular para streaming y fallback entre modelos',
      'Monitor de latencia y métricas en tiempo real'
    ],
    stack: ['Bun', 'TypeScript', 'REST API', 'Gemini', 'Groq', 'OpenRouter'],
    image: '/images/mockups/bun_ai.webp',
    previewVariant: 'image',
    github: 'https://github.com/Jackson-sch/bun-ai-api',
    badge: 'High-Speed AI API',
    category: 'ai',
    year: '2026'
  },
  {
    id: 'machinery_academy',
    title: 'Machinery Academy 3D',
    description:
      'Academia técnica interactiva con visor 3D en Three.js para capacitación en operación de maquinaria pesada.',
    features: [
      'Modelos interactivos 3D en tiempo real renderizados con Three.js',
      'Módulos de aprendizaje rápido sobre arquitectura Astro v5 + React',
      'Guías visuales de componentes, seguridad y mantenimiento',
      'Carga ultrarrápida con hidratación parcial (Islands)'
    ],
    stack: ['Astro v5', 'React 19', 'Three.js', 'Tailwind v4', 'TypeScript'],
    previewVariant: 'academy3d',
    github: 'https://github.com/Jackson-sch',
    badge: 'EdTech & 3D Web',
    category: 'web',
    year: '2026'
  },
  {
    id: 'sorteos_web',
    title: 'Sorteos Web',
    description:
      'Plataforma de rifas y sorteos digitales en tiempo real con selección de tickets, pagos y notificaciones por correo.',
    features: [
      'Selector interactivo de tickets disponibles en tiempo real',
      'Base de datos PostgreSQL con Drizzle ORM y Supabase',
      'Notificaciones transaccionales automatizadas con Resend',
      'Interfaz ligera y reactiva con Astro SSR y Preact'
    ],
    stack: ['Astro', 'Preact', 'Drizzle ORM', 'Supabase', 'Resend', 'Tailwind v4'],
    previewVariant: 'raffle',
    github: 'https://github.com/Jackson-sch',
    badge: 'E-Commerce & Events',
    category: 'web',
    year: '2026'
  },
  {
    id: 'fake_bcp',
    title: 'Banca Móvil FinTech UI',
    description:
      'Prototipo interactivo de alta fidelidad para banca digital móvil con transferencias y pagos QR.',
    features: [
      'Simulación de transferencias bancarias y pagos QR',
      'Transiciones micro-interactivas con Framer Motion',
      'Dashboard de saldos, movimientos e inversiones',
      'Diseño optimizado para experiencia mobile-first'
    ],
    stack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    image: '/images/mockups/banca_movil.webp',
    previewVariant: 'image',
    github: 'https://github.com/Jackson-sch',
    badge: 'FinTech Mobile UI',
    category: 'web',
    year: '2026'
  }
];
