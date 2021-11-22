export default [
  {
    path: "/sugestao",
    name: "Sugestao",
    meta: {
      requiresAuth: false
    },
    component: () => import("../views/Sugestao.vue")
  }
];
