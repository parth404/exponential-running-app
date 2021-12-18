const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/Index.vue") },
      { path: "/coaching", component: () => import("pages/Coaching.vue") },
      {
        path: "/why-exponential-running",
        component: () => import("pages/Why.vue"),
      },
      { path: "/faq", component: () => import("pages/Faq.vue") },
      { path: "/contact", component: () => import("pages/Contact.vue") },
      { path: "/legal", component: () => import("pages/Legal.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
  // { path: "/comingsoon", component: () => import("pages/ComingSoon.vue") },
];

export default routes;
