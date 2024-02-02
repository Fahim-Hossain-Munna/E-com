import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Registration from '../views/Registration.vue';

const routes = [
    {
        path : "/",
        component : Home,
    },
    {
        path : "/login",
        component : Login,
    },
    {
        path : "/register",
        component : Registration,
    },
    {
        path : "/wishlist",
        component : Registration,
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router