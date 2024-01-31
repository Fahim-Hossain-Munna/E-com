<script setup>
import Container from '../layouts/Container.vue';
import Section from '../layouts/Section.vue';
import Button from '../layouts/Button.vue';
import Product from '../layouts/Product.vue';


</script>

<template >
    <div class="my-20 px-2 lg:px-0">
        <Container>
            <div class="mb-5">
                <Section title="This Month"/>
            </div>
            <div class="lg:flex block lg:justify-between text-start items-center mb-[60px]">
                <div>
                    <h2 class="font-inner text-4xl font-semibold tracking-[1.44px]">Best Selling Products</h2>
                </div>
                <div class="hidden lg:block">
                    <Button title="View All"/>
                </div>
            </div>
            <div class="flex flex-wrap justify-between items-center">
                <Product imgSrc="/src/assets/uploads/product/product1.png" title="HAVIT HV-G92 Gamepad"/>
                <Product imgSrc="/src/assets/uploads/product/product2.png" title="AK-900 Wired Keyboard" />
                <Product imgSrc="/src/assets/uploads/product/product3.png" title="IPS LCD Gaming Monitor" />
                <Product imgSrc="/src/assets/uploads/product/product4.png" title="S-Series Comfort Chair" />

            </div>
        </Container>
    </div>
</template>

