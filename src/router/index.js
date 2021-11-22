import Vue from "vue";
import VueRouter from "vue-router";
import { validateMaintenance, validateToken } from "@/helpers/routerValidators.js";

import AuthRoutes from "@/modules/Authentication/routes/index";
import DashboardRoutes from "@/modules/Dashboard/routes/index";
import SugestaoRoutes from "@/modules/Sugestao/routes/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "*",
    redirect: "/login"
  },
  {
    path: "/manutencao",
    name: "Maintenance",
    component: () => import("@/views/Maintenance.vue")
  },
  ...AuthRoutes,
  ...DashboardRoutes,
  ...SugestaoRoutes
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  validateMaintenance(to, router);

  const hasToken = validateToken();
  if (to.meta.requiresAuth) {
    if (hasToken) {
      next();
    } else {
      router.push({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;
