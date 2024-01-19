<script setup>
import Icon from '../layouts/Icon.vue';
import CategoryList from '../layouts/CategoryList.vue';
import Picture from '../layouts/Picture.vue';
import Container from '../layouts/Container.vue';


</script>

<template>
    <div>
        <!-- <div class="max-w-[1170px] mx-auto flex"> -->
            <Container className="flex">
            <div class="w-[233px] border-r pt-10">
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
            <div class="w-[937px] pt-10 pl-11">
                <div class="h-[344px]">
                    <Picture source="/src/assets/uploads/banner/banner.jpg" className="w-full h-full" alt="/src/assets/uploads/banner/banner.jpg" navigate="/home" />
                </div>
            </div>
        </Container>
        <!-- </div> -->
    </div>
</template>

