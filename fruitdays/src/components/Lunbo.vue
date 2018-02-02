<template>
	<div>
		<mt-swipe :auto="4000">
	      <mt-swipe-item v-for="item in list">
	        <img :src="item.image" />
	      </mt-swipe-item>
	  	</mt-swipe>
	</div>
</template>

<script>
import axios from 'axios';
export default{
	name : "mintui",
	data : function(){
		return {
			list: [],
		}
	},
	mounted : function(){
		axios.get('v3/ad/homepage?connect_id=&type=0&lonlat=116.25153,40.11623&ad_code=110114&tab_id=')
		  .then((response)=>{
		    console.log(response);
		    this.list = response.data.data.banner.mainBanners[0].content
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
}
</script>

<style scoped>
.mint-swipe{height: 160px;
}
.mint-swipe-item img{
	width: 100%;
	height: 100%;
}
</style>