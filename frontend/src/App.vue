<template>
  <header>
    <TopBar />

  </header>

  <div id="main_wrapper">
    <div id="wrapper_left">
      <NavigationMenu></NavigationMenu>
    </div>

    <div id="wrapper_right">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
  import {RouterView }  from 'vue-router'
  import TopBar         from './components/TopBar.vue'
  import NavigationMenu from './components/NavigationMenu.vue'
</script>

<style scoped>
</style>
