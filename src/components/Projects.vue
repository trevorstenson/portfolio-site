<template>
  <div id="projects">
      <div class="lowertitle">Projects</div>
      <ProjectCard v-for="project in projects" :key="project" 
      :cardTitle="project.title" 
      :desc="project.description"
      :bullets="project.bullets"
      :previewLink="project.link" />
  </div>
</template>

<script>

import ProjectCard from './ProjectCard.vue'

export default {
  name: "Projects",
  components: {
    ProjectCard
  },
  data () {
    return {
      projects: [
        {
          title: "Skilldex",
          description: "Web-based user curated library of juggling patterns that includes progress tracking and statistics.",
          bullets: [
            'Created with React and Firebase',
            'One hundred monthly active users and 500 monthly visitors.'
          ],
          link: "#"
        },
        {
          title: "Hawking",
          description: "Chrome extension that allows users to control their browser through gestures and movement with smartphones.",
          bullets: [
            'Developed using VueJS, SocketIO, and Express', 
            'Created with the goal of improving internet accessibility'
          ],
          link: "#"
        }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>