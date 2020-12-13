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
import sl_logo from '../assets/img/sl_logo.png'
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
          companyTitle: "SMARTLEAF",
          companyLogo: sl_logo,
          companyLink: "https://www.smartleaf.com/",
          position: "Full Stack Engineer Co-op",
          description: "Automated financial portfolio management and investment engine for wealth managers.",
           bullets: [
             "Architect and develop new api endpoints currently used by client firms for granular customization of portfolio targets for more than 500,000 accounts",
             "Create interactive modern React UI for streamlined batch management of portfolios",
             "Implement features throughout the Ruby on Rails backend to improve the efficiency of our internal logic and create better workflows for users"
           ],
           timeframe: "May 2020 - Present, Boston, MA"
        },
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