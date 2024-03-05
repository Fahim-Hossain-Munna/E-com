<template>
    <li :class=position class="font-pop text-base text-[#000]">
        <router-link :to="{ name: 'Products', params: { id: CategoryTitle } }">{{ CategoryTitle }}</router-link>
        <Icon iconName="navigate_next" :class=classCode />
    </li>
</template>

<script setup>
import Icon from './Icon.vue';

defineProps({
    position: String,
    classCode: String,
    CategoryTitle: String,
    nagigate: String,
    // id: String,
})
</script>
