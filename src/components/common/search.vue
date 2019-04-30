<template>
	<div class="searchBox">
		<div class="searchInner">
			<span class="yaqin yq_search"></span>
			<input type="search" name="" id="search" value="" />
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="scoped" lang="scss" type="text/css">
	.searchBox{
		background: #EDE6DC;
		padding: 10px;
		box-sizing: border-box;
		display: flex;align-items: center;
	}
	.searchInner{
		background: #fff;
		width:100%;
		display: flex;
		align-items: center;
		padding: 5px;
		box-sizing: border-box;
		border-radius: 5px;
		.yaqin{
			margin-right: 10px;
		}
	}
	#search{background: #fff;flex: 1;}
</style>