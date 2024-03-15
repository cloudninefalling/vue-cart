<script setup>
import Cart from './components/Cart.vue';
import Swiper from './components/Swiper.vue';
</script>

<template>
  <main class="main">
    <Cart />
    <Swiper />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 95px;
  padding: 0 80px 116px;
}
</style>