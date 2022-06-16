<template>
  <nav>
    <text>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
    </text>
  </nav>
</template>

<script>
export default {
  name: " TopNavbar",
};
</script>

<style lang="scss" scoped>
nav {
  font-family: "Cairo", sans-serif;
  background-color: white;
  position: fixed;
  box-shadow: 5px 3px 8px #888888;
  top: 0;
  width: 100%;

  text {
    margin-left: 86%;
    font-size: 20px;
  }

  a {
    text-decoration: none;
    font-family: "Cairo", sans-serif;
  }
}
</style>
