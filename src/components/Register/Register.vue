<script setup>

import Container from '../layouts/Container.vue';
import Picture from '../layouts/Picture.vue';
import Button from '../layouts/Button.vue';

import { ref } from 'vue';
import Auth from '../../store/Auth'

let name = ref('')
let email = ref('')
let password = ref('')

function register() {
    Auth.register(name.value, email.value, password.value)
}

</script>

<template>
    <div class=" mt-[60px] mb-[220px] lg:mb-[170px]  h-[781px] block lg:flex justify-between px-2 lg:px-0">
        <div class="w-full lg:w-1/2 object-cover lg:h-full">
            <Picture source="/src/assets/uploads/log_res/login.png" className="w-full h-full" />
        </div>
        <Container>
            <p v-if="Auth.success" class="font-pop text-3xl text-green-400 font-semibold">{{ Auth.success }}</p>
            <p v-if="Auth.error" class="font-pop text-3xl text-red-400 font-semibold">{{ Auth.error }}</p>
            <div class="w-full lg:w-[370px] mt-16 lg:mt-0 flex flex-col h-full justify-center items-center">
                <div class="w-full mb-12">
                    <h2 class="font-pop font-medium text-4xl mb-6">Create an account</h2>
                    <p class="font-pop text-base">Enter your details below</p>
                </div>
                <div class="w-full flex flex-col gap-10">
                    <input v-model="name" type="name" placeholder="Name"
                        class="w-full border-b pb-2 placeholder:font-pop placeholder:text-base outline-none">
                    <input v-model="email" type="email" placeholder="Email"
                        class="w-full border-b pb-2 placeholder:font-pop placeholder:text-base outline-none">
                    <input v-model="password" type="password" placeholder="Password"

                        class="w-full border-b pb-2 placeholder:font-pop placeholder:text-base outline-none">
                </div>

                <div class="mt-10 lg:w-[370px]">

                    <Button title="Create Account" @click="register()" className="w-full" />

                </div>
                <div class="mt-4 lg:w-[370px] relative">
                    <Button title="Sign up with Google" className="w-full bg-transparent border"
                        subClass="!text-black" />
                    <Picture source="/src/assets/uploads/log_res/google.png"
                        className="hidden lg:block absolute top-1/2 translate-y-[-50%] left-16" />
                </div>
                <div class="w-full flex justify-center gap-2 items-center mt-[34px] px-2 lg:px-0">
                    <p class="font-pop text-[#000] text-base">Already have account?</p>
                    <!-- <a class="font-pop text-[#000] text-base underline"></a> -->
                    <router-link to="/login" class="font-pop text-[#000] text-base underline">Log in</router-link>
                </div>

            </div>
        </Container>
    </div>
</template>
