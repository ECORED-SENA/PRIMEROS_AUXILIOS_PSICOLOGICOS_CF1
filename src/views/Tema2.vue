<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estado crítico 
    


    .row.justify-content-center.mb-5
      .col-lg-12
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-4
          .row.m-0.align-items-center.justify-content-center
            .col-lg-3.mb-4.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/img1.svg', alt='imagen ambiental', style='width: 260px').m-auto
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p.mb-0 La crisis va más allá de la capacidad de respuesta de la persona y eso se evidencia en las alteraciones emocionales, físicas, psicológicas y cognitivas que se desencadenan como consecuencia de la situación traumática lo que hace que desencadena un 
                  b(style="color: #008BFD") “estado crítico” 
                  b-none de salud mental, que puede llegar a tener consecuencias secundarias posteriores, como trastornos de estrés post traumático, sino se atiende con celeridad y pertinencia, de ahí la importancia de los primeros auxilios psicológicos.
                


    #t_2_1.titulo-segundo.color-acento-contenido
      .h2 2.1 Tipos y fases
    

    .row.justify-content-center.mb-5
      .col-4.col-lg-2.mb-4.mb-lg-0.align-self-center
        h4.mb-0 Las crisis pueden ser de dos tipos:
      .col
        .row.mb-2
          .col-auto
            .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
              h4.text-white.mb-0 Crisis de desarrollo
        p.mb-0 Los seres humanos a lo largo del desarrollo viven experiencias de cambio a nivel psicológico, fisiológico y anatómico, que pueden afectar la estabilidad emocional y generar periodos de crisis. 
          b-none(style="color: #008BFD") Estos episodios son predecibles, lo que no significa que todas las personas los vivan, ya que depende de factores individuales y de contexto, su aparición.
          b-none Las crisis que se han identificado durante el desarrollo son: 


    .row.justify-content-center.mb-4
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema2/infografia1.svg', alt='', style='')
            
          
        .tarjeta.color-acento-botones.p-3(x="5%" y="60%" numero="1" style='border-radius: 10px; background-color: #FFE8C8')
          h5.mb-3.text-center Crisis del nacimiento a la infancia
          p.mb-0.text-center Se vive debido al paso de la protección uterina al medio ambiente, que se percibe como una situación hostil para el bebe, que requiere adaptación.
            
        .tarjeta.color-acento-botones.p-3(x="26%" y="60%" numero="2" style='border-radius: 10px; background-color: #FFE8C8')
          h5.mb-3.text-center Crisis de pubertad
          p.mb-0.text-center Los cambios en la maduración del sistema endocrino genera un impacto en el cuerpo, la mente, las emociones y por ende en la conducta que es muy evidente en los adolescentes. Algunos presentan crisis profundas en su identidad y es un periodo de riesgo para la salud mental.
            
        .tarjeta.color-acento-botones.p-3(x="47%" y="60%" numero="3" style='border-radius: 10px; background-color: #FFE8C8')
          h5.mb-3.text-center Crisis de la primera juventud
          p.mb-0.text-center Es un periodo largo de vida que va desde los 20 hasta los 40 años. En esta etapa se consolida el proyecto de vida, transformaciones en lo académico, laboral y familiar, es un periodo de acción, cambio y ajuste permanente.
            
        .tarjeta.color-acento-botones.p-3(x="67%" y="60%" numero="4" style='border-radius: 10px; background-color: #FFE8C8')
          h5.mb-3.text-center Crisis de la edad media
          p.mb-0.text-center Se configura en la entrada de los 45 a 65 años, en donde el miedo al envejecimiento, la partida de los hijos y los cambios de vida laboral generan angustia y confusión. La entrada de la menopausia y la andropausia impacta a nivel emocional y psicológico.
            
        .tarjeta.color-acento-botones.p-3(x="87%" y="60%" numero="5" style='border-radius: 10px; background-color: #FFE8C8')
          h5.mb-3.text-center Crisis de la tercera edad
          p.mb-0.text-center A partir de los 65 años hasta el final de la vida se viven las manifestaciones más claras del envejecimiento físico y cognitivo, lo que impacta la vida de las personas de acuerdo con el desgaste propio de la edad y la exclusión social que muchos adultos mayores viven.
          

    .row.justify-content-center.fondo-completo(:style="{'background-image': `url(${require('@/assets/curso/tema1/fondo2.png')})`}" style='background-position: center bottom')
      .col-lg-12.px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5.mb-4.mb-lg-0
            .row.mb-4
              .col-auto
                .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
                  h4.text-white.mb-0 Crisis circunstanciales
            .row
              p.mb-4 Estas crisis son impredecibles y tienen que ver con situaciones inesperadas como accidentes, enfermedades, desastres naturales, eventos violentos. 
                b(style='color: #008BFD;') (Manual de primeros auxilios psicológicos. Federación Internacional de sociedades de la Cruz Roja).
                b-none  Estas crisis se han identificado con 5 características: 
            
          .col-lg-7.mb-4
            SlyderF.mb-0(columnas="col-md-6 col-lg-6")
              .tarjeta.bg-blanco.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/num1.svg' alt='AvatarTop' style="width: 62px;").m-auto
                p.text-center.mb-0 Repentina: aparece de forma imprevista.
                  
              .tarjeta.bg-blanco.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/num2.svg' alt='AvatarTop' style="width: 62px;").m-auto
                p.text-center.mb-0 Inesperada: no puede ser anticipada.
                  
              .tarjeta.bg-blanco.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/num3.svg' alt='AvatarTop' style="width: 62px;").m-auto
                p.text-center.mb-0 Urgente: amenaza el bienestar físico y psicológico.
                  
              .tarjeta.bg-blanco.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/num4.svg' alt='AvatarTop' style="width: 62px;").m-auto
                p.text-center.mb-0 Masiva: pueden llegar a afectar a muchas personas al mismo tiempo, en caso de un desastre natural, un atentado, por ejemplo.
                  
              .tarjeta.bg-blanco.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/num5.svg' alt='AvatarTop' style="width: 62px;").m-auto
                p.text-center.mb-0 Peligro y Oportunidad: la crisis puede representar una mejora o empeoramiento de la persona.
                  
              .tarjeta.bg-blanco.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/num6.svg' alt='AvatarTop' style="width: 62px;").m-auto
                p.text-center.mb-0 Duración de 4 a 6 semanas.
                  
              .tarjeta.bg-blanco.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/num7.svg' alt='AvatarTop' style="width: 62px;").m-auto
                p.text-center.mb-0 Intervención durante las 72 horas después de la exposición a un evento traumático.
                  
        .row.mb-5
          p.mb-0.text-center
            b(style='color: #008BFD;')  Se han identificado tres (3) elementos de la crisis circunstancial:
          
        .row.justify-content-center.mb-4(style= "background: linear-gradient(180deg, #003560, #003560)")
          .col-md-4.tarjeta--tabla.p-4(data-aos="flip-right", style= "background: linear-gradient(180deg, #133D60, #1B5D95)")
            .row.justify-content-start.mb-4
              .col-4
                img(src='@/assets/curso/tema2/icon1.svg' alt='AvatarTop' style="width: 110px;").m-auto
            p.mb-5
                b(style='color: #5BD3A9;') Ocurrencia de un evento crítico
            p.mb-0.text-white Esta crisis se vive en el marco de una situación que genera impacto emocional y psicológico profundo o trauma. Este evento puede estar asociado a hechos violentos, abuso, desastres, pérdida afectiva, entre otros.
                
          .col-md-4.tarjeta--tabla.p-4(data-aos="flip-right", style= "background: linear-gradient(180deg, #003560, #003560)")
            .row.justify-content-start.mb-4
              .col-4
                img(src='@/assets/curso/tema2/icon2.svg' alt='AvatarTop' style="width: 110px;").m-auto
            p.mb-4
                b(style='color: #5BD3A9;') La o las personas afectadas tienen dificultades para lidiar con la situación
            p.mb-0.text-white Como consecuencia del hecho traumático en cuerpo reacciona, presentando manifestaciones fisiológicas derivadas de la activación del sistema nervioso simpático, responsable de segregar hormonas para responder al estímulo y configurar reacciones aprendidas que permitan afrontar la situación de la mejor forma. Sin embargo, la situación se sale de control y se manifiestan experiencias de angustia, alteración cognitiva, llanto o ansiedad.
                
          .col-md-4.tarjeta--tabla.p-4(data-aos="flip-right", style= "background: linear-gradient(180deg, #133D60, #1B5D95)")
            .row.justify-content-start.mb-4
              .col-4
                img(src='@/assets/curso/tema2/icon3.svg' alt='AvatarTop' style="width: 110px;").m-auto
            p.mb-5
                b(style='color: #5BD3A9;') El momento de la intervención
            p.mb-0.text-white Se requiere apoyo de un tercero para afrontar y estabilizar.
              
                


    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      .h2 2.2 Fases de la crisis


    p.mb-4 La crisis es un proceso que inicia con la exposición al evento crítico y que se va desencadenando en diferentes fases que han sido estudiadas y que por lo general se manifiestan de la misma manera en las personas. En la siguiente imagen se describen cada una de ellas.

    .row.justify-content-center.mb-4
      .col-auto(style="border-bottom: 2px solid #008BFD")
        p.mb-0 
          b(style='color: #008BFD;') Fases de la Crisis

    .row.justify-content-center.mb-4
      .col-lg-11
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/infografia2.svg', alt='', style='')
              
          .tarjeta.color-acento-botones.p-4(x="9%" y="22%" numero="1" style='border-radius: 10px; background-color: #FFE8C8')
            h5.mb-3.text-center Fase uno Exposición al evento crítico
            p.mb-0.text-center Produce tensión y puede aparecer un estado de shock que protege a la víctima de una condición abrumadora. De forma inconsciente el cerebro se prepara para dar una respuesta efectiva, sacando los recursos de afrontamiento aprendidos para recuperar el equilibrio.
              
          .tarjeta.color-acento-botones.p-4(x="28%" y="80%" numero="2" style='border-radius: 10px; background-color: #FFE8C8')
            h5.mb-3.text-center Fase dos Respuesta desorganizada
            p.mb-0.text-center Hay aumento de la tensión y las respuestas emocionales y cognitivas fallan para enfrentar la crisis de forma adecuada. Las respuestas  se tornan confusas y  provocan  disfunciones.
              
          .tarjeta.color-acento-botones.p-4(x="47%" y="22%" numero="3" style='border-radius: 10px; background-color: #FFE8C8')
            h5.mb-3.text-center Fase tres Explosión
            p.mb-0.text-center Se pierde el control de las emociones, los pensamientos y los comportamientos tienden a ser contradictorios. Las reacciones pueden pasar de pasivas a agresivas durante semanas.
              
          .tarjeta.color-acento-botones.p-4(x="66%" y="77%" numero="4" style='border-radius: 10px; background-color: #FFE8C8')
            h5.mb-3.text-center Fase cuatro Estabilización
            p.mb-0.text-center Inicia la calma a medida que aparecen los recursos alternos. La persona es muy vulnerable en este momento y puede volver a la fase de explosión . Hay cierto nivel de conciencia de lo que ha sucedido, pero las reacciones ya no son tan extremas.
              
          .tarjeta.color-acento-botones.p-4(x="85%" y="22%" numero="5" style='border-radius: 10px; background-color: #FFE8C8')
            h5.mb-3.text-center Fase cinco Adaptación
            p.mb-0.text-center Comienza el proceso de control sobre las acciones, puede concentrarse en otras situaciones, además del evento vivido, orienta interés por el futuro, se reactiva la socialización y puede descubrir nuevos rumbos a partir de la experiencia vivida.
              
        figcaption 
          p.mb-0 
            b Nota. 
            b-none Textos adaptados del Manual de Primeros Auxilios Psicológicos. Federación Internacional de sociedades de la Cruz Roja.
            






    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      .h2 2.3 Trastornos y reacciones frente a una crisis

    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      .h2 2.4 Muerte y duelo


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

<style lang="sass"></style>
