import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/presentation",
    name: "Presentation",
    component: () => import("@/views/PresentationView.vue")
  },
  {
    path: "/faq",
    name: "FAQ",
    component: () => import("@/views/FaqView.vue")
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: () => import("@/views/NotFoundView.vue"),
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
