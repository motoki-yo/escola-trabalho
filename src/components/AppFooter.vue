<template>
    <footer class="text-dark text-center text-lg-start custom-footer">
    <!-- Grid container -->
    <div class="container p-4">

        <!--Grid row-->
        <div class="row">
        <!--Grid column-->
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">A iniciativa</h5>
            <p> O projeto escola trabalho foi idealizado pelas seguintes organizações: </p>
            <div class="d-flex align-content-start">
                <a class="ripple" href="#!">
                    <img src="@/assets/images/logo-lepes.png" class="img-fluid" alt="Logo LEPES"/>
                </a>
                <a class="ripple" href="#!">
                    <img src="@/assets/images/logo-itau.png" class="img-fluid" alt="Logo ITAU"/>
                </a>
                <a class="ripple" href="#!">
                    <img src="@/assets/images/logo-move.png" class="img-fluid" alt="Logo MOVE"/>
                </a>
                
                
                
            </div>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Menu</h5>

            <ul class="list-unstyled mb-0">
            <li>
                <a href="#!" class="text-dark">Página Inicial</a>
            </li>
            <li>
                <a href="#!" class="text-dark">Dados</a>
            </li>
            <li>
                <a href="#!" class="text-dark">Sobre</a>
            </li>
            <li>
                <a href="#!" class="text-dark">Materiais</a>
            </li>
            </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <form action="" class="amber-border">
            <!--Grid row-->
            <div class="row d-flex justify-content-center">
                <!--Grid column-->
                <div class="col-auto">
                <h5 class="text-uppercase mb-0">Newsletter</h5>
                <p> Inscreva-se e fique por dentro! </p>
                </div>
                <!--Grid column-->

                <!-- Email input -->
                <div class="form-outline">
                    <input type="email" id="typeEmail" class="form-control" />
                    <label class="form-label" for="typeEmail">Email input</label>
                </div>

                <!--Grid column-->
                <div class="col-md-5 col-auto my-3">
                    <!-- Submit button -->
                    <button type="submit" class="btn btn-primary mb-4">
                    Subscribe
                    </button>
                </div>
                <!--Grid column-->
            </div>
            <!--Grid row-->
        </form>
        </div>
        <!--Grid column-->
        </div>
        <!--Grid row-->
    </div>
    <!-- Grid container -->

    <!-- Section: Social media -->
    <section class="text-center p-2 gradient-custom">
        <!-- Facebook -->
        <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button">
            <i class="fab fa-facebook-f"></i>
        </a>

        <!-- Twitter -->
        <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"
            ><i class="fab fa-twitter"></i>
        </a>

        <!-- Google -->
        <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"
            ><i class="fab fa-google"></i>
        </a>

        <!-- Instagram -->
        <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"
            ><i class="fab fa-instagram"></i>
        </a>

        <!-- Linkedin -->
        <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"
            ><i class="fab fa-linkedin-in"></i>
        </a>

        <!-- Github -->
        <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"
            ><i class="fab fa-github"></i>
        </a>
    </section>
    <!-- Section: Social media -->
    </footer>
</template>


<style scoped>

</style>

<script>
export default {
  name: 'AppFooter',
}
</script>