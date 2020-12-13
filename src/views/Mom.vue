<template>
    <div>
        <div class="flipbook">
<div class="hard"> Turn.js </div> 
  <div class="hard"></div>
  <div> Page 1 </div>
  <div> Page 2 </div>
  <div> Page 3 </div>
  <div> Page 4 </div>
  <div class="hard"></div>
  <div class="hard"></div>
        </div>
    </div>
</template>
<script>
// import JQuery from 'jquery'
// let $ = JQuery
import '../js/jquery.min.1.7'
import '../js/turn'

export default {
    data() {
        return {

        }
    },
    mounted() {
        // let jqueryScript = document.createElement('script')
        // let turnScript = document.createElement('script')
        // jqueryScript.setAttribute('src', './jquery.min.1.7.js')
        // turnScript.setAttribute('src', './turn.js')
        // jqueryScript.async = true
        // turnScript.async = true
        // document.head.appendChild(jqueryScript)
        // document.head.appendChild(turnScript)

        $("#flipbook").turn({
            width: 400,
            height: 300,
            autoCenter: true
        });
    }
}
</script>
<style scoped>
body{
    overflow:hidden;
}

#flipbook{
    width:400px;
    height:300px;
}

#flipbook .page{
    width:400px;
    height:300px;
    background-color:white;
    line-height:300px;
    font-size:20px;
    text-align:center;
}

#flipbook .page-wrapper{
    -webkit-perspective:2000px;
    -moz-perspective:2000px;
    -ms-perspective:2000px;
    -o-perspective:2000px;
    perspective:2000px;
}

#flipbook .hard{
    background:#ccc !important;
    color:#333;
    -webkit-box-shadow:inset 0 0 5px #666;
    -moz-box-shadow:inset 0 0 5px #666;
    -o-box-shadow:inset 0 0 5px #666;
    -ms-box-shadow:inset 0 0 5px #666;
    box-shadow:inset 0 0 5px #666;
    font-weight:bold;
}

#flipbook .odd{
    background:-webkit-gradient(linear, right top, left top, color-stop(0.95, #FFF), color-stop(1, #DADADA));
    background-image:-webkit-linear-gradient(right, #FFF 95%, #C4C4C4 100%);
    background-image:-moz-linear-gradient(right, #FFF 95%, #C4C4C4 100%);
    background-image:-ms-linear-gradient(right, #FFF 95%, #C4C4C4 100%);
    background-image:-o-linear-gradient(right, #FFF 95%, #C4C4C4 100%);
    background-image:linear-gradient(right, #FFF 95%, #C4C4C4 100%);
    -webkit-box-shadow:inset 0 0 5px #666;
    -moz-box-shadow:inset 0 0 5px #666;
    -o-box-shadow:inset 0 0 5px #666;
    -ms-box-shadow:inset 0 0 5px #666;
    box-shadow:inset 0 0 5px #666;
    
}

#flipbook .even{
    background:-webkit-gradient(linear, left top, right top, color-stop(0.95, #fff), color-stop(1, #dadada));
    background-image:-webkit-linear-gradient(left, #fff 95%, #dadada 100%);
    background-image:-moz-linear-gradient(left, #fff 95%, #dadada 100%);
    background-image:-ms-linear-gradient(left, #fff 95%, #dadada 100%);
    background-image:-o-linear-gradient(left, #fff 95%, #dadada 100%);
    background-image:linear-gradient(left, #fff 95%, #dadada 100%);
    -webkit-box-shadow:inset 0 0 5px #666;
    -moz-box-shadow:inset 0 0 5px #666;
    -o-box-shadow:inset 0 0 5px #666;
    -ms-box-shadow:inset 0 0 5px #666;
    box-shadow:inset 0 0 5px #666;
}
</style>