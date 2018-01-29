<template>
	<div id="reg">
		
		<div class="tou">
			<i class="iconfont icon-jiantou"></i>
			<p>手机号快捷登录</p>
		</div>
		
		<div class="reg">
			<li>
				<i class="iconfont icon-shouji1"></i>
				<input type="number" placeholder="手机号" />
				<button>获取验证码</button>
			</li>
			<li>
				<i class="iconfont icon-yuechi"></i>
				<input type="number" placeholder="短信验证码" />
			</li>
			<p class="p1">首次用手机号登陆将自动为您注册，并有豪礼相送。</p>
			<input type="button" value="登陆" />
			<p class="p2">账户密码登录</p>
			<p class="p3">未收到验证码？</p>
		</div>
		
	</div>
</template>

<script>
</script>

<style scoped>
@import url("//at.alicdn.com/t/font_491734_5q9bhssv2t9.css");
	
#reg{width: 100%;height: 190px;background: url(https://wap.fruitday.com/content/images/me/login-bg.png) no-repeat fixed 0 0;background-size: 100% auto;color: #000000;}
li{list-style: none;}

.tou{height: 50px;color: #75a739;font-size: 20px;line-height: 50px;}
.tou i{margin-left: 20px;font-weight: bolder;}
.tou p{display: inline-block;margin-left: 70px}

.reg{margin-top: 140px;padding: 20px;color: #878787;}
.reg li{border-bottom:1px solid #d8d8d8 ;height: 50px;line-height: 50px;}
.reg li i{font-size: 20px;margin: 0 10px;}
.reg li input{border:none;background: rgba(0,0,0,0);width: 180px;height: 30px;outline: none;color: #878787;}
.reg li button{display: inline-block;width: 80px;height: 30px;margin-left: 10px;border-radius: 2px;background: #f93;line-height: 25px;font-size: 12px;color: #fff;text-align: center;border: none;}
.reg .p1{margin-top: 15px;font-size: 12px;}
.reg>input{display: block;width: 100%;
height: 40px;margin: 50px 0 15px;border-radius: 2px;background: #f93;line-height: 40px;font-size: 16px;color: #fff;text-align: center;border: none;}
.reg .p2,.reg .p3{display: inline-block;width: 49%;color: #f93;}
.reg .p3{text-align: right;}
</style>