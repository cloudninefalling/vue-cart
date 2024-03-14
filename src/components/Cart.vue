<template>
  <section class="cart">
    <div class="cart__heading">
      <h1 class="cart__heading-title">Ваша корзина</h1>
      <p class="cart__heading-subtitle">{{ count }} {{ grammarCheck() }}</p> 
      <button @click="clear" class="cart__heading-button-clear">Очистить корзину</button> 
    </div>
    <CartList />
    <CartOption />
    <CartTotal />

  </section>
</template>

<style scoped>
.cart {
  display: grid;
  grid-template-areas:
    "heading ."
    "items total"
    "option total";
  column-gap: 55px;
}

.cart__heading {
  grid-area: heading;
  display: flex;
  gap: 22px;
  align-items: baseline;
  margin-bottom: 50px;
}

.cart__heading-title {
  font-weight: 700;
  font-size: 44px;
  line-height: 121%;
  margin: 0;
}

.cart__heading-subtitle {
  font-weight: 400;
  font-size: 18px;
  line-height: 145%;
  color: #797b86;
}

.cart__heading-button-clear {
  background: none;
  border: none;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-align: right;
  color: #797b86;

  margin-left: auto;
  padding: 0;

  cursor: pointer;
  transition: opacity 0.2s ease;
}

.cart__heading-button-clear:hover {
  opacity: 0.8;
}
</style>

<script setup>
import CartList from './CartList.vue';
import CartTotal from './CartTotal.vue';
import CartOption from './CartOption.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const count = computed(() => store.getters.cartCount);
const clear = () =>  {store.commit('clearCart')}

const grammarCheck = () => {
  if (count.value > 5 && count.value < 20) return 'товаров';
  if (count.value % 10 === 1) return 'товар';
  else return 'товара';
}
</script>