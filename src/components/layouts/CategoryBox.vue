<template>
    <div class="group w-[170px] h-[170px] border flex flex-col gap-4 justify-center items-center hover:bg-[#DB4444] transition-all duration-500">
        <!-- <Picture :source=source className="w-[56px] h-[56px]" /> -->
        <i class="text-[56px] group-hover:text-white transition-all duration-500" :class=className></i>
        <p class="font-pop text-base group-hover:text-white transition-all duration-500">{{title}}</p>
    </div>
</template>
<script setup>
import Picture from '../layouts/Picture.vue'
defineProps({
    source:String,
    title:String,
    className:String
})
</script>
