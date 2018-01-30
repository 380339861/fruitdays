<template>
	<div class="nav">
      <router-link to="/" class="bottom-iconfont"><i class="iconfont icon-home"></i><p>首页</p></router-link>
      <router-link to="/Classification" class="bottom-iconfont"><i class="iconfont icon-leimupinleifenleileibie"></i><p>分类</p></router-link>
      <router-link to="/" class="bottom-iconfont"><i class="iconfont icon-gouwuche"></i><p>购物车</p></router-link>
      <router-link :to="urluser" class="bottom-iconfont"><i class="iconfont icon-wode"></i><p>我的果园</p></router-link>
	</div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    	urluser:"/Login",
    }
  },
  mounted(){
	if(this.$store.state.username !=""){
		this.urluser = "/User"
	}else{
		this.urluser = "/Login"
	}
  }
}
</script>

<style scoped>
	*{
	margin: 0;
	padding: 0;
}
.nav {
  width: 100%;
  height: 42px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #898989;
  box-shadow:  0 2px 3px 0 rgba(0,0,0,0.2);
  position: fixed;
  bottom: -1px;
  background: white;
  z-index: 1;
}
.nav a {
  flex: 1;
  text-align: center;
}
.bottom-iconfont{
	width: 93px;
	margin:2px;
	color: #898989;
}
</style>
