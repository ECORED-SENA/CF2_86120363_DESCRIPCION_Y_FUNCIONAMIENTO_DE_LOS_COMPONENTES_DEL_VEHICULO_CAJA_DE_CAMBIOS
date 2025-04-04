<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from '../components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Estado, diagnóstico y fallas comunes de la caja de cambios manual',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar las fallas comunes, diagnosticar problemas y aplicar estrategias de mantenimiento para garantizar el correcto funcionamiento y prolongar la vida útil de las cajas de cambios manuales.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el componente principal que conecta la transmisión del vehículo con el motor?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Motor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Caja de cambios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eje primario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Embrague.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué factor afecta la confiabilidad operacional de una caja de cambios?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mal uso del aceite.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mala calidad de los engranajes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Confiabilidad de los procesos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Velocidad del motor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué ruido puede indicar que hay rodamientos desgastados en la transmisión?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Golpeteo o ruido sordo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Chirrido agudo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vibración constante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Operación silenciosa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué ocurre si el nivel de aceite en la transmisión es bajo?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los engranajes funcionan mejor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El aceite se enfría rápidamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La transmisión se desgasta más rápido.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El embrague se ajusta automáticamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué condición podría provocar un salto de marcha?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exceso de lubricante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sincronizadores desgastados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cambio lento de marchas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Engranajes perfectamente alineados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué técnica es esencial para diagnosticar problemas en la transmisión?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar el lubricante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Escuchar atentamente al conductor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Desarmar la caja de cambios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Revisar las ruedas motrices.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué puede generar una vibración en la transmisión?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desgaste de los frenos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Condiciones de sobrecarga.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Altas velocidades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aceite contaminado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué práctica prolonga la vida útil de la caja de cambios?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizar cualquier lubricante disponible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realizar mantenimiento preventivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar el cambio de aceite.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Manejar con cambios abruptos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'La confiabilidad humana se refiere a las competencias de los mecánicos y conductores.',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Mantener la mano sobre la palanca de cambios no afecta la confiabilidad de la transmisión.',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué condición causa dificultad para realizar cambios?',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aceite en buen estado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Engranajes nuevos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Horquillas dobladas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nivel adecuado de lubricante.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de los siguientes elementos NO es una causa de ruido en la transmisión?',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ángulos de juntas desiguales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Rodamientos desgastados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ruedas desbalanceadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambio sincronizado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué práctica inadecuada puede dañar la transmisión?',
          imagen: require('@/assets/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambio de aceite puntual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso de aceite recomendado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Apoyar la mano continuamente sobre la palanca.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mantener el embrague ajustado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué se evalúa en un diagnóstico correcto?',
          imagen: require('@/assets/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el nivel de aceite.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo las condiciones externas del vehículo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Todos los componentes relacionados con la transmisión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El tipo de combustible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué describe el término "confiabilidad operacional"?',
          imagen: require('@/assets/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La facilidad de desarmar un equipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de fallas detectadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La capacidad de un sistema de cumplir su función.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El rendimiento del combustible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
