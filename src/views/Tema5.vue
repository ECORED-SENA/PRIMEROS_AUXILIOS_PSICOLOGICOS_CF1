<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Principios de la intervención
    
    p.mb-4 Estos principios están enfocados en los siguientes:

    .row.justify-content-center.fondo-completo(:style="{'background-image': `url(${require('@/assets/curso/tema1/fondo2.png')})`}" style='background-position: center bottom')
      .col-lg-12.px-5
        .row.justify-content-center.mb-5
          .col-11.col-lg-6
            figure
                img(src='@/assets/curso/tema5/img1.svg' alt='AvatarTop', style='width: 565px').m-auto
          
        .row.justify-content-center.mb-5
          .col-lg-7.mb-4.mb-lg-0.onTop
            .row.mb-4
              .col-auto
                .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
                  h4.text-white.mb-0 Éticos
              
            p.mb-4 La ética tiene que ver con las acciones y sus consecuencias a terceros, por tanto, quien se presta y acude a prestar apoyo desde los PAP, establece un compromiso con la vida del afectado. Este compromiso implica conocimiento y preparación, que sin bien es cierto no necesariamente los PAP deben ser aplicados por un profesional de salud mental, si requieren de habilidades específicas, porque lo que está en juego es la estabilidad y salud mental de una persona y/o una comunidad.
              
            .row.align-items-center
              .col-auto.lineas
                figure
                  img(src='@/assets/curso/tema4/equis.svg' alt='AvatarTop', style='width: 85px').m-auto
              .col
                .bg--green.neg--right2.p-3.mb-4
                  p.mb-0 Confidencialidad de la información, respeto por la creencias, valoración y reconocimiento del otro son los aspectos éticos básicos que cualquier persona que aplique los PAP, debe mantener en sus acciones.
                
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/tema5/img2.jpg' alt='imagen ambiental', style='width: 505px').m-auto
            
            
        .row.justify-content-center.fondo-img.pb-4(:style="{'background-image': `url(${require('@/assets/curso/tema2/fondo-row.png')})`}" style='background-position: left top')
          .col-lg-12.px-5
            .row.justify-content-center.mb-5
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema5/img3.png' alt='imagen ambiental', style='width: 505px').m-auto
              .col-lg-7
                .row.mb-4
                  .col-auto
                    .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
                      h4.text-white.mb-0 Enfoque intercultural y diferencial 
                  
                p.mb-4 El enfoque diferencial hace referencia a los grupos poblacionales que requieren mayor atención debido a su condición de vulnerabilidad frente a otras poblaciones. En este sentido hacen parte de este enfoque: poblaciones étnicas, población en situación de discapacidad, poblaciones que su condición de género es vulnerables, niños, niñas y adolescentes y personas con orientaciones sexuales diversas. Para la aplicación de los PAP tener en cuenta las poblaciones de especial atención, otorga prioridades frente a la atención, el direccionamiento en caso de requerir y la activación de rutas para el restablecimiento de derechos.
                  
                .row.align-items-center
                  .col-auto.lineas
                    figure
                      img(src="@/assets/curso/tema2/line2.svg", alt="alt", style='width: 84px').m-auto
                  .col
                    p.mb-0 Por otro lado, el enfoque intercultural en los PAP, hace referencia al reconocimiento de saberes y principios propios de otras culturas. Formas de entender la salud y la enfermedad y en este caso la salud mental, este enfoque invita a la incorporación de nuevos saberes y adaptación de saberes para lograr un engranaje entre las diferentes culturas.
          
          
    .row.justify-content-center.fondo-gradiente-verde.mb-0
      .col-lg-12.px-md-5.pt-5
          
        .row.justify-content-center.mb-4
          .col-auto
            .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
              h4.text-white.mb-0 Buenas prácticas
                
        .row.justify-content-center.mb-4
          .col-lg-10
            p.mb-0 Las buenas prácticas en los PAP se enmarcan en lo que se debe y no se debe hacer en la aplicación de los primeros auxilios psicológicos.
          
        .row.justify-content-evenly.mb-4
          .col-lg-5.mb-4.mb-lg-0
            p.text-center.mb-4 
              b ¿Qué se debe hacer?
                
            SlyderF.mb-0(columnas="col-6 col-lg-12")
              .tarjeta.color-claro1.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/icon1-1.svg' alt='AvatarTop' style="width: 165px;").m-auto
                p.text-center.text-white.mb-0 Trabajar con honestidad y ser digno de confianza.
                  
              .tarjeta.color-claro1.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/icon1-2.svg' alt='AvatarTop' style="width: 165px;").m-auto
                p.text-center.text-white.mb-0 Dejar que las personas tomen sus propias decisiones, garantizando su derecho.
                  
              .tarjeta.color-claro1.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/icon1-3.svg' alt='AvatarTop' style="width: 165px;").m-auto
                p.text-center.text-white.mb-0 Entender que cada persona tiene sus propios prejuicios y que debe trabajar para que eso no interfiera en su labor.
                  
              .tarjeta.color-claro1.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/icon1-4.svg' alt='AvatarTop' style="width: 165px;").m-auto
                p.text-center.text-white.mb-0 No forzar a las personas a recibir ayuda, es importante aclararle a los afectados que pueden recibirla cuando se sientan preparados.
                  
              .tarjeta.color-claro1.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/icon1-5.svg' alt='AvatarTop' style="width: 165px;").m-auto
                p.text-center.text-white.mb-0 La privacidad y confidencialidad de la persona debe ser asegurada
                  
              .tarjeta.color-claro1.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/icon1-6.svg' alt='AvatarTop' style="width: 165px;").m-auto
                p.text-center.text-white.mb-0 Respetar los derechos de todas las personas atendidas desde los PAP.
                  
              .tarjeta.color-claro1.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/icon1-7.svg' alt='AvatarTop' style="width: 165px;").m-auto
                p.text-center.text-white.mb-0 Aplicar enfoque diferencial de atención especial para poblaciones en condiciones de vulnerabilidad.
                  
                
          .col-lg-5
            p.text-center.mb-4 
              b ¿Qué no se debe hacer?
                
            SlyderF.mb-0(columnas="col-6 col-lg-12")
              .tarjeta.color-oscuro2.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/icon2-1.svg' alt='AvatarTop' style="width: 165px;").m-auto
                p.text-center.text-white.mb-0 Aprovecharse de su condición de persona que apoya.
                  
              .tarjeta.color-oscuro2.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/icon2-2.svg' alt='AvatarTop' style="width: 165px;").m-auto
                p.text-center.text-white.mb-0 Cobrar dinero por ayudar a las personas en crisis.
                  
              .tarjeta.color-oscuro2.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/icon2-3.svg' alt='AvatarTop' style="width: 165px;").m-auto
                p.text-center.text-white.mb-0 Brindar información falsa o inadecuada a la persona atendida.
                  
              .tarjeta.color-oscuro2.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/icon2-4.svg' alt='AvatarTop' style="width: 165px;").m-auto
                p.text-center.text-white.mb-0 No alardear de sus habilidades y conocimientos con la persona que requiere ayuda.
                  
              .tarjeta.color-oscuro2.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/icon2-5.svg' alt='AvatarTop' style="width: 165px;").m-auto
                p.text-center.text-white.mb-0 No presione a las personas para que acepten la ayuda.
                  
              .tarjeta.color-oscuro2.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/icon2-6.svg' alt='AvatarTop' style="width: 165px;").m-auto
                p.text-center.text-white.mb-0 No genere presión en las personas para conocer su historia.
                  
              .tarjeta.color-oscuro2.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/icon2-7.svg' alt='AvatarTop' style="width: 165px;").m-auto
                p.text-center.text-white.mb-0 No divulgar la historia y experiencia de las personas atendidas.
                  
              .tarjeta.color-oscuro2.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema5/icon2-8.svg' alt='AvatarTop' style="width: 165px;").m-auto
                p.text-center.text-white.mb-0 No comparta la información e historia de las personas a las cuáles apoya.
                  
              








</template>

<script>
export default {
  name: 'Tema5',
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
