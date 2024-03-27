<script setup>
import Header from '../components/Header/Header.vue';
import Footer from '../components/Footer/Footer.vue';
import LoginPage from '../components/Login/LoginPage.vue';
import auth from '../store/auth';
import router from '../Router/router';

if (auth.users.token) {
    router.push('/')
}

</script>


<template>
    <Header />
    <LoginPage />
    <Footer />
</template>
