<template>
	<div>
		<top-title></top-title>
		<search-view></search-view>
		<header-banner></header-banner>
		<div class="nav-box">
			<div class="nav-list" v-for="item in navImg">
				<router-link :to="item.path">
					<div class="nav-list-inner">
						<img class="nav-img" :src="item.img" alt="" />
						<div>{{item.name}}</div>
					</div>
				</router-link>
			</div>
		</div>
		<div class="content-padded">
			<div class="list">
				<img src="https://www.0744.cn/uploads/2016/0925/a3932f6d9992e75b613b9c9b9e6c3efc_283x170.jpg"/>
				<div class="text"><span class="title">魅力湘西</span><span class="money">¥30</span><span style="color:#999;font-size:0.5rem;font-weight:normal;">起</span></div>
			</div>
			<div class="list">
				<img src="https://www.0744.cn/uploads/2016/0925/a3932f6d9992e75b613b9c9b9e6c3efc_283x170.jpg"/>
				<div class="text"><span class="title">魅力湘西</span><span class="money">¥30</span><span style="color:#999;font-size:0.5rem;font-weight:normal;">起</span></div>
			</div>
			<div class="list">
				<img src="https://www.0744.cn/uploads/2016/0925/a3932f6d9992e75b613b9c9b9e6c3efc_283x170.jpg"/>
				<div class="text"><span class="title">魅力湘西</span><span class="money">¥30</span><span style="color:#999;font-size:0.5rem;font-weight:normal;">起</span></div>
			</div>
			<div class="list">
				<img src="https://www.0744.cn/uploads/2016/0925/a3932f6d9992e75b613b9c9b9e6c3efc_283x170.jpg"/>
				<div class="text"><span class="title">魅力湘西</span><span class="money">¥30</span><span style="color:#999;font-size:0.5rem;font-weight:normal;">起</span></div>
			</div>
			<div class="list">
				<img src="https://www.0744.cn/uploads/2016/0925/a3932f6d9992e75b613b9c9b9e6c3efc_283x170.jpg"/>
				<div class="text"><span class="title">魅力湘西</span><span class="money">¥30</span><span style="color:#999;font-size:0.5rem;font-weight:normal;">起</span></div>
			</div>
			
			<div class="list">
				<img src="https://www.0744.cn/uploads/2016/0925/a3932f6d9992e75b613b9c9b9e6c3efc_283x170.jpg"/>
				<div class="text"><span class="title">魅力湘西</span><span class="money">¥30</span><span style="color:#999;font-size:0.5rem;font-weight:normal;">起</span></div>
			</div>
			<div class="list">
				<img src="https://www.0744.cn/uploads/2016/0925/a3932f6d9992e75b613b9c9b9e6c3efc_283x170.jpg"/>
				<div class="text"><span class="title">魅力湘西</span><span class="money">¥30</span><span style="color:#999;font-size:0.5rem;font-weight:normal;">起</span></div>
			</div>
		</div>
		<clearfix></clearfix>
	</div>
</template>

<script>
	import searchView from '@/components/common/search'
	import headerBanner from '@/components/common/banner'
	import clearfix from '@/components/common/clearfix'
	import topTitle from '@/components/common/topTitle'
	
	
	export default{
		name:'',
		data(){
			return{
				title:'',
				navImg:[
					{img:'../../../static/spots/download-2.png',path:'/spots/spotsList',name:"全部景点"},
					{img:'../../../static/spots/download-5.png',path:'/spots/spotsList',name:"自然景观"},
					{img:'../../../static/spots/download-1.png',path:'/spots/spotsList',name:"人文民俗"},
					{img:'../../../static/spots/download-6.png',path:'/spots/spotsList',name:"漂流"},
					{img:'../../../static/spots/download-4.png',path:'/spots/spotsList',name:"人文古镇"},
					{img:'../../../static/spots/download-7.png',path:'/spots/spotsList',name:"宗教场所"},
					{img:'../../../static/spots/download-3.png',path:'/spots/spotsList',name:"缆车"},
					{img:'../../../static/spots/download.png',path:'/spots/spotsList',name:"垂直电梯"},
				]
			}
		},
		components:{
			searchView,
			headerBanner,
			clearfix,topTitle
		},
		beforeCreate(){
			console.log(111111111111111)
		},
		created(){
			this.title = this.$route.name
		}
	}
</script>

<style  lang="scss" type="text/css" scoped="scoped">
	$color1:#ece6d4;
	$color2:#D9CDB4;
	.mint-header{
		height: 2.2rem;line-height: 2.2rem;color: #FFF;background-color: #006f3e;
	}
	.nav-box{display: flex;align-items: center;flex-wrap: wrap;background-color: $color1;
		.nav-list{width: 25%;padding: 10px;box-sizing: border-box;
			.nav-list-inner{box-sizing: border-box;background: rgba(255,255,255,0.5);border-radius: 0.3rem;color: #353126;line-height: 1rem;min-height: 3.6rem;padding: 0.4rem;text-align: center;
				.nav-img{height: 25px;margin-top: 0.3rem;width: 25px;}
			}
		}
	}
	.content-padded{background: $color2;padding-right: 10px;padding-bottom: 10px;display: flex;align-items: center;flex-wrap: wrap;width: 100%;box-sizing: border-box;
		.list{width:calc( 50% - 10px);margin-left: 10px;overflow: hidden;margin-top: 10px;
			img{width: 100%;}
			.text{background-color: #fff;font-size: 0.6rem;height: 1.2rem;line-height: 1.2rem;overflow: hidden;padding: 0rem 0.2rem;display: flex;
				.title{flex: 1;text-align: left;}
				.money{color: red;font-weight: bold;font-size: 0.7rem;}
			}
		}
	}
</style>