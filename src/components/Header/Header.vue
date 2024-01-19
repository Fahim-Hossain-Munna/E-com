<script setup>
import List from '../layouts/List.vue'
import Icon from '../layouts/Icon.vue';
import Container from '../layouts/Container.vue';
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
            <Container className="mt-[47px] mb-[23px] lg:flex lg:items-center">
            <div class="w-full flex justify-center lg:block lg:w-[23.5%]">
                <picture>
                <img src="../../assets/uploads/logo/logo.png" alt="../../assets/uploads/logo/logo.png">
                </picture>
            </div>
            <div class="w-full lg:w-[46.5%] pt-8 lg:py-0">
                <ul class="flex lg:justify-start justify-center lg:gap-12 gap-5 font-pop text-sm lg:text-base">
                    <List navigation="Home"/>
                    <List navigation="Contact"/>
                    <List navigation="About"/>
                    <List navigation="Sign Up"/>
                </ul>
            </div>
            <div class="w-full pt-8 lg:pt-0 lg:w-[30%] flex lg:justify-end justify-center items-center gap-4 lg:gap-6">
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

