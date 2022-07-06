<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-md bg-light navbar-light">
    <div class="container d-flex justify-content-around">
        <a class="navbar-brand" href="#"
        ><img
          id="MDB-logo"
          src="@/assets/images/logo-move.png"
          alt="MDB Logo"
          draggable="false"
          height="40"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <font-awesome-icon icon="fa-solid fa-bars" />
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <router-link class="nav-link mx-2" :to="{ name: 'PaginaInicial'}" >Página Inicial</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-2" :to="{ name: '404'}" >Materiais</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-2" :to="{ name: '404'}" >Sobre</router-link> 
          </li>
        </ul>
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: '404'}" >
              <button type="button" class="btn gradient-custom">Login</button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-2" :to="{ name: '404'}" >Cadastrar-se</router-link>
          </li>
        </ul>
      </div> 
    </div> <!-- Container !-->
  </nav>
</template>


<style scoped>  
</style>

<script>

export default {
  name: 'AppNavbar',
  data () {
    return {
      show: false,
      userName: "Antônio"
    }
  }
}
</script>