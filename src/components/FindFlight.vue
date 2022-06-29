<template>
  <<<<<<< HEAD
  <button onclick="flightData(departures, arrival)">Hello</button>
  =======
  <button onclick="() => flightData(departures, arrival)">Hello</button>
  >>>>>>> b738007 (#7 Format Code)
  <section>
    <div class="banner" id="findflight"></div>
    <div class="userinput">
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
  </section>
</template>

<script>
import airports from "@/data/airports.json";
export default {
  name: "FindFlight",
  data() {
    return {
      airports,
    };
  },
  methods: {
    flightData(departures, arrival) {
      global.XMLHttpRequest = require("xhr2");
      const data = null;

      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          console.log(this.responseText);
        }
      });

      xhr.open(
        "GET",
        "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=" +
          departures +
          "&page=None&currency=CHF&destination=-" +
          arrival +
          ""
      );
      xhr.setRequestHeader(
        "X-Access-Token",
        "c51d0a238003f2cce89f10f33daf8c5e"
      );
      xhr.setRequestHeader(
        "X-RapidAPI-Key",
        "996324cc9bmsh2c3caea95a50c2cp1bd09ejsn8ae1addb0b81"
      );
      xhr.setRequestHeader(
        "X-RapidAPI-Host",
        "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"
      );

      xhr.send(data);
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin: 10vh 5vw 14vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &::before {
    content: "";
    display: block;
    height: 3px;
    width: 100%;
    background-color: #088fd6;
    margin: 0 0 30px;
  }
  div.banner {
    display: block;
    width: 100%;
    aspect-ratio: 1920 / 255;
    max-width: 600px;
    background-position: center;
    background-size: 100%;
    background-image: url("@/assets/banner1.jpg");
  }
  .userinput {
    width: 100%;

    h3 {
      margin: 40px 0 0;
      color: #088fd6;
      font-family: sans-serif;
    }
    input {
      border: solid #088fd6 3px;
      border-radius: 3px;
      border-radius: 0.4em;
      min-height: 50px;
      width: 100%;
      color: #088fd6;
      font-family: sans-serif;
      padding-left: 1.3em;
      outline: none;

      &:focus {
        font-weight: 1000;
        outline: #088fd6 solid 1px;
      }
    }
  }
}
</style>
