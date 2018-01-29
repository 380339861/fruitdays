<template>
	<div class="">
<!-----------------------头部------------------>		
		  <div class="header">
		  		<div class="header-left">
		  			<div class="logo">
		  				<img src="https://huodongjd1.fruitday.com/sale/appxx/ci_20171025_1.png"/>
		  			</div>
		  			<div class="map">
		  				<a href="#">沙河镇<i class="sanjiao"></i></a>
		  			</div>
		  		</div>
		  		<div class="header-right">
		  			<i class="iconfont icicon-sousuo">&#xe650;</i>
		  		</div>
		  </div>
<!-----------------------轮播------------------>
			<Lunbo class="lunbo"></Lunbo>
<!-----------------------中间广告------------------>			
			<div class="section">
				<div class="section-left">
					<img src="https://imgqn9.fruitday.com/images/2017-11-07/caa96ee4453a25ed3e58f4a8f73e736d.jpg"/>
				</div>
				<div class="section-right">
					<img src="https://imgqn9.fruitday.com/images/2017-11-07/caa96ee4453a25ed3e58f4a8f73e736d.jpg"/>
				</div>
			</div>
			<div class="section-bottom">
				<img src="https://imgjd7.fruitday.com/images/2018-01-22/2c15f7f76f8b2bb8249947051e1772b3.gif"/>
			</div>
<!-----------------------bottom------------------>					
			<Selling></Selling>
			<NewProduct></NewProduct>
			<HighQuality></HighQuality>
			<Sentiment></Sentiment>
	</div>
</template>

<script>
import Lunbo from './Lunbo'
import Sentiment from './Sentiment'
import Selling from './Selling'
import NewProduct from './NewProduct'
import HighQuality from './HighQuality'
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  components:{
  	Lunbo,
  	Sentiment,
  	Selling,
  	NewProduct,
  	HighQuality
  }
}
</script>

<style scoped>
	*{
	margin: 0;
	padding: 0;
}
.lunbo{
	margin-top: 40px;
}
.header{
	width: 100%;
	display: block;
	background: white;
	height: 39px;
	position: fixed;
	top: -1px;
	display: flex;
	flex-direction:row ;
	box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2);
	z-index: 999;
}
.header-left{
	width: 100%;
	height: 39px;
	line-height: 39px;
	margin-left: 20px;
}
.header-right{
	float: right;
}
.sanjiao{
	width:0;
    height:0;
    border-width:5px;
    border-style:solid dashed dashed dashed;
    border-color:#65a032 transparent transparent transparent;
    display: inline-block;
    margin:1px 0 -4px 4px;
}
.logo{
	width: 56px;
	height: 14px;
	float: left;
}
.logo img{
	width: 100%;
	height: 100%;
}
.map{
	float: left;
	margin-left: 5px;
	line-height: 39px;
}
.map a{
	color: #65a032;
}
.header-right{
	width:100px;
	height: 38px;
	line-height: 38px;
	margin-right: 20px;

}
.header-right i{
		float: right;
}


.section{
	width: 100%;
	height: 115px;
	background: white;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.section-left{
	width: 49%;
	height: 85px;
}
.section-right{
	width: 49%;
	height: 85px;
}
.section-left img{
	width: 100%;
	height: 100%;
}
.section-right img{
	width: 100%;
	height: 100%;
}

.section-bottom{
	width: 100%;
	height: 160px;
}
.section-bottom img{
	width: 100%;
	height: 100%;
}
</style>
