<template>
    <span class="material-symbols-outlined" :class=class>
    {{iconName}}
    </span>
</template>
<script setup>
defineProps({
    iconName: String,
    class : String
})
</script>
