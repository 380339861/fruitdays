<template>
	<div id="div">
    	<div class="mc_userheader">
    		
    		<img src="https://wap.fruitday.com/content/images/me/old_v0.png" />
    		<p>{{$store.state.username}}</p>
    		<h6>签到送好礼</h6>
    		<i class="iconfont icon-erweima"></i>
    		<span>会员码</span>
	    	<ul>
	    		<li>积分<p>0</p></li>
	    		<li>余额<p>0</p></li>
	    		<li>优惠券<p>3</p></li>
	    		<li>礼品<p>0</p></li>
	    	</ul>
    	</div>
    	
    	<div class="mc_usercont">
    	
    			<div class="mc_one">
    				<i class="iconfont icon-dingdan"></i>
    				<p>我的订单</p>
    				<span>全部订单<i class="iconfont icon-jiantou1"></i></span>
    			</div>
    			
    			<ul class="mc_two">
    				<li><i class="iconfont icon-zhifu"></i><p>待付款</p></li>
    				<li><i class="iconfont icon-fahuo"></i><p>待发货</p></li>
    				<li><i class="iconfont icon-fahuo1"></i><p>待收货</p></li>
    				<li><i class="iconfont icon-pingjia"></i><p>待评价</p></li>
    				<li><i class="iconfont icon-tuihuanhuo"></i><p>退换货</p></li>
    			</ul>
    			
    			<div class="mc_one">
    				<i class="iconfont icon-dingdan"></i>
    				<p>会员中心</p>
    				<span>享等级特权<i class="iconfont icon-jiantou1"></i></span>
    			</div>
    			
    			<div class="mc_one">
    				<i class="iconfont icon-dingdan"></i>
    				<p>企业购</p>
    			</div>
    		
    			<div class="mc_one">
    				<i class="iconfont icon-dingdan"></i>
    				<p>在线客服</p>
    			</div>
    			<div class="mc_one">
    				<i class="iconfont icon-dingdan"></i>
    				<p>帮助</p>
    			</div>
    			<div class="mc_one">
    				<i class="iconfont icon-dingdan"></i>
    				<p>个人资料</p>
    			</div>
    			<div class="tuichu mc_one" @click="downBtn">
    				<i class="iconfont icon-dingdan"></i>
    				<p>退出登录</p>
    			</div>
    		</div>	
    		
    	</div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
    }
  },
  methods:{
  	downBtn:function(){
  		this.$store.state.username =""
  		this.$router.push({path:'/Login'})
  		 location.reload(true) 
  	}
  },
  mounted(){
  	
	
  }
}
	
	
</script>

<style scoped>
@import url("//at.alicdn.com/t/font_491734_5q9bhssv2t9.css");
.mc_userheader{width: 100%;height: 190px;background: url(https://wap.fruitday.com/content/images/me/login-bg.png) no-repeat fixed 0 0;background-size: 100% auto;color: #000000}
.mc_userheader img{height: 18px;padding-left: 50px;margin-top: 70px;}
.mc_userheader>p{font-size: 18px;margin-left: 80px;margin-top: -48px;}
.mc_userheader h6{font-size: 10px; height: 16px;width: 70px;background-color:#ff8000 ;line-height: 18px;border-radius: 10px;color: #fff;text-align: center;margin-left: 80px;margin-top: 10px;}
.mc_userheader>i{font-size: 40px;position: absolute;left: 265px;top: 40px;color:#878787 ;}
.mc_userheader>span{font-size: 10px;position: absolute;left: 269px;top: 82px;color:#878787 ;}
.mc_userheader ul{display: flex;color: #000000;background: url(https://wap.fruitday.com/content/images/me/login-bg.png) no-repeat fixed 0 0;background-size: 100% auto;line-height: 24px;
margin-top: 40px;font-size: 13px;}
.mc_userheader ul li{flex: 1;text-align: center;color:#3a3a3a}
.mc_userheader ul li p{color:#ff8000 ;font-weight: bolder;font-size: 14px;}

.mc_usercont{background: url(https://wap.fruitday.com/content/images/me/login-bg.png) no-repeat fixed 0 0;}
.mc_usercont .mc_one{height: 40px;line-height: 40px;font-size: 14px;color: #3a3a3a;border-bottom: 1px solid #eee;background-color: rgba(255,255,255,0.9);}
.mc_usercont .mc_one i{padding:0 10px;font-size: 18px;}
.mc_usercont .mc_one p{display: inline-block;}
.mc_usercont .mc_one span{color: #878787;font-size: 12px;float: right;}
.mc_usercont .mc_one span i{font-size: 14px;}

.mc_usercont .mc_two{display: flex;width: 100%;background-color: rgba(255,255,255,0.9);height: 80px;color: #3a3a3a;margin-bottom: 10px;}
.mc_usercont .mc_two li{display: flex;flex: 1;flex-direction: column;text-align: center;line-height: 30px;padding-top: 15px;}
.mc_usercont .mc_two li:last-child i{font-size: 20px;}

</style>