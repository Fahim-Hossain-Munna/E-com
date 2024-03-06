<script setup>
import { ref } from 'vue';
const cartNum = ref(1);
defineProps([
    "className",
    "quantity",
])

const decrementCart = () => {
    if (cartNum.value > 1) {
        cartNum.value--
    }
}

function incrementCart() {
    cartNum.value++
}

</script>

<template>
    <div class="incre flex justify-start items-center" :class=className>
        <button class="w-10 h-11 border" @click="decrementCart">
            <i class="fa-solid fa-minus"></i>
        </button>
        <div class="w-20 h-11 border flex justify-center items-center">
            <p class="font-pop text-xl font-medium">{{ cartNum }}</p>
        </div>
        <button class="w-10 h-11 border" @click="incrementCart">
            <i class="fa-solid fa-plus"></i>
        </button>
    </div>
</template>
