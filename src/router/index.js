import VueRouter from "vue-router";
import Vue from "vue";
import News from "../views/News";
import Home from "../views/Home";

import store from "../store/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/news",
    name: "News",
    component: News,
    beforeEnter: (to, from, next) => {
      //this navigation gard checks if the store has the token set
      if (!store.state.token) {
        next("/");
      }
      next();
    },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
