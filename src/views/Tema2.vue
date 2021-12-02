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

    .row.justify-content-center.fondo-gradiente-inverso
      .col-lg-12.px-md-5
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
            
        .row.justify-content-center
          separador
          #t_2_3.titulo-segundo.color-acento-contenido
            .h2 2.3 Trastornos y reacciones frente a una crisis
            
        .row.justify-content-center.mb-5
          .col-lg-4.mb-4-mb-lg-0
            p.mb-0 Toda situación de crisis genera reacciones debido a la activación del sistema nervioso simpático, responsable de la respuesta automática frente a la percepción de peligro. Los cambios reactivos se ven reflejados internamente con 
              b(style='color: #008BFD;') el aumento de la segregación de adrenalina y cortisona o cortisol, hormonas responsables de la preparación del cuerpo para la huida o el ataque. 
            
          .col-10.col-lg-4.mb-4.mb-lg-0
            figure(data-aos='zoom-in')
              img(src='@/assets/curso/tema2/img2.svg' alt='imagen ambiental', style='width: ').m-auto
            
          .col-lg-4.mb-4.mb-lg-0
            .bg--green.p-4.mb-4
              .row.mb-4.lineas
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/lineVert.svg' alt='AvatarTop', style='width: 68px').m-auto
              p.mb-0 Mantener esta condición de supervivencia por largo tiempo puede llegar a producir efectos sobre la salud mental lo que se considera un 
                b(style='color: #008BFD;')  estado crítico de salud mental.
              
            p.mb-0 A continuación, se describen las diferentes reacciones que se pueden desencadenar durante una crisis, las cuáles dependiendo de su manifestación configuran trastornos ya sea de estrés agudo o de estrés postraumático.
        
        
        .row.justify-content-center.fondo-img.pb-4(:style="{'background-image': `url(${require('@/assets/curso/tema2/fondo-row.png')})`}" style='background-position: left top')
          .col-lg-12.px-5
            .row.justify-content-center.mb-5
              .col-10.col-lg-5.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema2/img3.png' alt='imagen ambiental', style='width: 500px').m-auto
              .col-lg-7
                .row.mb-4
                  .col-auto
                    .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
                      h4.text-white.mb-0 Reacciones físicas
                p.mb-4 Son manifestaciones fisiológicas que se desencadenan como consecuencia de la activación del sistema de supervivencia o sistema nervioso parasimpático, el cual es el responsable de la segregación de hormonas como la adrenalina y el cortisol necesarias para atacar o huir en caso de peligro. Cuando estas hormonas permanecen activas por mucho tiempo, se produce un desgaste físico evidente.
                .row.mb-4
                  .col-lg-6
                    ul.lista-ul
                      li 
                        i.fas.fa-check-circle(style="color: #008BFD;")
                        p.mb-0 Fatiga
                          
                      li 
                        i.fas.fa-check-circle(style="color: #008BFD;")
                        p.mb-0 Cansancio
                          
                      li 
                        i.fas.fa-check-circle(style="color: #008BFD;")
                        p.mb-0 Incremento del ritmo cardiaco
                          
                      li 
                        i.fas.fa-check-circle(style="color: #008BFD;")
                        p.mb-0 Hiperventilación
                          
                      li 
                        i.fas.fa-check-circle(style="color: #008BFD;")
                        p.mb-0 Sudoración
                          
                  .col-lg-6
                    ul.lista-ul
                      li 
                        i.fas.fa-check-circle(style="color: #008BFD;")
                        p.mb-0 Alteraciones del apetito
                          
                      li 
                        i.fas.fa-check-circle(style="color: #008BFD;")
                        p.mb-0 Alteraciones del sueño
                          
                      li 
                        i.fas.fa-check-circle(style="color: #008BFD;")
                        p.mb-0 Temblor corporal
                          
                      li 
                        i.fas.fa-check-circle(style="color: #008BFD;")
                        p.mb-0 Sensación de opresión en el pecho y el estómago
                          
                      li 
                        i.fas.fa-check-circle(style="color: #008BFD;")
                        p.mb-0 Empeoramiento de condiciones crónicas: diabetes, hipertensión.
                          

    .row.justify-content-center.fondo-gradiente-verde.mb-5
      .col-lg-12.px-md-5.pt-4
        .row.justify-content-center.mb-4
          .col-lg-4.mb-4-mb-lg-0
            .row.mb-4
              .col-auto
                .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
                  h4.text-white.mb-0 Reacciones cognitivas
            p.mb-0 Se refiere a las manifestaciones mentales que el miedo produce, por lo general provienen de la mente subconsciente, responsable de la reactividad. Durante la crisis pensar se hace difícil ya que hay una desconexión entre el cerebro responsable de la supervivencia y la mente consciente, lo que genera estas reacciones, que pueden ser más severas de acuerdo con el tiempo de activación que la persona experimente.
            
          .col-lg-8
            SlyderF.mb-0(columnas="col-md-6 col-lg-4")
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/icon4.svg' alt='AvatarTop' style="width: 68px;").m-auto
                p.text-center.mb-0 Confusión mental
                  
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/icon4.svg' alt='AvatarTop' style="width: 68px;").m-auto
                p.text-center.mb-0 Desorientación espacial
                  
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/icon4.svg' alt='AvatarTop' style="width: 68px;").m-auto
                p.text-center.mb-0 Pérdida de conciencia de la realidad
                  
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/icon4.svg' alt='AvatarTop' style="width: 68px;").m-auto
                p.text-center.mb-0 Dificultad para tomar decisiones
                  
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/icon4.svg' alt='AvatarTop' style="width: 68px;").m-auto
                p.text-center.mb-0 Duda frente a sus propias creencias
                  
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/icon4.svg' alt='AvatarTop' style="width: 68px;").m-auto
                p.text-center.mb-0 Dificultad para concentrarse
                  
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/icon4.svg' alt='AvatarTop' style="width: 68px;").m-auto
                p.text-center.mb-0 Pérdida de memoria
                  
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/icon4.svg' alt='AvatarTop' style="width: 68px;").m-auto
                p.text-center.mb-0 Exageración y sobrevaloración de situaciones de poca importancia
                  
    .row.mb-4
      .col-auto
        .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
          h4.text-white.mb-0 Reacciones emocionales

    .row.justify-content-center.mb-5
      .col-auto
        figure
          img(src='@/assets/curso/tema2/line1.svg' alt='AvatarTop' style="width: 88px;").m-aut
      .col
        p.mb-0 Los seres humanos están dotados de emociones básicas necesarias para la adaptación al medio ambiente. Las reacciones emocionales son una combinación entre el miedo, la ira, la tristeza y el asco que producen.


    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-12
            figure
              img(src='@/assets/curso/tema2/img4.svg', alt='imagen ambiental', style='width: 333px').m-auto
          
        ul.lista-ul
          li 
            i.fas.fa-check-circle
            p.mb-0.text-white Miedo incontrolado.
              
          li 
            i.fas.fa-check-circle
            p.mb-0.text-white Duda frente a sí mismo
          li 
            i.fas.fa-check-circle
            p.mb-0.text-white Baja autoestima
          li 
            i.fas.fa-check-circle
            p.mb-0.text-white Culpa

          
      .col-md.tarjeta.color-oscuro.p-5
        .row.justify-content-center.mb-4
          .col-12
            figure
              img(src='@/assets/curso/tema2/img5.svg', alt='imagen ambiental', style='width: 333px').m-auto
          
        ul.lista-ul
          li 
            i.fas.fa-check-circle
            p.mb-0.text-white Rabia
              
          li 
            i.fas.fa-check-circle
            p.mb-0.text-white Irritabilidad
          li 
            i.fas.fa-check-circle
            p.mb-0.text-white Sensación de desesperanza
          li 
            i.fas.fa-check-circle
            p.mb-0.text-white Llanto incontenido
          
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-12
            figure
              img(src='@/assets/curso/tema2/img6.svg', alt='imagen ambiental', style='width: 333px').m-auto
          
        ul.lista-ul
          li 
            i.fas.fa-check-circle
            p.mb-0.text-white Aislamiento 
              
          li 
            i.fas.fa-check-circle
            p.mb-0.text-white Dificultad para expresar emociones
          li 
            i.fas.fa-check-circle
            p.mb-0.text-white Hipervigilancia y sobresalto
          li 
            i.fas.fa-check-circle
            p.mb-0.text-white Incremento de conflictos con la familia
          li 
            i.fas.fa-check-circle
            p.mb-0.text-white Llanto incontenido

    .row.mb-4
      .col-auto
        .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
          h4.text-white.mb-0 Trastornos asociados al estado crítico en salud mental

    p.mb-4 Es importante comprender que los trastornos asociados a un estado crítico por lo general no se manifiestan durante la crisis, sino de forma posterior a la vivencia, por esta razón se debe analizar el daño potencial producido con el evento traumático y la correlación con otros aspectos que pueden agravar el suceso. Por ejemplo, una persona es víctima de violencia sexual y este hecho se convierte en el evento traumático, sin embargo, el estrés agudo puede agravarse debido a la falta de apoyo de la familia, el juzgamiento de la pareja, entre otras circunstancias. Seguramente una persona que vive la misma situación tendrá una evolución distinta si cuenta con las redes de apoyo familiares y de pareja necesarias. Esto es relevante ya que en 
      b(style='color: #008BFD;') la intervención no solamente se aborda la situación desencadenante, sino los hechos y condiciones agravantes de la misma que pueden desencadenar trastornos que perduran en el tiempo o que desaparecen.

    .row.justify-content-center
      .col-lg-12
        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/infografia3.svg', alt='imagen fografica', style='width: 512px;').m-auto
              
              
          div(x="34%" y="32%" tooltip="Estrés agudo" numero="" )
            //(:style="{'background-image': `url(${require('@/assets/curso/tema2/infografia1.svg')})`}" style='background-position: right top')
            h4(style='color: #5BD3A9 !important;') Estrés agudo
            p.mb-4.text-white Toda situación de peligro activa reacciones que desencadenan estrés. Esta es una reacción natural con la que cuenta el organismo para sobrevivir, Jhon W Barnhill, en el Manual MSD (2020), define el trastorno por estrés agudo como un período breve de recuerdos molestos que se produce 4 semanas después de haber sido testigo o de haber experimentado un episodio traumático. 
            p.mb-0.text-white Volviendo al ejemplo del abuso sexual, la víctima puede empezar a presentar recuerdos, imágenes mentales breves e intrusivas, sueños con su agresor, recapitula momentos del hecho abusivo, recciones disociativas tipo flashbakcs, en donde la persona siente como si estuviera viviendo el abuso sexual nuevamente, lo que genera una angustia intensa y la activación fisiológica y emocional que vivió en ese momento. La persona tendrá dificultad para pensar con claridad, difícilmente experimentará alegría, tendrá sobresaltos y vivirá hipervigilante cuando sale a la calle o se encuentra sola, ya que siente miedo de que el hecho se repita.
              
          div(x="68%" y="32%" tooltip="Tipos de traumas" numero="")
            h4(style='color: #5BD3A9 !important;') Trastorno de estrés postraumático
            p.mb-4.text-white Surge como una respuesta tardía o diferida a un evento estresante a la exposición con el evento estresante o a una situación breve o duradera de naturaleza excepcionalmente amenazante o catastrófica, que causaría por sí misma malestar generalizado a casi todo el mundo. (Clasificación Internacional de Enfermedades – CIE 10.)
            p.mb-0.text-white Este trastorno se caracteriza por la reactivación de los síntomas y las reacciones emocionales, cognitivas y físicas, en momentos posteriores al evento, viviendo un proceso de reexperimentación constante, a través del recuerdo. La diferencia entre estos dos trastornos, agudo y postraumático radica en la duración de los síntomas y el tipo de trauma. Si los síntomas de reactivación del evento traumático persisten por más de cuatro semanas, y si el trauma es de tipo 2, se configura el TEPT.
              
          div(x="50%" y="88%" tooltip="Trastorno de estrés postraumático" numero="")
            h4(style='color: #5BD3A9 !important;') Tipos de traumas
            p.mb-4.text-white 
              b Un Trauma tipo 1: 
              b-none surge como consecuencia del evento traumático casi de forma inmediata es susceptible de ser intervenido con la aplicación de los Primeros Auxilios Psicológicos, antes o durante las 72 horas siguientes y puede desencadenar Trastorno de estrés agudo. 
            p.mb-0.text-white 
              b El Trauma tipo 2: 
              b-none es la cadena de eventos traumáticos en el tiempo, que prevalecen como consecuencia de situaciones de violencia, secuestro y abuso sistemático, Estos eventos son mucho más susceptibles de generar TEPT
              



    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      .h2 2.4 Muerte y duelo


    .row.justify-content-center.align-items-center
      .col-lg-7.mb-4.mb-lg-0
        p.mb-4 Uno de los eventos de mayor efecto traumático en la sociedad es la muerte intempestiva de personas amadas, derivada de hechos violentos, accidentes o desastres. 
        .row.justify-content-center.align-items-center.mb-0
          .col-auto.lineas
            figure
              img(src="@/assets/curso/tema2/line2.svg", alt="alt", style='width: 84px').m-auto
          .col-lg.onTop
            .bg--green.neg--right.p-3
              p.mb-0 La muerte en la cultura occidental es sinónimo de gran dolor y tristeza para las personas, lo que ha generado resistencia para hablar de ella. Las personas consideran difícil aceptar la muerte y esto hace que cuando se presenta de forma cercana, produzca una reacción crítica y en ocasiones traumática.
      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/tema2/img7.jpg', alt='imagen ambiental', style='width: 512px;').m-auto
              

    .row.justify-content-center.fondo-gradiente-inverso
      .col-lg-12.px-md-5
        .row.mb-4
          .col-auto
            .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
              h4.text-white.mb-0 Duelo
              
        .row.mb-5
          p.mb-0 A continuación, se explicará qué es el duelo y cuáles son sus etapas.
          
        .row.mb-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            
        .row.mb-4
          .col-auto
            .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
              h4.text-white.mb-0 Manejo del duelo
              
        .row.mb-5
          p.mb-0 El duelo se desarrolla de forma espontánea y cada persona tendrá manifestaciones distintas, más o menos agravadas de acuerdo con las particularidades de la pérdida y de la persona que vive la situación. Para promover un duelo sano se recomienda:
            
        .row.mb-5
          .col-lg-12
            SlyderE(indicadores="centro" style='background-color: #ffff')
              .row.justify-content-center.p-4
                .col-md-7.mb-4.mb-md-0
                  h4.mb-4 Trabajar en sí mismo
                  p.mb-0 Es importante tener conciencia del autocuidado, ya que a pesar del dolor y lo difícil que puede ser la situación se debe comer adecuadamente, tratar de dormir, no descuidarse físicamente, caminar o hacer ejercicio físico, evitar consumir alcohol o sustancias psicoactivas, no auto formularse para poder dormir o descansar, acudir a profesionales de la salud para consultar sobre síntomas o afecciones físicas o emocionales frecuentes.
                    
                .col-10.col-md-5
                  figure
                    img(src='@/assets/curso/tema2/img8.jpg', alt='imagen ambiental', style='width: 500px;').m-auto
                    
              .row.justify-content-center.p-4
                .col-md-7.mb-4.mb-md-0
                  h4.mb-4 Entender las emociones propias
                  p.mb-4 Durante el duelo las emociones son cambiantes y desafiantes, es importante hablar y exteriorizar para no generar tensiones, buscar espacios de soledad para comprender por qué se siente lo que se siente, recibir llamadas y visitas cuando se sienta la persona realmente preparada, consultar con profesionales de la salud mental si considera que la situación es más fuerte que sus capacidades para manejar el dolor, trabajar en el reconocimiento de su vida sin la persona que ha perdido y entender que la tristeza y el dolor son normales.
                  p.mb-0 Sin embargo, el sufrimiento no lo es, ya que se genera como refuerzo de los pensamientos negativos asociados a la muerte o la pérdida,  por ende hay que trabajar en  hacer conciencia y evitar estos pensamientos.
                    
                .col-10.col-md-5
                  figure
                    img(src='@/assets/curso/tema2/img9.jpg', alt='imagen ambiental', style='width: 500px;').m-auto
                    
              .row.justify-content-center.p-4
                .col-md-7.mb-4.mb-md-0
                  h4.mb-4 Cuidar los pensamientos
                  p.mb-0 Durante el duelo los recuerdos se avivan y pueden ayudar a super la tensión o pueden aumentar el dolor, por tanto, es mejor evitar contaminar la mente y no consumirse en la memoria que se despierta visitando ciertos lugares, viendo sus pertenencias, sus fotos; esto solo aumentará el malestar. Durante este periodo es mejor evitar la exigencia cognitiva ya que la atención y la concentración se ven afectadas.
                    
                .col-10.col-md-5
                  figure
                    img(src='@/assets/curso/tema2/img10.jpg', alt='imagen ambiental', style='width: 500px;').m-auto
                    
              .row.justify-content-center.p-4
                .col-md-7.mb-4.mb-md-0
                  h4.mb-4 Cultivar la espiritualidad
                  p.mb-0 Esto dependerá de las creencias de cada persona, pero es recomendable buscar rituales que permitan sentir que se despide de la persona y cierra un ciclo. Esto puede hacerse buscando espacios que produzcan paz, escribiendo una carta de despedida, exaltando la vida de la persona que se ha ido, a través de un reconocimiento público o una expresión artística.
                    
                .col-10.col-md-5
                  figure
                    img(src='@/assets/curso/tema2/img11.jpg', alt='imagen ambiental', style='width: 500px;').m-auto
                    



















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
