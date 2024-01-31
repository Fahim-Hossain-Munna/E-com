<template>
    <div class="flex justify-start items-center gap-4">
                <div class="w-5 h-10 bg-[#DB4444] rounded"></div>
                <p class="font-pop text-base text-[#DB4444] font-semibold">{{ title }}</p>
    </div>
</template>
<script setup>
defineProps({
    title:String
})
</script>
