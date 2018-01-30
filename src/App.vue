<template>
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
		  	<div id="app">
		  		<router-view  class="content" />
		    	<Footer></Footer>
		 	 </div>
		</mt-loadmore> 
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import { Loadmore } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
  name: 'App',
  components:{
  	Header,
  	Footer,
  },
  methods:{
    loadTop() {
    	Toast('(,,•́ . •̀,,)拼命加载中');
      console.log("loadTop");
      setTimeout(() => {
        Toast('数据重新加载完成');
        this.$refs.loadmore.onTopLoaded();
      }, 3200)
    },
    loadBottom() {
      
    },
    allLoaded(){}
  }
}
</script>

<style>

@import "assets/iconfont.css";	
@import 'assets/css/public.css';
*{
	margin: 0;
	padding: 0;
}
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
a {
  text-decoration: none;
}
.content {
  flex: 1;
}
</style>
