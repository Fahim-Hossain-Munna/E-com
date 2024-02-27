<script setup>
import Container from '../layouts/Container.vue';

import Button from '../layouts/Button.vue';
import Product from '../layouts/Product.vue';

// import { onMounted, ref } from 'vue';
// import axios from 'axios'
// import router from '../../Router/router';


// onMounted(async()=>{
// if (window.location.search.split("=")[1]) {
// let product = await axios.get(`https://dummyjson.com/products/category/${window.location.search.split("=")[1]}`)

// console.log(product.data.products);
// } else {
//    router.push('/')
// }


// })

</script>

<template>
    <div class="mt-20 mb-20 lg:mb-[140px]">
        <Container>
            <div class="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center mb-[60px]">
                <div>
                <h3 class="font-pop text-xl tracking-[1px]">Wishlist (4)</h3>
                </div>
                <div>
                    <Button title="Move All To Bag" className="bg-transparent border" subClass="!text-[#000]"/>
                </div>
            </div>
            <div class="lg:flex block justify-between items-center mb-20 px-2 lg:px-0">
                <Product imgSrc="/src/assets/uploads/product/product1.png" title="HAVIT HV-G92 Gamepad" />
                <Product imgSrc="/src/assets/uploads/product/product2.png" title="AK-900 Wired Keyboard" />
                <Product imgSrc="/src/assets/uploads/product/product3.png" title="IPS LCD Gaming Monitor" />
                <Product imgSrc="/src/assets/uploads/product/product4.png" title="S-Series Comfort Chair" />
            </div>
            <div class="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center mb-[60px]">
                <div class="flex justify-start items-center gap-4">
                    <div class="w-5 h-10 bg-[#DB4444] rounded"></div>
                    <p class="font-pop text-base text-[#DB4444] font-semibold">Just For You</p>
                </div>
                <div>
                    <Button title="See All" className="bg-transparent border" subClass="!text-[#000]"/>
                </div>
            </div>
            <div class="lg:flex block justify-between items-center mb-20 px-2 lg:px-0">
                <Product imgSrc="/src/assets/uploads/product/product1.png" title="HAVIT HV-G92 Gamepad" />
                <Product imgSrc="/src/assets/uploads/product/product2.png" title="AK-900 Wired Keyboard" />
                <Product imgSrc="/src/assets/uploads/product/product3.png" title="IPS LCD Gaming Monitor" />
                <Product imgSrc="/src/assets/uploads/product/product4.png" title="S-Series Comfort Chair" />
            </div>
        </Container>
    </div>
</template>

