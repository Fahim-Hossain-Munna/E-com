<script>
defineProps({
    source: String,
    className: String,
    navigate: String,
    alt: String,
})
</script>

<template>
<picture>
    <a :href=navigate>
        <img :src=source :alt=alt :class=className>
    </a>
</picture>
</template>
