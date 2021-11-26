<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Salud mental
    


    
    #t_1_1.titulo-segundo
      .h2 1.1 Problema mental
    
    
    
    
    separador
    #t_1_2.titulo-segundo
      .h2 1.2 Trastornos mentales
    
    
    
    
    
    separador
    #t_1_3.titulo-segundo
      .h2 1.3 Crisis
  















  
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
}
</script>

<style lang="sass"></style>
