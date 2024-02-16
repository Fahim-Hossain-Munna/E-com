<script setup>
import Breadcum from '../Breadcum/Breadcum.vue';
import Button from '../layouts/Button.vue';
import CartBtn from '../layouts/CartBtn.vue';
import Container from '../layouts/Container.vue';


</script>
<template>
    <Container>
        <div class="my-10 lg:my-20 px-2 lg:px-0">
            <Breadcum pagename="Cart" navigation="/product/cart" />
        </div>
        <div class="mb-[140px]">
            <table class="w-full table-auto">
                <thead>
                    <tr>
                        <th class="text-start py-6 px-10 font-pop text-base">Product</th>
                        <th class="text-start py-6 px-10 font-pop text-base">Price</th>
                        <th class="text-start py-6 px-10 font-pop text-base">Quantity</th>
                        <th class="text-start py-6 px-10 font-pop text-base">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="py-6 px-10 flex justify-start items-center gap-5">
                            <img src="/src/assets/uploads/product/product1.png" class="w-[50px] h-10">
                            <h2 class="font-pop text-base">LCD Monitor</h2>
                        </td>
                        <td class="py-6 px-10">
                            <p class="font-pop text-base">$650</p>
                        </td>
                        <td class="py-6 px-10">
                            <CartBtn/>
                        </td>
                        <td class="py-6 px-10">
                            <p class="font-pop text-base">$650</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-6 px-10 flex justify-start items-center gap-5">
                            <img src="/src/assets/uploads/product/product2.png" class="w-[50px] h-10">
                            <h2 class="font-pop text-base">LCD Monitor</h2>
                        </td>
                        <td class="py-6 px-10">
                            <p class="font-pop text-base">$650</p>
                        </td>
                        <td class="py-6 px-10">
                            <CartBtn/>
                        </td>
                        <td class="py-6 px-10">
                            <p class="font-pop text-base">$650</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="lg:flex block justify-between items-center mt-10">
                <Button className="bg-transparent border lg:mb-0 mb-5" title="Return To Shop" subClass="!text-black"/>
                <Button className="bg-transparent border" title="Update Cart" subClass="!text-black"/>
            </div>
        </div>
    </Container>
</template>
