<template>
  <div class="home">
    <span id="greeting">
      Welcome to
      <h1 class="logo"></h1>
    </span>
    <FindFlight />
    <GetFlight />
  </div>
</template>

<script>
import airports from "@/data/airports.json";
import FindFlight from "../components/FindFlight.vue";
import GetFlight from "../components/GetFlight.vue";

export default {
  name: "HomeView",
  data() {
    return {
      airports,
    };
  },
  methods: {
    getAirportOption(data) {
      if (data.name === null) return data.iata;
      return data.iata + " - " + data.name;
    },
  },
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
