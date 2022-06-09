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

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cairo&family=Secular+One&display=swap");

h1.logo {
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    display: inline-block;
    background-image: url("@/assets/logo.png");
    background-position: center;
    background-size: 100%;
    height: 50px;
    aspect-ratio: 1 / 1;
  }
  &::after {
    content: "MyFlights";
    font-family: "Secular One", sans-serif;
    color: #088fd5;
  }
}
</style>
