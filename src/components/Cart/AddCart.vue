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
        <div class="mb-[140px] px-2 lg:px-0">
            
            <div class="overflow-x-scroll lg:overflow-x-hidden">
                <table class="w-full table-auto">
                <thead>
                    <tr>
                        <th class="text-start py-6 px-8 lg:px-10 font-pop text-base">Product</th>
                        <th class="text-start py-6 px-8 lg:px-10 font-pop text-base">Price</th>
                        <th class="text-start py-6 px-8 lg:px-10 font-pop text-base">Quantity</th>
                        <th class="text-start py-6 px-8 lg:px-10 font-pop text-base">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="py-6 px-8 lg:px-10 flex justify-start items-center gap-5">
                            <img src="/src/assets/uploads/product/product1.png" class="w-[50px] h-10">
                            <h2 class="font-pop text-base">LCD Monitor</h2>
                        </td>
                        <td class="py-6 px-8 lg:px-10">
                            <p class="font-pop text-base">$650</p>
                        </td>
                        <td class="py-6 px-8 lg:px-10">
                            <CartBtn/>
                        </td>
                        <td class="py-6 px-8 lg:px-10">
                            <p class="font-pop text-base">$650</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-6 px-8 lg:px-10 flex justify-start items-center gap-5">
                            <img src="/src/assets/uploads/product/product2.png" class="w-[50px] h-10">
                            <h2 class="font-pop text-base">LCD Monitor</h2>
                        </td>
                        <td class="py-6 px-8 lg:px-10">
                            <p class="font-pop text-base">$6500</p>
                        </td>
                        <td class="py-6 px-8 lg:px-10">
                            <CartBtn/>
                        </td>
                        <td class="py-6 px-8 lg:px-10">
                            <p class="font-pop text-base">$6500</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div class="flex flex-col lg:flex-row justify-between items-center mt-10">
                <Button className="bg-transparent border lg:mb-0 mb-5" title="Return To Shop" subClass="!text-black"/>
                <Button className="bg-transparent border" title="Update Cart" subClass="!text-black"/>
            </div>
            <div class="flex flex-col lg:flex-row justify-between mt-20">
                <div>
                    <input placeholder="Coupon Code" type="text" class="py-4 px-6 w-full lg:w-[300px] mr-4 border mb-5 lg:mb-0">
                    <Button title="Apply Coupon"/>
                </div>
                <div class="w-full lg:w-[470px] border py-8 px-6 mt-20 lg:mt-0">
                    <div class="mb-4 font-pop text-xl font-medium">
                        <h2>Cart Total</h2>
                    </div>
                    <div class="py-4 border-b flex justify-between items-center font-pop text-base">
                        <h2>Subtotal:</h2>
                        <p>$1750</p>
                    </div>
                    <div class="py-4 flex border-b justify-between items-center font-pop text-base">
                        <h2>Shipping:</h2>
                        <p>Free</p>
                    </div>
                    <div class="py-4 flex justify-between items-center">
                        <h2>Total:</h2>
                        <p>$1750</p>
                    </div>
                    <div class="mt-8 flex justify-center">
                        <Button title="Procees to checkout"/>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>
