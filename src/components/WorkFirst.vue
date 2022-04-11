<template>
  <div class="work_1">
      <section class="container">
        <div class="row border border-3 border-danger">
            <div class="col">左Work</div>
            <div class="col">右Work</div>
        </div>
      </section>
      <button type="button" class="btn btn-info position-absolute bottom-8 end-0" v-on:click="nextPage">NEXT=></button>
  </div>
</template>

<script>

import $ from "jquery";
import './../assets/jquery.shutter/jquery.shutter.js';

export default {
  name: 'WorkFirst',
  props: {
    msg: String
  }
}

$(document).ready(function(){

	var container = $('.container');

	// Using the tzShutter plugin. We are giving the path
	// to he shutter.png image in the plugin folder and two
	// callback functions.
	container.tzShutter({
		imgSrc: require( '../assets/jquery.shutter/shutter.png' ),
		closeCallback: function(){
			// Scheduling a shutter open in 0.1 seconds:
			setTimeout(function(){ container.trigger('shutterOpen')},100);
		},
		loadCompleteCallback:function(){			
			container.trigger('shutterClose');
		}
	});
	
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/jquery.shutter/jquery.shutter.css";

.work_1{
    min-height: 680px;
    min-width: 600px;
    background-image: url( "https://picsum.photos/1800/900" );
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.container{
	width:680px;
	height:600px;
	margin:0 auto;
	border:5px solid #fff;
	overflow:hidden;
	
	-moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	-webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);	
}

</style>
