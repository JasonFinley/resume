<template>
  <div class="Resume">
      <section class="container">
        <div class="row align-items-center door-group g-0">
          <div class="col border border-end-0 border-5 border-dark door-l-info">
            <div class="dr_l_msg">
                <div class="text-end text-white fs-2">
                  <div class="fs-1">曾</div>
                  <div class="text-end">有責任感，有邏</div>
                  <div class="text-end">此Demo會用</div>
                  <div class="msg_l_ex text-start fs-3">
                    <div>IDE：VS Code</div>
                    <div>前端：VUE</div>
                    <div>套件：Animate.css</div>
                    <div>Lib： jquery.shutter</div>
                  </div>
                </div>
            </div>
          </div>
          <div class="col border border-start-0 border-5 border-dark door-r-info">
              <div class="dr_r_msg">
                <div class="text-start text-white fs-2">
                  <div class="fs-1">冠誌</div>
                  <div>輯，喜愛學習新技術</div>
                  <div>到的相關項目</div>
                    <div class="msg_r_ex text-start fs-3">
                      <div class="space_clr">.</div>
                      <div class="space_clr">.</div>
                      <div>jquery bootstrap  vue-particles</div>
                      <div>HTML5燃燒的火焰動畫特效</div>
                  </div>
                </div>
              </div> 
          </div>
        </div>
      </section>
      <button type="button" class="btn btn-info position-absolute top-50 end-0" v-on:click="nextPage"> {{btn_next}} </button>
  </div>
</template>

<script>
import $ from "jquery"
import "jquery.transit"

export default {
  name: 'ResumeInfo',
  props: {
    msg: String
  },
  data(){
    return {
      btn_pre : "<=",
      btn_next : "=>"
    };
  },
  methods:{
    goPage: goMyNextPage,
    nextPage: nextMyPage,
  },
}

function goMyNextPage(){ this.$router.push('/work1'); }
function nextMyPage(){
  var door_l = $( ".door-l-info" );
  var door_r = $( ".door-r-info" );
  var vue = this;
  
  door_l.transition( { rotateY: '-130deg' }, 1500 );
  door_r.transition( { rotateY: '130deg'  }, 1500, function(){
    door_l.css( "rotateY", '0deg' );
    door_r.css( "rotateY", '0deg' );
    vue.goPage();
  });
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.Resume{
    min-height: 680px;
    min-width: 600px;
//    background-image: url( "https://picsum.photos/1800/900" );
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #333333;
}

.door-group{
    width: 100%;
    height: 680px;
    position: relative;
    background-image: url( "https://picsum.photos/1200/680" );
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;    
}

.door-l-info, .door-r-info{
    width: 100%;
    height: 100%;
    transition: all 1s;
}

.door-l-info{
    background-color: #E08060;
    transform : rotateY(-130 deg);
    transform-origin: left;
}

.door-r-info{
    background-color: #E08060;
    transform : rotateY(130 deg);
    transform-origin: right;
}

.dr_l_msg{
  position: relative;
  width: 80%;
  height: 80%;
  float:right;
  top:50%;
  transform:translateY(-50%);
  background-color: #D34D20;
  border-top:5px solid #CC3300;
  border-left:5px solid #CC3300;
  border-bottom:5px solid #CC3300;
  border-top-left-radius : 20px;
  border-bottom-left-radius : 20px;
}

.dr_r_msg{
  position: relative;
  width: 80%;
  height: 80%;
  top:50%;
  transform:translateY(-50%);
  background-color: #D34D20;
  border-top:5px solid #CC3300;
  border-right:5px solid #CC3300;
  border-bottom:5px solid #CC3300;
  border-top-right-radius : 20px;
  border-bottom-right-radius : 20px;
}

.msg_l_ex{
  position: relative;
  left:50%;
//  border : 1px solid white;
}

.space_clr{
  color : #D34D20;
}

</style>
