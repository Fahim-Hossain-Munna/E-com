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
        </div>
    </nav>
</template>

