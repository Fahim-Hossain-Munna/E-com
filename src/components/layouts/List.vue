<template lang="">
    <li class="relative after:transition-all after:duration-500 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-0 after:h-[2px] after:bg-black/50 lg:hover:after:w-full" >
        <router-link :to=link>{{ navigation }}</router-link>
    </li>
</template>

<script setup>
defineProps({
    navigation : String,
    link : String
})

</script>
