<script setup>
defineProps({
    pagename:String,
    navigation:String,
})
</script>
<template>
     <nav>
        <ul class="flex justify-start items-center gap-3">
            <li class="font-inner text-sm transition-all duration-500  hover:font-bold">
                <router-link to="/">
                    <span class="mr-2"><i class="fa-solid fa-house"></i></span>Home
                </router-link>
            </li>
            <li class="font-inner text-sm">
                <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li class="font-inner text-sm transition-all duration-500  hover:font-bold">
                <router-link :to=navigation>
                    {{ pagename }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>
