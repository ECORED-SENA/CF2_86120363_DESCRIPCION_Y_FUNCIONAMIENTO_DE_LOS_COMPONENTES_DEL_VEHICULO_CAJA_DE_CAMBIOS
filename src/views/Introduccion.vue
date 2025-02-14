<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-image
      p.mb-5 La caja de cambios es un componente esencial en los vehículos, responsable de conectar la transmisión con el motor mediante engranajes. Su correcto funcionamiento es crucial para garantizar un desplazamiento eficiente y seguro. Sin embargo, malas prácticas, como apoyar la mano sobre la palanca de cambios, pueden provocar desgaste prematuro y fallas significativas. 

      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/intro/img-1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Es fundamental comprender las causas de los problemas en la caja de cambios para diagnosticar y solucionar fallas oportunamente. Identificar síntomas como ruidos, dificultades al cambiar de marcha o vibraciones puede prevenir daños mayores y extender la vida útil del sistema. Estas fallas suelen originarse por desgaste natural, errores operativos o condiciones de mantenimiento inadecuadas.

      .d-flex.flex-wrap.justify-content-center.align-items-center.gap-4.p-3.mb-4(data-aos="fade-right")
          .col-auto
            img(src="@/assets/curso/temas/intro/img-2.svg").img65
          .col-12.col-md(style="background: #F9E69F")
            p.p-4.mb-0 En este documento se presentan estrategias para el diagnóstico y resolución de problemas comunes en cajas de cambios manuales. A través de un enfoque detallado, se busca proporcionar conocimientos prácticos que permitan optimizar el uso y mantenimiento de este componente, minimizando las incidencias y mejorando el rendimiento del vehículo.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.bg-image
  background-image: url('../assets/curso/temas/intro/bg-1.svg')
  margin-bottom: -3rem
  padding-bottom: 1rem
  margin-top: -3rem
  padding-top: 3rem
</style>
