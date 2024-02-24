<script setup>
import Breadcum from '../Breadcum/Breadcum.vue';
import Container from '../layouts/Container.vue';
import Team from '../layouts/Team.vue';
import Picture from '../layouts/Picture.vue';
import Service from '../Service/Services.vue'

</script>

<template>
    <div class="px-2 lg:px-0 overflow-x-hidden">
        <Container>
            <div class="my-10 lg:mt-20 lg:mb-10">
                <Breadcum pagename="About" navigation="/about" />
            </div>
            <div class="lg:flex block justify-between mb-[140px]">
                <div class="w-full lg:w-[525px]">
                    <h2 class="font-inner font-semibold text-5xl">Our Story</h2>
                    <p class="mt-10 font-pop text-base text-justify">
                        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
                    </p>
                    <p class="pt-6 font-pop text-base text-justify">
                     Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                    </p>
                </div>
                <div class="w-full lg:w-[837px] lg:h-[609px] h-[300px] lg:relative mt-10 lg:mt-0 ">
                    <Picture source="/src/assets/uploads/about/about.png" className="w-full h-full lg:absolute lg:right-[-170px] top-0" />
                </div>
            </div>

            <div class="block lg:flex justify-between items-center">
                <div class="border-2 rounded w-full lg:w-[270px] h-[230px] flex flex-col lg:mt-0 justify-center items-center transition-all duration-700 group hover:bg-[#DB4444]">
                    <Picture source="/src/assets/uploads/service/Services4.png" />
                    <h2 class="mt-6 font-inner font-bold text-3xl transition-all duration-700 group-hover:text-white">10.5k</h2>
                    <p class="mt-3 font-pop text-base transition-all duration-700 group-hover:text-white">Sallers active our site</p>
                </div>
                <div class="border-2 rounded w-full lg:w-[270px] h-[230px] flex flex-col mt-8 lg:mt-0 justify-center items-center transition-all duration-700 group hover:bg-[#DB4444]">
                    <Picture source="/src/assets/uploads/service/Services5.png" />
                    <h2 class="mt-6 font-inner font-bold text-3xl transition-all duration-700 group-hover:text-white">10.5k</h2>
                    <p class="mt-3 font-pop text-base transition-all duration-700 group-hover:text-white">Sallers active our site</p>
                </div>
                <div class="border-2 rounded w-full lg:w-[270px] h-[230px] flex flex-col mt-8 lg:mt-0 justify-center items-center transition-all duration-700 group hover:bg-[#DB4444]">
                    <Picture source="/src/assets/uploads/service/Services6.png" />
                    <h2 class="mt-6 font-inner font-bold text-3xl transition-all duration-700 group-hover:text-white">10.5k</h2>
                    <p class="mt-3 font-pop text-base transition-all duration-700 group-hover:text-white">Sallers active our site</p>
                </div>
                <div class="border-2 rounded w-full lg:w-[270px] h-[230px] flex flex-col mt-8 lg:mt-0 justify-center items-center transition-all duration-700 group hover:bg-[#DB4444]">
                    <Picture source="/src/assets/uploads/service/Services2.png" />
                    <h2 class="mt-6 font-inner font-bold text-3xl transition-all duration-700 group-hover:text-white">10.5k</h2>
                    <p class="mt-3 font-pop text-base transition-all duration-700 group-hover:text-white">Sallers active our site</p>
                </div>
            </div>
 
            <div class="block lg:flex justify-between items-center mt-[140px] lg:mt-10">
                <Team source="/src/assets/uploads/team/team1.png" title="Tom Cruise" designation="Founder & Chairman"/>
                <Team source="/src/assets/uploads/team/team2.png" title="Emma Watson" designation="Managing Director"/>
                <Team source="/src/assets/uploads/team/team3.png" title="Will Smith" designation="Product Designer"/>
            </div>

            <div>
                <Service/>
            </div>
        </Container>
    </div>
</template>
