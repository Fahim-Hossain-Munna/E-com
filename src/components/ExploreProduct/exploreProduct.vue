<script setup>
import Container from '../layouts/Container.vue';
import Product from '../layouts/Product.vue';
import Section from '../layouts/Section.vue';
import Button from '../layouts/Button.vue';


</script>


<template>
    <div class="pt-[71px] px-2 lg:px-0">
        <Container>
            <Section title="Our Products"/>
            <div class="mt-5">
                <h2 class="font-inner text-4xl font-semibold tracking-[1.44px]">Explore Our Products</h2>
            </div>
            <div class="my-[60px] flex justify-between flex-wrap gap-y-5 lg:gap-y-[60px]">
                <Product imgSrc="/src/assets/uploads/product/product1.png" title="HAVIT HV-G92 Gamepad"/>
                <Product imgSrc="/src/assets/uploads/product/product2.png" title="AK-900 Wired Keyboard" />
                <Product imgSrc="/src/assets/uploads/product/product3.png" title="IPS LCD Gaming Monitor" />
                <Product imgSrc="/src/assets/uploads/product/product4.png" title="S-Series Comfort Chair" />
                <Product imgSrc="/src/assets/uploads/product/product1.png" title="HAVIT HV-G92 Gamepad"/>
                <Product imgSrc="/src/assets/uploads/product/product2.png" title="AK-900 Wired Keyboard" />
                <Product imgSrc="/src/assets/uploads/product/product3.png" title="IPS LCD Gaming Monitor" />
                <Product imgSrc="/src/assets/uploads/product/product4.png" title="S-Series Comfort Chair" />
            </div>
            <div class="flex justify-center items-center">
                <Button title="View All Products" />
            </div>
        </Container>
    </div>
</template>
