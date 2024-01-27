<script setup>
import Container from '../layouts/Container.vue';
</script>

<template>
    <div class="mt-[140px]">
        <Container>
            <div class="flex justify-start items-center gap-4">
                <div class="w-5 h-10 bg-[#DB4444] rounded"></div>
                <p class="font-pop text-base text-[#DB4444] font-semibold">Today's</p>
            </div>
            <div class="mt-6 flex justify-start items-center gap-20">
                <div>
                    <h2 class="font-inner font-semibold text-4xl tracking-[1.44px]">Flash Sales</h2>
                </div>
                <div class="flex items-center gap-4">
                    <div>
                        <p class="font-pop text-xs font-medium">Date</p>
                        <h3 class="font-inner text-[32px] font-bold tracking-[1.28px]">03</h3>
                    </div>
                    <div>
                        <span class="text-[#E07575] font-pop font-bold">:</span>
                    </div>
                    <div>
                        <p class="font-pop text-xs font-medium">Hours</p>
                        <h3 class="font-inner text-[32px] font-bold tracking-[1.28px]">03</h3>
                    </div>
                    <div>
                        <span class="text-[#E07575] font-pop font-bold">:</span>
                    </div>
                    <div>
                        <p class="font-pop text-xs font-medium">Minutes</p>
                        <h3 class="font-inner text-[32px] font-bold tracking-[1.28px]">03</h3>
                    </div>
                    <div>
                        <span class="text-[#E07575] font-pop font-bold">:</span>
                    </div>
                    <div>
                        <p class="font-pop text-xs font-medium">Seconds</p>
                        <h3 class="font-inner text-[32px] font-bold tracking-[1.28px]">03</h3>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>
