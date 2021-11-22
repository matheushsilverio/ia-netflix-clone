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
    path: "/dashboard/filme/:id",
    name: "Filme",
    meta: {
      requiresAuth: false
    },
    component: () => import("../views/Filme.vue")
  }
];
