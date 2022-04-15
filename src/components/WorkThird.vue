<template>
  <div class="work_3">
	<div class="container_bg">
      <h1>忠山實業</h1>
		<div class="pro_1">
			<h1>產品：塑膠紡織</h1>
			<h1>例如：寵物飼料袋，米袋</h1>
		</div>
		<div class="pro_2">
			<h1>使用C/C++和MySQL實作進銷存</h1>
			<h1>各類營業表單</h1>
		</div>
	</div>
	<span id="my_trans" v-if="trans.isShow">
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
		<div class="truck"></div>
		</Transition>
		<img class="move_per" src='./../assets/move_1.png' />
	</span>
    <canvas id="frame_fire"></canvas>
  </div>
  <button id="btn_pre" type="button" class="btn btn-info position-absolute top-50 start-0" v-on:click="prePage"> {{btn_pre}} </button>
  <button id="btn_next" type="button" class="btn btn-info position-absolute top-50 end-0" v-on:click="nextPage"> {{btn_next}} </button>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'WorkThird',
  props: {
    msg: String
  },
  data(){
    return {
      btn_pre : "<=",
      btn_next : "=>",
		trans : { isShow : true, myTransCallBack : null },
    };
  },
  methods:{
    goPrePage: goMyPrePage,
    goNextPage: goMyNextPage,
    nextPage: nextMyPage,
    prePage : preMyPage,

    onBeforeEnter: (el)=>{console.log("onBeforeEnter", el); },
    onEnter: onMyEnter,
    onAfterEnter : onMyAfterEnter,
    onEnterCancelled: (el)=>{ console.log("onEnterCancelled", el); },
    onBeforeLeave: (el)=>{console.log("onBeforeLeave", el); },
    onLeave: (el, done)=>{ console.log("onLeave", el, done); },
    onAfterLeave: (el)=>{ console.log("onAfterLeave", el); },
    onLeaveCancelled: (el)=>{ console.log("onLeaveCancelled", el); },

  },
}

function onMyEnter( el, done ){
  var car_slow = $(".truck");
  console.log("onEnter", el, done);
  $(".pro_1").animate( { left : "0px" }, 1500, function(){
	$(".move_per").animate( { bottom : "400px" }, 600 ).animate( { bottom : "0px" }, 300 );
  }).animate( { bottom : "0px" }, 600 );  
  
  $(".pro_2").animate( { left : "0px" }, 1500 ).animate( { left : "0px" }, 1000, function(){
	$(".move_per").animate( { bottom : "285px" }, 1000 ).fadeOut();
  } ).animate( { bottom : "0px" }, 1000 );

  car_slow.animate( { left : "250px" }, 1500, function(){
	car_slow.animate( { left : "250px" }, 1200 ).animate( { left : "-1000px" }, 1000, done );
  });        
}

function onMyAfterEnter( el ){
  console.log("onAfterEnter", el); 
  this.trans.isShow = false;
}

function goMyPrePage(){ this.$router.push('/work2'); }
function goMyNextPage(){ this.$router.push('/future'); }

function preMyPage(){ myTransition( this.goPrePage ); }
function nextMyPage(){ myTransition( this.goNextPage ); }
function myTransition( nextPagefunc ){

  // eslint-disable-next-line no-constant-condition
  $(".work_3").addClass( "onFire" ).animate( { letterSpacing: "20px" }, 1000, function(){
    start();
    $( "#btn_pre" ).addClass( "onFireRed" );
    $( "#btn_next" ).addClass( "onFireRed" );
    $( "#frame_fire" ).fadeTo( 2000, 0.8, nextPagefunc );
  });
}

var palette = [
	'#070707', '#1f0707', '#2f0f07', '#470f07',
	'#571707', '#671f07', '#771f07', '#8f2707',
	'#9f2f07', '#af3f07', '#bf4707', '#c74707',
	'#df4f07', '#df5707', '#df5707', '#d75f07',
	'#d7670f', '#cf6f0f', '#cf770f', '#cf7f0f',
	'#cf8717', '#c78717', '#c78f17', '#c7971f', 
	'#bf9f1f', '#bf9f1f', '#bfa727', '#bfa727',
	'#bfaf2f', '#b7af2f', '#b7b72f', '#b7b737',
	'#cfcf6f', '#dfdf9f', '#efefc7', '#ffffff'
];
var global = { w: 0, h: 0 };
var scale = 12;
var dots = [];
var ctx = null;

function start() {
	global.w = Math.min(320, Math.round(window.innerWidth / scale));
	global.h = Math.min(240, Math.round(window.innerHeight / scale));

	// Get and init canvas
	var canvas = document.getElementById('frame_fire');
	canvas.width = global.w * scale;
	canvas.height = global.h * scale;
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		ctx.globalCompositeOperation = 'new content';
	}

	// Init all dots array with zeros except first line
	for (var x = 0; x < global.w; x++) {
		for (var y = 0; y < global.h; y++) {
			dots[y * global.w + x] = y == global.h - 1 ? 35 : 0;
		}
	}

	window.requestAnimationFrame(update);
}

function update() {
	if (ctx == null) return;
	window.requestAnimationFrame(update);

	ctx.fillStyle = 'rgba(0, 0, 0, 1)';
	ctx.fillRect(0, 0, global.w * scale, global.h * scale);

	/* Move & draw */
	for (var x = 0; x < global.w; x++) {
		var xp = x * scale;
		for (var y = 1; y < global.h; y++) {
			var rand = Math.round(Math.random() * 3);
			var from = y * global.w + x;
			var to = from - global.w - rand + 1;
			dots[to] = dots[from] - (rand & 2);

			var index = Math.max(0, dots[from]);
			if (index == 0) continue;
			ctx.fillStyle = palette[index];
			ctx.fillRect(xp, y * scale, scale, scale);
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.work_3{
	min-width: 800px;
    min-height: 680px;
	position: relative;
    background-image: url( "https://picsum.photos/1800/900" );
    background-color: #b7b7b7;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

canvas {
	display: block;
	margin: 0 auto;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.onFire{
    color : rgb(255, 137, 137);
    background: #151515;
    transition: 2s;
}

.onFireRed{
    background: red;
    transition: 3s;
}

.container_bg{
  width: 50%;
  height: 680px;
  left: 50%;
  transform: translate(-50%);
  color: white;
  position: relative;
  background-color: #3c3c3c77;
  background-position: center;
  background-repeat: no-repeat;
}

.truck{
  left:2250px;
  bottom: 0px;
  height: 300px;
  width: 863px;
  position: absolute;
  background-image: url( './../assets/car_truck.png' );
  background-position: center;
  background-repeat: no-repeat;
//  animation-name: truck_move;
//  animation-duration: 8s;
}
.pro_1{
  position: relative;
	left:2000px;
	bottom: -375px;
}

.pro_2{
  position: relative;
  left:2000px;
  bottom: -275px;
}

.move_per{
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%);
}

</style>
