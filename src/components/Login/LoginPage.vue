<script setup>
import Container from '../layouts/Container.vue';
import Picture from '../layouts/Picture.vue';
import Button from '../layouts/Button.vue';


</script>

<template>
    <div class=" mt-[60px] mb-[140px] h-[781px] flex justify-between">
        <div class="w-[805px] h-full">
            <Picture source="/src/assets/uploads/log_res/login.png" className="w-full h-full" />
        </div>
        <Container>
            <div class="w-[370px] flex flex-col h-full justify-center items-center">
                <div class="w-full mb-12">
                <h2 class="font-pop font-medium text-4xl mb-6">Log in to Exclusive</h2>
                <p class="font-pop text-base">Enter your details below</p>
                </div>
                <div class="w-full flex flex-col gap-10">
                    <input type="email" placeholder="Email or Phone Number" class="w-full border-b pb-2 placeholder:font-pop placeholder:text-base">
                    <input type="password" placeholder="Password" class="w-full border-b pb-2 placeholder:font-pop placeholder:text-base">
                </div>
                <div class="w-full flex justify-between mt-10">
                    <div>
                        <Button title="Log In"/>
                    </div>
                    <div class="flex justify-end items-center">
                        <p class="font-pop text-[#DB4444] text-base">Forget Password?</p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>

