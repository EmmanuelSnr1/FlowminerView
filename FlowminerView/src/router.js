import { createWebHistory, createRouter } from "vue-router";

// layouts
import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout
import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";

// views for Auth layout
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts
import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";

const routes = [
  {
    path: "/admin",
    redirect: "dashboard",
    component: Admin,
    children: [
      { path: "dashboard", component: Dashboard },
      { path: "settings", component: Settings },
      { path: "tables", component: Tables },
      { path: "maps", component: Maps },
    ],
  },
  {
    path: "/auth",
    redirect: "login",
    component: Auth,
    children: [
      { path: "login", component: Login },
      { path: "register", component: Register },
    ],
  },
  { path: "/landing", component: Landing },
  { path: "/profile", component: Profile },
  { path: "/", component: Index },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
