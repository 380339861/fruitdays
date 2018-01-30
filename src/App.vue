<template>
		
		  	<div id="app">
		  		<router-view  class="content" />
		    	<Footer></Footer>
		 	 </div>
		
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components:{
  	Header,
  	Footer,
  },
  methods:{
    
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
