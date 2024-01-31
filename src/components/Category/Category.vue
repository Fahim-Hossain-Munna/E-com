<script setup>
import { ref,reactive } from 'vue';
import Container from '../layouts/Container.vue';
import Section from '../layouts/Section.vue';
import CategoryBox from '../layouts/CategoryBox.vue';
import 'vue3-carousel/dist/carousel.css'
import '../Category/Category.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
 
let categories = reactive([
    {
        source : "/src/assets/uploads/category/cat1.png",
        title: "Phones",
        icon:"fa-solid fa-mobile-screen-button"
    },
    {
        source : "/src/assets/uploads/category/cat2.png",
        title: "Camera",
        icon:"fa-solid fa-camera"
    },
    {
        source : "/src/assets/uploads/category/cat3.png",
        title: "Computers",
        icon:"fa-solid fa-tv"
    },
    {
        source : "/src/assets/uploads/category/cat4.png",
        title: "Gaming",
        icon:"fa-solid fa-gamepad"
    },
    {
        source : "/src/assets/uploads/category/cat5.png",
        title: "SmartWatch",
        icon:"fa-regular fa-clock"
    },
    {
        source : "/src/assets/uploads/category/cat6.png",
        title: "HeadPhones",
        icon:"fa-solid fa-headphones-simple"
    },
])

const breakpoints = {
  // 700px and up
  375: {
    itemsToShow: 1.8,
    wrapAround : true,
    autoplay : 5000,
  },
  // 1024 and up
  1024: {
    itemsToShow: 6,
  },
}

</script>
<template>
    <Container className="lg:pb-[70px] px-2 lg:px-0 pb-32 border-b">
        <div class="mt-20 mb-5">
            <Section title="Categories"/>
        </div>
        <div class="mb-[60px]">
            <h2 class="font-inner text-4xl font-semibold tracking-[1.44px]">Browse By Category</h2>
        </div>
        <div class="flex justify-between items-center">
            <carousel :items-to-show="6" id="category" :breakpoints="breakpoints">
            <slide v-for="(category,index) in categories" :key="index">
                <CategoryBox :source=category.source :title=category.title :className=category.icon />
            </slide>

            <template #addons>
            <navigation />
            </template>
            </carousel>
        </div>
    </Container>
</template>

<style scoped>
#category{
    position: relative;
    background: transparent;
    width: 100% !important;
}
</style>

