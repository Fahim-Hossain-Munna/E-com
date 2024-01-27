<script setup>
defineProps({
    title:String
})
</script>

<template >
            <button type="button" class="px-12 py-4 bg-[#DB4444] rounded">
                <span class="font-pop text-base font-medium text-white">{{ title }}</span>
            </button>
</template>
