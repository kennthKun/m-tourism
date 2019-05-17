<template>
	<div id="introduce" >
		<mt-header :title="title">
		  <router-link to="" slot="left">
		    <mt-button icon="back" @click='back'>返回</mt-button>
		  </router-link>
		  <!--<mt-button icon="more" slot="right"></mt-button>-->
		  <mt-button slot="right" @click='mycenter'>
			  <img src="../../../../static/people.png" height="20" width="20" slot="icon">
			</mt-button>
		</mt-header>
		
		<div id="xiangqing" v-html="list.content"></div>
	</div>
</template>

<script>
	import topTitle from '@/components/common/topTitle'
	export default{
		name:'detaile',
		data(){
			return{
				title:'',
				list:[],
			}
		},
		created(){
			this.userInfo = JSON.parse(localStorage.getItem("userInfo")) 
			this.getlist()
		},
		components:{topTitle},
		methods: {
			back(){
				this.$router.go(-1);
			},
			mycenter(){
				this.$router.push({
			        path:'/myCenter'
						})
			},
			getlist(){
				this.axios.get('/api2/specialty/details?id='+this.$route.query.id)
				.then(response=>{
					console.log(response)
					this.title = response.data.data[0].title
					this.list=response.data.data[0]
				}).catch(error=>{
          console.log(error)
        })
			}
   	},
	}
</script>

<style scoped="scoped">
	.content_box{
		padding: 10px;
		box-sizing: border-box;
		border-bottom: 5px solid #eee;
	}
	#introduce{text-align: left;font-size: 18px}
	#xiangqing{padding:20px 10px;box-sizing: border-box;}
	#xiangqing .p1{margin-top: 10px;}
	.mint-header{
		height: 2.2rem;line-height: 2.2rem;color: #FFF;background-color: #006f3e;
	}
</style>