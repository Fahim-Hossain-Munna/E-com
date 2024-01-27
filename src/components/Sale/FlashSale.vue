<script setup>
import Container from '../layouts/Container.vue';
import VueCountdown from '@chenfengyuan/vue-countdown';
import Product from '../layouts/Product.vue'

let currentTime = new Date()
let flashEnd = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 4);
let time = flashEnd - currentTime
</script>

<template>
    <div class="px-2 mt-10 lg:mt-[140px] lg:px-0">
        <Container>
            <div class="flex justify-start items-center gap-4">
                <div class="w-5 h-10 bg-[#DB4444] rounded"></div>
                <p class="font-pop text-base text-[#DB4444] font-semibold">Today's</p>
            </div>
            <div class="mt-6 lg:flex block justify-start items-center gap-20">
                <div>
                    <h2 class="font-inner font-semibold text-4xl tracking-[1.44px]">Flash Sales</h2>
                </div>
                <vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }">
                <div class="flex items-center gap-4 mt-6 lg:mt-0">
                    <div>
                        <p class="font-pop text-xs font-medium">Date</p>
                        <h3 class="font-inner text-[32px] font-bold tracking-[1.28px]">{{ days }}</h3>
                    </div>
                    <div>
                        <span class="text-[#E07575] font-pop font-bold">:</span>
                    </div>
                    <div>
                        <p class="font-pop text-xs font-medium">Hours</p>
                        <h3 class="font-inner text-[32px] font-bold tracking-[1.28px]">{{ hours }}</h3>
                    </div>
                    <div>
                        <span class="text-[#E07575] font-pop font-bold">:</span>
                    </div>
                    <div>
                        <p class="font-pop text-xs font-medium">Minutes</p>
                        <h3 class="font-inner text-[32px] font-bold tracking-[1.28px]">{{ minutes }}</h3>
                    </div>
                    <div>
                        <span class="text-[#E07575] font-pop font-bold">:</span>
                    </div>
                    <div>
                        <p class="font-pop text-xs font-medium">Seconds</p>
                        <h3 class="font-inner text-[32px] font-bold tracking-[1.28px]">{{ seconds }}</h3>
                    </div>
                </div>
                </vue-countdown>
            </div>
            <div class="block lg:flex gap-[30px] mt-10 mb-5">
                <Product imgSrc="/src/assets/uploads/product/product1.png" title="HAVIT HV-G92 Gamepad"/>
                <Product imgSrc="/src/assets/uploads/product/product2.png" title="AK-900 Wired Keyboard"/>
                <Product imgSrc="/src/assets/uploads/product/product3.png" title="IPS LCD Gaming Monitor"/>
                <Product imgSrc="/src/assets/uploads/product/product4.png" title="S-Series Comfort Chair "/>
            </div>
        </Container>
    </div>
</template>
