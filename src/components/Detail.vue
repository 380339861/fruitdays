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
				<i class="iconfont icon-gengduo"></i>
				<div class="more-bubble">
					<a href="/">
						<i class="iconfont icon-homedefault"></i>首页</a> 
					<a href="javascript:;" class="search">
						<i class="iconfont icon-searchpage"></i>搜索</a> 
					<a href="./category.html"><i class="iconfont icon-kinddefault"></i>分类</a>
				</div>
			</div>
		</nav>
		<!--Section-->
		<div class="container good-detail">
			<div id="good-detail" class="tab-box good" v-if="obj">
				<!--轮播-->
				<mt-swipe :auto="4000">
			      <mt-swipe-item v-for="item in list">
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
		}
	}
}
</script>

<style scoped>
@import 'css/Detail.css';
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
.details{
	width: 375px;
	height: 100%;
	z-index: 10;
	background: #fff;
	overflow-y: auto;
}

</style>