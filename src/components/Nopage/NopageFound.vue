<script setup>
import Container from '../layouts/Container.vue';
import Button from '../layouts/Button.vue';


</script>

<template>
    <div>
        <Container>
            <nav class="flex mt-20 px-2 lg:px-0" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                <router-link to="/" class="font-pop inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    Home
                </router-link>
                </li>
                <li>
                <div class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <a href="#" class="ms-1 font-pop text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">404 Page</a>
                </div>
                </li>
            </ol>
            </nav>
            <div class="py-20 lg:py-[140px] ">
                <h2 class="text-center font-pop font-medium text-[110px] mb-10">404 Not Found</h2>
                <p class="text-center font-pop text-base">Your visited page not found. You may go home page.</p>
                <div class="flex justify-center items-center mt-20">
                    <Button title="Back to home page" />
                </div>
            </div>
        </Container>
    </div>
</template>

