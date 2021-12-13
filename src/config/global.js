export default {
  global: {
    componenteFormativo: 'Generalidades de los primeros auxilios psicológicos',
    descripcionCurso:
      'El propósito de los primeros auxilios psicológicos solo es posible de entender cuando la salud mental hace parte de los conceptos básicos de quién aplica esta técnica. Por este motivo comprender la naturaleza de los trastornos y problemas mentales y los aspectos y lineamientos de los primeros auxilios psicológicos es la plataforma de entrada para desarrollar las habilidades que permitan a una persona apoyar a una crisis emocional y psicológica, para evitar daños posteriores más profundos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Salud mental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Problema mental',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Trastornos mentales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Crisis',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estado crítico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos y fases',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Fases de la crisis',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Trastornos y reacciones frente a una crisis',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Muerte y duelo',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Lineamientos básicos de los Primeros Auxilios Psicológicos – PAP',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '¿Qué son los PAP?',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Lineamientos para la aplicación de los Primeros Auxilios psicológicos – PAP',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Aspectos claves para la intervención',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Aspectos culturales',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Aspectos de seguridad y dignidad',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Aspectos de derechos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Principios de la intervención',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Autocuidado',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Organización Panamericana de la Salud (2017). Depresión y otros trastornos mentales comunes. Estimaciones sanitarias mundiales. Washington, D.C. Licencia: CC BY-NC-SA 3.0 IGO.',
      link:
        'https://iris.paho.org/bitstream/handle/10665.2/34006/PAHONMH17005-spa.pdf',
    },
    {
      referencia: 'Barnhill, J. (2020). Manual MSD para profesionales.',
      link:
        'https://www.msdmanuals.com/es-co/professional/trastornos-psiqui%C3%A1tricos/trastorno-de-ansiedad-y-trastornos-relacionados-con-el-estr%C3%A9s/trastorno-por-estr%C3%A9s-agudo',
    },
    {
      referencia:
        'Organización Mundial de la Salud, War Trauma Foundation y Visión Mundial Internacional (2012). Primera ayuda psicológica: Guía para trabajadores de campo. OMS: Ginebra.',
      link:
        'http://apps.who.int/iris/bitstream/handle/10665/44837/9789243548203_spa.pdf?sequence=1',
    },
    {
      referencia:
        'Universidad de Guadalajara, Centro Universitarios de ciencias de la salud (2014). Manual de primeros Auxilios Psicológicos.',
      link:
        'https://www.cucs.udg.mx/sites/default/files/adjuntos/manual_primeros_auxilios_psicologicos_2017.pdf',
    },
    {
      referencia:
        'Federación internacional de la Cruz Roja y la Luna Roja (2003). Apoyo Psicológico basado en la comunidad. Ginebra Suiza.',
      link:
        'https://www.hhri.org/es/publication/apoyo-psicologico-basado-en-la-comunidad-manual-de-formacion/',
    },
    {
      referencia:
        'Universidad Autónoma de Barcelona. (2018). Control de los niveles de activación tras incidentes críticos en adultos.',
      //link:
      //'https://d396qusza40orc.cloudfront.net/pap/docs-on-demand/modulo4/Lectura%20comentario%20RP%20aplicacion%20PAP%20en%20situaciones%20de%20activaci%C3%B3n%20emocional%20elevada%20%28Conflicto%20de%20codificaci%C3%B3n%20Unicode%29.pdf',
    },
    {
      referencia:
        'Red Nacional para el Estrés Traumático Infantil y el Centro Nacional de Trastorno de Estrés Postraumático (2006). Primeros Auxilios Psicológicos: Guía de Operaciones Practicas.',
      //link:
      //'http://www.shef.ac.uk/polopoly_fs/1.34752!/file/Psychological-First-%20Aid_Field-Operations-Guide_Spanish.pdf',
    },
    {
      referencia:
        'Prewit, D. 2001. Manual de Primeros Auxilios Psicológicos. Federación Internacional de sociedades de la Cruz Roja.',
    },
  ],
  glosario: [
    {
      termino: 'Ansiedad',
      significado:
        'Es un estado de inquietud o agitación del ánimo. Aunque no siempre es patológica (sino que es una emoción común que cumple con una función vinculada a la supervivencia), la ansiedad puede acompañar a algunas enfermedades como la neurosis.',
    },
    {
      termino: 'Crisis',
      significado:
        'Situación grave y decisiva que pone en peligro el desarrollo de un asunto o un proceso.',
    },
    {
      termino: 'Emoción',
      significado:
        'Reacción subjetiva al ambiente, acompañada de cambios orgánicos (fisiológicos y endocrinos), de origen innato, influida por la experiencia y que tiene función adaptativa.',
    },
    {
      termino: 'Estado de ánimo',
      significado:
        'Emoción generalizada y persistente que influye en la percepción del mundo.',
    },
    {
      termino: 'Estrés',
      significado:
        'La respuesta fisiológica, psicológica y del comportamiento de una persona, para intentar adaptarse a los estímulos que le rodean.',
    },
    {
      termino: 'Desastre',
      significado:
        'Se entiende por desastre el daño o la alteración graves de las condiciones normales de vida en un área geográfica determinada, causado por fenómenos naturales y por efectos catastróficos de la acción del hombre en forma accidental, que requiera por ello de la especial atención de los organismos del estado y de otras entidades de carácter humanitario o de servicio social.',
    },
    {
      termino: 'Pánico',
      significado:
        'El pánico, por lo tanto, es el miedo exagerado, que escapa de lo racional y que paraliza a la persona.',
    },
    {
      termino: 'Primeros auxilios psicológicos',
      significado:
        'Se refieren a la intervención psicológica en el momento de crisis, entendiéndose como una ayuda breve e inmediata de apoyo y rescate a la persona para restablecer su estabilidad emocional y facilitarle las condiciones de un continuo equilibrio personal.',
    },
    {
      termino: 'Trastorno de estrés postraumático',
      significado:
        'Es un trastorno psicológico caracterizado por la aparición de síntomas específicos tras la exposición a un acontecimiento estresante, extremadamente traumático, que involucra un daño físico o es de naturaleza extraordinariamente amenazadora o catastrófica para el individuo.',
    },
  ],
  complementario: [
    {
      texto:
        'Departamento Nacional de Planeación, Consejo nacional de política pública y social. (2020). Documento CONPES 3992. Estrategia para la promoción de la salud mental en Colombia. https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3992.pd',
      tipo: 'Política pública – Material Normativo.',
      descarga: '/downloads/norma.pdf',
    },
    {
      texto:
        'Ministerio de salud. Política nacional de salud mental. Resolución 4886 de 2018. https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/politica-nacional-salud-mental.pdf',
      tipo: 'Norma',
      descarga: '/downloads/politica-nacional-salud-mental.pdf',
    },
    {
      texto: 'Bados, A. (2009). Fobias específicas. Universidad de Barcelona.',
      tipo: 'Artículo',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Fundación Silencio – Unicef. (2020). Duelo: Manual de capacitación para acompañamiento y abordaje del duelo.',
      tipo: 'Manual',
      descarga: ['/downloads/Manual-duelo.pdf'],
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sonia Margarita Leal Cruz',
        cargo: 'Experta temática',
        centro:
          'Centro de formación de Talento Humano en Salud - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital.',
      },
      {
        nombre: 'Diana Marcela Luis Vásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital.',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Blanca Flor Torres Tinoco'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
