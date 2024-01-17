<script setup>
import List from '../layouts/List.vue'
</script>

<template>
    <header class="bg-black w-full py-4">
        <div class="max-w-[1170px] mx-auto flex items-center justify-between">
            <p class="w-full text-center text-white font-pop text-sm">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <a href="#" class="font-pop text-sm font-bold ml-1 underline">ShopNow</a>
            </p>
            <select class="font-pop text-sm outline-none bg-transparent text-white pr-[5px]">
                <option value="English" class="bg-black">English</option>
                <option value="English" class="bg-black">English</option>
                <option value="English" class="bg-black">English</option>
                <option value="English" class="bg-black">English</option>
            </select>
        </div>
    </header>
    <nav>
        <div class="max-w-[1170px] mx-auto mt-[47px] mb-[23px] flex items-center">
            <div class="w-[23.5%]">
                <picture>
                <img src="../../assets/uploads/logo/logo.png" alt="../../assets/uploads/logo/logo.png">
                </picture>
            </div>
            <div class="w-[46.5%]">
                <ul class="flex justify-start gap-12 font-pop text-base">
                    <List navigation="Home"/>
                    <List navigation="Contact"/>
                    <List navigation="About"/>
                    <List navigation="Sign Up"/>
                </ul>
            </div>
            <div class="w-[30%] flex justify-end items-center relative">
                <input type="text" placeholder="What are you looking for?" class="bg-[#f5f5f5] w-[243px] pt-[7px] pb-[7px] pr-3 pl-5">
                <span class="material-symbols-outlined absolute top-[7px] right-[7px] pl-[34px]">
                search
                </span>
            </div>
        </div>
    </nav>
</template>

