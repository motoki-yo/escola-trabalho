<template>
  <div class="nav">
    
    <div class="nav-header">
      <div class="nav-logo">
      </div>
    </div>

    <ul class="nav-links">
      <li><a href="#" target="_blank">Página Inicial</a></li>
      <li><a href="#" target="_blank">Materiais</a></li>
      <li><a href="#" target="_blank">Sobre</a></li>

      <div class="nav-btns" v-if="show">
        <button id="btn-data" class="btn-gradient" @click="show = !show">Dados</button>
        <div id="decorator"></div>

        <a class="profile-icon dropdown" href="#" target="_blank">
          <div class="profile dropdown-btn">
            <img src="@/assets/imgs/user-icon.svg">
            <span>{{ userName }}</span> <i class="arrow down"></i>
          </div>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
        </a>

      </div>

      <div class="nav-btns" v-else>
        <button id="btn-login" class="btn-gradient" @click="show = !show">Login</button>
        <a href="#" target="_blank">Cadastre-se</a>
      </div>


    </ul>



  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

  *{
    font-family: 'Open Sans', sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;

    line-height: 100%;
  }

  .nav{ /* Navbar's base element*/
    position: relative;

    width: 100%;
    height: 80px;

    margin: 0px;
    top: 0;

    background: #FFFFFF;

    display: flex;             /* establish flex container */
    align-items: center;       /* center ul container vertically */
    justify-content: center;   /* center ul container horizontally (optional) */
    
    border-bottom: 5px solid #40C9A2;
  }

  .nav ul{
    list-style-type: none;
    padding: 0;
    display: flex;             /* establish flex container */
    align-items: center;       /* center ul container vertically */
    justify-content: center;   /* center ul container horizontally (optional) */
  }

  .nav li{
    padding-left: 20px;
    padding-right: 20px;
  }

  /* unvisited link */
  a:link {
    color: #00853B;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: #00853B;
  }

  /* mouse over link */
  a:hover {
    color: #40C9A2;
  }

  /* selected link */
  a:active {
    color: #A3F7B5;
  }

  .nav-header{
    display: inline-block;
  }

  .nav-logo{
    width: 162px;
    height: 40px;
    background: #D9D9D9;
  }

  .nav-links{
    display: inline-block;  
    margin-left: 100px;
    margin-right: 100px;
  }

  .nav-btns{
    margin-left: 100px;
    display: flex;
    align-items: center;
    column-gap: 10px;
    justify-content: space-between;
  }
  
  .nav-btns a{
    padding-left: 20px;
  }

  /*#btn-login{
  }

  #btn-data{
  }*/

  .profile-icon{
    display: inline-block;
  }

  .profile{
    display: flex;
    align-items: center;
    column-gap: 10px;
    justify-content: space-between;
        
  }

  #decorator{
    margin-left: 20px;
    height: 40px;
    border: 1px solid #6B6B6B
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

    width: 120px;
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

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #FFFFFF;
    min-width: 160px;
    box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: #00853B;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {background-color: #f1f1f1}

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  .arrow{
    border: solid #00853B;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }

  .down{
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  /*.profile-icon:hover > .arrow{
    border-color: solid #40C9A2;
  }*/
  
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