<script setup>
import Picture from '../layouts/Picture.vue';
defineProps({
    title : String,
    description : String,
    source : String,
})
</script>
<template>
<div class="w-full lg:w-[259px] h-[160px] mb-10 lg:mb-0">
        <div class="flex justify-center items-center">
            <Picture :source=source />
        </div>
        <div class="flex flex-col justify-center items-center mt-6">
            <h3 class="font-pop font-semibold text-xl">{{ title }}</h3>
            <p class="font-pop text-sm text-center mt-2">{{ description }}</p>
        </div>
    </div>
</template>

