<script setup>
import Icon from '../layouts/Icon.vue';
import CategoryList from '../layouts/CategoryList.vue';
import Picture from '../layouts/Picture.vue';
import Container from '../layouts/Container.vue';
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import './Banner.css'

let showUl = ref(false);

</script>

<template>
    <div>
        <!-- <div class="max-w-[1170px] mx-auto flex"> -->
            <Container className="lg:flex">
            <div class="w-[233px] hidden lg:block border-r pt-10">
                <ul>
                    <CategoryList CategoryTitle="Woman’s Fashion" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4"/>
                    <CategoryList CategoryTitle="Men’s Fashion" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4"/>
                    <CategoryList CategoryTitle="Electronics" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4 hidden"/>
                    <CategoryList CategoryTitle="Home & Lifestyle" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4 hidden"/>
                    <CategoryList CategoryTitle="Medicine" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4 hidden"/>
                    <CategoryList CategoryTitle="Sports & Outdoor" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4 hidden"/>
                    <CategoryList CategoryTitle="Baby’s & Toys" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4 hidden"/>
                    <CategoryList CategoryTitle="Groceries & Pets" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4 hidden"/>
                    <CategoryList CategoryTitle="Health & Beauty" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4 hidden"/>
                </ul>
            </div>
            <div class="w-full pl-2 my-4 lg:mt-0 lg:hidden">
                <a class=" text-black text-base relative" @click="showUl =! showUl">Show Category 
                <Icon iconName="keyboard_double_arrow_right" class="absolute top-0"/>
                </a>
                <Transition>
                <div v-if="showUl" class="transition-all duration-200">
                    <ul class="my-6">
                    <CategoryList CategoryTitle="Woman’s Fashion" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4"/>
                    <CategoryList CategoryTitle="Men’s Fashion" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4"/>
                    <CategoryList CategoryTitle="Electronics" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4 hidden"/>
                    <CategoryList CategoryTitle="Home & Lifestyle" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4 hidden"/>
                    <CategoryList CategoryTitle="Medicine" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4 hidden"/>
                    <CategoryList CategoryTitle="Sports & Outdoor" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4 hidden"/>
                    <CategoryList CategoryTitle="Baby’s & Toys" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4 hidden"/>
                    <CategoryList CategoryTitle="Groceries & Pets" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4 hidden"/>
                    <CategoryList CategoryTitle="Health & Beauty" position="relative pb-4 last:pb-0" classCode="absolute top-0 right-4 hidden"/>
                    </ul>
                </div>
            </Transition>
            </div>
            <div class="w-full lg:w-[937px] lg:pt-10 lg:pl-11 p-2">
                <div class="h-auto lg:h-[344px]">
                    <carousel :items-to-show="1">
                        <slide v-for="slide in 10" :key="slide">
                        <Picture source="/src/assets/uploads/banner/banner.jpg" className="object-contain" alt="/src/assets/uploads/banner/banner.jpg" navigate="/home" />
                        </slide>

                        <template #addons>
                        <!-- <navigation /> -->
                        <pagination />
                        </template>
                    </carousel>
                </div>
            </div>
        </Container>
        <!-- </div> -->
    </div>
</template>

