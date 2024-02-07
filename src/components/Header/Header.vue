<script setup>
import List from '../layouts/List.vue'
import Icon from '../layouts/Icon.vue';
import Container from '../layouts/Container.vue';
import { ref } from 'vue';

let handleManuBar = ref(false)
</script>

<template>
    <header class="bg-black w-full py-4">
        <!-- <div class="max-w-[1170px] mx-auto flex items-center justify-between"> -->
            <Container className="flex items-center justify-between">
            <p class="w-full text-start lg:text-center text-white font-pop text-xs px-2 lg:px-0 lg:text-sm">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
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
            <Container className="mt-[47px] mb-[23px] flex flex-wrap lg:flex-nowrap justify-between lg:items-center px-2 lg:px-0">
            <div class="w-1/2 flex justify-start lg:block">
                <picture>
                <img src="../../assets/uploads/logo/logo.png" alt="../../assets/uploads/logo/logo.png">
                </picture>
            </div>
            <div class=" lg:hidden block">
                <Icon iconName="menu" @click="handleManuBar =! handleManuBar"></Icon>
            </div>
            <div class="w-full flex justify-end text-end lg:block lg:pt-0 pt-2 lg:py-0">
                <ul v-if="handleManuBar" class="flex flex-col lg:flex-row lg:justify-center lg:gap-12 gap-5 font-pop text-sm lg:text-base">
                    <List navigation="Home" link="/" />
                    <List navigation="Contact" link="/contact" />
                    <List navigation="About" link="" />
                    <List navigation="Sign Up" link="/register" />
                </ul>
                <ul class="hidden lg:flex flex-col lg:flex-row lg:justify-center lg:gap-12 gap-5 font-pop text-sm lg:text-base">
                    <List navigation="Home" link="/" />
                    <List navigation="Contact" link="/contact" />
                    <List navigation="About" link="" />
                    <List navigation="Sign Up" link="/register" />
                </ul>
            </div>
            <div class="w-full pt-8 lg:pt-0 flex lg:justify-end justify-between items-center lg:gap-6">
            <div class="relative">
                    <input type="text" placeholder="What are you looking for?" class="bg-[#f5f5f5] w-[243px] pt-[7px] pb-[7px] pr-3 pl-5 placeholder:font-pop placeholder:text-xs">
                    <Icon iconName="search" class="absolute top-[50%] translate-y-[-50%] right-[10px]"/>
            </div>
                <button class="flex justify-center items-center">
                    <Icon iconName="favorite"/>
                </button>
                <button class="flex justify-center items-center">
                    <Icon iconName="shopping_cart"/>
                </button>
            </div>
        </Container>
        <!-- </div> -->
    </nav>
</template>

