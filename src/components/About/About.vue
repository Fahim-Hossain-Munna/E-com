<script setup>
import Breadcum from '../Breadcum/Breadcum.vue';
import Container from '../layouts/Container.vue';
import Picture from '../layouts/Picture.vue';


</script>

<template>
    <div>
        <Container>
            <div class="my-10 lg:mt-20 lg:mb-10">
                <Breadcum pagename="About" navigation="/about" />
            </div>
            <div class="flex justify-between mb-[140px]">
                <div class="w-[525px]">
                    <h2 class="font-inner font-semibold text-5xl">Our Story</h2>
                    <p class="mt-10 font-pop text-base text-justify">
                        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
                    </p>
                    <p class="pt-6 font-pop text-base text-justify">
                     Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                    </p>
                </div>
                <div class="w-[837px] h-[609px] relative">
                    <Picture source="/src/assets/uploads/about/about.png" className="w-full h-full absolute right-[-120px] top-0" />
                </div>
            </div>

            <div class="mb-10 flex justify-between items-center">
                <div class="border-2 rounded w-[270px] h-[230px] flex flex-col justify-center items-center">
                    <Picture source="/src/assets/uploads/service/Services4.png" />
                    <h2 class="mt-6 font-inner font-bold text-3xl">10.5k</h2>
                    <p class="mt-3 font-pop text-base">Sallers active our site</p>
                </div>
                <div class="border-2 rounded w-[270px] h-[230px] flex flex-col justify-center items-center">
                    <Picture source="/src/assets/uploads/service/Services5.png" />
                    <h2 class="mt-6 font-inner font-bold text-3xl">10.5k</h2>
                    <p class="mt-3 font-pop text-base">Sallers active our site</p>
                </div>
                <div class="border-2 rounded w-[270px] h-[230px] flex flex-col justify-center items-center">
                    <Picture source="/src/assets/uploads/service/Services6.png" />
                    <h2 class="mt-6 font-inner font-bold text-3xl">10.5k</h2>
                    <p class="mt-3 font-pop text-base">Sallers active our site</p>
                </div>
                <div class="border-2 rounded w-[270px] h-[230px] flex flex-col justify-center items-center">
                    <Picture source="/src/assets/uploads/service/Services2.jpg" />
                    <h2 class="mt-6 font-inner font-bold text-3xl">10.5k</h2>
                    <p class="mt-3 font-pop text-base">Sallers active our site</p>
                </div>
            </div>
        </Container>
    </div>
</template>
