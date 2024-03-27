<script setup>
import List from '../layouts/List.vue'
import Icon from '../layouts/Icon.vue';
import Container from '../layouts/Container.vue';
import { ref } from 'vue';
import productData from '../../store/product';
import Auth from '../../store/Auth';


let handleManuBar = ref(false)

function logout() {

    Auth.logout()
}
</script>

<template>
    <header class="bg-black w-full py-4">
        <!-- <div class="max-w-[1170px] mx-auto flex items-center justify-between"> -->
        <Container className="flex items-center justify-between">
            <p class="w-full text-start lg:text-center text-white font-pop text-xs px-2 lg:px-0 lg:text-sm">Summer Sale
                For All Swim Suits And Free Express Delivery - OFF 50%!
                <a href="#" class="font-pop text-sm font-bold ml-1 underline">ShopNow</a>
            </p>
            <select class="font-pop text-sm outline-none bg-transparent text-white pr-[5px] mx-2 lg:mx-0">
                <option value="English" class="bg-black">English</option>
                <option value="English" class="bg-black">English</option>
                <option value="English" class="bg-black">English</option>
                <option value="English" class="bg-black">English</option>
            </select>
        </Container>
        <!-- </div> -->
    </header>
    <nav class="border-b">
        <!-- <div class="max-w-[1170px] mx-auto mt-[47px] mb-[23px] flex items-center"> -->
        <Container
            className="mt-[47px] mb-[23px] flex flex-wrap lg:flex-nowrap justify-between lg:items-center px-2 lg:px-0">
            <div class="w-1/2 flex justify-start items-center lg:block">
                <picture>
                    <img src="../../assets/uploads/logo/logo.png" alt="../../assets/uploads/logo/logo.png">
                </picture>
            </div>
            <div class=" lg:hidden p-2 border-2 flex justify-center items-center">
                <Icon iconName="menu" @click="handleManuBar = !handleManuBar"></Icon>
            </div>
            <div class="w-full flex justify-end text-end lg:block lg:pt-0 pt-2 lg:py-0">
                <ul v-if="handleManuBar"
                    class="bg-[rgba(0,0,0,0.8)] w-full flex flex-col lg:flex-row lg:justify-center lg:gap-12 font-pop text-sm lg:text-base">
                    <List navigation="Home" link="/"
                        class="after:h-0 hover:bg-red-500 transition-all duration-700 py-5 pr-3 hover:text-[#f5f5f5] text-[#f5f5f5]" />
                    <List navigation="Contact" link="/contact"
                        class="after:h-0 hover:bg-red-500 transition-all duration-700 py-5 pr-3 hover:text-[#f5f5f5] text-[#f5f5f5]" />
                    <List navigation="About" link=""
                        class="after:h-0 hover:bg-red-500 transition-all duration-700 py-5 pr-3 hover:text-[#f5f5f5] text-[#f5f5f5]" />
                    <List navigation="Sign Up" link="/register"
                        class="after:h-0 hover:bg-red-500 transition-all duration-700 py-5 pr-3 hover:text-[#f5f5f5] text-[#f5f5f5]" />
                </ul>
                <ul
                    class="hidden lg:flex flex-col lg:flex-row lg:justify-center lg:gap-12 gap-5 font-pop text-sm lg:text-base">
                    <List navigation="Home" link="/" />
                    <List navigation="Contact" link="/contact" />
                    <List navigation="About" link="/about" />

                    <!-- <List v-if="Auth.isAuth" navigation="Logout" @click="logout()" /> -->
                    <List v-if="!Auth.isAuth" navigation="Sign Up" link="/register" />
                    <!-- {{ Auth.users }} -->

                </ul>
            </div>
            <div class="w-full pt-8 lg:pt-0 flex lg:justify-end justify-between items-center lg:gap-6">
                <div class="relative">
                    <input type="text" placeholder="What are you looking for?"
                        class="bg-[#f5f5f5] w-[243px] pt-[7px] pb-[7px] pr-3 pl-5 placeholder:font-pop placeholder:text-xs">
                    <Icon iconName="search" class="absolute top-[50%] translate-y-[-50%] right-[10px]" />
                </div>
                <button class="flex justify-center items-center">
                    <router-link to="/wishlist">
                        <Icon iconName="favorite" />
                    </router-link>
                </button>
                <button class="flex justify-center items-center relative">
                    <router-link to="/product/cart">
                        <p
                            class="absolute top-[-4px] right-[-5px] bg-red-500 w-[15px] h-[15px] rounded-full flex justify-center items-center">
                            <span class="text-[10px] text-white">{{ productData.carts.length }}</span>
                        </p>
                        <Icon iconName="shopping_cart" />
                    </router-link>
                </button>
                <button class="flex justify-center items-center relative group">
                    <Icon iconName="account_circle" class="group-hover:text-[#DB4444] transition-all duration-700" />
                    <ul
                        class="w-[224px] bg-[rgba(0,0,0,0.8)] text-[#fafafa] rounded text-start pt-4 pl-5 pr-3 absolute top-full right-0 translate-y-52 invisible opacity-0 transition-all duration-700 z-50 group-hover:visible group-hover:opacity-100 group-hover:translate-y-7">
                        <li class="mb-3"><span class="mr-4"><i class="fa-regular fa-user"></i></span>
                            My Account - {{ Auth.users.fname }}

                        </li>
                        <li class="mb-3"><span class="mr-4"><i class="fa-solid fa-bag-shopping"></i></span> My Order
                        </li>
                        <li class="mb-3"><span class="mr-4"><i class="fa-solid fa-ban"></i></span> My Cancellations</li>
                        <li class="mb-3"><span class="mr-4"><i class="fa-regular fa-star"></i></span> My Reviews </li>
                        <li @click="logout()" class="mb-3"><span class="mr-4"><i

                                    class="fa-solid fa-arrow-right-from-bracket"></i></span>
                            Logout</li>
                    </ul>
                </button>
            </div>
        </Container>
        <!-- </div> -->
    </nav>
</template>
