<template>
  <div class="work_2">
    <div class="container container_bg">
      <div class="container_info">
        <ul class="text-start text-light fs-2">
          <li class="fs-1 font_flash">精天科技</li>
          <li class="font_ml_2">產品：車用導航(Embedded Linux)</li>
          <li class="font_mr_3">我擔任資深研發工程師，使用C/C++</li>
          <li class="font_msp_4">負責客戶UI/UX及Library應用研發</li>
          <li class="animate__animated animate__fadeInTopLeft animate__slow">輔導新進人員成長，快速融入團隊</li>
          <li class="font_mr_4">協助Android項目API介接Library</li>
        </ul>
      </div>
    </div>
  </div>
  <span id="my_trans" v-if="trans.isShow">
    <Transition>
      <img class="transition_bg" v-if="trans.isShow" src='./../assets/carline.jpg' />
    </Transition>
    <Transition
      appear
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @enter-cancelled="onEnterCancelled"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
      @leave-cancelled="onLeaveCancelled"
    >  
      <img class="lastcar" v-if="trans.isShow" src='./../assets/car_yellow.png' />
    </Transition>
    <Transition>
      <img class="transition_car_w" v-if="trans.isShow" src='./../assets/car_white.png' />
    </Transition>
  </span>
  <button type="button" class="btn btn-info position-absolute top-50 start-0" v-on:click="prePage"> {{btn_pre}} </button>
	<button type="button" class="btn btn-info position-absolute top-50 end-0" v-on:click="nextPage"> {{btn_next}} </button>
</template>

<script>
import 'animate.css';
import $ from "jquery";
export default {
  name: 'WorkSecond',
  props: {
    msg: String
  },
  data(){
    return {
      btn_pre : "<=",
      btn_next : "=>",
      trans : { isShow : false, myTransCallBack : null },
    };
  },
  methods:{
    goPrePage: goMyPrePage,
    goNextPage: goMyNextPage,
    nextPage: nextMyPage,
    prePage : preMyPage,
    goTransition : goMyTransition,

    onBeforeEnter: (el)=>{ console.log("onBeforeEnter", el); },
    onEnter: onMyEnter,
    onAfterEnter : onMyAfterEnter,
    onEnterCancelled: (el)=>{ console.log("onEnterCancelled", el); },
    onBeforeLeave: (el)=>{console.log("onBeforeLeave", el); },
    onLeave: (el, done)=>{ console.log("onLeave", el, done); },
    onAfterLeave: (el)=>{ console.log("onAfterLeave", el); },
    onLeaveCancelled: (el)=>{ console.log("onLeaveCancelled", el); },
  },
}

function onMyAfterEnter( el ){
  console.log("onAfterEnter", el); 
  var myFunc = this.trans.myTransCallBack;
  if( this.trans.myTransCallBack != null ){
    this.trans.isShow = false;
    $(".transition_bg").fadeOut( "fast", function(){
        myFunc();
    });
  }else{
    this.trans.isShow = false;
  }
}

function onMyEnter( el, done ){
  var car_slow = $(".lastcar");
  console.log("onEnter", el, done);
  car_slow.animate( { left : "2000px" }, 2500, function(){
      car_slow.css( 'transform', 'scaleX(1)' )
          .animate( { bottom : "-100px" } )
          .animate( { left : "1000px" }, 1000 )
          .animate( { left : "-500px" }, 500, done );
  });                   
}

function goMyPrePage(){ this.$router.push('/work1'); }
function goMyNextPage(){ this.$router.push('/work3'); }

function preMyPage(){ this.goTransition( this.goPrePage ); }
function nextMyPage(){ this.goTransition( this.goNextPage ); }
function goMyTransition( nextPagefunc ){
  this.trans.isShow = true;
  this.trans.myTransCallBack = nextPagefunc;
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.work_2{
	min-width: 800px;
  min-height: 680px;
  background-image: url( "https://picsum.photos/1800/900" );
  background-color: #ACDAF1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container_bg{
  width: 50%;
  height: 680px;
  position: relative;
  background-color: #3c3c3c77;
  background-position: center;
  background-repeat: no-repeat;
  animation-name: container_bg_action;
  animation-duration:1.5s; 
}

@keyframes container_bg_action{
    from{ top : -2000px }
    to{ top : 0px }
}

.container_info{
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
}

.font_flash{             
    animation-name: flash;
    animation-duration:2.5s;
}

.font_ml_2{             
    position: relative;
    animation-name: backInLeft;
    animation-duration:2s;
}
.font_ml_3{             
    position: relative;
    animation-name: font_mv_l_2000;
    animation-duration:3s;
}
.font_ml_4{             
    position: relative;
    animation-name: font_mv_l_2000;
    animation-duration:4s;
}

.font_mr_2{             
    position: relative;
    animation-name: font_mv_r_2000;
    animation-duration:2s;
}
.font_mr_3{             
    position: relative;
    animation-name: backInRight;
    animation-duration:3s;
}
.font_mr_4{             
    position: relative;
    animation-name: font_mv_rt_2000;
    animation-duration:4s;
}

.font_msp_4{             
    position: relative;
    animation-name: font_mvsp_2000;
    animation-duration:4s;
}

.font_msslow_3{             
    position: relative;
    animation-name: zoomInLeft;
    animation-duration:4s;
}

@keyframes font_mv_l_2000{
    from{ left: 2000px; }
    to{ left: 0px; }
}

@keyframes font_mv_r_2000{
    from{ left: -2000px; }
    to{ left: 0px; }
}

@keyframes font_mv_rt_2000{
    from{ left: -2000px; top: 1000px; }
    to{ left: 0px; top: 0; }
}

@keyframes font_mvsp_2000 {
  0%   {left: 2000px; top: 1000px;}
  75%  {left: -50px; top: -30px;}
  100% {left: 0px; top: 0px;}
}

@keyframes font_mvslow_200 {
  0%   {left: -2000px }
  25%  {left: -200px }
  100% {left: 0px }
}

.transition_bg{
  left: 0px;
  bottom: 0px;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
}

.transition_car_w{
  left: -400px;
  bottom: -100px;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  animation-name: trans_car_w_rl;
  animation-duration:4s;
}
.transition_car_y{
  left: 2000px;
  bottom: 0px;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  animation-duration:4s;
  animation-delay: 2s;
//  animation-name: trans_car_ltor;
//  transform:scaleX(-1);
  animation-name: trans_car_y_lr;
}

@keyframes trans_car_y_lr{
    0%{ left: -500px ; bottom: 0px ; transform:scaleX(-1) }
    45%{ left: 2000px ; bottom: 0px ; transform:scaleX(-1) }
    55%{ left: 2000px ; bottom: -100px ; transform:scaleX(1) }
    100%{ left: -500px ; bottom: -100px ; transform:scaleX(1) }
}

@keyframes trans_car_w_rl{
    0%{ left: 2000px ; bottom: -100px ; transform:scaleX(-1) }
    45%{ left: -500px ; bottom: -100px ; transform:scaleX(-1) }
    55%{ left: -500px ; bottom: -30px ; transform:scaleX(1) }
    100%{ left: 2000px ; bottom: -30px ; transform:scaleX(1) }
}

@keyframes trans_car_rtol{
    from{ left: 2000px }
    to{ left: -500px }
}

@keyframes trans_car_ltor{
    from{ left: -500px; }
    to{ left: 2000px; }
}

.lastcar{
  left: -500px;
  bottom: 0px;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  transform: scaleX(-1);
}

</style>
