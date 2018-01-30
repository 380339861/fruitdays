<template>
	<div>
	<div class="gk_list">
		<div class="section space">
			<router-link to="/">
				<img src="../assets/img/Remlog.jpg"/>
			</router-link>
		</div>
<!--		
		<div class="section recommends" v-for="item in goodlist">
			<router-link to="/">
				<div class="img_box">
					<img :src="item.image"/>
				</div>
				<div class="desc"> 
					<h5>{{item.title}}</h5> 
					<p>{{item.subtitle}}</p>  
					<div class="price"> 
						<span class="money">￥{{item.price}}/ <em>{{item.volume}}</em></span> 
						<i class="iconfont icon-jiahao icon-searchplus"></i> 
					</div> 
				</div>
			</router-link>
		</div>-->
		
		<div class="section has-recommend">
			<div class="swiper-container swiper-container-horizontal swiper-container-wp8-horizontal">
			    <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
			        <router-link :to="{name : 'Detail',params:{fid: listSlider.target_id}}" class="swiper-slide swiper-slide-prev" v-for="listSlider in swiper_slider">
				      	<div class="img-box">
				      		<img :src="listSlider.image"/>
				      	</div>
				      	<div class="tag-box"> 
				      		<em class="tag">{{listSlider.banner_tag}}</em> 
				      	</div>
				      	<p>{{listSlider.title}}</p>
				      	<div class="price"> 
				      		<span class="money">￥{{listSlider.price}}/<em>{{listSlider.volume}}</em></span> 
				      		<i class="iconfont icon-jiahao icon-searchplus"></i> 
				      	</div>
			        </router-link>
			    </div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
import Swiper from 'swiper'
import axios from 'axios'
export default{
	name : "reman",
	data : function(){
		return {
			goodlist:[],
			swiper_slider:[]
		}
	},
	mounted : function(){
	    axios.get('v3/ad/homepage?connect_id=&type=0&lonlat=116.25153,40.11623&ad_code=110114&tab_id=')
		  .then((response)=>{
		    console.log(response);
		    this.goodlist = response.data.data.banner.mainBanners[6].content
		    this.swiper_slider = response.data.data.banner.mainBanners[6].content
		    this.$nextTick(function(){
		    	var swiper = new Swiper('.swiper-container', {
		     	 	slidesPerView: 3,
		     		spaceBetween: 30,
	   			});
		    })
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		  	
		  	
	     
	}
}
</script>

<style scoped>
@import '../assets/css/swiper.css';

.gk_list{
	width: 100%;
	height: auto;
	font-size: 14px;
}
.section{
	background: #FFFFFF;
}
.space {
    margin-top: .1rem;
}
.space img{
	width: 100%;
}
.recommends{
	width: 100%;
}
.recommends a{
	padding: 0 12px 0 25px;
	height: 160px;
	display: flex;
    border-top: 0.5px solid rgba(220,220,220,0.2);
    align-items: center;
}
.recommends a .img_box img{
	width: 120px;
	height: 120px;
}
.recommends a .desc{
	text-align: left;
	margin-left: 25px;
}    
.recommends a .desc h5,.recommends a .desc p{
	white-space: nowrap;
	overflow: hidden;
    text-overflow: ellipsis;
}   
.recommends a .desc h5{
	font-size: 17px;
	margin-bottom: 5px;
	color: #3a3a3a;
    font-weight: 400;
}
.recommends a .desc p {
    color: #878787;
    margin-bottom: .37rem;
}
.recommends a .desc .price{
	text-align: left;
	position: relative;
}
.section .money{
	display: block;
    color: #ff8000;
    width: 100%;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.recommends a .desc .price .money em{font-size: 12px;}
.section .icon-searchplus{
    position: absolute;
    top: -.09rem;
    right: 0;
    width: 74px;
    height: 4px;
    font-size: 25px;
    color: #ff8000;
    text-align: right;
    line-height: 35px;
}
.has-recommend{
	width: 100%;
	height: 170px;
}
.has-recommend .swiper-container .swiper-wrapper{
	display: flex;
}
.has-recommend .swiper-container .swiper-wrapper .swiper-slide{
    display: block;
    text-align: center;
    width: 114px !important;
    margin-right: 15px !important;
    box-sizing: border-box;
    padding: 10px 10px 15px;
}
.has-recommend .swiper-container .swiper-wrapper .swiper-slide .img-box{
    margin: auto;
    position: relative;
    min-width: 80px;
    min-height: 80px;
    max-width: 100px;
    height: 100px;
}
.has-recommend .swiper-wrapper .swiper-slide .img-box img{
	width: 100%;
}
.has-recommend .swiper-wrapper .swiper-slide .tag-box {
    position: absolute;
    left: 0;
    right: 0;
    top: 100px;
    text-align: center;
}
.section .tag {
    left: 0;
    padding: 3px 6px;
    color: #fff;
    font-size: 9px;
    background-color: #ff8a65;
    border-radius: 4px;
}
.has-recommend .swiper-wrapper .swiper-slide p{
    font-size: 13px;
    color: #3a3a3a;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 12px;
}
.has-recommend .swiper-wrapper .swiper-slide .price{
	position: relative;
}
.has-recommend .swiper-wrapper .price .money{
    text-align: center;
    font-size: 12px;
}
.has-recommend .swiper-wrapper .price .icon-searchplus{
	font-size: 19px;
}
</style>