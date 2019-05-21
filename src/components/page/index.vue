<template>
	<div>
		<header-banner></header-banner>
		<div class="item-content"></div>
		<div class="nav-box">
			<div class="nav-list" v-for="item in navImg">
				<router-link v-if="item.path!='luxian'" :to="item.path">
					<img class="nav-img" :src="item.img" alt="" />
				</router-link>
				<div v-if="item.path=='luxian'" @click="luxian">
					<img class="nav-img" :src="item.img" alt="" />
				</div>
			</div>
		</div>
		<div class="ticket_main">
			<div class="spots_tit"><img style="width: 95%;" src="@/assets/pic/download-8.png"/></div>
			<div class="content-block">
				<div class="list">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557806518036&di=1b95c3be3c5d9dc80866e8f721113a4c&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheji%2F20160527%2Fshanxilvyouhaibaosheji_6396115.jpg"/>
				</div>
				<div class="list">
					<div class="t_box" style="margin-bottom: 0.6rem;">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557806518035&di=4b9dda44745347fbeaf484f0980f2cd5&imgtype=0&src=http%3A%2F%2Fdimg04.c-ctrip.com%2Fimages%2F30040s000000hui7rB860.jpg"/>
					</div>
					<div class="t_box">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557806518035&di=93f3e0ff15173fc5c93159d02f363bd7&imgtype=0&src=http%3A%2F%2Fwww.sx.xinhuanet.com%2Ftitlepic%2F112264%2F1122643052_1522977381487_title0h.jpg"/>
					</div>
				</div>
				<div class="list">
					<div class="t_box" style="margin-bottom: 0.6rem;">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557806518027&di=e77576805bc64fce236e1d740dea0589&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F50%2F40%2F28300542261568144400400050568_950.jpg"/>
					</div>
					<div class="t_box">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557806518027&di=ba11f7ba40badf3b2b900922b2560ed1&imgtype=0&src=http%3A%2F%2Fmy.tmyou.com%2Fpublic%2Fupload%2Fimages%2F2016-07-14%2F20160714094854327623.jpg"/>
					</div>
				</div>
			</div>
		</div>
		<div class="p_main">
			<div class="spots_tit"><img style="width: 95%;" src="@/assets/pic/download-9.png"/></div>
			<div class="content-block">
				<div class="list">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557806621980&di=0bbcc91ec79009b07edbb1222bb5575f&imgtype=0&src=http%3A%2F%2Fwww.ytszg.com%2Ffile%2FnewsImg%2Fimage%2F20150414%2F20150414111237_2529.jpg"/>
				</div>
				<div class="list">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557806621979&di=48779e9bb5f737948b065d561a95b44e&imgtype=0&src=http%3A%2F%2Fimage.cnpp.cn%2Fupload%2Fimages%2F20170502%2F1493716200_20230_3.jpg"/>
				</div>
			</div>
		</div>
		<div class="acco_main">
			<div class="spots_tit"><img style="width: 95%;" src="@/assets/pic/download-10.png"/></div>
			<div class="content-block">
				<div class="list">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557806945777&di=b8d57a1096aa0335f015473122861654&imgtype=0&src=http%3A%2F%2Fm.tuniucdn.com%2Ffb2%2Ft1%2FG5%2FM00%2F22%2FFA%2FCii-s1pCKG-IIOZRAAM4TUdGIz0AABW8QHBjjcAAzhl400_w640_h480_c1_t0.jpg" alt="" />
					<div class="text">
						<p class="introduce">维也纳国际大酒店（市区）</p>
						<p class="money">¥<span>368</span>起</p>
					</div>
				</div>
				<div class="list">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557806692603&di=6139e5494349f6dd7ea14deaf6b1bdf7&imgtype=0&src=http%3A%2F%2Fdimg09.c-ctrip.com%2Fimages%2F100j0m000000dbm383CCE_R_1024_10000_Q90.jpg" alt="" />
					<div class="text">
						<p class="introduce">山西大成山水国际酒店（市区）</p>
						<p class="money"></p>
					</div>
				</div>
				<div class="list">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557806692593&di=d0506f00d6c16b0578b055e92ee1b244&imgtype=0&src=http%3A%2F%2Fp.lechengol.com%2FH103764%2FMax_09834709661d4401b9f1448bddd1ba13.jpg" alt="" />
					<div class="text">
						<p class="introduce">晋祠宾馆（市区）</p>
						<p class="money">¥<span>310</span>起</p>
					</div>
				</div>
			</div>
		</div>
		<div class="tab_main">
			<div class="spots_tit">
				<mt-navbar v-model="selected">
				  <mt-tab-item id="1">游记攻略</mt-tab-item>
				  <mt-tab-item id="2">特产美食</mt-tab-item>
				</mt-navbar>
			</div>
			<div class="tabs">
				<div class="tab">
					<div class="item-media">
						<img src="https://www.0744.cn/uploads/arcimgs/35261504061044_283x190.jpeg"/>
					</div>
					<div class="item-inner">
						<div class="item-title-row">
							慢游山西“最”之旅
						</div>
						<div class="item-text">
							还记得Iseeyou的阿凡达吗？记得岩石漂浮的哈利路亚山吗？看我的骄傲脸，这个暑假不必舍近…
						</div>
					</div>
				</div>
				<div class="tab">
					<div class="item-media">
						<img src="https://www.0744.cn/uploads/2018/0525/1ebcd19e1b436688ce172f9ae7e70eb6_283x190.png"/>
					</div>
					<div class="item-inner"></div>
				</div>
				<div class="tab">
					<div class="item-media">
						<img src="https://www.0744.cn/uploads/arcimgs/85051479604634_283x190.jpg"/>
					</div>
					<div class="item-inner"></div>
				</div>
			</div>
		</div>
		<clearfix></clearfix>
		<div style="height: 2.5rem;"></div>
		<footer-nav></footer-nav>
	</div>
