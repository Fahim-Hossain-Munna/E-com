<template>
<li :class=position class="font-pop text-base text-[#000]">
    <a href="#">{{ CategoryTitle }}</a>
    <Icon iconName="navigate_next" :class=classCode />
</li>
</template>

<script>
import Icon from './Icon.vue';

defineProps({
    position: String,
    classCode: String,
    CategoryTitle: String,
})
</script>
