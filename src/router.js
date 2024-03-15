import { createRouter, createWebHistory } from "vue-router";
import CartView from "./views/CartView.vue";

const routes = [{ path: "/", component: CartView }];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
