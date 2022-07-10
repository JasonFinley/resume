<template>
  <div class='future'>
    <div>
      <vue-particles class ="par_bg"
        color="#dedede"
        :particleOpacity="0.8"
        :particlesNumber="50"
        shapeType="circle"
        :particleSize="6"
        linesColor="#dedede"
        :linesWidth="3"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="0.5"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      <div class="msg text-start">
        <ul class="fs-1">未來期望
          <li class="fs-3">在自學期間，發現前端工程師，很多套件可以使用，有趣又好玩。</li>
          <li class="fs-3">希望能繼續往這方向發展。</li>
        </ul>
      </div>
    </div>
  </div>
  <button type="button" class="btn btn-info position-absolute top-50 start-0" v-on:click="prePage"> {{btn_pre}} </button>
	<button type="button" class="btn btn-info position-absolute top-50 end-0" v-on:click="nextPage"> {{btn_next}} </button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Future',
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
function goMyPrePage(){ this.$router.push('/work3'); }
function goMyNextPage(){ this.$router.push('/collection'); }

function preMyPage(){ myTransition( this.goPrePage ); }
function nextMyPage(){ myTransition( this.goNextPage ); }
function myTransition( nextPagefunc ){
  nextPagefunc();
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.future{
    width: 1530px;
    height: 680px;
    color:#fff;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url( './../assets/future_bg.jpg' );
}

.par_bg{
  width: 100%;
  height: 675px;
//  border-style:solid;
//  border-color:red;
  position: absolute; 
  top: 0;             
  bottom: 0;           
  left: 0;        
  right: 0;
  margin: auto; 
}

.msg{
  left: 300px;
  top: 70px;
  width : 30%;
  color:rgb(222, 222, 222);
  position: absolute;
//  border-style:solid;
//  border-color:yellow;
}

</style>
