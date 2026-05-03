export type Lang = 'en' | 'es'

export const translations = {
  en: {
    nav: {
      home: 'home',
      services: 'services',
      resume: 'resume',
      work: 'work',
      hireMe: 'Hire me',
    },
    home: {
      role: 'Engineering Manager',
      greeting: "Hello I'm",
      name: 'Ariadna Maldonado',
      description:
        'I build high-performing engineering teams and drive reliable, scalable software delivery. I specialize in operational excellence, incident management, and continuous improvement.',
      downloadCV: 'Download CV',
    },
    stats: [
      { num: 8, text: 'Years of experience' },
      { num: 26, text: 'Projects completed' },
      { num: 8, text: 'Technologies mastered' },
      { num: 500, text: 'Code commits' },
    ],
    services: {
      items: [
        {
          num: '01',
          title: 'Engineering Leadership',
          description:
            'I help engineering teams improve delivery, strengthen incident management practices, and build scalable, reliable systems. Focused on operational excellence, team growth, and sustainable performance.',
          href: '',
        },
        {
          num: '02',
          title: 'Web Development',
          description:
            'Frontend-focused web development using modern JavaScript frameworks. I build clean, maintainable, and scalable applications with a strong emphasis on quality and user experience.',
          href: '',
        },
      ],
    },
    resume: {
      tabs: {
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        about: 'About me',
      },
      experience: {
        title: 'My experience',
        description:
          'I have led engineering teams through operational challenges, scaling processes and improving system reliability. By strengthening incident management practices and delivery workflows, I helped increase visibility, accountability, and execution speed across teams.',
        items: [
          { company: 'MODO', position: 'Engineering Manager', duration: '2023 - Present' },
          { company: 'Altimetrik Uruguay', position: 'Senior Engineering Manager', duration: '2022 - 2023' },
          { company: 'Digiventures', position: 'Team Lead', duration: '2021 - 2022' },
          { company: 'Entravision Digital', position: 'Frontend Developer', duration: '2020 - 2021' },
          { company: 'GlobalLogic', position: 'Frontend Developer', duration: '2019 - 2020' },
          { company: 'IBM', position: 'QA Analyst', duration: '2018 - 2019' },
        ],
      },
      education: {
        title: 'My education',
        description:
          'My education blends technical systems knowledge with product and user-centered design, shaping my leadership perspective in engineering.',
        items: [
          { institution: 'Escuela Da Vinci', position: 'Analista de Sistemas', duration: '2018 - present' },
          { institution: 'Coderhouse', position: 'Diseño UX/UI', duration: '2020' },
        ],
      },
      skills: {
        title: 'My skills',
        description:
          'Blending technical depth with engineering leadership to drive delivery, reliability, and team performance.',
      },
      about: {
        title: 'About me',
        description:
          'I am an Engineering Manager with a strong technical foundation and a passion for building high-performing teams. Throughout my career, I have led initiatives focused on delivery excellence, incident management, and operational reliability. I believe in creating clarity, fostering ownership, and building systems that scale — both technically and organizationally. My goal is to help teams grow while delivering meaningful impact to the business.',
        info: [
          { fieldName: 'Name', fieldValue: 'Ariadna Maldonado' },
          { fieldName: 'Experience', fieldValue: '8+ Years' },
          { fieldName: 'Nationality', fieldValue: 'Argentinian' },
          { fieldName: 'Email', fieldValue: 'ariadnanahir.maldonado@gmail.com' },
          { fieldName: 'Freelance', fieldValue: 'Available' },
          { fieldName: 'Languages', fieldValue: 'Spanish, English' },
        ],
      },
    },
    work: {
      projectLabel: 'project',
      liveTooltip: 'Live project',
      githubTooltip: 'GitHub repository',
      projects: [
        {
          num: '01',
          category: 'librosClub',
          description:
            'A full-stack web application designed to connect readers through book exchange, reading clubs, and community building.',
          stack: [{ name: 'React' }, { name: 'Tailwind.css' }, { name: 'Node.js' }],
          image: '/assets/work/librosclub.png',
          live: '',
          github: '',
        },
        {
          num: '02',
          category: 'AI',
          description: 'Coming soon.',
          stack: [{ name: 'Next.js' }, { name: 'Tailwind.css' }],
          image: '/assets/work/dummy-image-square.jpg',
          live: '',
          github: '',
        },
      ],
    },
    contact: {
      title: "Let's work together",
      intro:
        "Open to engineering leadership roles, consulting opportunities, and selected frontend projects. Let's discuss how I can add value to your team.",
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email address',
      phone: 'Phone number',
      selectPlaceholder: 'Select a service',
      services: [
        { value: 'web', label: 'Web Development' },
        { value: 'em', label: 'Engineering Manager' },
      ],
      messagePlaceholder: 'Type your message here.',
      send: 'Send Message',
      sending: 'Sending…',
      successTitle: 'Message sent!',
      successText: "Thanks for reaching out. I'll get back to you soon.",
      sendAnother: 'Send another',
      infoEmail: 'Email',
      infoAddress: 'Address',
    },
  },
  es: {
    nav: {
      home: 'inicio',
      services: 'servicios',
      resume: 'currículum',
      work: 'proyectos',
      hireMe: 'Escribime',
    },
    home: {
      role: 'Engineering Manager',
      greeting: 'Hola, soy',
      name: 'Ariadna Maldonado',
      description:
        'Construyo equipos de ingeniería de alto rendimiento e impulso entregas de software confiables y escalables. Me especializo en excelencia operacional, gestión de incidentes y mejora continua.',
      downloadCV: 'Descargar CV',
    },
    stats: [
      { num: 8, text: 'Años de experiencia' },
      { num: 26, text: 'Proyectos completados' },
      { num: 8, text: 'Tecnologías dominadas' },
      { num: 500, text: 'Commits de código' },
    ],
    services: {
      items: [
        {
          num: '01',
          title: 'Liderazgo de Ingeniería',
          description:
            'Ayudo a equipos de ingeniería a mejorar su entrega, fortalecer las prácticas de gestión de incidentes y construir sistemas escalables y confiables. Enfocada en excelencia operacional, crecimiento del equipo y rendimiento sostenible.',
          href: '',
        },
        {
          num: '02',
          title: 'Desarrollo Web',
          description:
            'Desarrollo web centrado en el frontend utilizando frameworks modernos de JavaScript. Construyo aplicaciones limpias, mantenibles y escalables con fuerte énfasis en la calidad y la experiencia del usuario.',
          href: '',
        },
      ],
    },
    resume: {
      tabs: {
        experience: 'Experiencia',
        education: 'Educación',
        skills: 'Habilidades',
        about: 'Sobre mí',
      },
      experience: {
        title: 'Mi experiencia',
        description:
          'Lideré equipos de ingeniería a través de desafíos operacionales, escalando procesos y mejorando la confiabilidad de los sistemas. Al fortalecer las prácticas de gestión de incidentes y los flujos de entrega, ayudé a aumentar la visibilidad, la responsabilidad y la velocidad de ejecución.',
        items: [
          { company: 'MODO', position: 'Engineering Manager', duration: '2023 - Presente' },
          { company: 'Altimetrik Uruguay', position: 'Senior Engineering Manager', duration: '2022 - 2023' },
          { company: 'Digiventures', position: 'Team Lead', duration: '2021 - 2022' },
          { company: 'Entravision Digital', position: 'Frontend Developer', duration: '2020 - 2021' },
          { company: 'GlobalLogic', position: 'Frontend Developer', duration: '2019 - 2020' },
          { company: 'IBM', position: 'QA Analyst', duration: '2018 - 2019' },
        ],
      },
      education: {
        title: 'Mi educación',
        description:
          'Mi formación combina conocimientos técnicos de sistemas con diseño centrado en el producto y el usuario, moldeando mi perspectiva de liderazgo en ingeniería.',
        items: [
          { institution: 'Escuela Da Vinci', position: 'Analista de Sistemas', duration: '2018 - presente' },
          { institution: 'Coderhouse', position: 'Diseño UX/UI', duration: '2020' },
        ],
      },
      skills: {
        title: 'Mis habilidades',
        description:
          'Combinando profundidad técnica con liderazgo de ingeniería para impulsar la entrega, la confiabilidad y el rendimiento del equipo.',
      },
      about: {
        title: 'Sobre mí',
        description:
          'Soy Engineering Manager con sólida base técnica y pasión por construir equipos de alto rendimiento. A lo largo de mi carrera, lideré iniciativas centradas en la excelencia de entrega, la gestión de incidentes y la confiabilidad operacional. Creo en crear claridad, fomentar la responsabilidad y construir sistemas que escalen, tanto técnica como organizacionalmente.',
        info: [
          { fieldName: 'Nombre', fieldValue: 'Ariadna Maldonado' },
          { fieldName: 'Experiencia', fieldValue: '8+ Años' },
          { fieldName: 'Nacionalidad', fieldValue: 'Argentina' },
          { fieldName: 'Email', fieldValue: 'ariadnanahir.maldonado@gmail.com' },
          { fieldName: 'Freelance', fieldValue: 'Disponible' },
          { fieldName: 'Idiomas', fieldValue: 'Español, Inglés' },
        ],
      },
    },
    work: {
      projectLabel: 'proyecto',
      liveTooltip: 'Ver proyecto',
      githubTooltip: 'Repositorio GitHub',
      projects: [
        {
          num: '01',
          category: 'librosClub',
          description:
            'Una aplicación web full-stack diseñada para conectar lectores a través del intercambio de libros, clubes de lectura y comunidad.',
          stack: [{ name: 'React' }, { name: 'Tailwind.css' }, { name: 'Node.js' }],
          image: '/assets/work/librosclub.png',
          live: '',
          github: '',
        },
        {
          num: '02',
          category: 'IA',
          description: 'Próximamente.',
          stack: [{ name: 'Next.js' }, { name: 'Tailwind.css' }],
          image: '/assets/work/dummy-image-square.jpg',
          live: '',
          github: '',
        },
      ],
    },
    contact: {
      title: '¡Trabajemos juntos!',
      intro:
        'Abierta a roles de liderazgo en ingeniería, oportunidades de consultoría y proyectos frontend seleccionados. Hablemos sobre cómo puedo agregar valor a tu equipo.',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo electrónico',
      phone: 'Número de teléfono',
      selectPlaceholder: 'Seleccioná un servicio',
      services: [
        { value: 'web', label: 'Desarrollo Web' },
        { value: 'em', label: 'Engineering Manager' },
      ],
      messagePlaceholder: 'Escribí tu mensaje acá.',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      successTitle: '¡Mensaje enviado!',
      successText: 'Gracias por escribirme. Te respondo a la brevedad.',
      sendAnother: 'Enviar otro',
      infoEmail: 'Email',
      infoAddress: 'Dirección',
    },
  },
} as const

export type Translations = typeof translations.en
