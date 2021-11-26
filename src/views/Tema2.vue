<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estado crítico 
    



    #t_2_1.titulo-segundo
      .h2 2.1 Tipos y fases
    
    separador
    #t_2_2.titulo-segundo
      .h2 2.2 Fases de la crisis

    separador
    #t_2_3.titulo-segundo
      .h2 2.3 Trastornos y reacciones frente a una crisis

    separador
    #t_2_4.titulo-segundo
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
