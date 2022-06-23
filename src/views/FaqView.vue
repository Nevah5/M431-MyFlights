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
        { q: "Question1", a: "Answer1" },
        { q: "Question2", a: "Answer2" },
        { q: "Question3", a: "Answer3" },
        { q: "Question4", a: "Answer4" },
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
