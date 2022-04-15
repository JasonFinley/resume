<template>
  <div class="work_1">
    <section class="shutter_area">
      <div class="first_info">
        <ul class="text-start fs-1 text-light">
			<li class="animate__animated animate__heartBeat">視晶電子</li>
			<li class="animate__animated animate__flash">產品：設計cmos sensor，使用C/C++韌體設計</li>
			<li class="white_balance">修改自動白平衡</li>
			<li class="exposure">修改自動曝光</li>
		</ul>
      </div>
    </section>
    <button type="button" class="btn btn-info position-absolute top-50 start-0" v-on:click="prePage"> {{btn_pre}} </button>
	<button type="button" class="btn btn-info position-absolute top-50 end-0" v-on:click="nextPage"> {{btn_next}} </button>
  </div>
</template>

<script>
import $ from "jquery";
import './../assets/jquery.shutter/jquery.shutter.js';

export default {
  name: 'WorkFirst',
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

function goMyPrePage(){ this.$router.push('/'); }
function goMyNextPage(){ this.$router.push('/work2'); }

function preMyPage(){ myTransition( this.goPrePage ); }
function nextMyPage(){ myTransition( this.goNextPage ); }
function myTransition( nextPagefunc ){
	var container = $('.shutter_area');
	container.tzShutter({
		imgSrc: require( '../assets/jquery.shutter/shutter.png' ),
		closeCallback: function(){
			// Scheduling a shutter open in 0.1 seconds:
			//setTimeout( function(){ container.trigger('shutterOpen')}, 100);
			// eslint-disable-next-line
			//if(0)
			nextPagefunc();
		},
		loadCompleteCallback: function(){ container.trigger('shutterClose'); }
	});

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/jquery.shutter/jquery.shutter.css";

.work_1{
	min-width: 800px;
    min-height: 680px;
    background-image: url( "https://picsum.photos/1800/900" );
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.shutter_area{
	width:65%;
	height:680px;
	margin:0 auto;
	border: 6px groove rgb(83, 83, 83);
	overflow:hidden;
	
	background-color: #3c3c3c77;
	background-position: center;
	background-repeat: no-repeat;

	-moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	-webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);	
}

.first_info{
	width:65%;
	position: relative;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

.white_balance{
	color : white;
	animation-name: auto_wb;
    animation-duration: 3s;
}

@keyframes auto_wb{
    0%	{ color: #00ffff; }
	25%{ color: blue; }
	50%{ color: red; }
	75%{ color: yellow; }
    100%{ color: white; }
}

.exposure{
	color : white;
	animation-name: auto_exp;
    animation-duration: 3.5s;
}

@keyframes auto_exp{
	0%{ color: rgb(100, 100, 100) }
    25%	{ color: white; }
	50%{ color: black; }
	75%{ color: rgb(180, 180, 180); }
    100%{ color: white; }
}

</style>
