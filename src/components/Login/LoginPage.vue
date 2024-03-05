<script setup>
import Container from '../layouts/Container.vue';
import Picture from '../layouts/Picture.vue';
import Button from '../layouts/Button.vue';
import { ref, watch } from 'vue';
import auth from '../../store/auth';

const email = ref()
const password = ref()

function login(email, password) {
    auth.login(email, password)
    // console.log(auth.login());
}






</script>

<template>
    <div class=" mt-[60px] mb-[140px] h-[781px] block lg:flex justify-between px-2 lg:px-0">
        <div class="w-full lg:w-1/2 object-cover lg:h-full">
            <Picture source="/src/assets/uploads/log_res/login.png" className="w-full h-full" />
        </div>
        <Container>
            <div class="w-full lg:w-[370px] mt-16 lg:mt-0 flex flex-col h-full justify-center items-center">
                <div class="w-full mb-12">
                    <h2 class="font-pop font-medium text-4xl mb-6">Log in to Exclusive</h2>
                    <p class="font-pop text-base">Enter your details below - {{ auth.token }}</p>
                </div>
                <div class="w-full flex flex-col gap-10">
                    <input type="email" v-model="email" placeholder="Email or Phone Number"
                        class="w-full border-b pb-2 placeholder:font-pop placeholder:text-base outline-none">
                    <input type="password" v-model="password" placeholder="Password"
                        class="w-full border-b pb-2 placeholder:font-pop placeholder:text-base outline-none">
                </div>
                <div v-show="auth.error" class="mt-6">
                    <p class="font-pop font-semibold text-2xl text-red-500">{{ auth.error }}</p>
                </div>
                <div class="w-full flex justify-between mt-10">
                    <div>
                        <Button title="Log In" @click="login(email, password)" />
                    </div>
                    <div class="flex justify-end items-center">
                        <p class="font-pop text-[#DB4444] text-base">Forget Password?</p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>
