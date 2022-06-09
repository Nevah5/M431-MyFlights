<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
  <BottomFooter />
</template>

<script>
import BottomFooter from "./components/BottomFooter.vue";
export default {
  name: "App",
  components: {
    BottomFooter,
  },
};
</script>
