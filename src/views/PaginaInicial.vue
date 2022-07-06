<template>
  <div class="home-content">

    <!-- Slideshow will be implement later !-->
    <div class="slideshow-container">
      <div class="slide">
        <div class="slide-caption">
          <div class="text">Acompanhe os dados do formulário da transição</div>
          <button class="btn-gradient">Call to action</button>

          <div class ="dot-container">
            <span class="dot"></span>
            <span class="dot dot-active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>

        <div class="img-slide">
          <div class="filter"></div>
          <img src="@/assets/images/img1.png">
        </div>
      </div>
    </div>

    <div class="wave-container">
      <img src="@/assets/images/wave.svg">

      <section class="text">
        <h1>OBJETIVO</h1>
        <p>O projeto tem o objetivo de ...</p>
      </section>

      <img id="decorator" src="@/assets/images/img-just-getting-started-bg.png">
    </div>
    

    <div class="project-metrics">
      <section class="text">
        <h1>MÉTRICAS DO PROJETO</h1>
        <p>O que já atingimos com o projeto</p>
      </section>

      <div class="metric-container">
        <div class="metric-item">
          <h1>50<span>+</span></h1>
          <h2>?</h2>
          <h3>?</h3>
        </div>
        <div class="divider"></div>
        <div class="metric-item">
          <h1>9,2<span>+</span></h1>
          <h2>?</h2>
          <h3>?</h3>
        </div>
        <div class="divider"></div>
        <div class="metric-item">
          <h1>71<span>%</span></h1>
          <h2>?</h2>
          <h3>?</h3>
        </div>
      </div>
    </div>

    <div class="content-cards">
      <section class="text">
        <h1>CONTEÚDO</h1>
        <p>Nossas publicações e conteúdos</p>
      </section>

      <div class="card-container">
        <div class="card-mask">
          <a href="#">
            <img src="@/assets/images/card-img.png" alt="Placeholder image"> 
            <div class="card-gradient">
              <p class="card-text">O projeto tem o objetivo de...</p>
            </div>
            </a>
        </div>

        <div class="card-mask">
          <a href="#">
            <img src="@/assets/images/card-img.png" alt="Placeholder image"> 
            <div class="card-gradient">
              <p class="card-text">O projeto tem o objetivo de...</p>
            </div>
            </a>
        </div>

        <div class="card-mask">
          <a href="#">
            <img src="@/assets/images/card-img.png" alt="Placeholder image"> 
            <div class="card-gradient">
              <p class="card-text">O projeto tem o objetivo de...</p>
            </div>
            </a>
        </div>

        <div class="card-mask">
          <a href="#">
            <img src="@/assets/images/card-img.png" alt="Placeholder image"> 
            <div class="card-gradient">
              <p class="card-text">O projeto tem o objetivo de...</p>
            </div>
            </a>
        </div>
      </div>
    </div>
  
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

  *{
    font-family: 'Poppins', sans-serif;
    
    font-style: normal;
    font-weight: 600;

    line-height: 100%;
  }

  .slide-caption{
    position: absolute;
    z-index: 2;
  }

  .img-slide{
    width: 100%;
    height: 500px;
  }

  .img-slide img{
    width: 100%;
    height: 500px;
  }

  .filter{
    position: absolute;
    width: 833px;
    height: 500px;
    z-index: 1;
    background: linear-gradient(90.98deg, #FFFFFF 27.03%, rgba(255, 255, 255, 0.901042) 52.64%, rgba(255, 255, 255, 0) 99.25%);
  }
  
  .btn-gradient{
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 26px;
    /* identical to box height */

    text-align: center;

    cursor: pointer;
    color: #FFFFFF;
    text-align: center;

    width: 167px;
    height: 45px;
    
    border-width: 0px;
    border-radius: 12px; 
    box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);

    background-image: linear-gradient(to right, #00853B , #40C9A2);
  }

  /* mouse over button */
  .btn-gradient:hover{
    opacity: 80%;
  }

  /* selected button */
  .btn-gradient:active{
    background-image: linear-gradient(to right, #40C9A2, #A3F7B5);
  }

  .slide-caption{
    left: 183px;
    top: 198px;
  }

  .slide-caption .text{
    margin-bottom: 40px;
    width: 435px;
    height: 162px;

    font-weight: 600;
    font-size: 36px;
    line-height: 54px;

    color: #00853B;
  }

  .dot{
    margin-top: 40px;
    cursor: pointer;
    height: 13px;
    width: 13px;
    margin-left: 12px;
    background-color: #D9D9D9;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .dot-active{
    background-color: #40C9A2;
  }

  .wave-container{
    position: absolute;
    z-index: 3;

    width: 100%;
    height: 486px;
    top: 483px;
  }

  .wave-container img{
    width: 100%;
    display: block;
  }

  .text h1{
    /* Heading 3 - M (Títulos) */
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    letter-spacing: 0.1em;

    color: #6B6B6B;  
  }

  .text p{
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;

    color: #6B6B6B;  
  }

  .wave-container .text p{
    color: #FFFFFF;
  }

  .wave-container .text h1{
    color: #DADADA;
  }

  .wave-container section{
    position: absolute;
    z-index: 5;
    width: 526px;
    height: 87px;
    left: 183px;
    top: 150px;
  }

  #decorator{
    position: absolute;
    z-index: 4;
    width: 430px;
    height: 430px;
    left: 658px;
    top: -10px;
  }

  .project-metrics{
    margin: auto;
    width: 1079px;
    height: 433px;
    margin-top: 400px
  }

  .metric-container{
    padding: 10px;
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
  }

  .metric-item{
    text-align: center;
    width: 350px;
    display: inline-block;
  }

  .metric-item h1{
    font-size: 64px;
    color: #6B6B6B;
  }

  .metric-item h2{
    font-size: 20px;
    color: #6B6B6B;;
  }

  .metric-item h3{
    font-size: 14px;
    color: #6B6B6B;
  }

  .metric-item span{
    color: #00853B;
  }

  .divider{
    display: inline-block;
    text-align: center;
    width: 2px;
    height: 180px;

    background: #00853B;
  }

  .content-cards{
    margin: auto;
    width: 1079px;
    height: 433px;
  
    margin-bottom: 200px;
  }

  .card-container{
    display: flex;
    
  }

  .card-mask{
    cursor: pointer;
    display: inline-block;
    margin: auto;
    width: 255px;
    height: 366px;
    left: 180px;
    top: 1698px;
  }

  .card-mask:hover{
    opacity: 80%;
  }

  .card-mask img{
    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    backdrop-filter: blur(12px);
    /* Note: backdrop-filter has minimal browser support */
  }

  .card-gradient{
    position: absolute;

    width: 263px;
    height: 106px;

    margin-top: -106px;

    background: linear-gradient(180deg, rgba(0, 133, 59, 0) 0%, #00853B 100%);
    border-radius: 0px 0px 16px 16px;
  }

  .card-text{
    font-family: 'Poppins', sans-serif;
    width: 186px;
    height: 72px;

    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;

    margin: 24px 17px 17px 46px;

    color: #FFFFFF;
  }

</style>

<script>
export default {
  name: 'PaginaInicial',
  /*props: {
    msg: String
  }*/
}

</script>

