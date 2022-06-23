<template>
  <section>
    <div class="banner" id="getflightdata"></div>
    <div class="userinput">
      <h3>Enter a flight number</h3>
      <input type="text" placeholder="Ex: UA2133" />
    </div>
  </section>
</template>

<script>
export default {
  name: "GetFlight",
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
    background-image: url("@/assets/banner2.jpg");
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
