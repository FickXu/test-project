<template>
	<div class="hello">
		<div class="header">{{ msg }}</div>
		<!-- 非modules -->
		<div class="card">
			<div class="title border-bottom">非Modules</div>
			<router-link class="item" tag="div" :to="{path:'/noModules'}">非Modules方式的状态管理 </router-link>
		</div>

		<!-- modules -->
		<div class="card">
			<div class="title border-bottom">Modules</div>
			<router-link class="item" tag="div" :to="{path: '/modules'}">Modules方式的状态管理</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "store",
	data() {
		return {
		msg: "全局状态管理"
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
}
</style>
