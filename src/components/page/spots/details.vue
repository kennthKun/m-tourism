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
		<div class="carousel" @mouseenter="enter" @mouseleave="leave">
			<transition-group tag="ul" name="image"  :enter-active-class="animate[mark].inanimate" :leave-active-class="animate[mark].outanimate">
				<li v-for='(image,index) in img' :key='image' v-show="index === mark">
					<a href="javascript:;">
						<img :src="image">
					</a>
				</li>
			</transition-group>
			<div class="bullet" style="text-align: center;">
				<span v-for="(item,index) in img.length" :class="{'active':index === mark}" @click="change(index)" :key="index"></span>
			</div>
		</div>
		<div class="content_box">
			<div class="name_price"><span class="name">{{list.name}}</span><span class="price">¥{{list.price}}</span></div>
			<div class="praise_collection"><span><i class="yaqin yq_dianzan1"></i>已有<b>{{list.praise}}</b>人点赞</span></div>
		</div>
		<router-link to="" slot="left">
		<div class="content_box content_2" style="border-width: 1px;">
			<div>联系导游</div><span class="yaqin yq_jiantou"></span>
		</div>
		</router-link>
		<router-link to="" slot="left">
		<div class="content_box content_2" style="border-width: 1px;">
			<div>联系司机</div><span class="yaqin yq_jiantou"></span>
		</div>
		</router-link>
		<router-link to="" slot="left">
		<div class="content_box content_2">
			<div>查看酒店</div><span class="yaqin yq_jiantou"></span>
		</div>
		</router-link>
		<div id="xiangqing" v-html="list.introduce"></div>
		<div style="height: 60px;"></div>
		<div id="bot_btn">
			<div class="btn_price" @click="Collectionbtn"><span class="yaqin yq_dianzan1"></span><p>{{isShoucang?"已收藏":"收藏"}}</p></div>
			<div class="btn_collection" @click="price(2)"><span class="yaqin yq_collection-b"></span><p>点赞</p></div>
			<div class="reservation" @click="comments">评论</div>
		</div>
	</div>
</template>

