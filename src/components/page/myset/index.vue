<template>
	<div>
		<top-title></top-title>
		<div style="text-align: left;padding: 0px 10px;box-sizing: border-box;">
			<div class="p1">
				<div>头像上传：</div>
				<div class="fileCon">
					<div class="list">
						<div v-show="list">
							<!--<div class="close" @click="close(index)"></div>-->
							<img :src="list" />
						</div>
						<div class="add" v-show="maxStatus" @click="chooseType">
							<div class="add-image"><span class="yaqin yq_shangchuan"></span></div>
						</div>
					</div>
				</div>
				<input id="upload_file" type="file" class="file-input" accept="image/png,image/jpeg,image/jpg" :multiple="multiple" @change="inputChange" style="display: none" />
			</div>
			<div class="p2">
				<div>昵称：</div>
				<input style="flex: 1;" type="text" v-model="form.name" placeholder="请输入昵称" />
			</div>
			<div class="p2">
				<div>电话：</div>
				<input style="flex: 1;" type="text" v-model="form.phone" placeholder="请输入手机号" />
			</div>
		</div>
		<div class="submit_btn" @click="submint">提交</div>
	</div>
</template>
<script>
	import { Indicator } from 'mint-ui';
	import topTitle from '@/components/common/topTitle'
	export default {
		data() {
			return {
				maxStatus: true,
				list: '',
				name: '',
				phone: '',
				form:{
					name:'',
					phone:'',
					photo:''
				}
			};
		},
		props: {
			multiple: false,
			max: 1,
		},
		components: {
			topTitle
		},
		created(){
			this.userInfo = JSON.parse(localStorage.getItem("userInfo")) 
			this.getdetail()
		},
		mounted() {},
		methods: {
			chooseType() {
				document.getElementById("upload_file").click();
			},
			getdetail(){
				this.axios.get('/api//user/info?id='+this.userInfo.id)
				.then(response=>{
					console.log(response)
					if(response.status == 200){
//						console.log(this.userInfo)
						this.form = response.data.data[0]
						this.list =response.data.data[0].photo?"http://yaqin.ckun.vip/"+response.data.data[0].photo:''
						console.log(this.form)
					}
				}).catch(error=>{
          console.log(error)
        })
			},
			async inputChange(e) {
				let files = e.target.files;
				console.log(files)
				let uploadAll = [].slice.call(files, 0).map(this.upload);
				//使用object.values(files)，测试安卓存在兼容性问题，替换为[].slice.call(files ,0)
				console.log(uploadAll)
				Indicator.open('加载中...');
				let result = await Promise.all(uploadAll);
				document.getElementById("upload_file").value = "";
			},
			submint(){
				Indicator.open('加载中...');
				 var params = new URLSearchParams()
				 console.log(this.form)
				 this.form.id = this.userInfo.id
     		 params.append('data', JSON.stringify(this.form))
				this.axios.post("api/mycenter/set", params)
					.then(response => {
						console.log(response)
						Indicator.close();
						if(response.status ==200){
							alert("修改成功！")
							this.$router.go(-1);
						}else{
							alert("修改失败！")
						}
					}).catch(error => {
						console.log(error)
					});
			},
			upload(file, index) {
				console.log(file)
				return new Promise(async(resolve, reject) => {
					let form = new FormData();
					console.log(11)
					form.append("file", file);
					let result = this.axios.post("http://yaqin.ckun.vip:8081/file_upload", form)
						.then(response => {
							console.log(response)
							this.form.photo = response.data.res[0].path
							this.list = "http://yaqin.ckun.vip/" + response.data.res[0].path
							Indicator.close();
						}).catch(error => {
							console.log(error)
						});
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.p1 {
		padding: 10px 0;
		font-size: 14px;
		border-bottom: 1px solid #f3f3f3
	}
	
	.p2 {
		padding: 10px 0;
		font-size: 14px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #f3f3f3
	}
	.submit_btn{width: 100px;height: 35px;background: #006f3e;color: #fff;text-align: center;line-height: 35px;margin: 0 auto;margin-top: 20px;border-radius: 3px;}
	
	.fileCon {
		width: 100%;
		min-height: 76px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		.list {
			width: 100%;
			min-height: 76px;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			&>div {
				width: 100px;
				height: 100px;
				margin: 10px 10px 10px 0;
				position: relative;
				background: #ccc;
				&>img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	
	.add-image {
		width: 100px;
		height: 100px;
		line-height: 100px;
		background-size: 100%;
		text-align: center;
	}
	
	.add-image .yaqin {
		font-size: 40px;
		color: #fff;
	}
</style>