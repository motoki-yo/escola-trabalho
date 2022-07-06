import { createApp } from 'vue'
import App from './App.vue'

// import vue-router for SPA
import router from './router'

// import bootstrap@5 ****-> CURRENTLY USING 'https://mdbootstrap.com/'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap'

// custom '.css' settings
import './assets/css/main.css'

/* Font Awesome */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faBars)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')