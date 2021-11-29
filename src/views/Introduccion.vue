<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-auto.lineas
        figure
          img(src='@/assets/curso/lineas.svg', alt='lineas', style='width: 85px').m-auto
      .col-lg
        p.mb-0 En este componente de formación se abordarán los conceptos básicos de salud mental, los factores de riesgo asociados, los trastornos mentales comunes que presentan mayor prevalencia en Colombia y que deben ser conocidos desde sus síntomas y manifestaciones para poder ser atendidos en caso de una crisis asociada a los mismos. 
          b(style='color: #008BFD;') De igual forma se abordará el concepto de crisis desde sus manifestaciones más comunes y desde sus reacciones, para finalizar con los principios y lineamientos de los primeros auxilios psicológicos.
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    






</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
