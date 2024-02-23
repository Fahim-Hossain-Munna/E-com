<script setup>
import Picture from './Picture.vue';
defineProps([
    'source',
    'title',
    'designation'
])
</script>

<template>
       <div class="w-[370px]">
            <div class="w-full h-[430px]">
                <Picture :source=source className="w-full h-full" />
            </div>
            <div>
                <h2 class="mt-8 font-inner text-3xl font-medium">{{ title }}</h2>
                <p class="mt-2 font-pop text-base">{{ designation }}</p>
                <div class="flex justify-start items-center gap-4 mt-4">
                    <i class="fa-brands fa-twitter text-2xl"></i>
                    <i class="fa-brands fa-instagram text-2xl"></i>
                    <i class="fa-brands fa-linkedin-in text-2xl"></i>
                </div>
            </div>
        </div>
</template>

