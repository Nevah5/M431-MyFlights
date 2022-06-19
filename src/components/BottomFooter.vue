<template>
  <footer>
    <div class="line"></div>
    <div class="content">
      <router-link to="/">
        <h1 class="logo"></h1>
      </router-link>
      <div class="navigation">
        <div>
          <h3>Navigation</h3>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="phone:+415204343">+41 520 43 43</a>
          <a href="mailto:support@myflights.com">support@myflights.com</a>
        </div>
      </div>
    </div>
    <div class="line">
      <span>&copy; 2022</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "BottomFooter",
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  margin-bottom: 10px;

  div.content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10vh 0;

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

      div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        margin-right: 50px;
        color: #088fd5;
        padding-bottom: 10px;
        border-bottom: solid 2px #088fd5;

        h3 {
          width: 100%;
          text-align: center;
          margin: 0;
          font-size: 2rem;
          border-bottom: solid 2px #088fd5;
          padding-bottom: 10px;
          margin-bottom: 10px;
        }
        a {
          color: #088fd5;
          font-size: 1.2rem;
          display: flex;
          justify-content: center;
          align-items: center;

          &::before {
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
