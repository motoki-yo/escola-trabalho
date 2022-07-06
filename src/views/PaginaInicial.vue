<template>
  <div>

  <!-- Carousel wrapper -->
  <div id="carouselMaterialStyle" class="carousel slide carousel-fade" data-mdb-ride="carousel">
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <!-- Inner -->
    <div class="carousel-inner shadow-4-strong">
      <!-- Single item -->
      <div class="carousel-item active">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" class="d-block w-100"
          alt="Sunset Over the City" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Acompanhe os dados do formulário da transição</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <router-link class="nav-link" :to="{ name: '404'}" >
            <button type="button" class="btn gradient-custom">Call to action</button>
          </router-link>
        </div>
      </div>

      <!-- Single item -->
      <div class="carousel-item">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100"
          alt="Canyon at Nigh" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <router-link class="nav-link" :to="{ name: '404'}" >
            <button type="button" class="btn gradient-custom">Call to action 2</button>
          </router-link>
        </div>
      </div>

      <!-- Single item -->
      <div class="carousel-item">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block w-100"
          alt="Cliff Above a Stormy Sea" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <router-link class="nav-link" :to="{ name: '404'}" >
            <button type="button" class="btn gradient-custom">Call to action 3</button>
          </router-link>
        </div>
      </div>

    </div>
    <!-- Inner -->

    <!-- Controls -->
    <button class="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>


    <!-- <div class="wave-container">
      <svg
        class="position-absolute"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style="left: 0; bottom: 0"
        >
      <path
            fill="#"
            d="M 0 297.33 L 1440 183.98 L 1440 320 L 0 320 Z"
            ></path>
      </svg>
      <img src="@/assets/images/wave.svg">

      <section class="text">
        <h1>OBJETIVO</h1>
        <p>O projeto tem o objetivo de ...</p>
      </section>

      <img id="decorator" src="@/assets/images/img-just-getting-started-bg.png">
    </div> -->
    

    <!--Main layout-->
    <main class="mt-5">
        <div class="container">

            <!--Section: Métricas do Projeto-->
            <section id="metricas">

                <!-- Heading -->
                <h1 class="font-weight-bold">Métricas do projeto</h1>
                <!-- Description -->
                <p class="grey-text">O que já atingimos com o projeto</p>

                <!--Grid row-->
                <div class="row text-center project-metrics p-2">

                    <!--Grid column-->
                    <div class="col-md-4 my-5">
                        <h2 class="font-weight-bold">54<span style="color:#00853B;">+</span></h2>
                        <h4 class="my-4 font-weight-bold">?</h4>
                        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                            maiores nam,
                            aperiam minima
                            assumenda deleniti hic.</p>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-4 my-5">
                        <h2 class="font-weight-bold">9,2<span style="color:#00853B;">+</span></h2>
                        <h4 class="my-4 font-weight-bold">?</h4>
                        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                            maiores nam,
                            aperiam minima
                            assumenda deleniti hic.</p>
                    </div>
                    <!--Grid column-->
                    
                    <!--Grid column-->
                    <div class="col-md-4 my-5">
                        <h2 class="font-weight-bold">71<span style="color:#00853B;">%</span></h2>
                        <h4 class="my-4 font-weight-bold">?</h4>
                        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                            maiores nam,
                            aperiam minima
                            assumenda deleniti hic.</p>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

            </section>
            <!--Section: Métricas do Projeto-->

            <hr class="my-5">

        </div>
         <div class="container">

        <!--Section: Publicações e Conteúdos-->
        <section id="publicacoes">

            <!-- Heading -->
            <h1 class="font-weight-bold">CONTEÚDO</h1>
            <!-- Description -->
            <p class="grey-text">Nossas publicações e conteúdos</p>

            <!--Grid row-->
            <div class="d-flex">
              
              <!--Card-->
              <div class="p-2 flex-shrink-1">
                <div class="card bg-dark text-white"> 
                  <img src="@/assets/images/card-img.png" class="card-img" alt="Card"/>
                  <div class="card-img-overlay card-hover-overlay d-flex align-items-end">
                    <div>
                      <hr>
                      <h5 class="card-title">Escola-trabalho</h5>
                      <p class="card-text">
                        O projeto tem o objetivo de ...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Card-->
                
              <!--Card-->
              <div class="p-2 flex-shrink-1">
                <div class="card bg-dark text-white"> 
                  <img src="@/assets/images/card-img.png" class="card-img" alt="Card"/>
                  <div class="card-img-overlay card-hover-overlay d-flex align-items-end">
                    <div>
                      <hr>
                      <h5 class="card-title">Escola-trabalho</h5>
                      <p class="card-text">
                        O projeto tem o objetivo de ...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Card-->


              <!--Card-->
              <div class="p-2 flex-shrink-1">
                <div class="card bg-dark text-white"> 
                  <img src="@/assets/images/card-img.png" class="card-img" alt="Card"/>
                  <div class="card-img-overlay card-hover-overlay d-flex align-items-end">
                    <div>
                      <hr>
                      <h5 class="card-title">Escola-trabalho</h5>
                      <p class="card-text">
                        O projeto tem o objetivo de ...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Card-->

              <!--Card-->
              <div class="p-2 flex-shrink-1">
                <div class="card bg-dark text-white"> 
                  <img src="@/assets/images/card-img.png" class="card-img" alt="Card"/>
                  <div class="card-img-overlay card-hover-overlay d-flex align-items-end">
                    <div>
                      <hr>
                      <h5 class="card-title">Escola-trabalho</h5>
                      <p class="card-text">
                        O projeto tem o objetivo de ...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Card-->

            </div>
            <!-- Container -->

        </section>
      <!--Section: Publicações e Conteúdos-->

        <hr class="my-5">

    </div>
    </main>
    <!--Main layout-->

  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'PaginaInicial',
}

</script>

