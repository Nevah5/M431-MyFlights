<template>
  <section>
    <div class="banner" id="findflight"></div>
    <div class="userinput">
      <h3>From where do you want to depart?</h3>
      <input list="departures" ref="from" />
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
      <input list="arrivals" ref="to" />
      <datalist id="arrivals">
        <option
          v-for="airport in airports"
          :key="airport"
          :value="getAirportOption(airport)"
        >
          {{ getAirportOption(airport) }}
        </option>
      </datalist>
      <input type="submit" value="Search" :onclick="() => search()" />
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
    search() {
      const from = this.$refs.from.value.split(" - ")[0];
      const to = this.$refs.to.value.split(" - ")[0];

      if (from === "" || to === "") return;

      this.flightData(from, to);
    },
    getAirportOption(data) {
      if (data.name === null) return data.iata;
      return data.iata + " - " + data.name;
    },
    flightData(departures, arrival) {
      fetch(
        `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=${departures}&page=None&currency=CHF&destination=-${arrival}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "c51d0a238003f2cce89f10f33daf8c5e",
            "X-Access-Token": "c51d0a238003f2cce89f10f33daf8c5e",
            "X-RapidAPI-Host":
              "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
          },
        }
      )
        .then((res) => res.json())
        .then((json) => console.log(json));
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

      &[type="submit"] {
        background-color: #088fd6;
        color: white;
        font-family: "Secular One", sans-serif;
        font-size: 1.4em;
        margin-top: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>
