<script setup>
import { ref,reactive } from 'vue';
import Container from '../layouts/Container.vue';
import VueCountdown from '@chenfengyuan/vue-countdown';
import Product from '../layouts/Product.vue'
import Button from '../layouts/Button.vue'
import Section from '../layouts/Section.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import './Sale.css'

let currentTime = new Date()
let flashEnd = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 4);
let time = flashEnd - currentTime


let sales = reactive([
    {
        source : "/src/assets/uploads/product/product1.png",
        title: "HAVIT HV-G92 Gamepad",
    },
    {
        source : "/src/assets/uploads/product/product2.png",
        title: "AK-900 Wired Keyboard",
    },
    {
        source : "/src/assets/uploads/product/product3.png",
        title: "IPS LCD Gaming Monitor",
    },
    {
        source : "/src/assets/uploads/product/product4.png",
        title: "S-Series Comfort Chair",
    },
    

])

const breakpoints = {
  // 700px and up
  375: {
    itemsToShow: 1,
    wrapAround : true,
    autoplay : 5000,
  },
  // 1024 and up
  1024: {
    itemsToShow: 4,
  },
}

</script>

<template>
    <div class="px-2 mt-10 lg:mt-[140px] lg:px-0">
        <Container>
            <Section title="Today's"/>
            <div class="mt-6 lg:flex block justify-start items-center gap-20">
                <div>
                    <h2 class="font-inner font-semibold text-4xl tracking-[1.44px]">Flash Sales</h2>
                </div>
                <vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }">
                <div class="flex items-center gap-4 mt-6 lg:mt-0">
                    <div class="flex justify-center items-center flex-col">
                        <p class="font-pop text-xs font-medium">Date</p>
                        <h3 class="font-inner text-[32px] font-bold tracking-[1.28px]">{{ days }}</h3>
                    </div>
                    <div>
                        <span class="text-[#E07575] font-pop font-bold">:</span>
                    </div>
                    <div class="flex justify-center items-center flex-col">
                        <p class="font-pop text-xs font-medium">Hours</p>
                        <h3 class="font-inner text-[32px] font-bold tracking-[1.28px]">{{ hours }}</h3>
                    </div>
                    <div>
                        <span class="text-[#E07575] font-pop font-bold">:</span>
                    </div>
                    <div class="flex justify-center items-center flex-col">
                        <p class="font-pop text-xs font-medium">Minutes</p>
                        <h3 class="font-inner text-[32px] font-bold tracking-[1.28px]">{{ minutes }}</h3>
                    </div>
                    <div>
                        <span class="text-[#E07575] font-pop font-bold">:</span>
                    </div>
                    <div class="flex justify-center items-center flex-col">
                        <p class="font-pop text-xs font-medium">Seconds</p>
                        <h3 class="font-inner text-[32px] font-bold tracking-[1.28px]">{{ seconds }}</h3>
                    </div>
                </div>
                </vue-countdown>
            </div>
            <div class="block lg:flex justify-between items-center mt-10 mb-5">
            <carousel :items-to-show="4" id="fashsale" :breakpoints="breakpoints">
                <slide v-for="(sale,index) in sales" :key="index">
                    <Product :imgSrc=sale.source :title=sale.title />
                </slide>

                <template #addons>
                <navigation />
                </template>
            </carousel>
            
                <!-- <Product imgSrc="/src/assets/uploads/product/product1.png" title="HAVIT HV-G92 Gamepad"/>
                <Product imgSrc="/src/assets/uploads/product/product2.png" title="AK-900 Wired Keyboard"/>
                <Product imgSrc="/src/assets/uploads/product/product3.png" title="IPS LCD Gaming Monitor"/>
                <Product imgSrc="/src/assets/uploads/product/product4.png" title="S-Series Comfort Chair "/> -->
            </div>
            <div class="flex justify-center items-center py-[60px] border-b">
               <Button title="View All Products" />
            </div>
        </Container>
    </div>
</template>

<style scoped>
</style>

