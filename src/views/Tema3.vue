<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Lineamientos básicos de los Primeros Auxilios Psicológicos – PAP
    



    #t_3_1.titulo-segundo
      .h2 3.1 ¿Qué son los PAP?
    
    separador
    #t_3_2.titulo-segundo
      .h2 3.2 Lineamientos para la aplicación de los Primeros Auxilios psicológicos – PAP

</template>

<script>
export default {
  name: 'Tema3',
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
