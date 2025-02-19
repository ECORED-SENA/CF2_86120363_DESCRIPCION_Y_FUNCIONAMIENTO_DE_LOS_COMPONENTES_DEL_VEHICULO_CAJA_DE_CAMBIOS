<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diagnóstico y solución de problemas

    p.mb-4 El diagnóstico se define como la identificación de la naturaleza de un fallo, basado en los síntomas detectados, mediante inspección, pruebas y su análisis.

    .d-flex.justify-content-start.mb-4
      .titulo-segundo-nivel
        img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in")
        h3(data-aos="fade-left") Consejos útiles para el diagnóstico
    
    p.mb-4 Para realizar un buen diagnóstico se debe comenzar escuchando atentamente al cliente o al conductor sobre los inconvenientes que presenta el vehículo con la caja de cambios; después se debe hacer lo siguiente:

    .col-xl-10.mx-auto.d-flex.flex-wrap.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        img(src="@/assets/curso/temas/tema3/img-1.jpg")
      .col-lg-8.p-4.d-flex.flex-wrap.align-content-center(style="background-color: #F1EDE6" data-aos="fade-left")
        p.fw-bold.mb-4 Las causas comunes por las que se deteriora una transmisión son:  
        ol.lista-ol--cuadro.lista-ol.mb-0
          li.mb-2
            .lista-ol--cuadro__vineta.v--green
              span A
            | Revisar el nivel de aceite (en las transmisiones donde esta operación se pueda realizar fácilmente).
          li.mb-2
            .lista-ol--cuadro__vineta.v--green
              span B
            | Verificar que el aceite esté en buen estado.
          li.mb-2
            .lista-ol--cuadro__vineta.v--green
              span C
            | Revisar que no existan fugas de aceite debajo del vehículo.
          li.mb-2
            .lista-ol--cuadro__vineta.v--green
              span D
            | Solicitar permiso al cliente para realizar un recorrido con el vehículo y así poder recopilar más información para diagnosticar mejor la falla.
          li.mb-2
            .lista-ol--cuadro__vineta.v--green
              span E
            | Encender el vehículo y dejarlo calentar.
          li.mb-2
            .lista-ol--cuadro__vineta.v--green
              span F
            | Identificar si se escucha algún tipo de sonido y en qué condición se presenta este sonido, cuando está en neutro o en algún cambio de velocidad.
          li.mb-2
            .lista-ol--cuadro__vineta.v--green
              span G
            | Revisar si los cambios entran normalmente o con dificultad; si entran con dificultad, identificar en cuál cambio es el problema o si esto se presenta en todos los cambios.
          li.mb-2
            .lista-ol--cuadro__vineta.v--green
              span H
            | Realizar un pequeño recorrido con el conductor del vehículo y escucharlo atentamente para identificar en qué condición ocurre el problema.
    
    .bg-image.bg-image-1
      p.mb-4 Es importante tener en cuenta que algunas causas de problemas se presentan como consecuencia de malos hábitos de manejo, como no presionar completamente el embrague al hacer un cambio o mantener la mano apoyada en la palanca de cambios.

      .col-xl-10.mx-auto.d-flex.flex-wrap.justify-content-center.mb-5
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          img(src="@/assets/curso/temas/tema3/img-2.jpg")
        .col-lg-8.p-4.d-flex.flex-wrap.align-content-center(style="background-color: #F1EDE6" data-aos="fade-left")
          p.fw-bold.mb-4 Diagnóstico de transmisión manual
          p.mb-0 Es importante tener en cuenta que el embrague y la caja de cambios están relacionados entre sí. Por ejemplo, si se presenta un fallo en el embrague, pueden aparecer ruidos en la caja de cambios, que patine el coche o que sea difícil engranar una marcha. En estos casos, no es una falla de la transmisión, sino que puede ser un desgaste excesivo en el disco de embrague, falta de ajuste, desequilibrio o alguna otra falla en este componente.

      .d-flex.justify-content-start.mb-4
        .titulo-segundo-nivel
          img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in")
          h3(data-aos="fade-left") Guía de solución de problemas
      
      .d-flex.flex-wrap.justify-content-center.align-items-center.gap-4.mb-4(data-aos="fade-right")
        .col-12.col-lg.order-2.order-lg-1.d-flex
          p.mb-0 En esta sección se presenta una guía de solución de problemas o "caza fallas" para la transmisión manual. Dado que existen diferentes modelos de transmisiones, la información es de carácter general y no es particular para un determinado modelo. Si se desea encontrar información más específica sobre las causas de falla de determinada transmisión, se recomienda consultar el manual de servicio del fabricante.
        .col-auto.order-1.order-lg-2
          img(src="@/assets/curso/temas/tema3/img-3.png" style="max-width: 400px").img65
    
    .bg-image.bg-image-slider.py-5.mb-5
      LineaTiempoC.color-acento-botones.p-4.tarjeta(style="background-color: white")
        .col-xl-10.mx-auto.d-flex.flex-wrap(titulo="Fugas de aceite")
          p.mb-4.fw-bold.w-100(style="color: #2D3BF3") Fugas de aceite
          .col-md-6.col-lg-5.mb-4.border-right-ul
            p.mb-4.fw-bold Causa posible
            ul.ul-marker-check.mb-0.pe-md-4
              li.mb-2 Tapa suelta.  
              li.mb-2 Empaquetadura floja o defectuosa.  
              li.mb-2 Retenedor del cojinete delantero flojo o roto.  
              li.mb-2 Junta defectuosa.  
              li.mb-2 Sello del eje de salida desgastado.  
              li.mb-2 Nivel de lubricante demasiado alto. 
          .col-md-6.col-lg-7.ps-md-4.ps-lg-5
            p.mb-4.fw-bold Corrección
            ul.ul-marker-check.mb-0
              li.mb-2 Apretar la tapa.  
              li.mb-2 Reemplazar empaquetadura.  
              li.mb-2 Apretar o reemplazar retenedor.  
              li.mb-2 Reemplazar sello.  
              li.mb-2 Drenar al nivel recomendado.

        .col-xl-10.mx-auto.d-flex.flex-wrap(titulo="Cambio duro")
          p.mb-4.fw-bold.w-100(style="color: #2D3BF3") Cambio duro
          .col-md-6.col-lg-5.mb-4.border-right-ul
            p.mb-4.fw-bold Causa posible
            ul.ul-marker-check.mb-0.pe-md-4
              li.mb-2 Exceso de recorrido libre del pedal del embrague.  
              li.mb-2 Embrague gastado o defectuoso.  
              li.mb-2 Varillaje necesita lubricación.  
              li.mb-2 Lubricante incorrecto o insuficiente.  
              li.mb-2 Transmisión desalineada.
          .col-md-6.col-lg-7.ps-md-4.ps-lg-5
            p.mb-4.fw-bold Corrección
            ul.ul-marker-check.mb-0
              li.mb-2 Ajustar recorrido del pedal.  
              li.mb-2 Reemplazar embrague.  
              li.mb-2 Lubricar varillaje.  
              li.mb-2 Usar lubricante recomendado.  
              li.mb-2 Corregir alineación
        
        .col-xl-10.mx-auto.d-flex.flex-wrap(titulo="Saltos de marcha")
          p.mb-4.fw-bold.w-100(style="color: #2D3BF3") Saltos de marcha
          .col-md-6.col-lg-5.mb-4.border-right-ul
            p.mb-4.fw-bold Causa posible
            ul.ul-marker-check.mb-0.pe-md-4
              li.mb-2 Sincronizadores desgastados.  
              li.mb-2 Sistema de bloqueo desgastado.  
              li.mb-2 Horquillas o ejes desgastados.  
              li.mb-2 Rodamientos del eje secundario desgastados.  
              li.mb-2 Eje de salida doblado.
          .col-md-6.col-lg-7.ps-md-4.ps-lg-5
            p.mb-4.fw-bold Corrección
            ul.ul-marker-check.mb-0
              li.mb-2 Reemplazar sincronizadores.  
              li.mb-2 Reparar sistema de bloqueo.  
              li.mb-2 Reemplazar horquillas o ejes desgastados.  
              li.mb-2 Sustituir rodamientos y eje si es necesario. 
        
        .col-xl-10.mx-auto.d-flex.flex-wrap(titulo="Choques al cambiar")
          p.mb-4.fw-bold.w-100(style="color: #2D3BF3") Choques al cambiar
          .col-md-6.col-lg-5.mb-4.border-right-ul
            p.mb-4.fw-bold Causa posible
            ul.ul-marker-check.mb-0.pe-md-4
              li.mb-2 Anillo sincronizador desgastado o mal ensamblado.  
              li.mb-2 Cambio demasiado rápido o a velocidades inadecuadas.  
              li.mb-2 Embrague no se suelta correctamente.  
              li.mb-2 Holgura excesiva del eje de salida. 
          .col-md-6.col-lg-7.ps-md-4.ps-lg-5
            p.mb-4.fw-bold Corrección
            ul.ul-marker-check.mb-0
              li.mb-2 Reemplazar anillo sincronizador.  
              li.mb-2 Reducir velocidad antes de cambiar.  
              li.mb-2 Ajustar o reparar embrague.  
              li.mb-2 Ajustar holgura del eje de salida. 
        
        .col-xl-10.mx-auto.d-flex.flex-wrap(titulo="Ruido en neutro")
          p.mb-4.fw-bold.w-100(style="color: #2D3BF3") Ruido en neutro 
          .col-md-6.col-lg-5.mb-4.border-right-ul
            p.mb-4.fw-bold Causa posible
            ul.ul-marker-check.mb-0.pe-md-4
              li.mb-2 Rodamiento delantero desgastado.  
              li.mb-2 Engranajes dañados o desgastados.  
              li.mb-2 Lubricante contaminado.  
              li.mb-2 Rodamientos del eje secundario desgastados. 
          .col-md-6.col-lg-7.ps-md-4.ps-lg-5
            p.mb-4.fw-bold Corrección
            ul.ul-marker-check.mb-0
              li.mb-2 Reemplazar rodamiento delantero.  
              li.mb-2 Sustituir engranajes.  
              li.mb-2 Limpiar y reparar transmisión.  
              li.mb-2 Cambiar rodamientos del eje secundario. 
        
        .col-xl-10.mx-auto.d-flex.flex-wrap(titulo="Ruido marcha atrás")
          p.mb-4.fw-bold.w-100(style="color: #2D3BF3") Ruido marcha atrás
          .col-md-6.col-lg-5.mb-4.border-right-ul
            p.mb-4.fw-bold Causa posible
            ul.ul-marker-check.mb-0.pe-md-4
              li.mb-2 Reductor de marcha atrás defectuoso.  
              li.mb-2 Rodamientos de contraflecha dañados.  
              li.mb-2 Engranaje o casquillos desgastados.  
              li.mb-2 Sincronizador de reversa defectuoso. 
          .col-md-6.col-lg-7.ps-md-4.ps-lg-5
            p.mb-4.fw-bold Corrección
            ul.ul-marker-check.mb-0
              li.mb-2 Reemplazar engranaje reductor.  
              li.mb-2 Cambiar rodamientos de contraflecha.  
              li.mb-2 Sustituir casquillos o engranaje dañado.  
              li.mb-2 Cambiar sincronizador de reversa. 

        .col-xl-10.mx-auto.d-flex.flex-wrap(titulo="Ruido general")
          p.mb-4.fw-bold.w-100(style="color: #2D3BF3") Ruido general
          .col-md-6.col-lg-5.mb-4.border-right-ul
            p.mb-4.fw-bold Causa posible
            ul.ul-marker-check.mb-0.pe-md-4
              li.mb-2 Insuficiente lubricación.  
              li.mb-2 Rodamientos o engranajes desgastados.  
              li.mb-2 Lubricante incorrecto o contaminado.  
              li.mb-2 Desalineación de la transmisión.  
              li.mb-2 Desgaste excesivo del sincronizador.
          .col-md-6.col-lg-7.ps-md-4.ps-lg-5
            p.mb-4.fw-bold Corrección
            ul.ul-marker-check.mb-0
              li.mb-2 Llenar con el nivel adecuado de lubricante.  
              li.mb-2 Cambiar rodamientos y engranajes desgastados.  
              li.mb-2 Usar lubricante recomendado.  
              li.mb-2 Ajustar alineación.  
              li.mb-2 Sustituir sincronizador desgastado. 
        
</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass" scoped>
.bg-image.bg-image-1
  padding-bottom: 1.5rem !important
  background: rgb(0,0,0)
  background: linear-gradient(0deg, transparent 0%, rgba(253,250,230,1) 25%, rgba(253,250,230,1) 75%, transparent 100%)
.border-right-ul
  border-right: 2px solid #A7A7A7
  @media (max-width: 768px)
    border: none
</style>
