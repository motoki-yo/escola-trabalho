import { createWebHistory, createRouter } from "vue-router";

// importing views
import PaginaInicial from "@/views/PaginaInicial.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "PaginaInicial",
    component: PaginaInicial,
  },
  {
    path: "/:catchAll(.*)*",
    name: "404",
    component: NotFound,
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;