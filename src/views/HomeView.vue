<template>
  <div class="home">
    <span id="greeting">
      Welcome to
      <h1 class="logo"></h1>
    </span>
    <h3>From where do you want to depart?</h3>
    <input list="departures" />
    <datalist id="departures">
      <option
        v-for="airport in airports"
        :key="airport"
        :value="getAirportOption(airport)"
      >
        {{ getAirportOption(airport) }}
      </option>
    </datalist>
    <h3>Where do you want to end up?</h3>
    <input list="arrivals" />
    <datalist id="arrivals">
      <option
        v-for="airport in airports"
        :key="airport"
        :value="getAirportOption(airport)"
      >
        {{ getAirportOption(airport) }}
      </option>
    </datalist>
  </div>
</template>

<script>
import airports from "@/data/airports.json";

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
