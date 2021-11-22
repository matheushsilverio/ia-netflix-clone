export default [
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      requiresAuth: false
    },
    component: () => import("../views/Dashboard.vue")
  },
  {
    path: "/filme",
    name: "Filme",
    meta: {
      requiresAuth: false
    },
    component: () => import("../views/Filme.vue")
  }
];
