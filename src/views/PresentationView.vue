<template>
  <main>
    <section
      v-for="slide in slides"
      :key="slide.id"
      :id="slide.id"
      :class="slide.classes"
    >
      <div id="element" v-for="content in slide.content" :key="content">
        <h1 v-if="content.type === 'h1'">{{ content.content }}</h1>
        <h2 v-if="content.type === 'h2'">{{ content.content }}</h2>
        <h3 v-if="content.type === 'h3'">{{ content.content }}</h3>
        <h4 v-if="content.type === 'h4'">{{ content.content }}</h4>
        <h5 v-if="content.type === 'h5'">{{ content.content }}</h5>
        <h6 v-if="content.type === 'h6'">{{ content.content }}</h6>
        <p v-if="content.type === 'p'">{{ content.content }}</p>
        <li v-if="content.type === 'li'">{{ content.content }}</li>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      slides: [
        {
          id: "welcome",
          classes: "center",
          content: [
            { type: "h1", content: "Presentation" },
            { type: "h4", content: "Noah und Jonas" },
          ],
        },
      ],
    };
  },
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
