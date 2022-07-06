import { createApp } from 'vue'
import App from './App.vue'

// import vue-router for SPA
import router from './router'

// import bootstrap@5
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

createApp(App)
.use(router)
.mount('#app')