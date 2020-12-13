<template>
  <div id="about">
      <div class="lowertitle">About Me</div>
      <p class="content">
        My name is Trevor Stenson and I am currently a fourth year computer science major 
        at Northeastern University in Boston, MA. I am currently looking for full-time software development 
        opportunities starting in May 2021.
        <br/><br/>
        I am passionate about creating rich web based applications with modern 
        front-end and back-end technologies such as Vue, React, Ruby on Rails, .NET Core, and JavaScript.
        <br/><br/>
        During my free time I enjoy all things juggling, downhill skiing, 
        biking, collecting unique watches, and cooking new foods.
      </p>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  color: #eefceb;
  font-size: 26px;
  word-spacing: 2px;
  line-height: 50px;
  padding: 0px 10%;
}

@media screen and (max-width: 800px) {
  .content {
    font-size: 20px;
    line-height: 30px;
  }
}
</style>