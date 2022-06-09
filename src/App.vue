<template>
  <TopNavbar />
  <router-view />
</template>

<script>
import TopNavbar from "./components/TopNavbar.vue";
export default {
  name: "App",
  components: {
    TopNavbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cairo&display=swap");
</style>