</template>

<script>
	import headerBanner from '@/components/common/banner'
	import footerNav from '@/components/common/footer-nav'
	import clearfix from '@/components/common/clearfix'
	
	
	
	export default{
		data(){
			return{
				value:'',
				selected:'1',
				navImg:[
					{img:'../../../static/pic/download-7.png',path:'/spots/all'},
					{img:'../../../static/pic/download-6.png',path:'/hotels/all'},
					{img:'../../../static/pic/download-5.png',path:'/foods/all'},
					{img:'../../../static/pic/download-3.png',path:'/guiders/all'},
					{img:'../../../static/pic/download-2.png',path:'/cars/all'},
					{img:'../../../static/pic/download-1.png',path:'/specialty/all'},
					{img:'../../../static/pic/download.png',path:'/raiders/all'},
					{img:'../../../static/pic/download-4.png',path:'luxian'},
				]
			}
		},
		methods: {
			luxian(){
				alert("功能暂未开放！")
			}
   	},
		components: {headerBanner,footerNav,clearfix},
	}
</script>

<style lang="scss" type="text/css" scoped="scoped">
	$color1:#EDE6DC;
	$color2:#D9CDB4;
	.nav-box{display: flex;align-items: center;flex-wrap: wrap;background-color: $color1;
		.nav-list{width: 25%;padding: 10px;box-sizing: border-box;
			.nav-img{width: 100%;background: #A4967C;border: 0.1rem solid #A4967C;border-radius: 0.4rem;box-sizing: border-box;}
		}
	}
	.ticket_main{padding: 10px 0;background: $color2;
		.spots_tit{padding-bottom: 10px;}
		.content-block{padding: 0 10px;display: flex;align-items: center;justify-content: space-around;
			.list{width: 30%;overflow: hidden;display:flex;flex-direction: column;min-height: 6.53rem;
				.t_box{height: 3.5rem;overflow: hidden;
					img{width: 100%;min-height: 3.5rem;}
				}
				img{width: 100%;min-height: 6.5rem;}
			}
		}
	}
	.p_main{padding: 10px 0;background: $color1;
		.spots_tit{padding-bottom: 10px;}
		.content-block{display: flex;align-items: center;justify-content: space-around;
			.list{width: 45%;overflow: hidden;
				img{width: 100%}
			}
		}
	}
	.acco_main{padding: 10px 0;background: $color2;
		.spots_tit{padding-bottom: 10px;}
		.content-block{padding: 0 10px;display: flex;align-items: center;justify-content: space-around;
			.list{width: 30%;overflow: hidden;display:flex;flex-direction: column;min-height: 6.53rem;
				img{width: 100%;}
				.text{background-color: #fff;font-family: 微软雅黑;font-size: 0.5rem;height: 2.5rem;line-height: 1rem;padding: 0rem 0.2rem;
				.introduce{margin:0px;padding:0.1rem 0rem;height: 1.5rem;line-height: 0.7rem;font-size:0.5rem;}
				.money{margin: 0rem;line-height: 0.8rem;color:#999;text-align: right;
					span{ color: red;font-family: 微软雅黑;font-size: 0.7rem;font-weight: bold;};
				}
				}
			}
		}
	}
	
	.tab_main{background: $color1;padding: 1rem 0.75rem;margin: 0px;
		.spots_tit{border-bottom:1px solid #D6d6d6;padding: 0rem 2rem;
			.mint-navbar{
				background: $color1;
				.mint-tab-item{color: #5f646e;border-bottom:2px solid transparent}
				.mint-tab-item.is-selected{border-color: #377c67;color: #377c67;margin-bottom:0}
				.item-inner{ padding-bottom: 0.3rem;padding-top: 0.3rem;box-sizing: border-box;
					
				}
			}
		}
		.tabs{margin: 0.75rem 0rem;
			.tab{margin-bottom: 0.5rem;background-color: #FFF;display: flex;
				.item-media{width: 6.5rem; 
					img{width: 6.5rem;min-height: 4.35rem;}
				}
				.item-inner{padding-left: 10px;box-sizing: border-box;
					.item-title-row{line-height: 1rem;font-size: 0.6rem;color: #333;font-weight: 500;flex-shrink: 1;white-space: nowrap;position: relative;overflow: hidden;text-overflow: ellipsis;max-width: 100%;text-align: left;}
					.item-text{font-family: 宋体;color: #999;margin-top: 0.4rem;height: 1.6rem;line-height: 0.8rem;font-size: 0.5rem;position: relative;overflow: hidden;text-overflow: ellipsis;-webkit-line-clamp: 2;-webkit-box-orient: vertical;display: -webkit-box;
				}
				}
				
			}
		}
	}
</style>