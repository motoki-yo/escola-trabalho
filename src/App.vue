<template>
  <AppNavbar />
  <HomeContent />
  <AppFooter/>
</template>

<script>
import HomeContent from './components/HomeContent.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
    HomeContent
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
