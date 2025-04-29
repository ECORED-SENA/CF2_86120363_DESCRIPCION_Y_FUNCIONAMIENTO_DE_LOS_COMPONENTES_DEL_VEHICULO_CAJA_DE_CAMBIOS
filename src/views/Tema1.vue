<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Confiabilidad y fallas
      .bg-image.bg-image-1.pb-5
        p.mb-4(data-aos="fade-right") La confiabilidad es la probabilidad de que un determinado equipo opere bajo las condiciones preestablecidas sin sufrir fallas que pueden ser causadas de manera intrínseca por desgaste y deterioro, errores humanos y problemas de diseño.

        .d-flex.flex-wrap.gap-3.mb-4
          .col-12.col-lg.d-flex.flex-wrap.justify-content-center.align-items-center.gap-4.p-4.mb-4(style="background: #D4D7FC" data-aos="fade-right")
            .col-auto
              img(src="@/assets/curso/temas/tema1/img-1.svg").img65
            .col-12.col-md
              p.mb-0 Es muy importante tener estos aspectos presentes ya que, al igual que sucede en medicina, si se quiere diagnosticar correctamente una enfermedad a un paciente, hay que conocer las diferentes enfermedades y sus causas.
          .col-12.col-lg.d-flex.flex-wrap.justify-content-center.align-items-center.gap-4.p-4.mb-4(style="background: #F9E69F" data-aos="fade-left")
            .col-auto
              img(src="@/assets/curso/temas/tema1/img-2.svg").img65
            .col-12.col-md
              p.mb-0 En el caso de un equipo o un sistema como la caja de cambios, esto quiere decir que, si se requiere diagnosticar adecuadamente una falla, se deben conocer las distintas fallas y sus causas raíz.

        .d-flex.justify-content-start.mb-4
          #t_1_1.titulo-segundo-nivel
            img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in")
            h3(data-aos="fade-left") 1.1 Confiabilidad operacional

        p(data-aos="fade-right") La confiabilidad operacional se refiere a la capacidad de un sistema integrado por procesos, tecnología y personas capaces de cumplir su función dentro de los límites de diseño bajo unas condiciones de operación específicas.
          
        p.fw-bold(data-aos="fade-left") Los factores que inciden sobre la confiabilidad operacional son: 

      .bg-image.bg-image-slider.py-5.mb-5
        SlyderA.tarjeta.p-4(tipo="b" data-aos="fade-right")
          .d-flex.flex-wrap.justify-content-center.align-items-start.my-lg-4.col-xl-10.mx-auto
            .col-lg-6.col-xl-7.mb-4.mb-md-0.order-2.order-lg-1.pe-lg-4
              p.fw-bold Mantenibilidad de equipos
              p Está ligada al diseño del equipo y su confiabilidad interna; por ejemplo, es ampliamente conocido que, por su diseño, hay ciertas cajas de cambios que fallan frecuentemente, mientras que existen otras que son más confiables. La mantenibilidad también tiene que ver con la probabilidad de que estas puedan ser restauradas a su estado operacional en un tiempo determinado.

            .col-lg-6.col-xl-5.order-1.order-lg-2.mb-4.mb-lg-0
              img(src='@/assets/curso/temas/tema1/img-3.png', alt='Texto que describa la imagen')
          
          .d-flex.flex-wrap.justify-content-center.align-items-start.my-lg-4.col-xl-10.mx-auto
            .col-lg-6.col-xl-7.mb-4.mb-md-0.order-2.order-lg-1.pe-lg-4
              p.fw-bold Confiabilidad humana
              p Se relaciona con el involucramiento, compromiso y competencias que poseen las personas con respecto a las actividades que les corresponde realizar. Para el caso particular de la caja de cambios, se refiere, por ejemplo, a las competencias que tienen los mecánicos para reparar adecuadamente una transmisión o las de un conductor para manejar apropiadamente el vehículo. La confiabilidad humana se relaciona con descuidos y errores de las personas que pueden llevar finalmente a una falla en la transmisión.

            .col-lg-6.col-xl-5.order-1.order-lg-2.mb-4.mb-lg-0
              img(src='@/assets/curso/temas/tema1/img-4.png', alt='Texto que describa la imagen')
          
          .d-flex.flex-wrap.justify-content-center.align-items-start.my-lg-4.col-xl-10.mx-auto
            .col-lg-6.col-xl-7.mb-4.mb-md-0.order-2.order-lg-1.pe-lg-4
              p.fw-bold Confiabilidad de procesos
              p Esta confiabilidad se refiere a la operación de la transmisión acorde a los parámetros del fabricante o por debajo de la capacidad de diseño; por ejemplo, si la caja es sometida a una sobrecarga o a una condición para la cual no fue diseñada, es muy probable que esta condición afecte la confiabilidad operacional y derive en una falla. La confiabilidad de los procesos también se refiere al entendimiento de los procesos y procedimientos, por ejemplo, los malos hábitos de manejo, ya que no se siguen las pautas adecuadas para la correcta conducción y preservación de componentes.

            .col-lg-6.col-xl-5.order-1.order-lg-2.mb-4.mb-lg-0
              img(src='@/assets/curso/temas/tema1/img-5.png', alt='Texto que describa la imagen')
          
          .d-flex.flex-wrap.justify-content-center.align-items-start.my-lg-4.col-xl-10.mx-auto
            .col-lg-6.col-xl-7.mb-4.mb-md-0.order-2.order-lg-1.pe-lg-4
              p.fw-bold Confiabilidad de equipos
              p Está determinada por las estrategias y el mantenimiento aplicado. Para el caso particular de la caja de cambios, se refiere al adecuado mantenimiento preventivo que se le proporciona, como, por ejemplo, el cambio de aceite en los tiempos establecidos por el fabricante o el reemplazo de componentes que se van desgastando o que fallan con el tiempo. Este punto también abarca el correcto ensamble de los componentes y buenas prácticas de reparación siguiendo las recomendaciones brindadas en los manuales de reparación de los fabricantes.

            .col-lg-6.col-xl-5.order-1.order-lg-2.mb-4.mb-lg-0
              img(src='@/assets/curso/temas/tema1/img-6.png', alt='Texto que describa la imagen')
          
                
      .col-xl-10.mx-auto.d-flex.flex-wrap.justify-content-center.align-items-center.gap-4.p-4(style="background: #FCF7CF")
        .col-auto(data-aos="fade-right")
          img(src="@/assets/curso/temas/tema1/img-7.svg").img65
        .col-12.col-md(data-aos="fade-left")
          p.mb-0 En conclusión, es importante tener en cuenta al momento de diagnosticar una falla, ya que muchas de estas se presentan como consecuencia de una baja confiabilidad operacional; la cual lleva implícita la eliminación de las causas de falla humanas, del equipo y operacionales.  
  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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

<style lang="sass" scoped></style>
