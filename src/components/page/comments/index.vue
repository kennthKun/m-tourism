<template>
	<div id="introduce">
		<topTitle></topTitle>
		<div id="listBox">
			<div style="height: 10px;"></div>
			<div class="list" v-for="item in list">
				<div class="header">
					<div>
						<img class="photo" :src="'http://yaqin.ckun.vip/'+item.photo" />
					</div>
					<div class="head-right">
						<div class="uname">{{item.uname}}</div>
						<div>{{item.date}}</div>
					</div>
				</div>
				<div style="padding-top:10px ;">{{item.text}}</div>
			</div>
			<div style="height: 50px;"></div>
		</div>
		<div class="submitbtn_box"><input type="text" v-model="text" />
			<div class="submitbtn" @click="submit">提交</div>
		</div>
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	import topTitle from '@/components/common/topTitle'
	export default {
		name: 'detaile',
		data() {
			return {
				title: '',
				list: [],
				text: '',
				form: {},
			}
		},
		created() {
			this.userInfo = JSON.parse(localStorage.getItem("userInfo"))
			this.getlist()
			this.getdetail()
		},
		components: {
			topTitle
		},
		methods: {
			getdetail() {
				this.axios.get('/api//user/info?id=' + this.userInfo.id)
					.then(response => {
						console.log(response)
						if(response.status == 200) {
							this.userInfo = response.data.data[0]
						}
					}).catch(error => {
						console.log(error)
					})
			},
			getlist() {
				this.axios.get('/api/comments/api?sid=' + this.$route.query.id)
					.then(response => {
						this.list = response.data.data
						console.log(this.list)
					}).catch(error => {
						console.log(error)
					})
			},
			submit() {
					Indicator.open('加载中...');
				if(this.text == "") {
					alert("请输入评论！")
				} else {
					var params = new URLSearchParams()
					this.form.sid = this.$route.query.id
					this.form.uid = this.userInfo.id
					this.form.text = this.text
					this.form.photo = this.userInfo.photo
					this.form.uname = this.userInfo.name ? this.userInfo.name : ''
					this.form.date = Date.parse(new Date())
					console.log(this.form)
					params.append('data', JSON.stringify(this.form))
					this.axios.post("api/comments/add", params)
						.then(response => {
							console.log(response)
							Indicator.close();
							if(response.status == 200) {
								this.getlist()
							} else {
								alert("提交失败！")
							}
						}).catch(error => {
							console.log(error)
						});

				}

			}
		},
	}
</script>

<style scoped="scoped">
	#introduce {
		height: 100vh;
		background: #f3f3f3;
	}
	
	#listBox {
		text-align: left;
	}
	
	.list {
		padding: 10px;
		box-sizing: border-box;
		background: #fff;
		margin-bottom: 10px;
	}
	
	.photo {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: 2px solid #f3f3f3;
	}
	
	.header {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #f3f3f3;
		padding-bottom: 10px
	}
	
	.head-right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 40px;
		margin-left: 10px;
	}
	
	.uname {
		font-size: 16px;
	}
	
	.submitbtn_box {
		display: flex;
		position: fixed;
		bottom: 0;
		background: #fff;
		width: 100%;
		padding: 5px 10px;
		box-sizing: border-box;
		align-items: center;
	}
	
	.submitbtn_box input {
		flex: 1;
		border: 1px solid #f0f0f0;
		line-height: 35px;
		border-right: none;
		border-radius: 10px 0 0 10px;
		font-size: 16px;
		padding-left: 5px;
		box-sizing: border-box;
	}
	
	.submitbtn {
		width: 80px;
		text-align: center;
		background: #006F3E;
		color: #fff;
		line-height: 35px;
		border-radius: 0 10px 10px 0;
	}
</style>