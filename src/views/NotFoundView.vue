<template>
  <div class="NotFound">
    <div class="logo"></div>
    <caption>
      <h2>404</h2>
      <h2>Not Found</h2>
      <h2>:(</h2>
    </caption>
  </div>
</template>

<style lang="scss">
.NotFound {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 180px 0;

  caption {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    h2 {
      margin: 0 30px;
      font-family: "Secular One", sans-serif;
      font-size: 250%;
      color: #088fd6;

      &:last-child {
        transform: rotate(90deg);
      }
    }
  }
  .logo {
    width: 150px;
    aspect-ratio: 1 / 1;
    background-image: url("@/assets/logo.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
