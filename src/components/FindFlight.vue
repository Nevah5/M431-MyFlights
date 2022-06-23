<template>
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
export default {
  name: "FindFlight",
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
