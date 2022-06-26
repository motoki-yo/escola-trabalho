<template>
  <footer class="footer">
    <div class="footer-item orgs">
      <section class="text">
        <h1>A iniciativa</h1>
        <p>O projeto escola trabalho foi idealizado pelas seguintes organizações :</p>
      </section>
      <ul>
        <li><a href="#"><img src="@/assets/imgs/logo-lepes.png"></a></li>
        <li><a href="#"><img src="@/assets/imgs/logo-itau.png"></a></li>
        <li><a href="#"><img src="@/assets/imgs/logo-move.png"></a></li>
      </ul>
    </div>

    <div class="footer-item site-map">
      <h1>Menu</h1>
      <ul>
        <li><a href="#">Página Inicial</a></li>
        <li><a href="#">Dados</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Materiais</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </div>

    <div class="footer-item newsletter">
      <section class="text">
        <h1>Newsletter</h1>
        <p>Inscreva-se e fique por dentro!</p>
      </section>
      <input type="email" class="input-icon">
      <button class="btn-gradient">Inscrever-se</button>
    </div>

  </footer>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

  *{
    font-family: 'Poppins', sans-serif;
  }

  .footer{
    box-sizing: border-box;
    width:100%;
    height: 260px;

    border-top: 5px solid #40C9A2;
    display: flex;
    column-gap: 0px;
    justify-content: space-around;
    padding-left: 40px 10px;
  }

  h1{
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;

    color: #00853B;
  }

  .text p{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: #6B6B6B;
  }

  .footer-item{
    width: auto;
    height: 100%;
  }

  .orgs li{
    margin-left: 10px;
    margin-right: 10px;
    display: inline-block;
  }
  
  li, ul{
    padding: 0;
    list-style: none;
    list-style-type: none;
  }

   /* unvisited link */
  a:link {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    color: #6B6B6B;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: #6B6B6B;
  }

  /* mouse over link */
  a:hover {
    color: #40C9A2;
  }

  /* selected link */
  a:active {
    color: #A3F7B5;
  }

  .site-map{
    padding: 0;
    text-align: left;
  }

  .input-icon{
    width: 340px;
    height: 46px;
    display: block;

    border-width: 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(12px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: #6B6B6B;
    margin-bottom: 10px;
  }

  input[type="email"]{
    background: url(../assets/imgs/email-icon.svg) no-repeat scroll 10px 15px;
    padding-left:40px;
  }
  
  .btn-gradient{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 26px;
    /* identical to box height */

    text-align: center;

    cursor: pointer;
    color: #FFFFFF;
    text-align: center;

    width: 100%;
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

</style>


<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      msg: 'This is the Navbar'
    }
  }
}
</script>