<template>
  <div class="future">
      <h1>Jason Finley Future.</h1>
  </div>
  <button type="button" class="btn btn-info position-absolute top-50 start-0" v-on:click="prePage"> {{btn_pre}} </button>
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
function goMyNextPage(){ this.$router.push('/'); }

function preMyPage(){ myTransition( this.goPrePage ); }
function nextMyPage(){ myTransition( this.goNextPage ); }
function myTransition( nextPagefunc ){
  nextPagefunc();

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.future{
	min-width: 800px;
    min-height: 680px;
    background-image: url( "https://picsum.photos/1800/900" );
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>
