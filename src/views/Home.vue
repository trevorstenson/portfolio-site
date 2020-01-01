<template>
    <div id="home">
        <Navbar/>
        <h1 id="nametitle">TREVOR STENSON</h1>
        <h2 id="subheading">Undergraduate computer science student in Boston, MA</h2>
        <Media/>
        <img id="skyline" src="../assets/img/blue-boston-skyline.png" alt="Boston Skyline"/>
        <div id="darkness">
            <About/>
            <Experience/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    </div>
    
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Media from '../components/Media.vue'
import Experience from '../components/Experience.vue'
import Projects from '../components/Projects.vue'
import Skills from '../components/Skills.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

export default {
  name: "Home",
  components: {
      Navbar, Media, Experience, Projects, Skills, About, Contact, Footer
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nametitle {
    color: #eefceb;
    font-size: 7vw;
    margin-top: 80px;
    margin-bottom: 20px;
}

#subheading {
    font-size: 30px;
    font-weight: 500;
    color: #eefceb;
    margin: 20px 10px;
}

#skyline {
    padding: 0 0;
    display: block;
    margin: 20px auto;
    margin-bottom: 0px;
    max-height: 100%;
    max-width: 100%;
}

#darkness {
    background-color: #254E58;
    margin: 0px auto;
}

@media screen and (max-width: 800px) {
    #subheading {
        font-size: 25px;
    }
}
</style>
