<template>
  <div class="card">
    <div class="card-title">{{ cardTitle }}</div>
    <hr class="break"/>
    <div class="card-content">
      <div class="card-desc">{{ desc }}</div>
      <hr class="break"/>
      <ul class="card-bullets">
        <li class="card-bullet" v-for="bullet in bullets" :key="bullet">{{ bullet }}</li>
      </ul>
        <a class="proj-link" name="preview" :href="previewLink">Preview</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    cardTitle: String,
    desc: String,
    bullets: Array,
    previewLink: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin: 10px 3vw;
  background-color: #254e58;
  color: #eefceb;

  height: 240px;
  width: 40vw;

  border: solid #e98074 2px; 
  position: relative;
  border-radius: 7px;
  display: inline-block;
}

.card-title {
  font-size: 24px;
  text-align: center;
  padding-bottom: 0px;
}

.card-desc {
  text-align: center;
  font-size: 18px;
  height: 50px;
  width: 90%;
  display: inline-block;
}

.break {
  margin-top: 6px;
  margin-bottom: 4px;
}

.card-bullets {
  text-align: left;
  margin-bottom: 60px;
}

.card-bullet {
  margin: 15px 10px;
}

.proj-link {
  color: #eefceb;
  text-decoration: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 0px;
  text-align: center;
  font-size: 18px;
  border-top: 1px solid #eefceb;
}

.proj-link:visited {
  color: #eefceb;
}

.proj-link:active {
  color: #eefceb;
}

@media screen and (max-width: 800px) {
  .card-title {
    font-size: 18px;
  }

  .card {
    margin: 0 auto;
    margin-bottom: 20px;
    display: block;
    width: 85%;
    height: auto;
  }
}
</style>