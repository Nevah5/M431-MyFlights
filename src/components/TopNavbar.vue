<template>
  <nav>
    <div class="content">
      <router-link to="/">
        <h1 class="logo"></h1>
      </router-link>
      <div class="navigation">
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/faq">FAQ</router-link>
      </div>
    </div>
    <div class="line"></div>
  </nav>
</template>

<script>
export default {
  name: " TopNavbar",
};
</script>

<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  background-color: white;

  div.content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > a {
      text-decoration: none;

      h1.logo {
        margin-left: 20px;
      }
    }
    div.navigation {
      display: flex;
      justify-content: space-around;
      align-items: center;

      a {
        position: relative;
        font-weight: 1000;
        text-decoration: none;
        color: #088fd5;
        margin-right: 10px;
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;

        &:not(:last-child) {
          margin-right: 45px;
        }
        &::before {
          opacity: 0;
          transition: opacity 0.2s;
          left: -30px;
          position: absolute;
          content: "";
          display: inline-block;
          height: 30px;
          margin-right: 5px;
          aspect-ratio: 1 / 1;
          filter: invert(52%) sepia(89%) saturate(3160%) hue-rotate(171deg)
            brightness(88%) contrast(94%);
          transform: rotate(150deg);
          background-image: url("@/assets/plane.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: 60%;
        }
        &:hover::before {
          opacity: 1;
        }
      }
    }
  }
  div.line {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #088fd5;
    height: 4px;
    border-radius: 0.3em;

    span {
      padding: 0 3px;
      color: #088fd5;
      font-family: sans-serif;
      font-weight: 1000;
      background-color: white;
    }
  }
}
</style>
