import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import GuiasView from "../views/GuiasView.vue"; 
import ResortsView from "../views/ResortsView.vue";
import ReservasView from "../views/Reservas.vue"; 

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/guias", name: "Guias", component: GuiasView },
  { path: "/resorts", name: "Resorts", component: ResortsView },
  { path: "/reservas", name: "Reservas", component: ReservasView },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
