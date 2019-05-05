<template>
	<div id="spotslist">
		<top-title></top-title>
		<search-view></search-view>
		<ul class="result_list">
			<li class="item-li" @click="jump">
				<div class="item-img"><img src="https://www.0744.cn/uploads/2016/0925/a3932f6d9992e75b613b9c9b9e6c3efc_200x140.jpg"/></div>
				<div class="item-center">
					<div class="item-title-row">张家界核心景区武陵源</div>
					<div class="item-subtitle">100% 满意</div>
					<div class="item-subtitle attr">
          		<span>风景名胜</span>
          		<span>自然风光</span>
          		<span>AAAAA</span>
           </div>
				</div>
				<div class="item-bottom-right"><span>￥</span><span class="price">30</span>起<div class="del"><del>￥30</del></div></div>
			</li>
			
			<li class="item-li">
				<div class="item-img"><img src="https://www.0744.cn/uploads/2016/0925/a3932f6d9992e75b613b9c9b9e6c3efc_200x140.jpg"/></div>
				<div class="item-center">
					<div class="item-title-row">张家界核心景区武陵源</div>
					<div class="item-subtitle">100% 满意</div>
					<div class="item-subtitle attr">
          		<span>风景名胜</span>
          		<span>自然风光</span>
          		<span>AAAAA</span>
           </div>
				</div>
				<div class="item-bottom-right"><span>￥</span><span class="price">30</span>起<div class="del"><del>￥30</del></div></div>
			</li>
			<li class="item-li">
				<div class="item-img"><img src="https://www.0744.cn/uploads/2016/0925/a3932f6d9992e75b613b9c9b9e6c3efc_200x140.jpg"/></div>
				<div class="item-center">
					<div class="item-title-row">张家界核心景区武陵源</div>
					<div class="item-subtitle">100% 满意</div>
					<div class="item-subtitle attr">
          		<span>风景名胜</span>
          		<span>自然风光</span>
          		<span>AAAAA</span>
           </div>
				</div>
				<div class="item-bottom-right"><span>￥</span><span class="price">30</span>起<div class="del"><del>￥30</del></div></div>
			</li>
			<li class="item-li">
				<div class="item-img"><img src="https://www.0744.cn/uploads/2016/0925/a3932f6d9992e75b613b9c9b9e6c3efc_200x140.jpg"/></div>
				<div class="item-center">
					<div class="item-title-row">张家界核心景区武陵源</div>
					<div class="item-subtitle">100% 满意</div>
					<div class="item-subtitle attr">
          		<span>风景名胜</span>
          		<span>自然风光</span>
          		<span>AAAAA</span>
           </div>
				</div>
				<div class="item-bottom-right"><span>￥</span><span class="price">30</span>起<div class="del"><del>￥30</del></div></div>
			</li>
		</ul>
		<!--<clearfix></clearfix>
		<div style="height: 2.5rem;"></div>-->
	</div>
</template>

<script>
	import searchView from '@/components/common/search'
	import topTitle from '@/components/common/topTitle'
//	import clearfix from '@/components/common/clearfix'
	export default{
		name:'spotsList',
		data(){
			return{
				title:''
			}
		},
		created(){
			this.title = this.$route.name
		},
		components:{
			searchView,topTitle
		},
		methods: {
			jump(){
				this.$router.push({
          path:'/spots/spotsDetails'
				})
			}
			
   	},
	}
</script>

<style  lang="scss" type="text/css" scoped="scoped">
$color1:#ece6d4;
#spotslist{height: 100%;background: $color1;}
.result_list .item-li{box-sizing: border-box;position: relative;clear: both;background: #fff;overflow: hidden;font-size: 14px;margin-bottom: 10px;padding: 12px;border-bottom: 1px solid #D9CDB4;margin-bottom: 10px;display: flex;align-items: center;
	.item-img{height: 68px;overflow: hidden;width: 100px;img{width: 100%;}}
	.item-center{height: 68px;display: flex;flex: 1;flex-direction:column;text-align: left;justify-content: space-between;margin: 0 5px;
		.item-title-row{white-space: normal;font-size: 14px;max-height: 20px;overflow: hidden;max-height: 40px;color: #333;line-height: 20px;}
		.item-subtitle{position: relative;overflow: hidden; white-space: nowrap;max-width: 100%;text-overflow: ellipsis;font-size: 12px;color: #aaaaaa;}
		.attr span{font-size: 12px;padding: 1px 3px;border: 1px solid #e1d8c5;background: #f2efe7;color: #999;border-radius: 3px;margin-right: 5px;}
	}
	.item-bottom-right{
		span{color: #f60;}
		.price{font-size: 24px;font-family: Arial;}
		.del{line-height: 14px;font-size: 12px;text-align: right;color: #999;}
	} 
}

</style>