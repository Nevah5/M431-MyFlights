<template>
  <section>
    <div class="banner" id="getflightdata"></div>
    <div class="input">
      <input
        ref="pos1"
        type="text"
        maxlength="1"
        @click="() => select(1)"
        @focus="() => select(1)"
        @keydown.delete="() => previous(1)"
        @keydown="(key) => handle(key, 1)"
        @keydown.tab="skipAfterMiddle"
      />
      <input
        ref="pos2"
        type="text"
        maxlength="1"
        @click="() => select(2)"
        @focus="() => select(2)"
        @keydown.delete="() => previous(2)"
        @keydown="(key) => handle(key, 2)"
        @keydown.tab="skipAfterMiddle"
      />
      <input
        ref="pos3"
        type="text"
        maxlength="1"
        @click="() => select(3)"
        @focus="() => select(3)"
        @keydown.delete="() => previous(3)"
        @keydown="(key) => handle(key, 3)"
        @keydown.tab="skipAfterMiddle"
      />
      <div class="middle"></div>
      <input
        ref="pos4"
        type="text"
        maxlength="1"
        @click="() => select(4)"
        @focus="() => select(4)"
        @keydown.delete="() => previous(4)"
        @keydown="(key) => handle(key, 4)"
      />
      <input
        ref="pos5"
        type="text"
        maxlength="1"
        @click="() => select(5)"
        @focus="() => select(5)"
        @keydown.delete="() => previous(5)"
        @keydown="(key) => handle(key, 5)"
      />
      <input
        ref="pos6"
        type="text"
        maxlength="1"
        @click="() => select(6)"
        @focus="() => select(6)"
        @keydown.delete="() => previous(6)"
        @keydown="(key) => handle(key, 6)"
      />
      <input
        ref="pos7"
        type="text"
        maxlength="1"
        @click="() => select(7)"
        @focus="() => select(7)"
        @keydown.delete="() => previous(7)"
        @keydown="(key) => handle(key, 7)"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "GetFlight",
  data() {
    return {
      position: 1,
      input: "",
    };
  },
  methods: {
    previous(currentPos) {
      if (currentPos > 1) this.position -= 1;
      this.updateCursorPos();
    },
    select(currentPos) {
      this.position = currentPos;
    },
    next(currentPos) {
      if (currentPos < 7) this.position += 1;
      this.updateCursorPos();
    },
    skipAfterMiddle() {
      setTimeout(() => {
        this.position = 4;
        this.updateCursorPos();
      }, 1);
    },
    handle(key, currentPos) {
      const validkeys = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
      ];
      if (validkeys.includes(key.key.toLowerCase())) {
        if (this.position < 7) this.position = currentPos + 1;
        this.updateCursorPos();
      }
      if (key.key === "ArrowRight") this.next(this.position);
      if (key.key === "ArrowLeft") this.previous(this.position);
      this.updateInputValue();
    },
    updateInputValue() {
      var input = "";
      for (let i = 1; i <= 7; i++) {
        const posVal = this.$refs["pos" + i];
        input += posVal.value;
      }
      this.input = input;
    },
    updateCursorPos() {
      setTimeout(() => {
        const inputField = this.$refs["pos" + this.position];
        inputField.select();
      }, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin: 10vh 5vw 14vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &::before {
    content: "";
    display: block;
    height: 3px;
    width: 100%;
    background-color: #088fd6;
    margin: 0 0 30px;
  }
  div.banner {
    display: block;
    width: 100%;
    aspect-ratio: 1920 / 255;
    max-width: 600px;
    background-position: center;
    background-size: 100%;
    background-image: url("@/assets/banner2.jpg");
  }
  .input {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    margin-top: 20px;

    .middle {
      display: block;
      height: 4px;
      width: 15px;
      background-color: #088fd6;
      margin: 0 15px;
    }
    input {
      height: 100%;
      aspect-ratio: 1 / 1.75;
      margin: 0 3px;
      border: none;
      outline: none;
      border-bottom: #088fd6 solid 4px;
      font-family: "Secular One", sans-serif;
      font-size: 3rem;
      color: #088fd6;
      text-align: center;
      text-transform: uppercase;
    }
  }
}
</style>
