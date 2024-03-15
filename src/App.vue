<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <Header></Header>
  <nav class="nav">
    <RouterLink class="nav__link" to="/">Главная</RouterLink>
    <div class="nav__separator"></div>
    <RouterLink class="nav__link nav__link_inactive" to="/">Корзина</RouterLink>
  </nav>
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 95px;
  padding: 0 0 116px;
}

.nav {
  display: flex;
  gap: 10px;
  align-items: baseline;
}

.nav__link {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #33374e;
  text-decoration: none;
  transition: all 0.2s;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
}

.nav__link:hover {
  border-bottom: 1px solid;
}

.nav__link_inactive {
  color: #797b86;
}

.nav__separator {
  width: 5px;
  height: 8px;
  background-image: url("./assets/triangle.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>