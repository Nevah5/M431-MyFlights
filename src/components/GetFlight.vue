<template>
  <section>
    <div class="banner" id="getflightdata"></div>
    <div class="input">
      <input type="text" maxlength="1" />
      <input type="text" maxlength="1" />
      <input type="text" maxlength="1" />
      <div class="middle"></div>
      <input type="text" maxlength="1" />
      <input type="text" maxlength="1" />
      <input type="text" maxlength="1" />
      <input type="text" maxlength="1" />
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
  .input {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    margin-top: 20px;

    .middle {
      display: block;
      height: 4px;
      width: 15px;
      background-color: #088fd6;
      margin: 0 15px;
    }
    input {
      height: 100%;
      aspect-ratio: 1 / 1.75;
      margin: 0 3px;
      border: none;
      outline: none;
      border-bottom: #088fd6 solid 4px;
      font-family: "Secular One", sans-serif;
      font-size: 3rem;
      color: #088fd6;
      text-align: center;
    }
  }
}
</style>
