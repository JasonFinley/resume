<template>
  <div class="work_3">
      <h1>Jason Finley Start Third Work.</h1>
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
      btn_next : "=>"
    };
  },
  methods:{
    goPrePage: goMyPrePage,
    goNextPage: goMyNextPage,
    nextPage: nextMyPage,
    prePage : preMyPage,
  },
}

function goMyPrePage(){ this.$router.push('/work2'); }
function goMyNextPage(){ this.$router.push('/future'); }

function preMyPage(){ myTransition( this.goPrePage ); }
function nextMyPage(){ myTransition( this.goNextPage ); }
function myTransition( nextPagefunc ){

  console.log( $( window ).width() );
  console.log( $( window ).height() );
  // eslint-disable-next-line no-constant-condition
  $(".work_3").addClass( "onFire" ).animate( {letterSpacing: "20px" }, 2000, function(){
    start();
    $( "#btn_pre" ).addClass( "onFireRed" );
    $( "#btn_next" ).addClass( "onFireRed" );
    setTimeout( nextPagefunc, 2800 );
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

</style>
