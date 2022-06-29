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
        {
          id: "inhaltsverzeichnis",
          classes: "slide",
          content: [
            { type: "h1", content: "Inhaltsverzeichnis" },
            { type: "li", content: "Idee" },
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

  section {
    height: calc(100vh - 94px + 4px);

    &:not(:last-child) {
      border-bottom: solid #088fd5 4px;
      margin-bottom: 30px;
    }
    &.center {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    &.slide {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0 0 4vh;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 110%;
    margin: 0;
    color: #088fd5;
    font-family: "Secular One", sans-serif;
  }
  h1 {
    font-size: 5em;
  }
  h2 {
    font-size: 4em;
  }
  h3 {
    font-size: 3.3em;
  }
  h4 {
    font-size: 3em;
  }
  h5 {
    font-size: 2.5em;
  }
  h6 {
    font-size: 2.1em;
  }
  p,
  li {
    margin: 0;
    color: #088fd5;
    font-size: 2.1em;
  }
  li {
    margin-left: 30px;
  }
}
</style>
