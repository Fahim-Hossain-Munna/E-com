<script setup>
import Container from '../layouts/Container.vue';
import Section from '../layouts/Section.vue';
import Picture from '../layouts/Picture.vue';


</script>

<template>
    <div class="py-[140px] px-2 lg:px-0">
        <Container>
            <Section title="Featured"/>
            <div class="mt-5">
                <h2 class="font-inner text-4xl font-semibold tracking-[1.44px]">New Arrival</h2>
            </div>
            <div class="mt-[60px]">
                <div class="lg:flex block justify-between">
                    <div class="w-full object-cover lg:w-[570px] h-[600px] relative mb-3 lg:mb-0">
                        <Picture source="/src/assets/uploads/newArrival/new1.png" className="w-full h-full rounded" />
                        <div class="flex flex-col gap-4 absolute bottom-0 left-0 m-5 lg:m-8 max-w-[244px]">
                            <h2 class="font-pop font-semibold text-base lg:text-2xl text-white">PlayStation 5</h2>
                            <p class="font-pop text-xs lg:text-sm text-white">Black and White version of the PS5 coming out on sale.</p>
                            <a class="font-pop text-xs lg:text-base font-medium underline text-white">Shop Now</a>
                        </div>
                    </div>
                    <div class="w-full lg:w-[570px] flex flex-col gap-[32px]">
                        <div class="w-full h-[284px] object-cover relative">
                            <Picture source="/src/assets/uploads/newArrival/new2.png" className="w-full h-full rounded" />
                            <div class="flex flex-col gap-4 absolute bottom-0 left-0 m-5 lg:m-8 max-w-[244px]">
                                <h2 class="font-pop font-semibold text-base lg:text-2xl text-white">Women’s Collections</h2>
                                <p class="font-pop text-xs lg:text-sm text-white">Black and White version of the PS5 coming out on sale.</p>
                                <a class="font-pop text-xs lg:text-base font-medium underline text-white">Shop Now</a>
                            </div>
                        </div>
                        <div class="w-full h-[284px] flex justify-between">
                            <div class="h-full w-[128px] lg:w-[270px] relative">
                                <Picture source="/src/assets/uploads/newArrival/new3.png" className="w-full h-full rounded" />
                                <div class="flex flex-col gap-4 absolute bottom-0 left-0 m-4 lg:m-8 max-w-[244px]">
                                    <h2 class="font-pop font-semibold text-base lg:text-2xl text-white">Speakers</h2>
                                    <p class="font-pop text-xs lg:text-sm text-white">Black and White version of the PS5 coming out on sale.</p>
                                    <a class="font-pop text-xs lg:text-base font-medium underline text-white">Shop Now</a>
                                </div>
                            </div>
                            <div class="h-full w-[200px] lg:w-[270px] relative">
                                <Picture source="/src/assets/uploads/newArrival/new4.png" className="w-full h-full rounded" />
                                <div class="flex flex-col gap-4 absolute bottom-0 left-0 m-3 lg:m-8 max-w-[244px]">
                                    <h2 class="font-pop font-semibold text-base lg:text-2xl text-white">Perfume</h2>
                                    <p class="font-pop text-xs lg:text-sm text-white">Black and White version of the PS5 coming out on sale.</p>
                                    <a class="font-pop text-xs lg:text-base font-medium underline text-white">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>

