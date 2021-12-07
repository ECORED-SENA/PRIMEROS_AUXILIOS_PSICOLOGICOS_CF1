<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Autocuidado
    
    .row.justify-content-center.mb-4
      .col-auto.lineas
        figure
          img(src='@/assets/curso/tema6/ondula.svg' alt='lineas', style='width: 85px').m-auto
      .col
        p.mb-0 La ayuda responsable implica que quien realiza el acercamiento para prestar PAP, debe estar en condiciones emocionales y psicológicas que permitan enfrentar el dolor sin generar un impacto personal. 

    .row.justify-content-center.fondo-completo(:style="{'background-image': `url(${require('@/assets/curso/tema1/fondo2.png')})`}" style='background-position: center top')
      .col-lg-12.px-5.pt-5
          
        .row.justify-content-center.mb-5
          .col-lg-5.mb-4.mb-lg-0
            .row.mb-4
              .col-auto
                .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
                  h4.text-white.mb-0 Elementos para tener presente
                  
            p.mb-0 Dentro de las prácticas de autocuidado se resaltan los siguientes elementos:
              
          .col-lg-7
            SlyderF.mb-0(columnas="col-6 col-lg-6")
              .tarjeta.color-oscuro2.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema6/icon1.svg' alt='AvatarTop' style="width: 63px;").m-auto
                p.text-center.text-white.mb-0 Mantenerse actualizado de frente a nuevos conocimientos, investigaciones y temas relacionados con el que hacer de los PAP.
                  
              .tarjeta.color-oscuro2.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema6/icon2.svg' alt='AvatarTop' style="width: 63px;").m-auto
                p.text-center.text-white.mb-0 Realizar ejercicios terapéuticos que le permitan comprender y mejorar su autoconocimiento, identificar sus debilidades emocionales y psicológicas y trabajarlas.
                    
              .tarjeta.color-oscuro2.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema6/icon3.svg' alt='AvatarTop' style="width: 63px;").m-auto
                p.text-center.text-white.mb-0 Entender el impacto que producen las historias y casos de las personas que viven trauma y desarrollan crisis y realizar acciones para mitigarlo.
                    
              .tarjeta.color-oscuro2.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema6/icon4.svg' alt='AvatarTop' style="width: 63px;").m-auto
                p.text-center.text-white.mb-0 Buscar ayuda profesional o de un colega en PAP, cuando considere que no puede trabajar con unas personas.
                    
              .tarjeta.color-oscuro2.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema6/icon5.svg' alt='AvatarTop' style="width: 63px;").m-auto
                p.text-center.text-white.mb-0 Mantenerse físicamente sano y competente para enfrentar una situación de emergencia.
                    
              .tarjeta.color-oscuro2.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema6/icon6.svg' alt='AvatarTop' style="width: 63px;").m-auto
                p.text-center.text-white.mb-0 Trabajar por el bienestar familiar.
                    
        .row.justify-content-center.fondo-img.pb-4(:style="{'background-image': `url(${require('@/assets/curso/tema2/fondo-row.png')})`}" style='background-position: left top')
          .col-lg-12.px-5
            .row.justify-content-center.mb-5
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema6/img1.png' alt='imagen ambiental', style='width: 505px').m-auto
              .col-lg-7
                h4.mb-4  Aspectos para tener en cuenta 
                ul.lista-ul
                  li 
                    i.fas.fa-check-circle(style="color: #008BFD")
                    p.mb-0 Para comprender la importancia, uso y efectividad de los primeros auxilios psicológicos, es necesario ahondar sobre la salud mental y entender los factores de riesgo que pueden desencadenar un problema o trastorno mental.
                      
                  li 
                    i.fas.fa-check-circle(style="color: #008BFD")
                    p.mb-0 Existen factores que se escapan del control de las personas, que influyen directamente sobre la salud mental, es el caso de los determinantes sociales en salud, que si bien es cierto generan una exposición al riesgo que se escapa de las decisiones individuales, también es claro que el estado actúa sobre éstos para mitigar el impacto de estos.
                      
                  li 
                    i.fas.fa-check-circle(style="color: #008BFD")
                    p.mb-0 La crisis es una situación que se puede presentar en cualquier persona a lo largo de la vida, sin embargo, las reacciones frente a estas y el manejo de esta depende de la capacidad de afrontamiento individual.
                      
                  li 
                    i.fas.fa-check-circle(style="color: #008BFD")
                    p.mb-0 Los trastornos asociados a una situación de crisis configuran lo que se denomina un estado crítico en salud mental.
                      
                  li 
                    i.fas.fa-check-circle(style="color: #008BFD")
                    p.mb-0 El estrés agudo y el estrés postraumático se pueden presentar como consecuencia de la exposición a una situación traumática, sin embargo, cada uno de ellos puede desarrollar o no de acuerdo con el tipo de trauma y los agravantes asociados al evento.
                      
                  li 
                    i.fas.fa-check-circle(style="color: #008BFD")
                    p.mb-0 Los PAP se sustentan en acciones humanas que deben contemplar principios éticos para su buen desarrollo y así no generar impactos negativos con la intervención.
                      
                  li 
                    i.fas.fa-check-circle(style="color: #008BFD")
                    p.mb-0 Los PAP deben contemplar la adaptación de las guías de aplicación, según enfoque diferencial e intercultural.
                      
        .row
          h4.text-center.mb-4 A MODO DE RESUMEN
            
          figure.mb-4
            img(src='@/assets/curso/tema6/img2.svg' alt='imagen ambiental', style='').m-auto


    .row
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/salud-mental.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.m-0 
              b Anexo. 
              b-none Salud_mental






</template>

<script>
export default {
  name: 'Tema6',
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
