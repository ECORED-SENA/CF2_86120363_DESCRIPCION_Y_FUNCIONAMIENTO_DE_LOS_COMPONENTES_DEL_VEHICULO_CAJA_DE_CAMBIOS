<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.   

    .row.justify-content-center.tarjeta.mb-4(style="background-color: #F6F6F6")
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/Sintesis.svg", alt="La síntesis  que desglosa el estado, diagnóstico y fallas de una caja de cambios manual en cuatro áreas: confiabilidad y fallas (mantenibilidad, confiabilidad humana, procesos y equipos), fallas comunes, causas de deterioro, y diagnóstico con consejos y guía de solución.")
    .d-flex.justify-content-center
      a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/bullets/icono-pdf.svg")
        .anexo__texto
          p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
