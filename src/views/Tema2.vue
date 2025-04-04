<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fallas y quejas comunes de la transmisión

    .bg-image.bg-image-1
      .d-flex.flex-wrap.justify-content-center.align-items-center.gap-4.p-3.mb-4(data-aos="fade-right")
        .col-12.col-md.order-2.order-lg-1
          p.mb-0 Las fallas y quejas más habituales en una transmisión incluyen dificultad para realizar cambios, corrimiento o salto de marcha, vibraciones, operación ruidosa, golpeteos o ruidos sordos, chirridos agudos y gruñidos. Cada una de estas condiciones tiene causas específicas que deben ser analizadas detalladamente para identificar su origen y aplicar las soluciones necesarias.
        .col-auto.order-1.order-lg-2
          img(src="@/assets/curso/temas/tema2/img-1.svg").img65

      .d-flex.justify-content-start.mb-4
        #t_2_1.titulo-segundo-nivel
          img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in")
          h3(data-aos="fade-left") 2.1 Dificultad para realizar el cambio
        
      .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.mb-5(style="background-color: #FAEFA0")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-2.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="fade-right")
          p.mb-0 Esta condición ocurre cuando la palanca de cambios es difícil de mover de una marcha a otra. En algunos casos, solamente es un cambio difícil de engranar; en otros, pueden ser todos los cambios. La causa habitual de esta dificultad es que la varilla selectora y sus componentes de enganche están doblados, gastados o necesitan lubricación.

      p.mb-5 La dificultad para realizar un cambio también puede ser causada por el atascamiento del eje selector o las horquillas. Esta condición también puede deberse a un problema en el embrague y ocasionalmente a una transmisión mal alineada.  

      .d-flex.flex-wrap.justify-content-center.align-items-center.gap-4.mb-4(data-aos="fade-right")
        .col-12.col-lg.order-2.order-lg-1.d-flex
          p.mb-0.p-4(style="background-color: #E8EAFD") Los cambios duros pueden diagnosticarse fácilmente. Si la palanca de cambios se mueve con facilidad cuando el motor está apagado, pero el cambio se vuelve duro con el motor en marcha, es probable que el problema esté en el embrague o que la carcasa esté desalineada. Los sincronizadores con problemas también pueden ser responsables de la dificultad para cambiar una marcha.
        .col-12.col-lg-auto.order-1.order-lg-2
          img(src="@/assets/curso/temas/tema2/img-3.png" style="max-width: 395px").mx-auto.img65
    
    .d-flex.justify-content-start.mb-4
      #t_2_2.titulo-segundo-nivel
        img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in")
        h3(data-aos="fade-left") 2.2 Corrimiento y salto de marcha
    
    .d-flex.flex-wrap.justify-content-center.align-items-center.gap-4.p-3.mb-4(data-aos="fade-right")
      .col-12.col-md.order-2.order-lg-1
        p.mb-0 Cuando en una transmisión la palanca “salta” o se mueve a un punto muerto durante la operación, primero se debe verificar el varillaje de la transmisión y los brazos de la palanca de cambios. Si el conjunto de cambios está muy gastado, debe reconstruirse o reemplazarse. Un rodamiento de embrague desgastado también puede provocar que el cambio se salga de marcha. La vibración severa, causada por un eje de entrada tambaleante, puede mover las horquillas de cambio y los sincronizadores.
      .col-auto.order-1.order-lg-2
        img(src="@/assets/curso/temas/tema2/img-4.svg").img65

    .col-xl-10.mx-auto.d-flex.flex-wrap.mb-5.justify-content-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        img(src="@/assets/curso/temas/tema2/img-5.jpg")
      .col-lg-8.p-4.px-lg-5(style="background-color: #F1EDE6" data-aos="fade-left")
        p.fw-bold.mb-4 Otras causas de que el cambio se salga durante una marcha son: 
        ul.ul-marker-check
          li.mb-3 Sincronizadores desgastados.
          li.mb-3 Sistema de bloqueo o de mantenimiento de velocidades desgastado.
          li.mb-3 Conjunto de horquillas o el eje selector desgastados.
          li Juego excesivo en los conjuntos de ejes intermediario y secundario.

    .bg-image.bg-image-1
      .d-flex.justify-content-start.mb-4
        #t_2_3.titulo-segundo-nivel
          img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in")
          h3(data-aos="fade-left") 2.3 Vibración
      
      p.mb-5(data-aos="fade-right") Las vibraciones de la transmisión pueden ser muy difíciles de identificar; no hay que olvidar que pueden ser producidas por cualquier componente del sistema de transmisión, por lo que se debe incluir desde el motor hasta los conjuntos de la rueda motriz.

      p.mb-5.fw-bold(data-aos="fade-right") Si la causa de la vibración ocurre en la transmisión, se deben tener en cuenta: 

      .d-flex.flex-wrap.gap-3.mb-4.col-xl-10.col-xxl-8.mx-auto
        .col-12.col-lg.d-flex.flex-wrap.justify-content-center.align-items-center.gap-4.p-4.mb-4(style="background: #D4D7FC" data-aos="fade-right")
          .col-auto
            img(src="@/assets/curso/temas/tema2/img-6.svg").img65
          .col-12.col-md
            p.fw-bold.mb-0 Las velocidades donde la vibración es mayor.
        .col-12.col-lg.d-flex.flex-wrap.justify-content-center.align-items-center.gap-4.p-4.mb-4(style="background: #F9E69F" data-aos="fade-left")
          .col-auto
            img(src="@/assets/curso/temas/tema2/img-7.svg").img65
          .col-12.col-md
            p.fw-bold.mb-0 En cuál marcha se presenta.

      p.mb-4(data-aos="fade-right") En algunos casos, el daño a la transmisión causado por la vibración se produce sin que el conductor lo note. 

      .d-flex.justify-content-start.mb-4
        #t_2_4.titulo-segundo-nivel
          img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in")
          h3(data-aos="fade-left") 2.4 Operación ruidosa
      
      p.mb-5(data-aos="fade-right") En el siguiente #[em podcast] se analizará qué es la operación ruidosa, cómo identificarla y las posibles causas detrás de este fenómeno.

    .d-flex.flex-wrap.justify-content-center.mb-5
      .col-lg-7.pe-lg-3.order-2.order-lg-1
        .tarjeta.d-flex.flex-wrap.justify-content-center.align-items-center.gap-4.p-4(data-aos="fade-right" style="background-color: #1E29A8")
          .col-auto
            img(src="@/assets/curso/temas/tema2/img-8.svg")
          .col-12.col-xl
            h3(style="color: #F3D913") #[em Podcast]
            p.text-white Operación ruidosa
            .tarjeta.audio-t3.p-4.audio-t2
              TarjetaAudio.color-acento-contenido.audio-c(
                texto="Operación ruidosa"
                :audio="require('@/assets/curso/temas/tema2/Audio-1.mp3')"
              )
      .col-lg-5.mb-4.order-1.order-lg-2
        img.mb-auto(src="@/assets/curso/temas/tema2/img-9.png" data-aos="fade-left")
    
    .d-flex.justify-content-start.mb-4
      #t_2_5.titulo-segundo-nivel
        img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in")
        h3(data-aos="fade-left") 2.5 Golpeteo o ruido sordo
    
    p.mb-5 Un golpeteo puede ser causado por:

    .d-flex.flex-wrap.gap-md-3.mb-5
      .col-12.col-lg.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.w-100
          .row.justify-content-center.mb-3
            img(src='@/assets/curso/temas/tema2/img-10.svg', alt='Texto que describa la imagen' style="max-width: 108px")
          h4.text-center Engranes:
          p.text-center Abolladuras o inflamaciones en el diente de engrane. 

      .col-12.col-lg.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.w-100
          .row.justify-content-center.mb-3
            img(src='@/assets/curso/temas/tema2/img-11.svg', alt='Texto que describa la imagen' style="max-width: 108px")
          h4.text-center Rodamientos:
          p.text-center El ruido aparece a velocidades de flecha bajas en cualquier posición. Se produce por los rodamientos con bolas o rodillos dañados, o con superficies resquebrajadas o astilladas. 
      
      .col-12.col-lg.mb-4.mb-lg-0.d-flex
        .tarjeta--boton.color-primario.p-4.w-100
          .row.justify-content-center.mb-3
            img(src='@/assets/curso/temas/tema2/img-12.svg', alt='Texto que describa la imagen' style="max-width: 108px")
          h4.text-center Engranaje fisurado:
          p.text-center Un engranaje fisurado o roto por carga de choque o por presionar la flecha durante la instalación producirá este sonido a bajas velocidades. A altas velocidades habrá un zumbido. 
    
    p.mb-5 Un ruido de golpeteo puede comenzar como un gruñido; a medida que los cojinetes y los retenedores comienzan a deteriorarse, el ruido aumenta. En la mayoría de las transmisiones, el ruido producido será más prominente cuando se carga el engranaje, lo que facilita la identificación del engranaje que tiene problemas. 

    .d-flex.justify-content-start.mb-4
      #t_2_6.titulo-segundo-nivel
        img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in")
        h3(data-aos="fade-left") 2.6 Chirrido o gemido muy agudo
    
    p.mb-4 Se puede producir por:

    .bg-image.bg-image-slider.py-5.mb-5
      SlyderA.tarjeta.p-4(tipo="b" data-aos="fade-right")
        .d-flex.flex-wrap.justify-content-center.align-items-start.my-lg-4.col-xl-10.mx-auto
          .col-lg-6.col-xl-7.mb-4.mb-md-0.order-2.order-lg-1.pe-lg-4
            p.fw-bold Desgaste de engranaje
            p Se produce por el desgaste normal del engranaje e incluso por el resquebrajamiento del diente de engrane debido al uso excesivo. Cuando existe un deterioro avanzado, se producirá un zumbido.

          .col-lg-6.col-xl-5.order-1.order-lg-2.mb-4.mb-lg-0
            img(src='@/assets/curso/temas/tema2/img-13.png', alt='Texto que describa la imagen')
        
        .d-flex.flex-wrap.justify-content-center.align-items-start.my-lg-4.col-xl-10.mx-auto
          .col-lg-6.col-xl-7.mb-4.mb-md-0.order-2.order-lg-1.pe-lg-4
            p.fw-bold Trenes de engranes no coincidentes
            p Este tipo de tren de engranes se identifica por un patrón de desgaste irregular en la parte frontal del diente de engrane.

          .col-lg-6.col-xl-5.order-1.order-lg-2.mb-4.mb-lg-0
            img(src='@/assets/curso/temas/tema2/img-14.png', alt='Texto que describa la imagen')
        
        .d-flex.flex-wrap.justify-content-center.align-items-start.my-lg-4.col-xl-10.mx-auto
          .col-lg-6.col-xl-7.mb-4.mb-md-0.order-2.order-lg-1.pe-lg-4
            p.fw-bold Rodamientos
            p Los rodamientos “estrangulados” que tienen una holgura radial o axial insuficiente también pueden producir un silbido.

          .col-lg-6.col-xl-5.order-1.order-lg-2.mb-4.mb-lg-0
            img(src='@/assets/curso/temas/tema2/img-15.png', alt='Texto que describa la imagen')

    .bg-image.bg-image-1
      .d-flex.justify-content-start.mb-4
        #t_2_7.titulo-segundo-nivel
          img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in")
          h3(data-aos="fade-left") 2.7 Gruñidos
      
      p.mb-4 Un gruñido puede ser causado por:

      .col-xl-10.mx-auto.d-flex.flex-wrap.justify-content-center.mb-5
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          img(src="@/assets/curso/temas/tema2/img-16.jpg")
        .col-lg-8.p-4.d-flex.align-items-center(style="background-color: #F1EDE6" data-aos="fade-left")
          ul.ul-marker-check.mb-0
            li.mb-2 La sincronización inadecuada de la transmisión durante el montaje.
            li La sincronización inadecuada debido al giro del engranaje en el eje intermediario.

      p.mb-4 Ambas condiciones producen un error en el espaciado de los dientes. Los ruidos de baja frecuencia como gruñidos, zumbidos o un sonido de trituración generalmente son causados por engranajes desgastados, astillados, ásperos o agrietados. 

      .col-xl-10.mx-auto.d-flex.flex-wrap.justify-content-center.mb-5
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          img(src="@/assets/curso/temas/tema2/img-17.jpg")
        .col-lg-8.p-4.d-flex.flex-wrap.align-content-center(style="background-color: #F1EDE6" data-aos="fade-left")
          p.fw-bold.mb-4 Las causas comunes por las que se deteriora una transmisión son:  
          ul.ul-marker-check.mb-0
            li.mb-2 Mal uso del embrague al hacer cambios de marcha, como no presionarlo completamente.
            li.mb-2 Sincronización manual inadecuada de las velocidades.
            li.mb-2 Apoyar la mano continuamente sobre la palanca de cambios ejerce una presión que ocasiona problemas de holguras en las arandelas y muelles de la palanca de cambios, además de averías en las horquillas selectoras de velocidades.
            li.mb-2 Bajo nivel de aceite.
            li.mb-2 No hacer cambio de aceite en el tiempo o kilometraje estipulado por el fabricante.
            li.mb-2 Usar un aceite inadecuado que no coincide con las especificaciones recomendadas por el fabricante.
    
    p.mb-4 El diagnóstico se define como la identificación de la naturaleza de un fallo, basado en los síntomas detectados, mediante inspección, pruebas y su análisis.

    .d-flex.justify-content-start.mb-4
      #t_2_8.titulo-segundo-nivel
        img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in")
        h3(data-aos="fade-left") 2.8 Consejos útiles para el diagnóstico
    
    p.mb-4 Para realizar un buen diagnóstico se debe comenzar escuchando atentamente al cliente o al conductor sobre los inconvenientes que presenta el vehículo con la caja de cambios; después se debe hacer lo siguiente:

    .col-xl-10.mx-auto.d-flex.flex-wrap.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        img(src="@/assets/curso/temas/tema3/img-1.jpg")
      .col-lg-8.p-4.d-flex.flex-wrap.align-content-center(style="background-color: #F1EDE6" data-aos="fade-left")
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
        #t_2_9.titulo-segundo-nivel
          img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in")
          h3(data-aos="fade-left") 2.9 Guía de solución de problemas
      
      .d-flex.flex-wrap.justify-content-center.align-items-center.gap-4.mb-4(data-aos="fade-right")
        .col-12.col-lg.order-2.order-lg-1.d-flex
          p.mb-0 En esta sección se presenta una guía de solución de problemas o "caza fallas" para la transmisión manual. Dado que existen diferentes modelos de transmisiones, la información es de carácter general y no es particular para un determinado modelo. Si se desea encontrar información más específica sobre las causas de falla de determinada transmisión, se recomienda consultar el manual de servicio del fabricante.
        .col-12.col-lg-auto.order-1.order-lg-2
          img(src="@/assets/curso/temas/tema3/img-3.png" style="max-width: 400px").mx-auto.img65
    
    .bg-image.bg-image-slider.py-5.mb-5
      LineaTiempoC.color-acento-botones.p-4.tarjeta(style="background-color: white")
        .col-xl-10.mx-auto.d-flex.flex-wrap(titulo="Fugas de aceite")
          p.mb-4.fw-bold.w-100(style="color: #2D3BF3") Fugas de aceite
          table.table-pro-vs-contr
            tr
              td.p-0.text-start
                p.mb-4.fw-bold Causa posible
              td.p-0.text-start
                p.mb-4.fw-bold Corrección
            tr
              td.p-0.text-start
                ul.ul-marker-check.mb-0.pe-md-4
                  li Tapa suelta.
              td.p-0.text-start
                ul.ul-marker-check.mb-0
                  li.mb-2 Apretar la tapa. 
            tr
              td.p-0.text-start
                ul.ul-marker-check.mb-0.pe-md-4
                  li Empaquetadura floja o defectuosa.  
              td.p-0.text-start
                ul.ul-marker-check.mb-0
                  li.mb-2 Reemplazar empaquetadura.  
            tr
              td.p-0.text-start
                ul.ul-marker-check.mb-0.pe-md-4
                  li Retenedor del cojinete delantero flojo o roto.
              td.p-0.text-start
                ul.ul-marker-check.mb-0
                  li.mb-2 Apretar o reemplazar retenedor.
            tr
              td.p-0.text-start
                ul.ul-marker-check.mb-0.pe-md-4
                  li Junta defectuosa.
                  li Sello del eje de salida desgastado.
              td.p-0.text-start
                ul.ul-marker-check.mb-0
                  li.mb-2 Reemplazar sello.
            tr
              td.p-0.text-start
                ul.ul-marker-check.mb-0.pe-md-4
                  li Nivel de lubricante demasiado alto.
              td.p-0.text-start
                ul.ul-marker-check.mb-0
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
              li.mb-2 Reemplazo o rectificación del eje de salida.
        
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
  name: 'Tema2',
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
.audio-t2
  border: 3px solid #F3D913
  background-color: #E8EAFD
  &:deep(.audio-c)
    min-height: auto !important
    border: none
    .tarjeta-audio__texto
      color: #12263F
      margin-bottom: 2rem !important
    .audio
      margin-bottom: auto
    > div
      align-items: flex-start !important
    .audio__btn
      margin-top: -2rem
      background-color: #A8960D
    .tarjeta-audio__input input[type=range]
      background: #2D3BF3
      background-image: linear-gradient(#1E29A8, #1E29A8)
      &::-webkit-slider-thumb
        background-color: #1E29A8
.table-pro-vs-contr
  width: 100%
  min-width: 200px
  tr td
    border: none
    vertical-align: top
    ul li
      padding-left: .3rem
      margin-bottom: .8rem
</style>
