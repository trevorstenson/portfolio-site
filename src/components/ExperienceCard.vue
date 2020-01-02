<template>
  <div class="experience-card">
    <div class="card-top">
      <a :href="companyLink">
        <img class="logo" v-bind:src="companyLogo"/>
      </a>
      <div class="company-title">{{ companyTitle }}</div>
      <div class="position">{{ position }}</div>
    </div>
    <div class="card-content">
      <div class="card-desc">{{ desc }}</div>
      <ul class="bullets">
        <li class="card-bullet" v-for="bullet in bullets" :key="bullet">{{ bullet }}</li>
      </ul>
      
    </div>
    <div class="timeframe">{{ timeframe }}</div>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    companyTitle: String,
    companyLogo: String,
    companyLink: String,
    position: String,
    desc: String,
    bullets: Array,
    timeframe: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.experience-card {
  margin: 10px 3vw;
  background-color: #254e58;
  color: #eefceb;

  height: auto;
  width: 60%;

  border: solid #e98074 2px; 
  position: relative;
  border-radius: 7px;
  display: inline-block;
}

.card-top {
  height: 66px;
  border-bottom: solid #e98074 1px;
}

.logo {
  width: 50px;
  height: 50px;
  float: left;
  margin: 8px;
}

.company-title {
  font-size: 24px;
  float: left;
  margin-left: 2vw;
  margin-top: 20px;
}

.position {
  font-size: 18px;
  float: right;
  margin-right: 25px;
  margin-top: 25px;
}

.card-content {
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
}

.card-desc {
  font-size: 16px;
  font-style: italic;
  text-align: center;
  align-content: center;  
}

.bullets {
  padding-left: 20px;
}

.timeframe {
  padding: 10px;
  border-top: solid #e98074 1px;

}

@media screen and (max-width: 800px) {
  .experience-card {
    width: 90%;
    margin: 0 auto;
  }

  .logo {
    float: none;
    text-align: center;
    margin-bottom: 0;
  }

  .card-top {
    height: 95px;
    text-align: center;
  }

  .company-title {
    float: none;
    margin: 0;
  }

  .position {
    float: none;
    margin: 0;
    margin-top: 10px;
  }

  .card-content {
    margin-top: 30px;
  }

  .timeframe {
    font-size: 14px;
  }
}
</style>