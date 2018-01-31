<template>
	<section class="container category">
		<div id="fruitday-category">
			<!--左侧列表索引-->

			<ul class="tab">  
				<li ref="defau" v-for="item in category" :data-id="item.id"  @click="active()">

					<router-link to="">{{item.name}}</router-link>
				</li>
			</ul>
			<!--右侧列表-->
			<div class="items">
				<div class="item" v-for="item in arr">
					<h3>{{item.class2Name.name}}</h3>
					<a href="#">
						全部 
						<i class="iconfont icon-morehome"> > </i>
					</a>
					<dl v-for="list in item.class3Group">
						<router-link :to="{name : 'ListTwo',params:{id: item.class2Name.id}}">
							<dt><img :src="list.class_photo"/></dt>
							<dd>{{list.name}}</dd>
						</router-link>
					</dl>		
				</div>
			</div>
			
		</div>
		<!--顶部搜索-->
		<div class="category-search">
			<div>
				<i class="iconfont icon-sousuo"></i>奇异果
			</div>
		</div>
	</section>
</template>


<script >
import axios from 'axios'
export default{
	name : "list",
	data : function(){
		return {
			category : [],
			arr : [],
			id : 303,
			faid : null,
			flag : true,
		}
	},
	methods : {
		//
		active : function(evt){
			var e = evt || window.event;
			var target = e.target || e.srcElement;
			var lis = target.parentNode.parentNode.children;
			for(var i =0;i<lis.length;i++){
				lis[i].setAttribute("class","");
			}
			var als = target.parentNode;
			if(als.nodeName.toUpperCase() == "LI"){
				als.setAttribute("class","active");
				this.id = als.getAttribute("data-id");
				this.axio();
			}
		},
		axio : function(id){
			axios.get(`/v3/product/category_list?store_id_list=3&class_id=${this.id}`)
		  .then((response)=>{
		  	this.category = response.data.data.classOneGroup;
		  	this.arr = response.data.data.childrenList;
		  	if(this.flag==true){
		  		this.$nextTick(function(){
					this.$refs.defau[0].setAttribute("class","active");
					console.log(this.$refs.defau[0]);
				});
				this.flag = false;
		  	}
			
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		},
	},
	mounted : function(){
		this.axio();
		
		console.log(this.$refs);
	}
}
</script>

<style scoped>

#fruitday-category{
	width: 100%;
}
.category ul {
    position: fixed;
    left: 0;
    top: 47px;
    width: 80px;
    background: #f5f5f5;
    text-align: center;
    margin: 0;
    overflow-y: auto;
    height: calc(100% - 88px);
}
.category ul li{
    height: 42px;
    width: 80px;
    line-height: 46px;
    font-size: 15px;
    color: #3a3a3a;
    border: 2px solid #f5f5f5;
    border-right: 0;
}
.category ul li a{
	display: block;
	width: 100%;
	height: 100%;
	color: #3a3a3a;
}
.category ul li.active{
    border-left: 2px solid #65a032;
    color: #65a032;
    background: #fff;
}
.category .category-search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 28px;
    text-align: center;
    background: #f8f8f8;
    border-bottom: 1px solid #d8d8d8;
}
.category .category-search div{
    margin: 9px;
    background: #eee;
    border-radius: 4px;
    color: #878787;
    font-size: 12px;
}
.category .category-search i{
    font-size: 14px;
    margin-right: 6px;
}
.items{
	margin-top: 47px;
	display: block;
}
.items .item{
    margin-left: 80px;
    padding: 10px 10px 18px 10px;
    position: relative;
    overflow:hidden;
}
.item h3{
    font-weight: normal;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: 0;
    font-size: 14px;
}
.category .item>a{
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #878787;
    padding-right: 8px;
}
.category .item>a i{
    display: inline-block;
    width: 10px;
    font-size: 12px;
}
.category .item dl{
    width: 33%;
    float: left;
    text-align: center;
    padding-bottom: 20px;
}
.category .item dt{
	padding:0 10px;
}
.category .item dt img{
	width: 100%;
}
.category .item dd{
	font-size: 13px;
    color: #3a3a3a;
}
</style>