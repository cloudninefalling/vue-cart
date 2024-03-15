<script setup>
import Cart from './components/Cart.vue';
import Swiper from './components/Swiper.vue';
import Header from './components/Header.vue';
</script>

<template>
  <!-- <Header /> -->
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