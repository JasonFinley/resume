<template>
  <div class="conllection_bg">
    <div>
        <h2 style="color:#000000">作品集</h2>
        <div>
          <p style="color:#ee00ee;font-size:30px">Music NFT</p>
          <div class="conllection_item">
              <a href="https://free-creator-music-nft.netlify.app/" target="_blank">
                  <img src="../../public/music_nft.png" width="600"/>
              </a>
              <div class="hide_info_bg">
                  <div class="hide_info">
                    <div>Music NFT</div>
                    <div>音樂自由創作者的地方</div>
                  </div>
              </div>
          </div>
          <div>
            <a href="https://rinkeby.etherscan.io/address/0x3e0Ac86BB0FDD43a299fc57E7D116A4dDa685081" target="_blank">合約地址 : 0x3e0Ac86BB0FDD43a299fc57E7D116A4dDa685081</a>
          </div>
        </div>
        <div>
          <p style="color:#ee00ee;font-size:30px">The 12 Factor App</p>
          <div class="conllection_item">
              <a href="https://12factor.netlify.app/" target="_blank">
                  <img src="../../public/12factor.png" width="600"/>
              </a>
              <div class="hide_info_bg">
                  <div class="hide_info">
                    <div>十二因子應用程式</div>
                  </div>
              </div>
          </div>
        </div>
    </div>
    <button type="button" class="btn btn-info position-absolute top-50 start-0" v-on:click="prePage"> {{btn_pre}} </button>
  </div>
</template>

<script>
import 'animate.css';

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

function goMyPrePage(){ this.$router.push('/future'); }
function goMyNextPage(){ this.$router.push('/'); }

function preMyPage(){ myTransition( this.goPrePage ); }
function nextMyPage(){ myTransition( this.goNextPage ); }
function myTransition( nextPagefunc ){
	nextPagefunc();
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.conllection_bg{
	min-width: 800px;
    min-height: 680px;
    background-image: url( "https://picsum.photos/1800/900" );
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.conllection_item{
    position: relative;
}

.hide_info_bg{
    position: absolute;
    background-color: rgba( 0, 0, 0, 0.7);
    top: 50%;
    left: 50%;
    width: 0px;
    font-size: 0px;
    height: 300px;
    transform: translate(-50%,-50%);
}

.conllection_item:hover .hide_info_bg{
    font-size: 30px;
    width: 600px;
    animation-name: fadeIn;
    animation-duration: 1s;
}

.hide_info{
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}


</style>
