<template>
	<mt-header :title="title">
	  <router-link to="" slot="left">
	    <mt-button icon="back" @click='back'>返回</mt-button>
	  </router-link>
	  <!--<mt-button icon="more" slot="right"></mt-button>-->
	  <mt-button slot="right" @click='mycenter'>
		  <img src="../../../static/people.png" height="20" width="20" slot="icon">
		</mt-button>
	</mt-header>
</template>

<script>
	export default{
		data(){
			return{
				title:''
			}
		},
		created(){
			console.log(this.$route)
			this.title = this.$route.name
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			mycenter(){
				this.$router.push({
			        path:'/myCenter'
						})
			}
		}
	}
</script>

<style  lang="scss" type="text/css" scoped="scoped">
	$color1:#ece6d4;
	$color2:#D9CDB4;
	.mint-header{
		height: 2.2rem;line-height: 2.2rem;color: #FFF;background-color: #006f3e;
	}
</style>