<template>
  <div class="work_1">
    <section class="shutter_area">
      <div class="row">
          <div class="col">左Work</div>
          <div class="col">右Work</div>
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
	
	-moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	-webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);	
}

</style>
