<template>
	<div class="details">
		<!--头部-->
		<nav>
			<div class="back">
				<a href="javascript:history.go(-1)" class="iconfont icon-morehome">></a>
			</div>
			<div class="tab">
				<ul class="tab-menu">
					<li class="active">商品</li>
					<li>详情</li>
					<li>评价</li>
				</ul>
			</div>
			<div class="more">
				<i @click="Eject()" class="iconfont icon-gengduo-tianchong"></i>
				<div v-if="flag" class="more-bubble">
					<router-link to="/">
						<i class="iconfont"></i>首页</router-link> 
					<a href="javascript:;" class="search">
						<i class="iconfont"></i>搜索</a> 
					<router-link to="/Classification"><i class="iconfont"></i>分类</router-link>
				</div>
			</div>
		</nav>
		<!--Section-->
		<div class="container good-detail">
			<div id="good-detail" class="tab-box good" v-if="obj">
				<!--轮播-->
				<mt-swipe :auto="4000">
			      <mt-swipe-item v-for="item in list" :key="item.id">
			        <img :src="item.image" />
			      </mt-swipe-item>
			      <span class="tag"></span>
			  	</mt-swipe>
			  	
			  	<!--详情-->
			  	<div class="info-item"> 
					<h3>{{obj.productInfo.product_name}}</h3> 
					<h4>{{obj.productInfo.product_desc}}</h4>   
					<div class="price">
						<small>￥</small>
						<em>{{ 		    parseInt(obj.productInfo.price - 10)}}</em>
						<small>.9</small> 
						<del>￥{{obj.productInfo.price}}</del>   
					</div> 
					<div class="size">  
						<span class="cur" data-pid="29034"> 
							<strong>{{obj.productItem.volume}}</strong> 
							<small>  明日达  </small> 
						</span>  
						<em>{{obj.sendTimeMsg}}</em> 
					</div> 
					<h5>{{obj.productInfo.op_weight}}</h5> 
				</div>
				<!--配送-->
				<div class="address-item"> 
					<span class="title">送至</span> 
					<h4><i class="iconfont icon-dingwei"></i>沙河镇 
					<!-- <span class="tag">有货</span> -->
					</h4> 
				</div>
				<div class="tips-item"> 
					<span><i class="iconfont icon-xuanzhong"></i>48小时退换货</span> 
					<span><i class="iconfont icon-xuanzhong"></i>全程冷链</span> 
					<span><i class="iconfont icon-xuanzhong"></i>果园标准</span> 
					<span><i class="iconfont icon-xuanzhong"></i>全球直采</span> 
				</div>
				<div class="comment-item" id="first-comment">
					<div class="comment-total">
						<span class="pull-right">
							<small class="orange">{{parseInt(num.good/num.total*100) + "%"}}</small>好评
							<i class="iconfont icon-morehome">></i>
						</span>评价({{num.total}})
					</div>
					<div class="comment-con-chief" v-for="item in evte"> 
						<div class="comment-info"> 
							<img class="avatar" :src="item.userface"> 
							<span class="user">{{item.user_name}}</span> 
							<i class="iconfont icon-v_mini4"></i> 
							<span class="date">{{item.time.substring(0,11)}}</span> 
						</div> 
						<div class="comment-level">
							<span>口感 {{item.star_eat}}</span>
							<span>颜值 {{item.star_show}}</span>
						</div> 
						<div class="comment-msg">{{item.content}}
						</div>  
					</div>
					<div class="text-center">
						<span class="comment-view">查看全部评论</span>
					</div>
				</div>
			</div>
		</div>
		<footer class="main-nav" id="cart-nav">
			<a class="cart-btn" href="./cart.html">
				<i class="iconfont icon-gouwuche"></i>
				<span id="cart-num"></span>
			</a> 
			<a class="add-cart" href="javascript:;">
				<span id="deliver">明日达</span>
				<em>加入购物车</em>
			</a>
		</footer>
	</div>
</template>

<script>
import axios from 'axios';

