<template>
  <MDBContainer>
    <app-navbar />
      <router-view />
    <app-footer />
  </MDBContainer>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
  }
}
</script>

<style>
  body{
    margin: 0;
  }
  
  #app {
    font-family: Poppins;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
