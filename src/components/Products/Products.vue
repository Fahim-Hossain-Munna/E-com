<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue';
import Container from '../layouts/Container.vue';
import Product from '../layouts/Product.vue';

const urlPath = window.location.pathname.split('/')[2]
const products = ref([])

onMounted(async () => {

    if (urlPath) {
        let categoryProductResponse = await axios.get(`https://dummyjson.com/products/category/${urlPath}`)
        products.value = categoryProductResponse.data.products
    } else {
        let categoryProductResponse = await axios.get("https://dummyjson.com/products")
        products.value = categoryProductResponse.data.products
    }


})


</script>


<template>
    <div class="my-[140px]">
        <Container>
            <div class="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center mb-[60px]">
                <div class="flex justify-start items-center gap-4">
                    <div class="w-5 h-10 bg-[#DB4444] rounded"></div>
                    <p class="font-pop text-base text-[#DB4444] font-semibold">Just For You</p>
                </div>
                <div>
                    <Button title="See All" className="bg-transparent border" subClass="!text-[#000]" />
                </div>
            </div>
            <div class="lg:flex block lg:flex-wrap justify-between items-center gap-y-20 px-2 lg:px-0">
                <Product v-for="product in products" :key="product.id" :imgSrc=product.thumbnail :title=product.title
                    :price=product.price :discount=product.discountPercentage />
            </div>
        </Container>
    </div>
</template>