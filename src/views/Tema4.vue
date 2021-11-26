<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Aspectos claves para la intervención
    



    #t_4_1.titulo-segundo
      .h2 4.1 Aspectos culturales
    
    separador
    #t_4_2.titulo-segundo
      .h2 4.2 Aspectos de seguridad y dignidad
    
    separador
    #t_4_3.titulo-segundo
      .h2 4.3 Aspectos de derechos

</template>

<script>
export default {
  name: 'Tema4',
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
