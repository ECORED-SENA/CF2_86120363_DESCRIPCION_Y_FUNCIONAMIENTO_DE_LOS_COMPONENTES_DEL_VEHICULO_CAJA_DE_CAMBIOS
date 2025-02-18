export default {
  global: {
    Name: 'Estado, diagnóstico y fallas comunes de la caja de cambios manual',
    Description:
      'El componente formativo aborda el diagnóstico, fallas comunes y mantenimiento de cajas de cambios manuales. Explica causas como desgaste, errores humanos y desalineaciones, y describe problemas como ruidos, cambios difíciles y vibraciones. Presenta soluciones basadas en ajustes, reemplazo de componentes y mantenimiento preventivo. Además, incluye conceptos clave, como confiabilidad operacional y guías prácticas para prevenir daños.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Confiabilidad y fallas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fallas y quejas comunes de la transmisión',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diagnóstico y solución de problemas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/86120363_CF2.pdf',
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
  complementario: [
    {
      tema: 'Confiabilidad y fallas',
      referencia:
        'EXPLORER X431. (2022). FALLA EN LA CAJA DE TRANSMISION AUTOMATICA - POR QUE LA CAJA NO HACE LOS CAMBIOS FALLAS EN SENSRO TR. [Archivo de video].  Youtube',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=3IE3ADjPkqQ&ab_channel=EXPLORERX431',
    },
    {
      tema: 'Fallas y quejas comunes de la transmisión',
      referencia:
        'Alex Vela Garage. (2020). FALLAS mas COMUNES!!! // TRANSMISION MANUAL o STANDARD. [Archivo de video].  Youtube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=p2ecRFy_f10',
    },
    {
      tema: 'Fallas y quejas comunes de la transmisión',
      referencia:
        'Fundación Carlos Slim. (2021). #EMBRAGUE y #TRANSMISIÓN: ¿Cómo funcionan? [Archivo de video].  Youtube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4Syt_01ZRzA',
    },
  ],
  glosario: [
    {
      termino: 'Caja de cambios',
      significado:
        'componente que conecta la transmisión con el motor a través de engranajes para ajustar velocidades.',
    },
    {
      termino: 'Confiabilidad operacional',
      significado:
        'capacidad de un sistema integrado de cumplir su función bajo condiciones específicas de operación.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'proceso de identificar fallas basado en síntomas, inspecciones y análisis.',
    },
    {
      termino: 'Embrague',
      significado:
        'mecanismo que une o separa el motor y la transmisión para facilitar los cambios de marcha.',
    },
    {
      termino: 'Engranaje',
      significado: 'rueda dentada que transmite movimiento entre componentes.',
    },
    {
      termino: 'Lubricante',
      significado:
        'sustancia utilizada para reducir la fricción y el desgaste entre piezas móviles.',
    },
    {
      termino: 'Mantenibilidad',
      significado:
        'facilidad para restaurar un equipo a su estado funcional en un tiempo determinado.',
    },
    {
      termino: 'Rodamiento',
      significado:
        'dispositivo que facilita el movimiento de rotación reduciendo la fricción entre piezas.',
    },
    {
      termino: 'Sincronizador',
      significado:
        'elemento que permite igualar la velocidad de los engranajes para realizar cambios suaves.',
    },
    {
      termino: 'Vibración',
      significado:
        'movimiento oscilatorio no deseado en los componentes de la transmisión.',
    },
  ],
  referencias: [
    {
      referencia:
        'Altman, C. (2007). El análisis de causa raíz como herramienta en la mejora de la confiabilidad.',
      link: '',
    },
    {
      referencia:
        'Eaton. (2012). Guía de diagnóstico de fallas transmisiones Fuller para servicio pesado TRTS0910S.',
      link:
        'http://www.roadranger.com/ecm/groups/public/@pub/@eaton/@roadranger/documents/content/trts0910s.pdf',
    },
    {
      referencia: 'Editex. (s.f.). Cajas de cambios manuales.',
      link: 'https://drive.google.com/file/d/0B_vOBUOWJUUgREZGZTRpeWVOTlU/view',
    },
    {
      referencia:
        'Salazar, W. (2015). Proyecto de grado: reparación total de la caja de cambios mecánica de un automóvil Volkswagen Parati Station Wagon año 1999.',
      link:
        'https://www.dspace.espol.edu.ec/bitstream/123456789/29595/1/TESIS%20LISTA%20PARA%20IMPRIMIR%20Y%20EMPASTAR.pdf',
    },
    {
      referencia: 'US Navy. (2018). Construction Mechanic Advanced.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Edwin Abello Rubiano',
          cargo: 'Experto temático',
          centro:
            'Centro de Gestión de Mercados Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador <em>full stack</em>',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
