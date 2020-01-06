<template>
  <div id="experience">
    <div class="lowertitle">Experience</div>
      <ExperienceCard v-for="company in experience" :key="company" 
      :companyTitle="company.companyTitle"
      :companyLogo="company.companyLogo"
      :companyLink="company.companyLink"
      :position="company.position"
      :desc="company.description"
      :bullets="company.bullets"
      :timeframe="company.timeframe" />
  </div>
</template>

<script>
import ExperienceCard from './ExperienceCard.vue'
import rp2 from '../assets/img/rp2.png'

export default {
  name: "Experience",
  components: {
    ExperienceCard
  },
  data () {
    return {
      experience: [
        {
          companyTitle: "RIGHTPOINT",
          companyLogo: rp2,
          companyLink: "https://www.rightpoint.com/",
          position: "Software Developer Co-op",
          description: "Digital agency focused on custom web development, mobile applications, and consulting for B2B clients.",
          bullets: [
            "Developed custom backend and frontend web features for multiple agency clients",
            "Rewrote legacy code into modern MVC components for large content-driven",
            "Worked closely with clients and QA during the development process to ensure successful issue resolution and progress",
            "Tools: C#, JavaScript, SQL, jQuery"
          ],
          timeframe: "May 2019 - December 2019, Boston, MA"
        }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#experience {
  color: #eefceb;
  padding: 0 5%;

}

#experience-card {
  border-top: solid #e98074 2px;
  border-bottom: solid #e98074 2px;
}

#content {
  padding-top: 20px;
  padding-bottom: 20px;
  height: 170px;
}

#company-logo {
  float: left;
  width: 30vw;
  display: flex;
}

#company-name {
  font-size: 28px;
  margin-bottom: 20px;
}

@media screen and (max-width: 800px) {
  #company-logo {
    float: none;
  }
}
</style>