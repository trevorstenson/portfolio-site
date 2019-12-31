<template>
  <div id="media-links">
    <a class="link" href="https://github.com/trevorstenson">
      <img class="svg" src="../assets/img/github-logo.svg" alt="Github Icon"/>
    </a>
    <a class="link" href="https://www.linkedin.com/in/trevor-stenson">
      <img class="svg" src="../assets/img/linkedin-logo.svg" alt="LinkedIn Icon"/>
    </a>
    <a class="link" href="mailto:stenson124@gmail.com">
      <img class="svg" src="../assets/img/email-svg.svg" alt="Gmail Icon"/>
    </a>
  </div>
</template>

<script>
export default {
  name: "Media"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.svg {
  filter: invert(97%) sepia(8%) saturate(426%) hue-rotate(53deg) brightness(103%) contrast(98%);
  border: 1px solid black;
  margin: 10px 50px;
  padding: 5px;
  z-index: 5;
}

.link {
  width: 50px;
  height: 50px;
  margin: 0 0;
  padding: 0 0;
}

@media screen and (max-width: 800px) {
  .svg {
    margin: 10px 20px;
  }
}
</style>