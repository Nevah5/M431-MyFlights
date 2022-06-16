<template>
  <TopNavbar />
  <router-view />
  <BottomFooter />
</template>

<script>
import TopNavbar from "./components/TopNavbar.vue";
import BottomFooter from "./components/BottomFooter.vue";
export default {
  name: "App",
  components: {
    BottomFooter,
    TopNavbar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cairo&family=Secular+One&display=swap");

body {
  margin-top: 0;
}

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
