<template>
	<div id="login">
		<login-top></login-top>
		<div id="box">
			<p><span class="yaqin yq_gerenzhongxin2"></span><input type="text" placeholder="请输入用户名" v-model="username" /></p>
			<p><span class="yaqin yq_mima"></span><input type="text" placeholder="请输入密码" v-model="password" /></p>
		</div>
		<button id="loginBtn" @click="handleClick">登录</button>
	</div>
</template>

<script>
	import loginTop from '@/components/common/loginTop'
	export default{
		name:'',
		data(){
			return{
				username:'',
				password:'',
			}
		},
		methods: {
			handleClick(){
				console.log('登录')
				var params = new URLSearchParams();
				params.append('username',this.username);
        	params.append('password',this.password);
        	console.log(params)
        	
				this.axios.post('/api/login', params)
				.then(response=>{
					console.log(response)
					if(response.data.code == 0){
						this.$router.push({
			        path:'/'
						});
						localStorage.setItem("userInfo",JSON.stringify(response.data.data))
					}else{
						alert(response.data.data)
						localStorage.removeItem("userInfo")			
					}
				}).catch(error=>{
          console.log(error)
          alert("登录失败，用户名或密码错误！")
        })

			}
   	},
		components:{
			loginTop
		},
	}
</script>

<style lang="scss" type="text/css" scoped="scoped">
$color1:#EDE6DC;
$color2:#D9CDB4;
	#login{background: $color1;height: 100%;position: relative;}
	#box{width: 100%;height: 100px;padding: 0 20px;box-sizing: border-box;background: #fff;margin-top: 100px;}
	p{display: flex;align-items: center;height: 50px;}
	p:first-child{border-bottom: 1px solid #f3f3f3}
	input{line-height: 35px;flex: 1;padding: 0 10px;box-sizing: border-box;}
	#loginBtn{width: 80%;line-height: 45px;text-align: center;background: #D9CDB4;color: #fff;border-radius: 4px;font-size: 16px;margin-top: 30px;}
</style>