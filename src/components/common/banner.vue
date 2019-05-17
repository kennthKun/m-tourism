<template>
	<div class="carousel" @mouseenter="enter" @mouseleave="leave">
		<transition-group tag="ul" name="image"  :enter-active-class="animate[mark].inanimate" :leave-active-class="animate[mark].outanimate">
			<li v-for='(image,index) in img' :key='image' v-show="index === mark">
				<a href="javascript:;">
					<img :src="image">
				</a>
			</li>
		</transition-group>
		<div class="bullet">
			<span v-for="(item,index) in img.length" :class="{'active':index === mark}" @click="change(index)" :key="index"></span>
		</div>
	</div>
</template>

<script>
	
	export default {
		
		name:'banner',
		data() {
			return {
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
		methods: { //添加方法
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
		created() {
			this.play()
		}
	}
</script>

<style scoped="scoped">
	
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
</style>