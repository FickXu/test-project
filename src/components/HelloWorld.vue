<template>
	<div class="hello">
		<div class="header">{{ msg }}</div>
		<!-- <div class="description">这个项目主要用来做一些功能性测试</div> -->
		<!-- 异步加载 -->
		<div class="card">
			<div class="title border-bottom">chuck的异步加载</div>
			<router-link class="item" tag="div" :to="{path:'One'}">chuck1: page1 </router-link>
			<router-link class="item" tag="div" :to="{path:'Two'}">chuck1: page2</router-link>
			<router-link class="item" tag="div" :to="{path:'Three'}">chuck2: page3</router-link>
			<router-link class="item" tag="div" :to="{path:'Four'}">chuck2: page4</router-link>
			<router-link class="item" tag="div" :to="{path:'Five'}">chuck2: page5</router-link>
		</div>
		
		<!-- 路由全匹配 -->
		<div class="card">
			<div class="title border-bottom">路由全匹配</div>
			<router-link class="item" tag="div" :to="{path:'/test/'}">这是一个无限层级的路由 </router-link>
		</div>

		<!-- 全局状态管理 -->
		<div class="card">
			<div class="title border-bottom">全局状态管理</div>
			<router-link class="item" tag="div" :to="{path: '/store'}">进入全局状态管理</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	data() {
		return {
		msg: "这是一个用来测试的项目"
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
}
</style>
