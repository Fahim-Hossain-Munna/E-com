<script setup>
import Container from '../layouts/Container.vue';
import Button from '../layouts/Button.vue';
import Breadcum from '../Breadcum/Breadcum.vue';


</script>

<template>
    <div>
        <Container>
           <div class="my-10 lg:my-20 px-2 lg:px-0">
            <Breadcum pagename="Contact" navigation="/contact" />
           </div>
           <div class="block lg:flex justify-between mb-[140px]">
            <div class="w-[340px] h-[457px] py-10 px-9">
                <div class="flex flex-col">
                    <div>
                        <div class="flex items-center gap-4 mb-6">
                        <div class="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#DB4444] text-white">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <h2 class="font-pop font-medium text-base">Call To Us</h2>
                    </div>
                    <div class="border-b pb-8 flex flex-col gap-4">
                        <h2 class="font-pop text-sm">We are available 24/7, 7 days a week.</h2>
                        <p class="font-pop text-sm">Phone: +8801611112222</p>
                    </div>
                    </div>
                    <!-- .... -->
                    <div class="mt-8">
                        <div class="flex items-center gap-4 mb-6">
                        <div class="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#DB4444] text-white">
                            <i class="fa-regular fa-envelope"></i>
                        </div>
                        <h2 class="font-pop font-medium text-base">Write To US</h2>
                    </div>
                    <div class="flex flex-col gap-4">
                        <p class="font-pop text-sm">Fill out our form and we will contact you within 24 hours.</p>
                        <p class="font-pop text-sm">We are available 24/7, 7 days a week.</p>
                        <p class="font-pop text-sm">Phone: +8801611112222</p>
                    </div>
                    </div>
                </div>
            </div>

            <!-- contact from part -->
            <div class="w-full lg:w-[800px] lg:p-8 p-4">
                <div class="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between mb-8">
                    <input type="text" placeholder="Your Name *" class="rounded w-full lg:w-[235px] py-[13px] px-4 bg-[#f5f5f5] placeholder:font-pop placeholder:text-base">
                    <input type="text" placeholder="Your Email *" class="rounded w-full lg:w-[235px] py-[13px] px-4 bg-[#f5f5f5] placeholder:font-pop placeholder:text-base">
                    <input type="text" placeholder="Your Phone *" class="rounded w-full lg:w-[235px] py-[13px] px-4 bg-[#f5f5f5] placeholder:font-pop placeholder:text-base">
                </div>
                <div class="mb-8">
                    <textarea class="rounded w-full lg:w-[737px] bg-[#f5f5f5] py-[13px] px-4 placeholder:font-pop placeholder:text-base" rows="8" placeholder="Your Message *"></textarea>
                </div>
                <div class="flex justify-end">
                    <Button title="Send Massage" />
                </div>
            </div>
           </div>
        </Container>
    </div>
</template>
