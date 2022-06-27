<template>
  <main>
    <h1>Contact us</h1>
    <p>
      Before you contact us, have you read
      <router-link to="/faq">the FAQ Page</router-link>?
    </p>
    <p>
      If you want to reach us quickly, please call
      <a href="phone:+415204343">+41 520 43 43</a>. We offer a 12h per day
      support service and if you can't reach us, our specially trained AI will
      try to help you out as far as it can.
    </p>
    <p>
      If you have another smaller issue, please write us at
      <a href="mailto:support@myflights.com">support@myflights.com</a> to
      receive professional support.
    </p>
  </main>
</template>

<script>
export default {
  name: "ContactView",
};
</script>

<style lang="scss" scoped>
main {
  margin-bottom: auto;
  padding: 0 5vw;

  h1 {
    font-family: "Secular One", sans-serif;
    color: #088fd5;
  }
  p {
    font-family: sans-serif;
    color: #088fd5;
    font-weight: 700;
  }
  a {
    color: #306b87;
  }
}
</style>
