<template>
  <h1>FAQ - Frequently Asked Questions</h1>
  <details v-for="q in questions" :key="q">
    <summary>{{ q.q }}</summary>
    <p>{{ q.a }}</p>
  </details>
</template>

<script>
export default {
  name: "FaqView",
  data() {
    return {
      questions: [
        {
          q: "Can you buy flights directly on your Hub?",
          a: "No, sadly we don't offer this kind of service. We only provide you with a search engine to find and discover flights.",
        },
        {
          q: "Is there a limit to how many searches I can do?",
          a: "Yes, but this limit is very high, so you will probably not notice it.",
        },
        {
          q: "Will there be any new features added soon?",
          a: "No. This service we provide will be the only one and we will not maintain it.",
        },
        {
          q: "Is there any other similar search engine for flights I can use?",
          a: "Yes, but it is currently offline.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Secular One", sans-serif;
  color: #088fd5;
}
details {
  border-top: solid 3px #088fd5;
  border-bottom: solid 3px #088fd5;
  padding: 20px 0;
  margin: 10px 0;

  summary {
    font-size: 1.5rem;
    padding: 0 3vw;
    font-family: "Secular One", sans-serif;
    color: #088fd5;
    cursor: pointer;
  }
  *:not(summary) {
    font-size: 1.3rem;
    color: #088fd5;
    padding: 0 3vw;
  }
}
</style>
