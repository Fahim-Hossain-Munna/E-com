<script setup>
import Breadcum from '../Breadcum/Breadcum.vue';
import Button from '../layouts/Button.vue';
import CartBtn from '../layouts/CartBtn.vue';
import Container from '../layouts/Container.vue';
import productData from '../../store/product';
import { reactive, ref } from 'vue';

const cartNum = ref(1);
let data = ref(0)
let useCoupon = ref('')
const subTotal = productData.carts.map((item) => item.price * item.quantity);
data.value = subTotal.reduce((total, num) => total + num, 0);

const decrementCart = (cart) => {
    productData.decrementCart(cart)
    updateSubTotal();
}

function incrementCart(cart) {
    productData.incrementCart(cart)
    updateSubTotal();
}

function decresePrice() {
    const subTota = productData.carts.map((item) => item.price * item.quantity);
    data.value = subTota.reduce((total, num) => total + num, 0)
}

function updateSubTotal() {
    const subTotal = productData.carts.map((item) => item.price * item.quantity);
    data.value = subTotal.reduce((total, num) => total + num, 0);
}


function removeCart(cart) {
    const index = productData.carts.findIndex(item => item.id === cart.id);
    if (index !== -1) {
        productData.carts.splice(index, 1);
        // Update local storage
        updateLocalStorage(productData.carts);
        decresePrice()
    }
}

function updateLocalStorage(cartItems) {
    localStorage.setItem('addCarts', JSON.stringify(cartItems));
}

let Coupons = ref([
    {
        code: "FHM123",
        discount: 100
    },
    {
        code: "FHMS123",
        discount: 200
    },
    {
        code: "EID123",
        discount: 500
    },
])

let discountedPrice = ref(0)

function applyCoupon() {
    Coupons.value.find((info) =>
        info.code == useCoupon.value ? discountedPrice.value = info.discount : console.log("mile nai")
    )
}



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
                            <th class="text-start py-6 px-8 lg:px-10 font-pop text-base">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="productData.carts == ''">
                            <td colspan="5" class="text-center bg-[#DB4444] text-white"> No Data Found</td>
                        </tr>
                        <tr v-for="cart in productData.carts" :key="cart.id">
                            <td class="py-6 px-8 lg:px-10 flex justify-start items-center gap-5">
                                <img :src="cart.thumbnail" class="w-[50px] h-10">
                                <h2 class="font-pop text-base">{{ cart.title }}</h2>
                            </td>
                            <td class="py-6 px-8 lg:px-10">
                                <p class="font-pop text-base">${{ cart.price }}</p>
                            </td>
                            <td class="py-6 px-8 lg:px-10">
                                <div class="incre flex justify-start items-center">
                                    <button class="w-10 h-11 border" @click="decrementCart(cart)">
                                        <i class="fa-solid fa-minus"></i>
                                    </button>
                                    <div class="w-20 h-11 border flex justify-center items-center">
                                        <p class="font-pop text-xl font-medium">{{ cart.quantity }}</p>
                                    </div>
                                    <button class="w-10 h-11 border" @click="incrementCart(cart)">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <!-- <CartBtn :quantity="cart.quantity" :info="cart.id" /> -->
                            </td>
                            <td class="py-6 px-8 lg:px-10">
                                <p class="font-pop text-base">${{ cart.price * cart.quantity }}</p>
                            </td>
                            <td class="py-6 px-8 lg:px-10">
                                <button @click="removeCart(cart)" class="font-pop text-base text-[#DB4444]">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex flex-col lg:flex-row justify-between items-center mt-10">
                <Button className="bg-transparent border lg:mb-0 mb-5" title="Return To Shop" subClass="!text-black" />
                <Button className="bg-transparent border" title="Update Cart" subClass="!text-black" />
            </div>
            <div class="flex flex-col lg:flex-row justify-between mt-20">
                <div>
                    <input v-model="useCoupon" placeholder="Coupon Code" type="text"
                        class="py-4 px-6 w-full lg:w-[300px] mr-4 border mb-5 lg:mb-0">
                    <Button title="Apply Coupon" @click="applyCoupon()" />
                </div>
                <div class="w-full lg:w-[470px] border py-8 px-6 mt-20 lg:mt-0">
                    <div class="mb-4 font-pop text-xl font-medium">
                        <h2>Cart Total</h2>
                    </div>
                    <div class="py-4 border-b flex justify-between items-center font-pop text-base">
                        <h2>Subtotal:</h2>
                        <p>${{ data }}</p>
                    </div>
                    <div class="py-4 flex border-b justify-between items-center font-pop text-base">
                        <h2>Shipping:</h2>
                        <p>{{ discountedPrice }}</p>
                    </div>
                    <div class="py-4 flex justify-between items-center font-pop text-base">
                        <h2>Total:</h2>
                        <p>${{ data - discountedPrice }}</p>
                    </div>
                    <div class="mt-8 flex justify-center">
                        <Button title="Procees to checkout" />
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>
