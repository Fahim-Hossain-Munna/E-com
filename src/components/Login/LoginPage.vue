<script setup>
import Container from '../layouts/Container.vue';
import Picture from '../layouts/Picture.vue';
import Button from '../layouts/Button.vue';
import { ref } from 'vue';
import Auth from '../../store/Auth'

let email = ref('')
let password = ref('')

function login() {
    Auth.login(email.value, password.value)
}

</script>

<template>
    <div class=" mt-[60px] mb-[140px] h-[781px] block lg:flex justify-between px-2 lg:px-0">
        <div class="w-full lg:w-1/2 object-cover lg:h-full">
            <Picture source="/src/assets/uploads/log_res/login.png" className="w-full h-full" />
        </div>
        <Container>
            <p v-if="Auth.success" class="font-pop text-3xl text-green-400 font-semibold">{{ Auth.success }}</p>
            <p v-if="Auth.error" class="font-pop text-3xl text-red-400 font-semibold">{{ Auth.error }}</p>
            <div class="w-full lg:w-[370px] mt-16 lg:mt-0 flex flex-col h-full justify-center items-center">
                <div class="w-full mb-12">
                    <h2 class="font-pop font-medium text-4xl mb-6">Log in to Exclusive</h2>
                    <p class="font-pop text-base">Enter your details below</p>
                </div>
                <div class="w-full flex flex-col gap-10">
                    <input v-model="email" type="email" placeholder="Email or Phone Number"
                        class="w-full border-b pb-2 placeholder:font-pop placeholder:text-base outline-none">
                    <input v-model="password" type="password" placeholder="Password"
                        class="w-full border-b pb-2 placeholder:font-pop placeholder:text-base outline-none">
                </div>
                <div class="w-full flex justify-between mt-10">
                    <div>
                        <Button title="Log In" @click="login" />
                    </div>
                    <div class="flex justify-end items-center">
                        <p class="font-pop text-[#DB4444] text-base">Forget Password?</p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>
