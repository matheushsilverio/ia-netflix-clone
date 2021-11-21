export default [
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      requiresAuth: false
    },
    component: () => import("../views/Dashboard.vue")
  }
];