export default{
	name : "mintui",
	data : function(){
		return {
			list: [],
			obj : null,
			num : [],
			evte : [],
			flag : false,
		}
	},
	mounted : function(){
		var id = this.$route.params.fid;
		
		axios.get(`/v3/product/detail?store_id_list=3&product_id=${id}&store_id=3&delivery_code=3`)
		  .then((response)=>{
//		    console.log(response);
//		    console.log(response.data.data);
		    this.list = response.data.data.templatePhoto;
		    this.obj = response.data.data;
//		    console.log(response.data.data.sale.promotion_tag);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		  this.evaluate(id)
	},
	methods : {
		evaluate : function(id){
			axios.get(`/v3/comment/rate_and_comment?product_id=${id}`)
		  .then((response)=>{
		    console.log(response);
		    this.num = response.data.data.num;
		    this.evte = response.data.data.data;
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		},
		Eject : function(){
			this.flag = !this.flag;
		}
	}
}
</script>

<style scoped>

@import '../assets/font/iconfont.css';
.mint-swipe{
	height: 375px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 0;
    text-align: center;
}
.mint-swipe-items-wrap img{
	width: 100%;
	height: 100%;
}
.mint-swipe-items-wrap>.tag {
    top: 0;
    right: auto;
    bottom: auto;
    left: 10px;
    position: absolute;
    height: 25px;
    padding: 0 10px;
    background: #ff4848;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    z-index: 10;
}
.active{
	display: block;
}
.details{
	width: 375px;
	height: 100%;
	z-index: 10;
	background: #fff;
	overflow-y: auto;
}
nav {
    background: #fff;
    color: #75a739;
    height: 45px;
    line-height: 43px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    z-index: 10;
    border-bottom: 1px solid #d8d8d8;
}
nav .back{ 
	width: 88px;
}
nav .back, nav .next{
    color: #76a741;
    display: inline-block;
}
nav .back a {
    width: 40px;
    color: #75a739;
    display: inline-block;
    font-size: 22px;
}
nav .back .icon-morehome {
    text-align: center;
    padding-left: 7px;
    transform: rotate(180deg);
}
nav .tab{
	flex: 1;
}
nav .tab .tab-menu{
    font-size: 16px;
    text-align: center;
    color: #3a3a3a;
}
nav .tab .tab-menu li.active {
    border-bottom: 2px solid #65a032;
    color: #65a032;
}
nav .tab .tab-menu li {
    margin: 0 6px;
    height: 43px;
    line-height: 45px;
    display: inline-block;
}
nav .more {
    position: relative;
}
nav .more, nav .next{
    width: 80px;
    margin-right: 8px;
    text-align: right;
}
nav .more .iconfont, nav .next .iconfont{
    font-size: 20px;
}
nav .more>.more-bubble {
    top: 45px;
    right: 0;
    bottom: auto;
    left: auto;
    position: absolute;
    width: 115px;
    background: rgba(0,0,0,.75);
    border-radius: 6px 0 6px 6px;
    text-align: center;
    animation-duration: .3s;
    animation-timing-function: linear;
    z-index: 91;
}
nav .more>.more-bubble:before {
    content: ' ';
    top: -14px;
    right: 0;
    bottom: auto;
    left: auto;
    position: absolute;
    border: 7px solid;
    border-color: transparent rgba(0,0,0,.75) rgba(0,0,0,.75) transparent;
}
nav .more>.more-bubble>a {
    display: block;
    height: 45px;
    border-bottom: 1px solid #5d5d5d;
    font-size: 15px;
    line-height: 45px;
    color: #fff;
}
nav .more>.more-bubble>a:last-child{
    border-bottom: none;
}
.container {
    margin-top: 46px;
    overflow-y: auto;
}
.container .good .info-item {
    padding: 10px;
    margin-bottom: 10px;
    background: #fff;
    text-align: center;
}
.good-detail .good .info-item>h3{
    font-size: 18px;
    color: #3a3a3a;
}
.good-detail .good .info-item>h4{
    font-size: 14px;
    color: #878787;
}
.good-detail .good .info-item .price {
    margin-bottom: 10px;
}
.good-detail .good .info-item .price small {
    font-size: 12px;
}
.good-detail .good .info-item .price em {
    font-size: 30px;
}
.good-detail .good .info-item .price em, .good-detail .good .info-item .price small{
    color: #ff8000;
}
.good-detail .good .info-item .price del {
    margin: 0 0 0 5px;
    color: #878787;
    font-size: 12px;
}
.good-detail .good .info-item>h3, .good-detail .good .info-item>h4, .good-detail .good .info-item>h5{
    margin: 0 0 5px;
    font-weight: 400;
    line-height: 1;
}
.good-detail .good .info-item .size>.cur{
    border-color: #ff8000;
    background: #ff8000;
    color: #fff;
}

.good-detail .good .info-item .size>span {
    display: inline-block;
    min-width: 50px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 4px 10px;
    margin: 0 5px;
    font-size: 14px;
    height: 30px;
    line-height: 1.4;
    color: #3a3a3a;
    text-align: center;
    margin-bottom: 10px;
}
.good-detail .good .info-item .size strong {
    font-weight: 300;
    font-size: 14px;
}
.good-detail .good .info-item .size small {
    display: block;
    font-size: 8px;
}
.good-detail .good .info-item .size em {
    font-size: 10px;
    display: block;
    color: #ff8000;
}
.good-detail .good .info-item>h5 {
    margin-bottom: 0;
    font-size: 10px;
    color: #878787;
}
.good-detail .good .address-item{
    position: relative;
    padding: 10px 10px 10px 45px;
    margin-bottom: 10px;
    background: #fff;
}
.good-detail .good .address-item>.title {
    top: 15px;
    right: auto;
    bottom: auto;
    left: 10px;
    position: absolute;
    font-size: 12px;
    color: #878787;
}
.good-detail .good .address-item>h4, .good-detail .good .address-item>h5 {
    margin: 0;
    height: 25px;
    font-size: 13px;
    line-height: 25px;
    font-weight: 400;
    color: #3a3a3a;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.good-detail .good .address-item>h4 .tag, .good-detail .good .address-item>h4>.iconfont, .good-detail .good .address-item>h5 .tag, .good-detail .good .address-item>h5>.iconfont {
    color: #ff8000;
}
.good-detail .good .tips-item {
    position: relative;
    padding: 10px 10px;
    margin-bottom: 10px;
    background: #fff;
}
.good-detail .good .tips-item>span {
    float: left;
    padding: 2px 5px 2px 0;
    font-size: 10px;
    color: #bfbfbf;
}
.good-detail .good .tips-item>span>.iconfont.icon-xuanzhong{
    border-color: #ff8000;
    color: #ff8000;
}
.good-detail .good .tips-item>span>.iconfont {
    width: 9px;
    height: 9px;
    margin-right: 0;
    border: 1px solid #bfbfbf;
    border-radius: 100%;
    font-size: 8px;
}
.good-detail .good .comment-item {
    padding: 10px 0;
    margin-bottom: 55px;
    background: #fff;
}
.good-detail .good .comment-item>.comment-total{
    margin-left: 10px;
    padding-right: 10px;
    height: 25px;
    border-bottom: 1px solid #d8d8d8;
    font-size: 12px;
    color: #878787;
}
.pull-right {
    float: right!important;
}
.good-detail .good .comment-item>.comment-total .orange {
    color: #ff8000;
}
.good-detail .good .comment-item>.comment-total .iconfont {
    font-size: 12px;
    color: #bfbfbf;
    margin-left: 5px;
}
.good-detail .comment .comment-tab-box>ul>li, .good-detail .comment-con, .good-detail .good .comment-item>.comment-con-chief {
    margin-left: 10px;
    padding: 15px 10px 15px 0;
    color: #3a3a3a;
}
 .good-detail .comment-con>.comment-info>.iconfont.icon-v_mini4, .good-detail .good .comment-item>.comment-con-chief>.comment-info>.iconfont.icon-v_mini4 {
    background: #cea1dd;
}
.good-detail .comment .comment-tab-box>ul>li>.comment-info, .good-detail .comment-con>.comment-info, .good-detail .good .comment-item>.comment-con-chief>.comment-info {
    height: 36px;
    line-height: 36px;
}
.good-detail .comment .comment-tab-box>ul>li>.comment-info>.avatar, .good-detail .comment-con>.comment-info>.avatar, .good-detail .good .comment-item>.comment-con-chief>.comment-info>.avatar {
    float: left;
    width: 36px;
    height: 36px;
    margin-right: 15px;
    border-radius: 100%;
}
.good-detail .comment .comment-tab-box>ul>li>.comment-info>.date, .good-detail .comment-con>.comment-info>.date, .good-detail .good .comment-item>.comment-con-chief>.comment-info>.date {
    float: right;
    font-size: 13px;
    color: #878787;
}
.good-detail .comment .comment-tab-box>ul>li>.comment-info>.user, .good-detail .comment-con>.comment-info>.user, .good-detail .good .comment-item>.comment-con-chief>.comment-info>.user {
    float: left;
    margin-right: 5px;
    font-size: 14px;
}
.good-detail .comment .comment-tab-box>ul>li>.comment-level, .good-detail .comment-con>.comment-level, .good-detail .good .comment-item>.comment-con-chief>.comment-level {
    height: 30px;
    font-size: 13px;
    line-height: 30px;
    color: #878787;
}
img {
    border: 0;
    width: 100%;
    display: block;
}
.good-detail .comment .comment-tab-box>ul>li>.comment-level>span, .good-detail .comment-con>.comment-level>span, .good-detail .good .comment-item>.comment-con-chief>.comment-level>span {
    display: inline-block;
    margin-right: 30px;
}
.good-detail .comment .comment-tab-box>ul>li>.comment-msg, .good-detail .comment-con>.comment-msg, .good-detail .good .comment-item>.comment-con-chief>.comment-msg {
    font-size: 15px;
    line-height: 20px;
}

.good-detail~.main-nav {
    height: 45px;
    line-height: 45px;
    display: block;
    box-shadow: 0 -2px 2px 0 rgba(0,0,0,0.15);
}
.main-nav {
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    position: fixed;
    box-shadow: 0 -2px 2px 0 rgba(0,0,0,.15);
    background: #fff;
    height: 42px;
    font-size: 10px;
}
.good-detail~.main-nav .cart-btn {
    top: auto;
    right: auto;
    bottom: 5px;
    left: 5px;
    position: absolute;
    background: #65a032;
    text-align: center;
    color: #fff;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 100%;
}
.text-center {
    text-align: center;
}
.good-detail .good .comment-item .comment-view {
    display: inline-block;
    height: 18px;
    margin-top: 10px;
    padding: 0 15px;
    border: 1px solid #878787;
    border-radius: 76px;
    font-size: 12px;
    line-height: 20px;
    color: #878787;
}

.main-nav a {
    position: relative;
    width: 100%;
    color: #898989;
    display: block;
    text-align: center;
    box-flex: 1;
}
.main-nav i {
    display: block;
}
.good-detail~.main-nav .cart-btn i {
    font-size: 29px;
}
.good-detail~.main-nav .cart-btn span {
    background: #ff8000;
    line-height: 14px;
    border-radius: 15px;
    min-width: 14px;
    padding: 0 2px;
    top: 3px;
    right: auto;
    bottom: auto;
    left: 35px;
    position: absolute;
}
.good-detail~.main-nav .add-cart {
    float: right;
    width: 180px;
    background: #ff8000;
    font-size: 18px;
    line-height: 46px;
    color: #fff;
}
.good-detail~.main-nav .add-cart span {
    display: inline-block;
    font-size: 14px;
    color: rgba(255,255,255,0.8);
    line-height: 46px;
    padding-right: 10px;
}
.good-detail .good .comment-item>.comment-con-chief>.comment-img>img{
    float: left;
    width: 56px;
    height: 56px;
    margin: 8px 8px 0 0;
}
</style>