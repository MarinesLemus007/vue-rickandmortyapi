<template>
  <v-app style="background-color: #364047">

    <Menu/>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
import Menu from './components/Menu';

export default {
  name: "App",

  components: {
    Menu
  },

};
</script>

<style>
  html {
    scroll-behavior: smooth;
  }
</style>