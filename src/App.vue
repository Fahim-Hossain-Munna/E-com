<script setup>
import Banner from './components/Banner/Banner.vue';
import BsaleProduct from './components/BsaleProduct/BsaleProduct.vue';
import Category from './components/Category/Category.vue';
import ExploreProduct from './components/ExploreProduct/exploreProduct.vue';
import Header from './components/Header/Header.vue';
import NewArrival from './components/NewArrival/newArrival.vue';
import Offer from './components/Offer/Offer.vue';
import FlashSale from './components/Sale/FlashSale.vue';
</script>

<template>
  <Header/>
  <Banner/>
  <FlashSale/>
  <Category/>
  <BsaleProduct/>
  <Offer/>
  <ExploreProduct/>
  <NewArrival/>
</template>
