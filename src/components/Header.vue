<template>
  <header class="header">
    <div class="header__logo"></div>
    <p>Ваша корзина</p>
    <p>{{ count }} {{ grammarCheck }}</p>
    <p>{{price}}</p>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const price = computed(() => store.getters.cartTotal);
const count = computed(() => store.getters.cartCount);

const grammarCheck = computed(() => {
  if (count.value >= 5 && count.value <= 20 || count.value % 10 === 0 ) return 'товаров';
  if (count.value % 10 === 1) return 'товар';
  if (count.value % 10 >= 5) return 'товаров';
  else return 'товара';
})
</script>