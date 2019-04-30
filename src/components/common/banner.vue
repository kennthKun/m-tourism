<template>
	<div class="carousel" @mouseenter="enter" @mouseleave="leave">
		<transition-group tag="ul" name="image"  :enter-active-class="animate[mark].inanimate" :leave-active-class="animate[mark].outanimate">
			<li v-for='(image,index) in img' :key='index' v-show="index === mark">
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
					'https://www.0744.cn/uploads/2016/0919/23020093c650e4be3ac0b6b4c82cd433_640x300.jpg',
					'https://www.0744.cn/uploads/2016/0919/d413c3f64ebce2279e2fd17e0e06d679_640x300.jpg',
					'https://www.0744.cn/uploads/2016/0923/7e01a5298a1091f68b3f4d1c601dd46c_640x300.jpg',
					'https://www.0744.cn/uploads/2016/0919/8d89b84fcf4f16cd53d9632652fcb438_640x300.jpg',
					'https://www.0744.cn/uploads/2016/0919/67cd5ac0e9993670fa8ab0274949f161_640x300.jpg'
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

<style>
	
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