import { createRouter, createWebHistory } from "vue-router";
import UserLogin from "../components/UserLogin.vue";
import UserRegister from "../components/UserRegister.vue";
import UserProfile from "../components/UserProfile.vue";

const routes = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        component: UserLogin,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: "/register",
        component: UserRegister,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: "/profile",
        component: UserProfile,
        meta: {
            requiresAuth: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (to.meta.requiresAuth && !isLoggedIn) {
        next("/login");
    } else if (isLoggedIn && (to.path === "/login" || to.path === "/register")) {
        next("/profile");
    } else {
        next();
    }
});

export default router;
