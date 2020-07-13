import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Topics from "../views/Topics.vue";
import Programming from "../views/Programming.vue";
import Computer from "../views/Computer.vue";
import Medicine from "../views/Medicine.vue";
import Musics from "../views/Musics.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/topics",
    name: "Topics",
    component: Topics
  },
  {
    path: "/programming",
    name: "Programming",
    component: Programming
  },
  {
    path: "/computer",
    name: "Computer",
    component: Computer
  },
  {
    path: "/medicine",
    name: "Medicine",
    component: Medicine
  },
  {
    path: "/musics",
    name: "Musics",
    component: Musics
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
