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
        <li v-if="content.type === 'li-a'">
          <a
            :href="content.href"
            :target="content.target === undefined ? '_blank' : ''"
            >{{ content.content }}</a
          >
        </li>
        <a
          v-if="content.type === 'a'"
          :href="content.href"
          :target="content.target === undefined ? '_blank' : ''"
          >{{ content.content }}</a
        >
        <a v-if="content.type === 'next'" id="next" :href="'#' + content.nextId"
          >NEXT</a
        >
        <a
          v-if="content.type === 'a-h1'"
          :href="content.href"
          :target="content.target === undefined ? '_blank' : ''"
        >
          <h1>{{ content.content }}</h1>
        </a>
        <a
          v-if="content.type === 'a-h2'"
          :href="content.href"
          :target="content.target === undefined ? '_blank' : ''"
        >
          <h2>{{ content.content }}</h2>
        </a>
        <a
          v-if="content.type === 'a-h3'"
          :href="content.href"
          :target="content.target === undefined ? '_blank' : ''"
        >
          <h3>{{ content.content }}</h3>
        </a>
        <a
          v-if="content.type === 'a-h4'"
          :href="content.href"
          :target="content.target === undefined ? '_blank' : ''"
        >
          <h4>{{ content.content }}</h4>
        </a>
        <a
          v-if="content.type === 'a-h5'"
          :href="content.href"
          :target="content.target === undefined ? '_blank' : ''"
        >
          <h5>{{ content.content }}</h5>
        </a>
        <a
          v-if="content.type === 'a-h6'"
          :href="content.href"
          :target="content.target === undefined ? '_blank' : ''"
        >
          <h6>{{ content.content }}</h6>
        </a>
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
            { type: "next", nextId: "inhaltsverzeichnis" },
          ],
        },
        {
          id: "inhaltsverzeichnis",
          classes: "slide",
          content: [
            { type: "h1", content: "Inhaltsverzeichnis" },
            { type: "li-a", href: "#idee", target: false, content: "Idee" },
            {
              type: "li-a",
              href: "#planung",
              target: false,
              content: "Planung",
            },
            {
              type: "li-a",
              href: "#vorgehen",
              target: false,
              content: "Vorgehen",
            },
            {
              type: "li-a",
              href: "#projekt",
              target: false,
              content: "Projekt",
            },
            { type: "li-a", href: "#fazit", target: false, content: "Fazit" },
            { type: "next", nextId: "idee" },
          ],
        },
        {
          id: "idee",
          classes: "slide",
          content: [
            { type: "h1", content: "Idee" },
            { type: "li", content: "Idee von Noah" },
            { type: "li", content: "Bei Suche nach API" },
            { type: "li", content: "Auf Flug API gestossen" },
            { type: "next", nextId: "planung" },
          ],
        },
        {
          id: "planung",
          classes: "slide",
          content: [
            { type: "h1", content: "Planung" },
            { type: "li", content: "Entscheidung getroffen" },
            {
              type: "li-a",
              href: "https://github.com/Nevah5/M431-MyFlights#zeitplanung",
              content: "Arbeitspackete für Lektionen erstellt",
            },
            {
              type: "li-a",
              href: "https://github.com/Nevah5/M431-MyFlights#p---planung",
              content: "Styling erstellt",
            },
            { type: "next", nextId: "vorgehen" },
          ],
        },
        {
          id: "vorgehen",
          classes: "slide",
          content: [
            { type: "h1", content: "Vorgehen" },
            { type: "li", content: "Jonas Vue.js zeigen" },
            { type: "li", content: "Vue Applikation" },
            { type: "li", content: "Styling erstellen" },
            { type: "li", content: "Logo suchen" },
            { type: "li", content: "API einbinden" },
            { type: "next", nextId: "projekt" },
          ],
        },
        {
          id: "projekt",
          classes: "center",
          content: [
            { type: "h1", content: "Projekt" },
            {
              type: "a-h3",
              href: "https://glr.li/myflights",
              content: "https://glr.li/myflights",
            },
            { type: "next", nextId: "fazit" },
          ],
        },
        {
          id: "fazit",
          classes: "slide",
          content: [
            { type: "h1", content: "Fazit" },
            { type: "li", content: "Mehr erreichen können mit mehr Zeit" },
            { type: "li", content: "Vue Kenntnisse erhalten/erweitert" },
            { type: "li", content: "CSS Styling training" },
            { type: "li", content: "Lernjournal/Reflexion" },
            { type: "li", content: "Markdown" },
            { type: "next", nextId: "end" },
          ],
        },
        {
          id: "end",
          classes: "finish center",
          content: [{ type: "h1", content: "Danke!" }],
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
    position: relative;
    z-index: 1;

    a#next {
      position: absolute;
      bottom: 30px;
      right: 30px;
      background-color: #088fd5;
      border-radius: 0.4em;
      padding: 10px 20px;
      font-size: 1.2rem;
      font-weight: 1000;
      text-decoration: none;
      font-family: "Secular One", sans-serif;
      color: white;
    }
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
    &.finish {
      h1 {
        position: relative;
        overflow: hidden;
        padding: 10px 50px;

        &::before {
          content: "";
          display: block;
          position: absolute;
          background-color: #088fd5;
          height: 300%;
          width: 10%;
          transform: translate(-50%, -50%) rotate(-45deg);
          top: -5px;
          right: -5px;
        }
        &::after {
          content: "";
          display: block;
          position: absolute;
          background-color: #088fd5;
          height: 300%;
          width: 10%;
          transform: translate(50%, 50%) rotate(-45deg);
          bottom: -5px;
          left: -5px;
        }
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
  a {
    color: #1c3542;
  }
}
</style>
