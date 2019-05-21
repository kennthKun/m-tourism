<template>
	<div id="spotslist">
		<top-title></top-title>
		<search-view></search-view>
		<ul class="result_list">
			
			<li class="item-li" v-for="item in list" @click="jump(item.id)">
				<div class="item-img"><img :src="item.imageList"/></div>
				<div class="item-center">
					<div class="item-title-row">{{item.name}}</div>
					<div class="item-subtitle">100% 满意</div>
					<div class="item-subtitle attr">
          		<span>{{item.category}}</span>
          		<span>{{item.level}}</span>
           </div>
				</div>
				<div class="item-bottom-right"><span>￥</span><span class="price">{{item.price}}</span>起<div class="del"><!--<del>￥330</del>--></div></div>
			</li>
			
		</ul>
		<page-null v-if="list.length <= 0"></page-null>
		<!--<clearfix></clearfix>
		<div style="height: 2.5rem;"></div>-->
	</div>
</template>

<script>
	import searchView from '@/components/common/search'
	import topTitle from '@/components/common/topTitle'
	import pageNull from '@/components/common/null'
//	import clearfix from '@/components/common/clearfix'
	export default{
		name:'spotsList',
		data(){
			return{
				title:'',
				list:[],
			}
		},
		created(){
			this.title = this.$route.name
			this.getlist()
		},
		components:{
			searchView,topTitle,pageNull
		},
		methods: {
			jump(id){
				console.log(id)
				this.$router.push({
          path:'/spots/spotsDetails?id='+id
				})
			},
			getlist(){
				console.log(this.$route.query.type)
				this.axios.get('/api/scenic/api?type='+this.$route.query.type)
				.then(response=>{
					this.list = response.data.data
					console.log(response.data.data)
					for (let x of this.list){
						x.imageList = x.imageList.substr(1)
						x.imageList = x.imageList?"http://yaqin.ckun.vip/"+x.imageList.split(',')[0]:"http://yaqin.ckun.vip/pic/wu-1557902128821.jpg"
						console.log(x.imageList);
					}
					console.log(this.list)
				}).catch(error=>{
          console.log(error)
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