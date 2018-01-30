<template>
	<div id="fruitday-category" class="category-list">
		<header>
			<nav> 
				<div class="back"> 
					<a href="javascript:history.go(-1)" class="iconfont icon-morehome">></a> 
				</div> 
				<div class="text">果园优选</div> 
				<a href="javascript:void(0);" class="next">
					<i class="iconfont icon-gengduo-tianchong"></i>
				</a> 
			</nav>
			<div class="section has-recommend">
				<div class="swiper-container swiper-container-horizontal swiper-container-wp8-horizontal">
				    <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
				        <div class="swiper-slide swiper-slide-prev" v-for="listSlider in swiper_slider">
					      	<span>{{listSlider.name}}</span>
				        </div>
				    </div>
				</div>
			</div>
			<div id="sort">
				<ul class="sort sort0" data-index="0">
					<li class="active">综合</li> 
					<li class="">销量</li> 
					<li class="">价格
						<em class="sort-price "></em>
					</li> 
				</ul>
			</div>
		</header>
        <div class="listtwo" style="min-height: 541px; width: 375px;">
        	<a class="item" href="#" v-for="item in shoplist"> 
        		<img class="good-img" :src="item.photo">  
    			<dl class=""> 
    				<dt>{{item.product_name}}</dt> 
    				<dd>{{item.product_desc}}</dd> 
    				<dd>{{item.volume}}</dd> 
    				<div> 
    					<small>￥</small>
    					<big>{{ parseInt(item.price) }}</big>
    					<small></small>  
    					<span style="background: #FF8000">明日达  </span> 
    				</div> 
    			</dl>  
    			<div class="count">
    				<span class="num" style="display: none;">1</span>
    				<span data-id="27150" class="plus">
    					<i class="iconfont icon-searchplus"></i>
    				</span>
    			</div>   
    			<em></em>  
        	</a>
        	
        </div>
	</div>
</template>

<script>
import SwiperP from 'swiper'
import axios from 'axios'
export default{
	name : "listtwo",
	data : function(){
		return {
			swiper_slider : [],
			shoplist : [],
		}
	},
	mounted : function(){
	    		axios.get('/v3/product/sub_category_list?store_id_list=3&class2_id=310&class3_id=0&sort_type=1&tms_region_type=1')
		  .then((response)=>{
		    console.log(response);
		    this.swiper_slider = response.data.data.brotherClass;
		    this.shoplist = response.data.data.productGroup
		    
		    console.log( this.swiper_slider);
		    this.$nextTick(function(){
		    	var swiper = new SwiperP('.swiper-container', {
		     	 	slidesPerView: 4,
		     		spaceBetween: 10,
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
@import '../assets/font/iconfont.css';
#fruitday-category{
	width: 100%;
	height: 100%;
	background: #FFFFFF;
	z-index: 10;
}
.category-list header {
    display: block;
    height: 110px;
    background: rgba(248,248,248,.95);
    box-shadow: inherit;
}
header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: 8px 0;
    background: rgba(101,160,50,0);
    z-index: 9;
    height: 30px;
    display: box;
    font-size: 14px;
    line-height: 30px;
}
.category-list nav {
    position: static;
    background: 0 0;
    border-bottom: 1px solid #d8d8d8;
}
nav {
    color: #75a739;
    height: 45px;
    line-height: 43px;
    top: 0;
    left: 0;
    width: 100%;
    display:flex;
    flex-direction: row;
}
nav .back {
    width: 88px;
}
nav .back, nav .next {
    color: #76a741;
    display: inline-block;
}
nav .back .icon-morehome {
    text-align: center;
    padding-left: 7px;
    transform: rotate(180deg);
}
nav .back a {
    width: 40px;
    color: #75a739;
    display: inline-block;
    font-size: 22px;
}
nav .text {
	flex: 1;
    text-align: center;
    font-size: 17px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
nav .more, nav .next {
    width: 80px;
    margin-right: 8px;
    text-align: right;
}
nav .more .iconfont, nav .next .iconfont {
    font-size: 20px;
}
.has-recommend{
	width: 100%;
	height: 36px;
}
.has-recommend .swiper-container .swiper-wrapper{
	display: flex;
}
.category-list .swiper-container {
    line-height: 36px;
    background: #fff;
    height: 36px;
}
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 0;
    text-align: center;
}
.category-list .swiper-container .swiper-slide {
    white-space: nowrap;
    text-overflow: ellipsis;
}
.category-list .swiper-container .active {
    color: #65a032;
}
.swiper-slide {
    flex-shrink: 0;
    height: 100%;
    position: relative;
    display: inline-block;
    width: 81.52px !important;
}

.category-list .sort {
    background: #f5f5f5;
    text-align: center;
    line-height: 36px;
    width: 100%;
    display:flex;
    flex-direction: row;
}
.category-list .sort li{
    flex: 1;
}
.category-list .sort-price {
    display: inline-block;
    position: relative;
    top: 2px;
    margin-left: 5px;
    height: 12px;
}
.category-list .sort li.active {
    color: #65a032;
}
.category-list .item {
    display: -webkit-box;
    padding: 10px;
    position: relative;
    border-bottom: 1px solid #d8d8d8;
    color: #3a3a3a;
}
.category-list .item .good-img {
    width: 105px;
    height: 105px;
    margin-right: 10px;
    border-radius: 4px;
}
.category-list .item dl {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-box-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
    position: relative;
    width: calc(100% - 115px);
    text-align: left;
    height: 105px;
    width: 1%;
}
.category-list .item dt {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.category-list .item dd {
    height: 20px;
    font-size: 12px;
    color: #878787;
    line-height: 1.8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.listtwo{
	margin-top: 122px;
	display: block;
	background: #FFFFFF;
}
.category-list .item dd:last-of-type {
    top: 60px;
    right: 0;
    bottom: auto;
    left: 0;
    position: absolute;
}
.category-list .item dl div {
    margin-top: 5px;
    color: #ff8000;
    line-height: 1;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
}
.category-list .item small {
    font-size: 10px;
}
.category-list .item big {
    font-size: 20px;
}
.category-list .item dl span {
    position: relative;
    top: -3px;
    border-radius: 2px;
    padding: 2px 2px;
    line-height: 1;
    margin-left: 8px;
    font-size: 8px;
    color: #fff;
}
.category-list .count {
    position: absolute;
    width: 74px;
    line-height: 22px;
    right: 10px;
    bottom: 0;
    height: 43px;
}
.category-list .count .num {
    display: block;
    width: 100%;
    padding: 10px 0;
    text-align: center;
}
.category-list .count .plus {
    right: -10px;
    text-align: right;
}
.category-list .count .minus, .category-list .count .plus {
    padding: 10px;
    position: absolute;
    top: 0;
}
.category-list .count i {
    text-align: center;
    display: inline-block;
    border: 1px solid #d8d8d8;
    color: #ff7e05;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    line-height: 20px;
    background: #fff;
}
</style>