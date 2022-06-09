<template>
  <footer>
    <div class="content">
      <h1 class="logo"></h1>
      <div class="navigation">
        <div>
          <h3>Navigation</h3>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
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

  div.content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10vh 0;

    h1.logo {
      margin-left: 20px;
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
        margin-right: 20px;
        color: #088fd5;

        h3 {
          margin: 0;
        }
        a {
          color: #0b6290;
        }
      }
    }
  }
  div.line {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #0b6290;
    height: 4px;
    border-radius: 0.3em;

    span {
      padding: 0 3px;
      color: #0b6290;
      font-family: sans-serif;
      font-weight: 1000;
      background-color: white;
    }
  }
}
</style>
