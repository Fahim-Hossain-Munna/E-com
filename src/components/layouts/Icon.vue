<template>
    <span class="material-symbols-outlined" :class=className>
        {{ iconName }}
    </span>
</template>

<script setup>
defineProps({
    iconName: String,
    className: String
})
</script>
