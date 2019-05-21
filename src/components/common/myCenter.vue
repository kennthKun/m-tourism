<template>
	<div class="bigBox">
		<mt-header title="个人中心">
			<router-link to="" slot="left">
				<mt-button icon="back" @click='back'>返回</mt-button>
			</router-link>
		</mt-header>
		<div class="header">
			<div class='header-top'>
				<img class="ico" :src="avatar" />
				<div style='font-size:16px;margin:8px 0'>{{name||'未更新用户信息'}}</div>
				<div style='font-size:14px;font-weight:100;color:#fff' data-url="/vip/index/index">
					<span style='color:#ee9d00;margin-right:5px;'>VIP</span>会员卡
				</div>
			</div>
		</div>
		<div class='box-bottom'>
			<div class='bottom-list'>
				<router-link to="/myset" slot="left">
				<span style='background: linear-gradient(to right, #fd0000, #ee4436);-webkit-background-clip: text;color: transparent;' class='list-pic yaqin yq_shezhi'></span>
				<div>修改信息</div>
				</router-link>
			</div>
			<div class='bottom-list'>
				<router-link to="/myCollection" slot="left">
				<span style='background: linear-gradient(to right, #8a78f7, #a697ff);-webkit-background-clip: text;color: transparent;' class='list-pic yaqin yq_collection-b'>
				</span>
				<div>我的收藏</div>
				</router-link>
			</div>
		</div>
		<div class="danger" @click="outlogin">退出登录</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				right: 0,
				avatar: '',
				name: '',
				userInfo:'',
			}
		},
		created() {
			this.userInfo = JSON.parse(localStorage.getItem("userInfo")) 
			this.getdetail()
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			getdetail(){
				this.axios.get('/api//user/info?id='+this.userInfo.id)
				.then(response=>{
					console.log(response)
					if(response.status == 200){
//						console.log(this.userInfo)
//						this.form = response.data.data[0]
						this.name = response.data.data[0].name
						console.log(response.data.data[0])
						this.avatar =response.data.data[0].photo?"http://yaqin.ckun.vip/"+response.data.data[0].photo:'http://yaqin.ckun.vip/pic/avatar.gif'
						console.log(this.avatar)
					}
				}).catch(error=>{
          console.log(error)
        })
			},
			outlogin() {
				localStorage.removeItem("userInfo")
				this.$router.push({
					path: '/login'
				})
			}
		},
		components: {},
	}
</script>

<style lang="scss" type="text/css" scoped="scoped">
	$color1:#ece6d4;
	$color2:#D9CDB4;
	.bigBox{width: 100%;height: 100vh;background: #f3f3f3;}
	.mint-header {
		height: 2.2rem;
		line-height: 2.2rem;
		color: #FFF;
		background-color: #006f3e;
	}
	
	.header {
		width: 100%;
		height: auto;
		background: #006f3e;
		color: #fff;
	}
	
	.header-top {
		width: 100%;
		text-align: center;
		padding: 20px 0;
		position: relative;
	}
	
	.ico {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		border: 2px solid #f3f3f3;
	}
	
	.danger {
		background: #006F3E;
		width: 100px;
		height: 35px;
		line-height: 35px;
		color: #fff;
		margin: 0 auto;
		margin-top: 10px;
		border-radius: 3px;
	}
	
.box-bottom {
  margin-top: 13px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  font-size: 24px;
}

.bottom-list {
  width: 25%;
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid #f3f3f3;
  box-sizing: border-box;
  font-size: 12px;
  overflow: hidden;
  position: relative;
  color: #333;
}

.bottom-list:nth-child(4n) {
  border-right: 0;
}
.bottom-list .yaqin {
  font-size: 25px;
  position: relative;
}

.bottom-list div {
  margin-top: 10px;
}
</style>