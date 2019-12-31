<template>
  <div id="outernav" v-bind:class="[changeNavBackground ? 'changed' : 'initial']">
    <div id="name">
      trevorstenson.dev
    </div>
    <div id="buttons">
      <a href="#" v-scroll-to="'#outernav'" class="btn">Home</a>
      <a href="#" v-scroll-to="{
        el: '#about',
        offset: -30
      }" class="btn">About</a>
      <a href="#" v-scroll-to="{
        el: '#projects',
        offset: -30
      }" class="btn">Projects</a>
      <a href="#" v-scroll-to="{
        el: '#skills',
        offset: -30
      }" class="btn">Skills</a>
      <a href="#" v-scroll-to="{
        el: '#contact',
        offset: -30
      }" class="btn">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data () {
    return {
      changeNavBackground: false
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 20) {
        this.changeNavBackground = true;
      } else {
        this.changeNavBackground = false;
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#outernav {
  padding: 10px 0px;
  font-size: 24px;
  position: fixed;
  top: 0;
  width: 100%;
  overflow: hidden; 
  z-index: 10;
  text-align: center;

  color: #eefceb;
}

.initial {
  background: transparent;
}

.changed {
  background-color: #88BDBC;
  box-shadow: 0 4px 10px -2px rgba(0,0,0,.2);
}

#name {
  float: left;
  padding: 0px 20px;
  font-size: 30px;
}

#buttons {
  float: right;
}

#outernav .btn {
  float: left;
  display: block;
  text-align: center;
  text-decoration: none;
  margin: 0px 5px;
  padding: 2px 8px;
  padding-bottom: 6px;
  
  color: #eefceb;

  background-image: linear-gradient(#e98074, #e98074), linear-gradient(transparent, transparent);
  background-size: 0 3px, auto;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: all .2s ease-out;
  background-color: transparent;
}

#outernav .btn:hover {
  background-size: 100% 3px, auto;
}

@media screen and (max-width: 800px) {
  #buttons {
    display: none;
  }

  #name {
    display: inline-block;
    float: none;
  }
}
</style>