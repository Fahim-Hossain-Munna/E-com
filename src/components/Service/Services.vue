<script setup>
import Container from '../layouts/Container.vue';
import Picture from '../layouts/Picture.vue';
import Service from '../layouts/Service.vue';


</script>
<template>
    <div class="lg:py-[140px] py-20">
        <Container className="lg:flex block justify-center gap-[88px]">
            <Service title="FREE AND FAST DELIVERY" description="Free delivery for all orders over $140" source="/src/assets/uploads/service/Services1.jpg" />
            <Service title="24/7 CUSTOMER SERVICE" description="Friendly 24/7 customer support" source="/src/assets/uploads/service/Services2.jpg" />
            <Service title="MONEY BACK GUARANTEE" description="We reurn money within 30 days" source="/src/assets/uploads/service/Services3.jpg" />

        </Container>
    </div>
</template>
