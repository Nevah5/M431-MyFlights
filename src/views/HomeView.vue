<template>
  <div class="home">
    <span id="greeting">
      Welcome to
      <h1 class="logo"></h1>
    </span>
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
    <section>
      <div class="banner" id="getflightdata"></div>
      <div class="userinput">
        <h3>Enter a flight number</h3>
        <input type="text" placeholder="Ex: UA2133" />
      </div>
    </section>
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

      &#findflight {
        background-image: url("@/assets/banner1.jpg");
      }
      &#getflightdata {
        background-image: url("@/assets/banner2.jpg");
      }
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
}
</style>
