<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Salud mental
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        p.mb-0 La salud como proceso, integra componentes físicos, mentales, emocionales y sociales y cada uno de ellos cumple un papel fundamental en el bienestar de las personas. Sin embargo, aún se sigue pensando que, si el cuerpo físico está bien, la salud también lo está, ignorando la influencia de otros factores y dimensiones humanas. Es así como durante mucho tiempo la salud mental fue vista con sentido vergonzoso, ya que las personas consideraban que tener problemas mentales representaba un estigma social. Aunque en la actualidad se ha avanzado en este sentido y 
          b(style='color: #008BFD;')  cada vez más hay mayor preocupación por mantener una mente sana, 
          b-none aún falta mayor conciencia para que las personas asuman con responsabilidad el cuidado de la salud mental.
      .col-10.col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img1.png', alt='imagen ambienteal', style='width: 393px').m-auto
      .col-lg-4
        p.mb-4 
          b(style='color: #008BFD;') La Organización Mundial de la Salud (OMS) define la salud mental como
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right.mb-4
          h4.mb-2 un estado de bienestar en el que el individuo desarrolla sus capacidades puede afrontar las tensiones normales de la vida, puede trabajar productiva y fructíferamente y es capaz de contribuir a su comunidad.
          p.mb-0.text-center (World Health Organization, 2001).


    .row.justify-content-center.mb-5
      .col-10.col-lg-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img2.jpg', alt='imagen ambienteal', style='width: 610px').m-auto
      .col-lg-6
        p.mb-4 Es importante entender que este concepto no se concibe desde la ausencia de la enfermedad o el problema, sino de la capacidad de afrontamiento que permite a una persona a pesar de estar diagnosticada con una psicopatología, esta pueda tener una salud mental positiva en términos de su productividad y sus interacciones.
        p.mb-0 En Colombia la salud mental es considerada un derecho, contemplado a través de la Ley 1616 de 2013, cuyo objeto es 
          b(style='color: #008BFD;') “garantizar el ejercicio pleno del derecho a la salud mental a la población colombiana priorizando a los niños, las niñas y adolescentes mediante la promoción de la salud y la prevención del trastorno mental y la atención integral e integrada”. 
          b-none Por otro lado, la política pública de salud mental establece los lineamientos frente a la atención primaria, la promoción y la prevención, buscando que la salud mental se convierta en agenda prioritaria en el país.

    p.mb-5 Así mismo, la salud siempre se verá afectada de forma positiva o negativa por diferentes factores, que inciden directamente en el comportamiento de la enfermedad o del bienestar en general de las personas como las siguientes:


    .row.justify-content-center.fondo-gradiente
      .col-lg-12.px-md-5
        .row.mb-5.mt-5
          .col-auto
            .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
              h4.text-white.mb-0 Determinantes sociales en salud
            
        .row.justify-content-center.fondo-img(:style="{'background-image': `url(${require('@/assets/curso/tema1/fondo-img1.png')})`}" style='background-position: right top')
          .col-lg-12.px-5
            .row.justify-content-center
              .col-lg-7.mb-4.mb-lg-0
                p.mb-4 La OMS establece que los Determinantes Sociales en Salud son factores que están relacionados con los grandes problemas: la pobreza, la exclusión, la guerra, entre otros. Son situaciones que van más allá de las posibilidades de transformación individual o familiar y en este caso el estado entra como garante de los derechos en salud mental, generando acciones protectoras para mitigar los riesgos y afectaciones, ver figura 1.
                p.mb-5 #[strong Determinantes sociales en Salud]
                  
                AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azulita")
                  .row.justify-content-end(titulo="Condición de género")
                    .col-md-11  
                      p.mb-0 Un ejemplo de la influencia de los determinantes sociales en la salud mental de las personas es la condición de género. Ser mujer en una sociedad que privilegia lo masculino, significa asumir roles y cargas que han generado efectos y desigualdades sociales que impactan la vida de las mujeres. Algunos datos relevantes tomados del DANE muestran cómo la brecha de desempleo hoy entre hombres y mujeres es de 10 puntos porcentuales, frente a 6.3 millones de hombres hay 11.184.000 mujeres en condición de desempleo, de igual forma alrededor de 8 millones de mujeres se dedican al trabajo del hogar sin ningún tipo de remuneración.
                  .row.justify-content-end(titulo="Violencia de género")
                    .col-md-11
                      p.mb-0 En el caso de la violencia cada hora en Colombia 3 mujeres reportan ser víctimas de violencia, 8 de cada 10 casos son en su propio hogar. Estas condiciones se consideran factores de riesgo en salud mental y pueden llegar a generar un problema o trastorno mental a lo largo de la vida.
                  .row.justify-content-end(titulo="Edad")
                    .col-md-11
                      p.mb-4 Con respecto a la edad, se han identificado momentos de riesgo en salud mental en la vida de las personas, debido fundamentalmente a cambios en el ciclo vital.
                      p.mb-0 La adolescencia, la edad media y la vejez se han considerado momentos complejos por los cambios asociados a los mismos, aunque en el caso de los adultos mayores existen además situaciones como la exclusión social, la falta de oportunidades y el deterioro mental que generan un impacto mayor.
                  .row.justify-content-end(titulo="Violencia social y guerra")
                    .col-md-11
                      p.mb-4 Colombia por ejemplo ha vivido más de 5 décadas en guerra, en donde el conflicto armado ha dejado secuelas en la salud mental no solo de quiénes han estado directamente vinculados a hechos de violencia directa, sino en general de toda la población.
                      p.mb-4 Cuando una persona durante su desarrollo vive en el marco de condiciones en donde los conflictos son sinónimo de muerte, eliminación del otro y violencia en alguna de sus formas, la sociedad en sí misma aprende y se convierte en violenta.
                      p.mb-0 No en vano Colombia es uno de los países con las cifras más altas de violencia contra niños, niñas y adolescentes en el mundo, lo que desencadena un factor de alto riesgo en salud mental.
                      
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema1/img3.png', alt='imagen ambienteal', style='width: 500px').m-auto


    .row.justify-content-center.mb-5
      .col-lg-6
        h4.text-center.mb-4 A continuación, se explican los más relevantes: 
        .titulo-sexto.color-acento-contenido.mb-5
          span Principios de la Intervención
            
        figure
          img(src='@/assets/curso/tema1/esquema1.svg', alt='Principios de la Intervención', style='').m-auto


    .row.justify-content-center.fondo-completo(:style="{'background-image': `url(${require('@/assets/curso/tema1/fondo2.png')})`}" style='background-position: center bottom')
      .col-lg-12.px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-10.col-lg-4.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='imagen ambiental', style='width: 400px;').m-auto
            
          .col-lg-8.order-1.order-lg-2
            .row.mb-5
              .col-auto
                .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
                  h4.text-white.mb-0 Factores de riesgo
            .row
              p.mb-4 Los factores de riesgo en salud mental tienen que ver con condiciones individuales, familiares, sociales que aumentan la posibilidad de que un problema o trastorno mental ocurra a lo largo de la vida de una persona.
              p.mb-4
                b(style='color: #008BFD;') En Colombia en el marco de la política nacional de salud mental, (Resolución 4886 de 2018), los factores prevalentes que ayudan a desencadenar problemas de trastornos mentales son: el suicidio, el consumo de sustancias psicoactivas, las violencias y convivencia social y la epilepsia.
              p.mb-0 Así mismo, existen condiciones individuales como factores hereditarios, personalidad y recursos de afrontamiento que también pueden convertirse en factores de riesgo de acuerdo con la manera como se comportan en cada persona, figura 2.
            
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-4.mb-lg-0
            h4.mb-0.text-center Condiciones individuales que afectan la salud mental
          .col-lg-9
            SlyderF.mb-0(columnas="col-lg-6 col-xl-4")
              .tarjeta-avatar(style="width: 190px")
                img(src='@/assets/curso/tema1/icon1.svg' alt='AvatarTop')
                .tarjeta.color-blanco
                  .p-4.pb-5
                    p.text-center.mb-0 Baja estima
                  
              .tarjeta-avatar(style="width: 190px")
                img(src='@/assets/curso/tema1/icon2.svg' alt='AvatarTop')
                .tarjeta.color-blanco
                  .p-4
                    p.text-center.mb-0 Pensamientos negativos
                  
              .tarjeta-avatar(style="width: 190px")
                img(src='@/assets/curso/tema1/icon3.svg' alt='AvatarTop')
                .tarjeta.color-blanco
                  .p-4
                    p.text-center.mb-0 Condiciones hereditarias
                  
              .tarjeta-avatar(style="width: 190px")
                img(src='@/assets/curso/tema1/icon4.svg' alt='AvatarTop')
                .tarjeta.color-blanco
                  .p-4
                    p.text-center.mb-0 Baja tolerancia a la frustración
                  
              .tarjeta-avatar(style="width: 190px")
                img(src='@/assets/curso/tema1/icon5.svg' alt='AvatarTop')
                .tarjeta.color-blanco
                  .p-4
                    p.text-center.mb-0 Habilidades sociales escasas
                  
              .tarjeta-avatar(style="width: 190px")
                img(src='@/assets/curso/tema1/icon6.svg' alt='AvatarTop')
                .tarjeta.color-blanco
                  .p-4
                    p.text-center.mb-0 Escasas redes de apoyo
                  
              .tarjeta-avatar(style="width: 190px")
                img(src='@/assets/curso/tema1/icon7.svg' alt='AvatarTop')
                .tarjeta.color-blanco
                  .p-4.pb-5
                    p.text-center.mb-0 Soledad
                  
              .tarjeta-avatar(style="width: 190px")
                img(src='@/assets/curso/tema1/icon8.svg' alt='AvatarTop')
                .tarjeta.color-blanco
                  .p-4.pb-5
                    p.text-center.mb-0 Personalidad
                  
              .tarjeta-avatar(style="width: 190px")
                img(src='@/assets/curso/tema1/icon9.svg' alt='AvatarTop')
                .tarjeta.color-blanco
                  .p-4
                    p.text-center.mb-0 Capacidad de afrontamiento
                  
                
        .row.justify-content-center.align-items-center.pb-5
          .col-lg-7.onTop
            p.mb-4 En el marco del concepto de salud mental en donde se hace alusión al estado de bienestar que permite afrontar la vida con sus retos y de esta forma poder ser productivo, estos factores individuales son de gran importancia. Condiciones como la estima por ejemplo influyen en la forma como una persona piensa, siente y actúa frente a sí misma; si esa construcción está enfocada hacia “no poder”, “no ser capaz”, “ser inferior”, muy difícilmente podrá superar situaciones complejas, sin llegar a un desborde emocional. En este sentido también el pensamiento centrado y enfocado son necesarios para disminuir los riesgos asociados a la salud mental, una persona con pensamientos catastróficos tendrá mayor tendencia al estrés y la ansiedad, que una que ve la vida con menos temor. 
            .bg--green.mb-4.neg--right.p-4
              p.mb-0 Cabe resaltar que las condiciones hereditarias pueden aparecer como condiciones de riesgo cuando por ejemplo una persona tiene antecedentes familiares de alguna enfermedad mental que puede ser esquizofrenia, lo que aumenta la posibilidad de desarrollarla, aunque no significa necesariamente que esto ocurra. 
            .row.justify-content-center.mb-4
              .col-auto.lineas
                figure
                  img(src='@/assets/curso/tema1/lineaVert.svg' alt='AvatarTop', style='width: 88px').m-auto
              .col-auto.col-lg
                p.mb-0 Finalmente, los rasgos de personalidad en donde se identifica tendencia a la ansiedad, rasgos depresivos y de estrés e introversión marcada, pueden generar alertas tempranas frente a la capacidad de afrontamiento y mitigar situaciones de riesgo que puedan desencadenarse como consecuencia de estos rasgos a lo largo de la vida.
              
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/tema1/img5.jpg' alt='AvatarTop', style='width: 500px').m-auto

    
    #t_1_1.titulo-segundo.color-acento-contenido
      .h2 1.1 Problema mental
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 La encuesta Nacional de salud mental (2015) define 
          b(style='color: #008BFD;') el problema mental como el malestar y las dificultades en la interacción con los otros, que se generan por la vivencia de eventos estresantes que no son tan graves como un trastorno mental. 
          b-none En esta categoría se encuentran las consecuencias psicológicas de las experiencias traumáticas y las reacciones emocionales ante las pérdidas significativas tales como, síntomas depresivos y/o ansiosos, consumo de alcohol y otras sustancias psicoactivas, problemas de aprendizaje, problemas de comunicación, dificultades de socialización, conductas de riesgo alimentario (no comer aunque se tenga hambre, malestar con el acto de comer, atracones, vómito después de comer) y alteraciones en el sueño, entre otros (Ministerio de Salud. p. 8).
      .col-10.col-lg-6
        figure
          img(src='@/assets/curso/tema1/img6.png' alt='AvatarTop', style='width: 610px').m-auto


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        .bg--green.p-4.py-3
          p.mb-0 Los problemas mentales hacen parte de las condiciones que más se pueden encontrar en la cotidianidad de las personas y surgen en escenarios de convivencia familiar, en las relaciones de pareja donde hay conflictos mal gestionados, en el mundo del trabajo como consecuencia del estrés o la insatisfacción laboral, en las relaciones entre pares, por problemas de autoimagen y autoestima. Son diversas las causas, sin embargo, hay que tener presente que donde se encuentre activo el sufrimiento emocional, manifestado en tristeza, irritabilidad, angustia, estrés, allí por lo general aparece un problema mental.
      .col-10.col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img7.png' alt='AvatarTop', style='width: 400px').m-auto
      .col-lg-4
        .row.mb-4.lineas
          .col-auto
            figure
              img(src='@/assets/curso/tema1/equis.svg' alt='AvatarTop', style='width: 85px').m-auto
        p.mb-0 Por lo general las personas pueden sufrir durante su vida episodios relacionados con problemas mentales, sin saber que están atravesando por una afectación psicológica o emocional, ya que se han naturalizado diversas formas de sufrimiento, por tanto, es de vital importancia 
          b(style='color: #008BFD;') poner atención a las manifestaciones descritas para generar acciones que prevengan trastornos futuros.


    
    
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      .h2 1.2 Trastornos mentales
    
    
    p.mb-4 El trastorno mental es definido en el Manual Diagnóstico y Estadístico de los Trastornos Mentales (DSM, versión 5 por sus siglas en inglés) como 
      b(style='color: #008BFD;')  “un síndrome caracterizado por una alteración clínicamente significativa del estado cognitivo, la regulación emocional o el comportamiento del individuo que refleja una disfunción de los procesos psicológicos, biológicos o del desarrollo que subyacen en su función mental”. 
    
    p.mb-5 De esta forma, los problemas mentales y los trastornos se diferencian fundamentalmente por la intensidad de los síntomas, el nivel de funcionalidad que compromete y la discapacidad que puede llegar a provocar en las personas.



    .row.justify-content-center.align-items-center.mb-5
        .col-10.col-lg-4.mb-4.mb-lg-0.pe-lg-0
          figure
            img(src='@/assets/curso/tema1/img8.svg' alt='imagen ambiental', style='').m-auto
        .col-lg-4.mb-4.mb-lg-0.ps-lg-0
          .bg--green.p-4
            .row.mb-3.lineas
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/equis2.svg' alt='AvatarTop', style='width: 55px').m-auto
            p.mb-0 De esta forma, los problemas mentales y los trastornos se diferencian fundamentalmente por la intensidad de los síntomas, el nivel de funcionalidad que compromete y la discapacidad que puede llegar a provocar en las personas.
              
        .col-lg-4
          p.mb-0 A diferencia del problema mental, el trastorno viene acompañado de síntomas más severos que generan disfuncionalidad evidente. Por ejemplo, 
            b(style='color: #008BFD;') en el caso de la depresión, existe una diferencia con los estados de tristeza, ya que esta enfermedad se manifiesta adicionalmente con pensamientos oscuros frente a la vida, desmotivación, dificultad para salir de la cama, llanto incontenido y la tristeza se vive como una emoción de dolor, más no genera distorsión cognitiva aparente. 
            
            
    p.mb-4 Lo más importante es comprender que el trastorno mental es una enfermedad como cualquier otra, que debe ser atendida por profesionales, que hay que atender a las señales de alarma y que los tratamientos, ya sean farmacológicos o psicoterapéuticos deben realizarse sin temor y con rigurosidad. La enfermedad mental no puede seguir siendo una situación vergonzosa para las personas, porque las consecuencias son altamente discapacitantes, una persona que pierde su principio de realidad altera su percepción y le cuesta pensar y tomar decisiones, lo que genera problemas en todas las dimensiones humanas. A continuación, se explican los tipos de trastornos y sus síntomas:


    .row.justify-content-center.fondo-completo(:style="{'background-image': `url(${require('@/assets/curso/tema1/fondo2.png')})`}" style='background-position: center bottom')
      .col-lg-12.px-5
        .row.justify-content-center.align-items-center.mb-5.fondo-ancla
          .col-10.col-lg-4.mb-4.mb-lg-0.lineas
            figure
              img(src='@/assets/curso/tema1/img9.png' alt='imagen ambiental', style='width: 400px').m-auto
          #anclas.col-lg-8.fondo-ancla2
            .row.justify-content-center.gx-lg-2
              .col-6.col-md-3.mb-4.mb-lg-0
                .tarjeta--boton.color-amarillo.p-4.mb-4.mb-lg-0.h-100(@click="goToElement('1')" @mouseover="mostrarIndicador = false")
                  .row.justify-content-center.mb-3
                    .col-7
                      figure
                        img(src='@/assets/curso/tema1/icon10.svg', alt='icon-avatar', style='width: 64px').m-auto
                    
                  p.mb-0.text-center Trastornos mentales comunes
                  
              .col-6.col-md-3.mb-4.mb-lg-0
                .tarjeta--boton.color-amarillo.p-4.mb-4.mb-lg-0.h-100(@click="goToElement('2')" @mouseover="mostrarIndicador = false")
                  .row.justify-content-center.mb-3
                    .col-8
                      figure
                        img(src='@/assets/curso/tema1/icon11.svg', alt='icon-avatar', style='width: 77px').m-auto
                    
                  p.mb-0.text-center Trastornos depresivos
                  
              .col-6.col-md-3.mb-4.mb-lg-0
                .tarjeta--boton.color-amarillo.p-4.mb-4.mb-lg-0.h-100(@click="goToElement('3')" @mouseover="mostrarIndicador = false")
                  .row.justify-content-center.mb-3
                    .col-7
                      figure
                        img(src='@/assets/curso/tema1/icon12.svg', alt='icon-avatar', style='width: 60px').m-auto
                    
                  p.mb-0.text-center Trastornos de ansiedad
                  
              .col-6.col-md-3.mb-4.mb-lg-0
                .tarjeta--boton.color-amarillo.p-4.mb-4.mb-lg-0.h-100(@click="goToElement('4')" @mouseover="mostrarIndicador = false")
                  .row.justify-content-center.mb-3
                    .col-7
                      figure
                        img(src='@/assets/curso/tema1/icon13.svg', alt='icon-avatar', style='width: 80px').m-auto
                    
                  p.mb-0.text-center Síntomas
                
        .row.justify-content-center.mb-5
          .col-11(style='border-bottom: dotted 4px #e8e8e8; ')
          
        #1.row.justify-content-between.mb-5
          .col-auto
            .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
              h4.text-white.mb-0 Trastornos mentales comunes
          .col-auto
            figure(@click="goToElement('anclas')" @mouseover="mostrarIndicador = false")
              img(src='@/assets/curso/tema1/up.svg', alt='icon', style='width: 33px').m-auto
            
        .row.justify-content-center.align-items-top.mb-5
          .col-lg-4.mb-4.mb-lg-0
            p.mb-0 Se han denominado trastornos mentales comunes a aquellos que presentan mayor prevalencia en el mundo. La Organización Panamericana de la Salud (2017) plantea que los trastornos mentales comunes se refieren a dos categorías principales de diagnóstico: los trastornos depresivos y los trastornos de ansiedad. Estos trastornos son altamente prevalentes en la población (de ahí que se consideren “comunes”) y repercuten en el estado de ánimo o los sentimientos de las personas afectadas. Los síntomas varían en cuanto a su intensidad (de leves a severos) y duración (de meses a años). Estos trastornos son condiciones de salud diagnosticables y se diferencian de los sentimientos de tristeza, estrés o temor que cualquiera puede experimentar ocasionalmente en su vida. 
              b(style='color: #008BFD;') (Depresión y otros trastornos mentales comunes. Estimaciones sanitarias mundiales. Washington, D.C.: Organización Panamericana de la Salud; 2017.)
              
          .col-10.col-lg-4.mb-4.mb-lg-0.lineas2
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img10.jpg' alt='imagen ambiental', style='width: 400px').m-auto
            
          .col-lg-4
            .row.mb-4.lineas
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/ondulada.svg' alt='AvatarTop', style='width: 50px').m-auto
            .p-4.py-3(style="background-color: #D4E2EE")
              p.mb-0 En Colombia en el marco de la Encuesta Nacional de Salud Mental se encontraron como 
                b(style='color: #008BFD;') trastornos prevalentes la ansiedad de cualquier tipo, la fobia social, la depresión de cualquier tipo. 
                b-none De igual forma el suicidio, sin ser un diagnóstico en sí mismo, representa un resultado no deseado en salud mental, que tiene diferentes causas y factores para su ocurrencia, pero que la prevalencia se encuentra en el proceso suicida, más que el acto suicida ocurrido.
                
        .row.justify-content-center.mb-4
          .col-lg-6
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img11.jpg' alt='imagen ambiental', style='width: 610px').m-auto
          .col-lg-6
            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/lines-vertical.svg' alt='AvatarTop', style='width: 50px').m-auto
            p.mb-4 Se dice que todas las personas a lo largo de la vida pueden llegar o llegarán a sufrir algún tipo de trastorno mental común, lo que significa que la prevalencia en la aparición de estos síntomas es bastante alta y por tanto se debe trabajar en la prevención de los diferentes factores de riesgo que pueden desencadenarla. 
            p.mb-0 Por lo general los hábitos influyen de manera importante en la aparición o no de estos trastornos. 
              b(style='color: #008BFD;') Es así como la ingesta de licor o cualquier otro tipo de sustancias psicoactiva, la vida sedentaria, la despreocupación por aprender a manejar y gestionar las emociones y los conflictos de forma positiva, la falta de un proyecto de vida que entregue propósito de vida, 
              b-none son algunas de las causas que pueden desencadenar la aparición de la enfermedad en cualquier momento del ciclo vital.


    
    .row.justify-content-center.mb-5
      .col-11(style='border-bottom: dotted 4px #e8e8e8;')


    #2.row.justify-content-between.mb-5
      .col-auto
        .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
          h4.text-white.mb-0 Trastornos depresivos
      .col-auto
        figure(@click="goToElement('anclas')" @mouseover="mostrarIndicador = false")
          img(src='@/assets/curso/tema1/up.svg', alt='icon', style='width: 33px').m-auto


    .row.justify-content-center.fondo-img.mb-4(:style="{'background-image': `url(${require('@/assets/curso/tema1/fondo-img1.png')})`}" style='background-position: right top')
      .col-lg-12.px-5
        .row.justify-content-center.mb-5
          .col-lg-7.mb-4.mb-lg-0
            p.mb-4 La depresión se enmarca en 
              b(style="color: #008BFD") una emoción constante de tristeza que se alimenta de forma recurrente con pensamientos que la anidan y desencadenan conductas como la falta de interés o de placer, tendencia a la culpa, una baja autoestima, exceso de sueño o pérdida de este, alteración del apetito, cansancio, dolor muscular, dificultades para concentrarse, baja atención y mirada oscura de la vida. 
              b-none Las personas con trastornos depresivos tienen dificultades para ser productivas, ya sea en su trabajo o en el estudio, por lo general la vida se vuelve difícil de sobrellevar en su cotidianidad. Por este motivo uno de los riesgos más altos de una depresión severa, es el suicidio, debido precisamente a ese cansancio con la vida que el trastorno produce.
                
            p.mb-4 Los trastornos depresivos se clasifican dos categorías: 
              
            TabsA.color-primario.mb-0
              .tarjeta.bg-colorD.p-4(titulo="Trastorno depresivo mayor")
                .row.justify-content-center
                  .col-12.p-5.py-3
                    h4.mb-4 Trastorno depresivo mayor
                    p.mb-0 De acuerdo con sus manifestaciones e intensidad puede ser leve, moderado o severo.
                      
              .tarjeta.bg-colorD.p-4(titulo="Distimia")
                .row.justify-content-center
                  .col-12.p-5.py-3
                    h4.mb-4 Distimia
                    p.mb-0 Se caracteriza por ser un proceso depresivo leve pero crónico. La diferencia entre cada categoría está fundamentalmente en la severidad de los síntomas y en la persistencia de estos. (Depresión y otros trastornos mentales comunes. Estimaciones sanitarias mundiales. Washington, D.C.: Organización Panamericana de la Salud; 2017. ).
                
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/tema1/img12.png', alt='imagen ambienteal', style='width: 500px').m-auto
            
        .row.justify-content-center.mb-0
          .col-lg-12
            .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
              .row.m-0.align-items-center.justify-content-between
                .col-lg-3.mb-4.mb-lg-0
                  h3.mb-0 Otra manifestación de esta patología depresiva es la siguiente: 
                .col-lg-9
                  .bloque-texto-a__texto.p-4
                    h4.mb-4(style="color: #008BFD") La depresión se enmarca en 
                    p.mb-0 Otra manifestación de esta patología depresiva es el llamado trastorno afectivo bipolar que maneja dos tipos de picos emocionales: tristeza profunda y episodios maníacos caracterizados por una gran exaltación emocional que desencadena sobreactividad, verborrea, pérdida del sueño, exageración de episodios reales.
                    
    .row.justify-content-center.mb-0
      .col-11(style='border-bottom: dotted 4px #e8e8e8;')
    
    .row.justify-content-center.fondo-gradiente.mb-5
      .col-lg-12.px-md-5.pt-5
        #3.row.justify-content-between.mb-5
          .col-auto
            .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
              h4.text-white.mb-0 Trastornos de ansiedad
          .col-auto
            figure(@click="goToElement('anclas')" @mouseover="mostrarIndicador = false")
              img(src='@/assets/curso/tema1/up.svg', alt='icon', style='width: 33px').m-auto
              
        .row.justify-content-center.mb-5
          .col-lg-7.mb-4.mb-lg-0
            p.mb-4 Los trastornos de ansiedad se enmarcan en una emoción constante de miedo que genera dificultades para enfrentar situaciones mínimas de la vida, generando un desborde de emociones, pánico y confusión. Estos trastornos se clasifican en:
            AcordionA(tipo="b" clase-tarjeta="tarjeta bg-colorD")
              .row(titulo="Ansiedad generalizada")
                .col-md-12
                  p.mb-0 Por lo general las personas presentan miedo, angustia y preocupación extrema por muchas cosas, sin distinción aparente de la causa. 
                  
              .row(titulo="Ansiedad social ")
                .col-md-12
                  p.mb-0 La principal manifestación es el miedo que produce el contacto con las personas, es sentirse observado. Esta ansiedad puede llegar incluso a manifestar síntomas cuando se realizan acciones cotidianas como una llamada telefónica, hablar con el señor del supermercado para resolver una duda.
                  
              .row(titulo="Trastorno de ansiedad fóbica")
                .col-md-12
                  p.mb-0 Las fobias se manifiestan como miedos específicos a ciertos objetos, situaciones o condiciones que van de la mano de una distorsión del condicionamiento del miedo. Cuando una fobia se convierte en una situación disfuncional, es decir que dificulta la vida y la productividad, entra a hacer parte de los trastornos de ansiedad. Como ejemplo están los miedos a las alturas, a los lugares cerrados, entre otros. (Consultar documento de apoyo: Bados, A:  Fobias específicas. Universidad de Barcelona. 2009).
                  
              .row(titulo="Trastorno de angustia")
                .col-md-12
                  p.mb-0 Se conoce de forma más cercana como trastorno de pánico y se caracteriza por manifestarse a través de crisis de miedo intenso, sin existir realmente una condición de peligro. Las personas tienen diferentes manifestaciones como huida, llanto, dificultad para tomar decisiones, distorsiones cognitivas.
                  
              .row(titulo="TOC o Trastorno Obsesivo Compulsivo")
                .col-md-12
                  p.mb-0 Como principal manifestación están las conductas repetitivas de carácter compulsivo,  por lo general relacionadas con pensamientos irracionales alrededor de la organización de espacios, acumulación de objetos, lavado de manos y limpieza de superficies por miedo a gérmenes.
                  
              .row(titulo="Trastorno de Estrés Postraumático o TEPT")
                .col-md-12
                  p.mb-0 Este trastorno aparece como consecuencia de un hecho que produce trauma en la personas: abuso sexual, agresión, desastres, muerte súbita. Cuando ocurre el trauma la persona alcanza a procesar con sus recursos emocionales y psicológicos el impacto y puede llegar a desarrollar en el futuro estrés postraumático. Este se manifiesta a través de la recurrencia del recuerdo traumático y la manifestación física y fisiológica de los síntomas, como si estuviera viviendo el hecho nuevamente.
                  
          .col-10.col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img13.jpg' alt='imagen ambiental', style='width: 500px').m-auto

    .row.justify-content-center.mb-5
      .col-11(style='border-bottom: dotted 4px #e8e8e8;')
    
    #4.row.justify-content-between.mb-5
      .col-auto
        .px-4.py-2(style='background-color: #008BFD; border-radius: 50px;')
          h4.text-white.mb-0 Síntomas
      .col-auto
        figure(@click="goToElement('anclas')" @mouseover="mostrarIndicador = false")
          img(src='@/assets/curso/tema1/up.svg', alt='icon', style='width: 33px').m-auto

    .row.justify-content-center.mb-0
      .col-lg-12
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-4
          .row.m-0.align-items-center.justify-content-center
            .col-lg-3.mb-4.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img14.svg', alt='imagen ambiental', style='width: 250px').m-auto
            .col-lg-9
              .bloque-texto-a__texto.p-4
                h4.mb-4(style="color: #008BFD") Síntomas
                p.mb-4 Los síntomas se pueden presentar de forma crónica o en episodios específicos y la enfermedad varía de acuerdo a la levedad o severidad de los síntomas. En la siguiente tabla se pueden apreciar cada uno de estos:  
                .row
                  .col-auto
                    a.anexo.mb-0(:href="obtenerLink('/downloads/trastornos_mentales_comunes.pdf')" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-pdf.svg")
                      .anexo__texto
                        p.mb-0 
                          b(style="color: #008BFD") Anexo. 
                          b-none(style="color: #008BFD") Trastornos_mentales_comunes



    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      .h2 1.3 Crisis
  

    p.mb-5 Todas las personas a lo largo de la vida están expuestas a circunstancias difíciles ya sea por situaciones determinadas por el entorno, como una guerra, o por un desastre natural inesperado, como un terremoto o por las situaciones propias de la vida como la muerte de las personas amadas, la pérdida afectiva, los fracasos laborales, entre muchas condiciones que pueden generar desestabilización emocional y psicológica en una persona.


    .row.justify-content-center.align-items-top.mb-5
        .col-10.col-lg-4.mb-4.mb-lg-0.pe-lg-0
          figure
            img(src='@/assets/curso/tema1/img15.svg' alt='imagen ambiental', style='width: ').m-auto
            
        .col-lg-4.mb-4.mb-lg-0.ps-lg-0
          .bg--green.p-4
            p.mb-0 Los seres humanos cuentan con recursos emocionales, psicológicos y cognitivos para afrontar los desafíos y retos de la vida hace parte del instinto de supervivencia y de los aprendizajes que durante el desarrollo que van dando desde la interacción social; sin embargo, algunas personas pueden necesitar ayudas adicionales, ya que se sale de su control y manejo la exposición a eventos difíciles y traumáticos. En este escenario es donde se configura la 
              b(style='color: #008BFD;') “crisis”
              b-none .
              
        .col-lg-4
          .row.mb-3.lineas
            .col-auto
              figure
                img(src='@/assets/curso/tema1/equis2.svg' alt='AvatarTop', style='width: 55px').m-auto
          p.mb-0 De acuerdo con lo planteado por la OPS, (Cohen,1999), 
            b(style='color: #008BFD;') la crisis es un periodo crucial o momento decisivo de la vida de una persona, que tiene consecuencias físicas y emocionales. 
            b-none Es decir, una crisis es un periodo limitado de desequilibrio psicológico precipitado por un cambio súbito o significativo en la situación vital del individuo.
            










  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
  methods: {
    goToElement(id) {
      const ele = document.getElementById(id)
      window.scrollTo(ele.offsetLeft, ele.offsetTop + 100)
    },
  },
}
</script>

<style lang="sass"></style>
