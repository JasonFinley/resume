<template>
  <div class="Resume">
      <section class="container">
          <div class="row align-items-center door-group">
            <div class="col border border-3 border-danger door-l-info">左門</div>
            <div class="col border border-3 border-danger door-r-info">右門</div>
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
    $( ".door-l-info" ).transition( { rotateY: '-130deg' }, 1000 );
    $( ".door-r-info" ).transition( { rotateY: '130deg'  }, 1000, this.goPage );
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.Resume{
    min-height: 680px;
    min-width: 600px;
    background-image: url( "https://picsum.photos/1800/900" );
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.door-group{
    width: 100%;
    height: 680px;
    background-color: blue;
}

.door-l-info, .door-r-info{
    width: 100%;
    height: 100%;
    transition: all 1s;
}

.door-l-info{
    background-color: #ffff00;
    transform : rotateY(-130 deg);
    transform-origin: left;
}

.door-r-info{
    background-color: #00ffff;
    transform : rotateY(130 deg);
    transform-origin: right;
}

</style>
