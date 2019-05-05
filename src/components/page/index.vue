<template>
	<div>
		<header-banner></header-banner>
		<div class="item-content"></div>
		<div class="nav-box">
			<div class="nav-list" v-for="item in navImg">
				<router-link :to="item.path">
					<img class="nav-img" :src="item.img" alt="" />
				</router-link>
			</div>
		</div>
		<div class="ticket_main">
			<div class="spots_tit"><img style="width: 95%;" src="@/assets/pic/download-8.png"/></div>
			<div class="content-block">
				<div class="list">
					<img src="https://www.0744.cn/uploads/2016/0926/99c4bf6cdc572b0aa7cee4be56a80444_320x458.jpg"/>
				</div>
				<div class="list">
					<div class="t_box" style="margin-bottom: 0.6rem;">
						<img src="https://www.0744.cn/uploads/2016/0926/5e0d6cf1488357d50fbecb7ecb065b86_320x210.jpg"/>
					</div>
					<div class="t_box">
						<img src="https://www.0744.cn/uploads/2016/0926/cc8d3b1247b512d3f6b7c8dde6fb1096_320x210.jpg"/>
					</div>
				</div>
				<div class="list">
					<div class="t_box" style="margin-bottom: 0.6rem;">
						<img src="https://www.0744.cn/uploads/2016/0926/a1f370295803f1bc331791440dad1c34_320x210.jpg"/>
					</div>
					<div class="t_box">
						<img src="https://www.0744.cn/uploads/2016/0926/add97bc2ec7d385ebe9495d5f96d89a1_320x210.jpg"/>
					</div>
				</div>
			</div>
		</div>
		<div class="p_main">
			<div class="spots_tit"><img style="width: 95%;" src="@/assets/pic/download-9.png"/></div>
			<div class="content-block">
				<div class="list">
					<img src="https://www.0744.cn/uploads/2016/0922/c42cf713fdbeb937fd26ca3b968ad887_490x300.jpg"/>
				</div>
				<div class="list">
					<img src="https://www.0744.cn/uploads/2016/0922/728f37c1dafc5a34f4ae2b131c3fb8fe_490x300.jpg"/>
				</div>
			</div>
		</div>
		<div class="acco_main">
			<div class="spots_tit"><img style="width: 95%;" src="@/assets/pic/download-10.png"/></div>
			<div class="content-block">
				<div class="list">
					<img src="https://www.0744.cn/uploads/2016/0921/a2227766b767f279ee54a4cee3a79197_308x190.jpg" alt="" />
					<div class="text">
						<p class="introduce">张家界大成山水国际大酒店（市区）</p>
						<p class="money">¥<span>368</span>起</p>
					</div>
				</div>
				<div class="list">
					<img src="https://www.0744.cn/uploads/2019/0316/2f03f445656db604f5cf3df716d4cda1_308x190.jpg" alt="" />
					<div class="text">
						<p class="introduce">张家界大成山水国际大酒店（市区）</p>
						<p class="money"></p>
					</div>
				</div>
				<div class="list">
					<img src="https://www.0744.cn/uploads/2018/0526/7a451fe411e5646057d375f23f520b94_308x190.jpg" alt="" />
					<div class="text">
						<p class="introduce">张家界大成山水国际大酒店（市区）</p>
						<p class="money">¥<span>310</span>起</p>
					</div>
				</div>
			</div>
		</div>
		<div class="tab_main">
			<div class="spots_tit">
				<mt-navbar v-model="selected">
				  <mt-tab-item id="1">游记攻略</mt-tab-item>
				  <mt-tab-item id="2">旅游问答</mt-tab-item>
				  <mt-tab-item id="3">旅游资讯</mt-tab-item>
				</mt-navbar>
			</div>
			<div class="tabs">
				<div class="tab">
					<div class="item-media">
						<img src="https://www.0744.cn/uploads/arcimgs/35261504061044_283x190.jpeg"/>
					</div>
					<div class="item-inner">
						<div class="item-title-row">
							慢游张家界“最”之旅
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
					{img:'../../../static/pic/download-4.png',path:'/lines/all'},
					{img:'../../../static/pic/download-3.png',path:'/guiders/all'},
					{img:'../../../static/pic/download-2.png',path:'/cars/all'},
					{img:'../../../static/pic/download-1.png',path:'/specialty/all'},
					{img:'../../../static/pic/download.png',path:'/raiders/all'},
				]
			}
		},
		methods: {
			
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