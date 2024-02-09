<script setup>
import { ref } from 'vue';
import Container from '../layouts/Container.vue';
import Breadcum from '../Breadcum/Breadcum.vue';
import Button from '../layouts/Button.vue';
import CartBtn from '../layouts/CartBtn.vue';
import Section from '../layouts/Section.vue';
import Product from '../layouts/Product.vue';
import Picture from '../layouts/Picture.vue';


let products = ref([
    {
        id : 1,
        src : "/src/assets/uploads/DetailsGallery/details1.png",
    },
    {
        id : 2,
        src : "/src/assets/uploads/DetailsGallery/details2.png",
    },
    {
        id : 3,
        src : "/src/assets/uploads/DetailsGallery/details3.png",
    },
    {
        id : 4,
        src : "/src/assets/uploads/DetailsGallery/details4.png",
    },
    // {
    //     id : 5,
    //     src : "/src/assets/uploads/DetailsGallery/details5.png",
    // },
])

let showImg = ref([
products.value[0].src
])

function clickBtnImg(p){
    showImg.value = p.src;
}

</script>

<template>
    <div>
        <Container className="px-2 lg:px-0">
                <div class="my-10 lg:my-20 ">
                <Breadcum pagename="Details" navigation="/product/details" />
                </div>
                <div class="block lg:flex justify-between mb-[140px]">
                    <div class="w-full lg:w-[700px] h-[450px] lg:h-[600px] mb-20 Lg:mb-0 block lg:flex justify-center items-center">
                        <div class="lg:h-full h-[90px] w-full lg:w-[170px] ml-auto flex flex-row lg:flex-col gap-4">
                            <button v-for="product in products" :key="product.id"  @click="clickBtnImg(product)" class="lg:w-[170px] lg:h-[150px] w-20 h-16 bg-[#f5f5f5] flex justify-center items-center">
                                <img :src=product.src class="lg:w-[112px] lg:h-[97px] w-[50px] h-[50px]">
                            </button>
                          
                        </div>
                        <div class="lg:h-full h-[400px] w-full lg:w-[500px] ml-auto flex justify-center items-center">
                            <!-- <Picture :source=pro.src className="w-full h-full" /> -->
                            <Picture :source=showImg className="w-full lg:w-[446px] h-[315px]"/>
                        </div>
                    </div>
                    <!-- left -->
                    <div class="w-full lg:w-[400px]">
                        <h2 class="font-pop font-semibold text-2xl">Havic HV G-92 Gamepad</h2>
                        <div class="flex justify-start items-center gap-2 my-4 text-[#FFAD33]">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star text-[#363738]"></i>
                            <p class="text-[rgba(0,0,0,0.5)] font-pop text-sm border-r pr-4">(150 Reviews)</p>
                            <p class="text-[#00FF66] font-pop text-sm pl-4">In Stock</p>
                        </div>
                        <h3 class="mb-5 font-pop text-2xl">$192.00</h3>
                        <p class="font-pop text-sm mb-6">PlayStation 5 Controller Skin High quality vinyl with air channel 
                            adhesive for easy bubble free install & mess free removal Pressure 
                            sensitive.
                        </p>
                        <div class="flex justify-start items-center py-6 border-t-2">
                        <div>
                            <h2 class="text-xl font-pop pr-6">Colours:</h2>
                        </div>
                        <div class="flex items-center">
                            <label class="relative flex items-center p-2 rounded-full cursor-pointer" htmlFor="black">
                            <input name="color" type="radio"
                                class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-[#A0BCE0]  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#A0BCE0] checked:before:bg-[#A0BCE0] hover:before:opacity-10"
                                id="blue" />
                            <span
                                class="absolute text-[#A0BCE0]  transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                </svg>
                            </span>
                            </label>
                        </div>
                        <div class="flex items-center">
                            <label class="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="green">
                            <input name="color" type="radio"
                                class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-[#E07575]  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:before:bg-red-500 hover:before:opacity-10"
                                id="red" />
                            <span
                                class="absolute text-[#E07575] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                </svg>
                            </span>
                            </label>
                        </div>
                        </div>
                        <div class="flex justify-start items-center pb-6">
                            <div>
                                <h2 class="text-xl font-pop pr-6">Size:</h2>
                            </div>
                            <div class="flex justify-start items-center gap-4">
                                <p class="w-8 h-8 rounded flex justify-center items-center border font-pop text-sm font-medium">XS</p>
                                <p class="w-8 h-8 rounded flex justify-center items-center border font-pop text-sm font-medium">S</p>
                                <p class="w-8 h-8 rounded flex justify-center items-center border font-pop text-sm font-medium">M</p>
                                <p class="w-8 h-8 rounded flex justify-center items-center border font-pop text-sm font-medium">L</p>
                                <p class="w-8 h-8 rounded flex justify-center items-center border font-pop text-sm font-medium">XL</p>
                                <p class="w-8 h-8 rounded flex justify-center items-center border font-pop text-sm font-medium">XXL</p>
                            </div>
                        </div>
                        <div class="lg:flex block justify-between items-center">
                            <CartBtn />
                           <div class="flex justify-between items-center gap-5 mt-8 lg:mt-0">
                            <Button title="Buy Now" className="px-12 py-[10px]" />
                            <div class="w-10 h-10 border flex justify-center items-center">
                                <i class="fa-regular fa-heart text-xl"></i>
                            </div>
                           </div>
                        </div>
                        <div class="w-full mt-10">
                            <div class="flex justify-start border gap-4 px-4 py-6">
                                <div class="flex justify-center items-center text-[40px] mb-2">
                                    <i class="fa-solid fa-truck"></i>
                                </div>
                                <div>
                                    <p class="font-pop text-base font-medium">Free Delivery</p>
                                    <p class="font-pop text-xs font-medium">Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div class="flex justify-start border gap-4 px-4 py-6">
                                <div class="flex justify-center items-center text-[40px] mb-2">
                                    <i class="fa-solid fa-rotate"></i>
                                </div>
                                <div>
                                    <p class="font-pop text-base font-medium">Free Delivery</p>
                                    <p class="font-pop text-xs font-medium">Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- right -->
                </div>

                <div class="mb-[140px]">
                    <div class="mb-[60px]">
                        <Section title="Related Item"/>
                    </div>
                    <div class="lg:flex block justify-between items-center">
                        <Product imgSrc="/src/assets/uploads/product/product1.png" title="HAVIT HV-G92 Gamepad"/>
                        <Product imgSrc="/src/assets/uploads/product/product2.png" title="AK-900 Wired Keyboard"/>
                        <Product imgSrc="/src/assets/uploads/product/product3.png" title="IPS LCD Gaming Monitor"/>
                        <Product imgSrc="/src/assets/uploads/product/product4.png" title="RGB liquid CPU Cooler"/>
                    </div>
                </div>

        </Container>
    </div>
</template>


<style>

.swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

</style>
