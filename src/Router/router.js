import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Registration from '../views/Registration.vue';
import Wishlist from '../views/Wishlist/WishlistPage.vue';
import NopageFound from '../views/NopageFound.vue';
import Contact from '../views/Contactus.vue';
import Details from '../views/Details.vue'
import Cart from '../views/Cart.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'

const routes = [
    {
        path : "/:pathMatch(.*)*",
        component : NopageFound,
    },
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
        component : Wishlist,
    },
    {
        path : "/contact",
        component : Contact,
    },
    {
        path : "/products",
        component : Products,
    },
    {
        path : "/product/details",
        component : Details,
    },
    {
        path : "/product/cart",
        component : Cart,
    },
    {
        path: "/about",
        component: About,
    },
    
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router