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
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557807204810&di=5a9689741964be367cae0ff9c50e4379&imgtype=0&src=http%3A%2F%2Fimg.jianbihua.cc%2Fd%2Ffile%2F20170807%2F13f269c92ae3b40127748494d1b2d10f.jpg"/>
				<div class="text"><span class="title">魅力山西</span><span class="money">¥30</span><span style="color:#999;font-size:0.5rem;font-weight:normal;">起</span></div>
			</div>
			<div class="list">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557807205002&di=c9e2a9c26ba6330538a6f324c17c96e1&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1706%2F14%2Fc24%2F49934384_1497441193635_mthumb.jpg"/>
				<div class="text"><span class="title">魅力山西</span><span class="money">¥50</span><span style="color:#999;font-size:0.5rem;font-weight:normal;">起</span></div>
			</div>
			<div class="list">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557807204999&di=dd457139a8b4549ee17e0c83410d1773&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F50%2F40%2F28300542261568144400400050568_950.jpg"/>
				<div class="text"><span class="title">魅力山西</span><span class="money">¥60</span><span style="color:#999;font-size:0.5rem;font-weight:normal;">起</span></div>
			</div>
			<div class="list">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557807291662&di=c39170087c10722490f962ab7a32da4d&imgtype=0&src=http%3A%2F%2Fwww.ytszg.com%2Ffile%2FnewsImg%2Fimage%2F20150414%2F20150414111237_2529.jpg"/>
				<div class="text"><span class="title">魅力山西</span><span class="money">¥69.9</span><span style="color:#999;font-size:0.5rem;font-weight:normal;">起</span></div>
			</div>
			<div class="list">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557807291662&di=fe02417fe24bb496bfe24d68c6b65cd0&imgtype=0&src=http%3A%2F%2Fimage.cnpp.cn%2Fupload%2Fimages%2F20170502%2F1493716200_20230_3.jpg"/>
				<div class="text"><span class="title">魅力山西</span><span class="money">¥9.9</span><span style="color:#999;font-size:0.5rem;font-weight:normal;">起</span></div>
			</div>
			
			<div class="list">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557807355412&di=c5e35ca374240ced8639f2ebd8e06e64&imgtype=0&src=http%3A%2F%2Fwww.ly0355.com%2Fuploads%2F2017%2F0904%2F06d458258b28b9b9f18f0b3d8712ae30.jpg"/>
				<div class="text"><span class="title">魅力山西</span><span class="money">¥20</span><span style="color:#999;font-size:0.5rem;font-weight:normal;">起</span></div>
			</div>
			<div class="list">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557807355411&di=eaa0897186d126072b00caf7002b3510&imgtype=0&src=http%3A%2F%2Fwww.ly0355.com%2Fuploads%2F2017%2F0906%2F1913d6eda2c5ad29d932026a28463bfa.jpg"/>
				<div class="text"><span class="title">魅力山西</span><span class="money">¥30</span><span style="color:#999;font-size:0.5rem;font-weight:normal;">起</span></div>
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
					{img:'../../../static/spots/download-2.png',path:'/spots/spotsList?type=0',name:"全部景点"},
					{img:'../../../static/spots/download-5.png',path:'/spots/spotsList?type=1',name:"自然景观"},
					{img:'../../../static/spots/download-1.png',path:'/spots/spotsList?type=2',name:"人文民俗"},
					{img:'../../../static/spots/download-6.png',path:'/spots/spotsList?type=3',name:"漂流"},
					{img:'../../../static/spots/download-4.png',path:'/spots/spotsList?type=4',name:"人文古镇"},
					{img:'../../../static/spots/download-7.png',path:'/spots/spotsList?type=5',name:"宗教场所"},
					{img:'../../../static/spots/download-3.png',path:'/spots/spotsList?type=6',name:"缆车"},
					{img:'../../../static/spots/download.png',path:'/spots/spotsList?type=7',name:"垂直电梯"},
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