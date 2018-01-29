<template>
	<section class="container category">
		<div id="fruitday-category">
			<!--左侧列表索引-->
			<ul class="tab" @click="active()">  
				<li class="active" data-id="303">果园优选</li>  
				<li class="" data-id="356">新年礼盒</li>  
				<li class="" data-id="18">新鲜水果</li>  
				<li class="" data-id="11">水产海鲜</li>  
				<li class="" data-id="12">肉禽蛋类</li>  
				<li class="" data-id="14">乳品速食</li>  
				<li class="" data-id="17">时令鲜蔬</li>  
				<li class="" data-id="16">粮油干货</li>  
				<li class="" data-id="126">礼盒券卡</li>  
				<li class="" data-id="135">果园周边</li>  
			</ul>
			<!--右侧列表-->
			<div class="items">
				<div class="item">
					<h3>果园优选</h3>
					<a href="./category-list.html?class2_id=310">
						全部 
						<i class="iconfont icon-morehome"> > </i>
					</a>
					<dl>
						<router-link to="/">
							<dt></dt>
							<dd></dd>
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
export default{
	name : "list",
	data : function(){
		return {
			
		}
	},
	methods : {
		//
		active : function(evt){
			var e = evt || window.event;
			var target = e.target || e.srcElement;
			var lis = target.parentNode.children;
			for(var i =0;i<lis.length;i++){
				lis[i].setAttribute("class","");
			}
//			console.log();
			if(target.nodeName.toUpperCase() == "LI"){
//				console.log(target);
				target.setAttribute("class","active");
			}
		}
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
.category ul li {
    height: 42px;
    width: 80px;
    line-height: 46px;
    font-size: 15px;
    color: #3a3a3a;
    border: 2px solid #f5f5f5;
    border-right: 0;
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
</style>