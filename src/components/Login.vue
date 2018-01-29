<template>
	<div id="reg">
		
			<Header>手机号快捷注册</Header>
			
			<div className="reg">
				<List>
				
		         	<i className="iconfont icon-shouji1"></i>
		          <i className="iconfont icon-yuechi"></i>
		          
		        </List>	
		        <p class="tips">首次用手机号登录将自动为您注册，并有豪礼相送。</p>
		        <button onClick={()=>this.login()}>登陆</button>
		        <a href="javascript:;" class="mc_a1">账号密码登录</a>
		        <a href="javascript:;" class="mc_a2">未收到验证码?</a>
			</div>
			
		</div>
	
	
</template>

<script>
	export default{
	name : "login",
	data : function(){
		return {
			
		}
	},
}
	
	
	
</script>



    

<style scoped>
#reg .reg{margin-top: 120px;}

#reg .reg span{display: inline-block; width: 70px;height: 25px; margin-left: 10px; border-radius: 2px;background: #f93;line-height: 25px;font-size: 12px; color: #fff;text-align: center;}
#reg .reg i{color: #000;font-size: 16px;margin-left: 20px;width: 30px;}
#reg .reg button{width: 80%;height: 40px; margin: 80px 30px 10px;border-radius: 10px;background: #f93;line-height: 40px;font-size: 16px; color: #fff;text-align: center;border: none;}
#reg .reg .tips{height:20px;line-height: 20px;font-size: 10px;color: #878787;margin-left: 40px;margin-top: 20px;}
#reg .reg a{color: #f93;font-size: 12px;margin: 10px 42px;}



#reg .am-list-item am-input-item am-list-item-middle{border:none}

</style>