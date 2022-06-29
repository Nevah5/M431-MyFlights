<template>
  <main class="main">
    <TopNavbar />
    <router-view />
    <BottomFooter />
  </main>
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
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        let name = to.name;
        document.title = `${name} - MyFlights`;
      },
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cairo&family=Secular+One&display=swap");

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  margin: 0 7px;
}

main.main {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  & > * {
    width: 100%;
  }

  main {
    margin-top: 94px;
  }
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
