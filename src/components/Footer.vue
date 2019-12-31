<template>
  <div id="footer">
    <div id="footer-top">
      
    </div>
    <div id="footer-bottom">
      Copyright © 2020 Trevor Stenson. All rights reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  background-color: #88BDBC;
}

#footer-top {
  background-color: #254E58;
  height: 60px;
  border-bottom-left-radius: 40% 80%;
  border-bottom-right-radius: 40% 80%;
}

#footer-bottom {
  padding-top: 25px;
  height: 53px;
  color: #254E58;
}
</style>