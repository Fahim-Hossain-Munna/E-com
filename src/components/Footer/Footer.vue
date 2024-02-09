<script setup>
import Container from '../layouts/Container.vue';
import Picture from '../layouts/Picture.vue';
import QRCodeVue3 from "qrcode-vue3";

let now = new Date()
let thisMonth = now.getFullYear()

</script>
<template>
    <div class="bg-black lg:pt-[80px] pt-10 pb-10 lg:pb-[60px]">
        <Container>
          <div class="lg:flex block justify-between px-2 lg:px-0">
            <div class="lg:w-[270px] w-full mb-5 lg:mb-0">
            <Picture source="/src/assets/uploads/logo/logo_footer.png" />
            <div class="mt-6 text-white">
                <h2 class="font-pop text-xl font-medium mb-6">Subscribe</h2>
                <p class="font-pop text-base font-normal">Get 10% off your first order</p>
            </div>
            <div class="mt-4 relative">
                <input type="text" placeholder="Enter your email" class="relative w-full p-4 border rounded bg-transparent text-white placeholder:font-pop placeholder:text-base placeholder:text-[rgba(255,255,255,0.44)]">
                <button class="absolute right-4 top-1/2 translate-y-[-50%]">
                    <i class="fa-regular fa-envelope text-white text-2xl"></i>
                </button>
            </div>
            </div>
            <!-- end 1st part -->
            <div class="lg:w-[175px] w-full mb-5 lg:mb-0">
                <div class="mb-6">
                    <h2 class="font-pop font-medium text-xl text-white">Support</h2>
                </div>
                <div>
                    <ul class="text-white text-base">
                        <li class="mb-4">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
                        <li class="mb-4">exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                </div>
            </div>
            <!-- end 2nd part -->
            <div class="lg:w-[175px] w-full mb-5 lg:mb-0">
                <div class="mb-6">
                    <h2 class="font-pop font-medium text-xl text-white">Account</h2>
                </div>
                <div>
                    <ul class="text-white text-base">
                        <li class="mb-4">My Account</li>
                        <li class="mb-4">Login / Register</li>
                        <li class="mb-4">Cart</li>
                        <li class="mb-4">Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>
            </div>
            <!-- end 3rd part -->
            <div class="lg:w-[175px] w-full mb-5 lg:mb-0">
                <div class="mb-6">
                    <h2 class="font-pop font-medium text-xl text-white">Quick Link</h2>
                </div>
                <div>
                    <ul class="text-white text-base">
                        <li class="mb-4">Privacy Policy</li>
                        <li class="mb-4">Terms Of Use</li>
                        <li class="mb-4">FAQ</li>
                        <li class="mb-4">Contact</li>
                        <li>Shop</li>
                    </ul>
                </div>
            </div>
            <!-- end 4th part -->
            <div class="lg:w-[217px] w-full">
                <div class="mb-6 flex justify-center lg:block">
                    <h2 class="font-pop font-medium text-xl text-white">Download App</h2>
                </div>
                <div class="mb-2 flex justify-center lg:block">
                    <p class="font-pop text-xs font-medium text-[rgba(255,255,255,0.7)]">Save $3 with App New User Only</p>
                </div>
                <div class="flex lg:justify-between justify-evenly">
                    <div class="w-[80px] h-[84px]">
                        <QRCodeVue3 class="h-full w-full"
                            value="https://swiperjs.com/demos#vertical"
                        />
                        <!-- <Picture source="/src/assets/uploads/footer/qrd.jpg" className="h-full w-full" /> -->
                    </div>
                    <div class="w-[110px] flex flex-col h-[84px] justify-between">
                        <Picture source="/src/assets/uploads/footer/footer1.png" />
                        <Picture source="/src/assets/uploads/footer/footer2.png" />
                    </div>
                </div>
                <div class="mt-6 text-white flex gap-6 text-2xl lg:justify-start justify-center">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
          </div>
        </Container>
    </div>
    <div class="bg-black">
        <Container className="px-2 lg:px-0">
            <div class="flex justify-center text-[rgba(255,255,255,0.3)] py-6">
            <p class="font-pop text-xs">Copyright Fahim Hossain Munna {{ thisMonth }}. All right reserved</p>
          </div>
        </Container>
    </div>
</template>
