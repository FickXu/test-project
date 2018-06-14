<template>
	<div class="no-modules">
		<div class="header">{{ msg }}</div>
		<!-- 非modules -->
		<div class="card">
			<div class="title border-bottom">非Modules</div>
			<div class="item">用户名：{{ getUserInfo.username}}</div>
			<div class="item">仓库名：{{ getUserInfo.warename}}</div>
			<div class="item">
                <button @click="updateWare">修改仓库名</button>
            </div>
		</div>

	</div>
</template>

<script>
export default {
	name: "noModules",
	data() {
		return {
		msg: "非Modules状态管理"
		};
    },
    computed: {
        getUserInfo() {
            return this.$store.state.loginUser
        }
    },
    mounted() {
        console.log('noModules.vue', this.getUserInfo)
    },
    methods: {
        updateWare() {
            this.$store.commit('setUser', {
                username: 'Sa',
                warename: 'abc'
            })
        }
    },
    created() {
        this.$store.dispatch('getUser');
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
}
</style>