<script>
	import topTitle from '@/components/common/topTitle'
	export default{
		name:'detaile',
		data(){
			return{
				title:'',
				isShoucang:0,
				userInfo:[],
				list:[],
				mark: 0,
				img: [
					'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1059779473,979169889&fm=26&gp=0.jpg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557806239282&di=fee760e586de5b17cb2dc28dcca8027d&imgtype=0&src=http%3A%2F%2Fwww.lvyougl.com%2Fditu%2Fimg%2F%25E5%25BF%25BB%25E5%25B7%259E.jpg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557807077200&di=a7b4eac99c49412eff3ec0c4a75bad85&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F96fe2f2873f962a5c156e2e88fac5bfc2a6377121c90e-kOUJT7_fw658',
					'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2010380425,3595871570&fm=26&gp=0.jpg',
					'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1768300561,4192491366&fm=26&gp=0.jpg'
				],
				animate:[
					{inanimate:'animated rollIn',outanimate:'animated zoomOutLeft'},
					{inanimate:'animated slideInLeft',outanimate:'animated hinge'},
					{inanimate:'animated rotateInDownLeft',outanimate:'animated slideOutRight'},
					{inanimate:'animated zoomInRight',outanimate:'animated rotateOutDownRight'},
					{inanimate:'animated zoomInRight',outanimate:'animated rotateOutDownRight'}
				],
				time: null
			}
		},
		created(){
			this.userInfo = JSON.parse(localStorage.getItem("userInfo")) 
			this.axios.get('/api/user/info?id='+this.userInfo.id)
			.then(response=>{
				console.log(response)
				if(response.status == 200){
					this.userInfo = response.data.data[0]
					localStorage.setItem("userInfo",JSON.stringify(response.data.data[0]))
					console.log(response.data.data[0].scenicarr_id.split(','))
					let id = ''+this.$route.query.id
					console.log(response.data.data[0].scenicarr_id.split(',').indexOf(id))
					this.isShoucang = response.data.data[0].scenicarr_id.split(',').indexOf(id)>=0?1:0
					console.log(this.isShoucang)
				}
			}).catch(error=>{
        console.log(error)
      })
			this.getlist()
			this.play()
		},
		components:{topTitle},
		methods: {
			Collectionbtn(){
				var scen_id = this.userInfo.scenicarr_id
				var scenicarr_id2 = scen_id?scen_id.split(','):[];
				var sid = '';
				let id = this.$route.query.id
				if(scenicarr_id2.indexOf(id)>=0){
					scenicarr_id2.splice(scenicarr_id2.indexOf(id),1)
					sid = scenicarr_id2
				}else{
					let id2 = id
					scenicarr_id2.push(id2)
					sid = scenicarr_id2
				}
				this.axios.get('/api/scenic/Collection?sid='+sid+'&id='+this.userInfo.id)
				.then(response=>{
					if(response.status == 200){
						this.axios.get('/api/user/info?id='+this.userInfo.id)
						.then(response=>{
							if(response.status == 200){
								this.userInfo = response.data.data[0]
								this.isShoucang = response.data.data[0].scenicarr_id.split(',').indexOf(id)>=0?1:0
							}
						}).catch(error=>{
		          console.log(error)
		        })
					}
				}).catch(error=>{
          console.log(error)
        })
			},
			price(type){
				this.axios.get('/api/scenic/price?id='+this.$route.query.id+'&type='+type)
				.then(response=>{
					if(response.status == 200){
						this.getlist()
					}
				}).catch(error=>{
          console.log(error)
        })
			},
			back(){
				this.$router.go(-1);
			},
			comments(){
				this.$router.push({
			        path:'/comments?id='+this.$route.query.id
						})
			},
			mycenter(){
				this.$router.push({
			        path:'/myCenter'
						})
			},
			jump(id){
				console.log(id)
				this.$router.push({
          path:'/spots/spotsDetails?id='+id
				})
			},
			getlist(){
				this.axios.get('/api/scenic/detail?id='+this.$route.query.id)
				.then(response=>{
					this.list = response.data.data[0]
					let imglist = this.list.imageList.split(',')
					for(let x in imglist){
						imglist[x] = imglist[x]?"http://yaqin.ckun.vip/"+imglist[x]:"http://yaqin.ckun.vip/pic/wu-1557902128821.jpg"
					}
					this.title = this.list.name
					this.img = imglist
					this.list.imageList = imglist
					console.log(this.list)
				}).catch(error=>{
          console.log(error)
        })
			},
			change(i) {
				this.mark = i;
			},
			prev() {
				this.mark--;
				if(this.mark === -1) {
					this.mark = 3;
					return
				}
			},
			next() {
				this.mark++;
				if(this.mark === 5) {
					this.mark = 0;
					return
				}
			},
			autoPlay() {
				this.mark++;
				if(this.mark === 5) {
					this.mark = 0;
					return
				}
			},
			play() {
				this.time = setInterval(this.autoPlay, 5000);
			},
			enter() {
				console.log('enter')
				clearInterval(this.time);
			},
			leave() {
				console.log('leave')
				this.play();
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
	#bot_btn{width: 100%;position: fixed;bottom: 0;left: 0;border-top: 1px solid #f3f3f3;background: #fff;height: 50px;box-shadow: 0px 0px 4px #333;display: flex;align-items: center;text-align: center;}
	#bot_btn .btn_price,#bot_btn .btn_collection{color: #333;font-size: 14px;width: 20%;}
	#bot_btn .btn_price p,#bot_btn .btn_collection p{margin-top: 5px;}
	.reservation{flex: 1;background: #ff002d;height: 50px;line-height: 50px;color: #fff;}
	.name_price{display: flex;align-items: center;justify-content: space-between;padding-bottom: 10px;}
	.content_box .name{font-size: 24px;font-weight: bold;}
	.content_box .price{font-size: 20px;font-weight: bold;color: #f00;margin-top: 10px;}
	.praise_collection{font-size: 16px;border-top: 1px solid #f3f3f3;padding-top: 10px;}
	.praise_collection span b{color: #f00;}
	.praise_collection span:first-child{margin-right: 20px;}
	.praise_collection .yaqin{color: #666;}
	li {
		list-style: none;
	}
	
	.carousel {
		width: 100%;
		height: 175px;
		overflow: hidden;
		margin: 0 auto;
		position: relative;
		background: #EDE6DC;
	}
	
	.carousel ul {
		width: 100%;
		height: 100%;
	}
	
	.carousel ul li {
		position: absolute;
		width: 100%;
	}
	
	.carousel ul li a img {
		width: 100%;
		/*height: 210px;*/
	}
	
	.bullet {
		position: absolute;
		font-size: 0;
		bottom: 10px;
		/*left: 50%;*/
		left: 0;
		right: 0;
		margin: auto;
	}
	
	.bullet span {
		display: inline-block;
		width: 25px;
    height: 5px;
		background-color: #ffffff;
		margin-left: 15px;
		border-radius: 10px;
	}
	
	.bullet span:first-child {
		margin-left: 0;
	}
	
	.switch {}
	
	.switch span {
		position: absolute;
		width: 50px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background-color: rgba(0, 0, 0, .1);
		font-size: 20px;
		color: #ffffff;
		top: 50%;
		margin-top: -25px;
		cursor: pointer;
		font-family: "宋体";
	}
	
	.switch span:hover {
		background-color: rgba(0, 0, 0, .5);
	}
	
	.prev {
		left: 0;
	}
	
	.next {
		right: 0;
	}
	
	.active {
		background-color: #006aff !important;
	}
	#introduce{text-align: left;font-size: 18px}
	#xiangqing{
		text-indent:36px;padding:20px 10px;box-sizing: border-box;
	}
	#xiangqing .p1{margin-top: 10px;}
	.mint-header{
		height: 2.2rem;line-height: 2.2rem;color: #FFF;background-color: #006f3e;
	}
	.content_2{display: flex;justify-content: space-between;color: #333;}
</style>