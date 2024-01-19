<template>
    <div class="max-w-[1170px] mx-auto" :class=className>
        <slot>
            
        </slot>
    </div>
</template>
<script setup>
defineProps({
    className: String
})
</script>
