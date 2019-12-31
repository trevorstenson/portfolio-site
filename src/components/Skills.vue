<template>
  <div id="skills">
    <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
    <div class="lowertitle">Skills</div>
    <div id="skillinfo">
      These are the skills I have picked up through both professional experience and personal projects.
    </div>
    <i class="skill devicon-vuejs-plain-wordmark"></i>
    <i class="skill devicon-csharp-line"></i>
    <i class="skill devicon-javascript-plain"></i>
    <i class="skill devicon-react-original-wordmark"></i>
    <i class="skill devicon-java-plain-wordmark"></i>
    <i class="skill devicon-nodejs-plain-wordmark"></i>
    <br/>
    <i class="skill devicon-express-original"></i>
    <i class="skill devicon-python-plain"></i>
    <i class="skill devicon-html5-plain-wordmark"></i>
    <i class="skill devicon-css3-plain-wordmark"></i>
    <i class="skill devicon-mysql-plain"></i>
    <i class="skill devicon-git-plain"></i>
  </div>
</template>

<script>
export default {
  name: "Skills"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#skills {
  padding-bottom: 0px;
}

#skillinfo {
  color: #eefceb;
  padding: 0px 15%;
  padding-bottom: 60px;
  font-size: 20px;
}

.skill {
  color: #eefceb;
  margin: 0px 25px;
  margin-bottom: 60px;
  margin-top: 5px;
  font-size: 6em;
  display: inline-block;
}

@media screen and (max-width: 800px) {
  br {
    display: none;
  }

  .skill {
    font-size: 4em;
  }
}
</style>