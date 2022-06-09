<template>
  <footer>
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
  div.line {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #144a8f;
    height: 4px;
    border-radius: 0.3em;
    span {
      padding: 0 3px;
      background-color: white;
    }
  }
}
</style>
