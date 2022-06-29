<template>
  <main>
    <div class="home">
      <span id="greeting">
        Welcome to
        <h1 class="logo"></h1>
      </span>
      <FindFlight />
      <GetFlight />
    </div>
  </main>
</template>

<script>
import FindFlight from "../components/FindFlight.vue";
import GetFlight from "../components/GetFlight.vue";

export default {
  name: "HomeView",
  components: { FindFlight, GetFlight },
};
</script>

<style lang="scss" scoped>
.home {
  margin-bottom: auto;

  #greeting {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-family: "Secular One", sans-serif;
    color: #088fd6;
    width: 100%;
    margin-top: 15px;

    h1 {
      margin: 0;
      margin-left: 7px;
      font-size: 1.3rem;

      &::before {
        height: 40px;
      }
    }
  }
}
</style>
