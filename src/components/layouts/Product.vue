<script setup>
import Picture from '../layouts/Picture.vue';
import Icon from '../layouts/Icon.vue';

defineProps({
    imgSrc:String,
    title:String,
    price:String,
    discount:String,
})

</script>

<template>
    <router-link to="/product/details" class="lg:w-[270px] w-full mb-8 lg:mb-0">
                    <div class="w-full h-[250px] flex justify-center items-center relative group bg-[#F5F5F5] rounded">
                        <Picture :source=imgSrc className="h-[150px] w-[180px]" />
                        <p class="bg-black font-pop text-center text-base font-medium text-white absolute left-0 bottom-0 w-full py-2 opacity-0 
                        group-hover:opacity-100 transition-all duration-500
                         z-50">Add To Cart</p>
                        <div class="px-3 py-1 bg-[#DB4444] text-white rounded absolute top-3 left-3">
                            <p class="font-pop text-xs">-{{discount}}%</p>
                        </div>
                        <div class="absolute top-3 right-3">
                        <div class="mb-2">
                            <i class="fa-regular fa-heart bg-white border px-[5px] py-[5px] rounded-full"></i>
                        </div>
                        <div>
                            <i class="fa-regular fa-eye bg-white border px-[5px] py-[5px] rounded-full"></i>
                        </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div>
                            <h2 class="font-pop text-base font-medium text-start">{{ title }}</h2>
                        </div>
                        <div class="flex mt-2 gap-3">
                            <p class="font-pop text-base font-medium text-[#DB4444]">${{ Math.round(price - ((price * discount) / 100)) }}</p>
                            <p class="font-pop text-base font-medium text-[rgba(0,0,0,0.5)]"><del>${{ price }}</del></p>
                        </div>
                        <div class="flex justify-start items-center gap-2 mt-2">
                            <div>
                                <i class="fa-solid fa-star text-[#FFAD33]"></i>
                                <i class="fa-solid fa-star text-[#FFAD33]"></i>
                                <i class="fa-solid fa-star text-[#FFAD33]"></i>
                                <i class="fa-solid fa-star text-[#FFAD33]"></i>
                                <i class="fa-solid fa-star text-[rgba(0,0,0,0.5)]"></i>
                            </div>
                            <div>
                                <p class="font-pop text-sm font-semibold text-[rgba(0,0,0,0.5)]">(88)</p>
                            </div>
                        </div>
                    </div>
                </router-link>
</template>
