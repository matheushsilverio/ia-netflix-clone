export default [
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/Dashboard.vue")
  },
  {
    path: "/dashboard/movies/:id",
    name: "Filme",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/Filme.vue")
  }
];
