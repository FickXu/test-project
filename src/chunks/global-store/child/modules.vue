<template>
	<div class="no-modules">
		<div class="header">{{ msg }}</div>
		<!-- 非modules -->
		<div class="card">
			<div class="title border-bottom">非Modules</div>
			<div class="item">账号：{{ getLogin.username}}</div>
			<div class="item">密码：{{ getLogin.password}}</div>
			<div class="item">
                <button @click="changeAccount">修改账号</button>
            </div>
		</div>

	</div>
</template>

<script>
export default {
	name: "modulespage",
	data() {
		return {
		msg: "Modules状态管理"
		};
    },
    computed: {
        getLogin() {
            return this.$store.state.Login.account
        }
    },
    mounted() {
        console.log('Modules.vue', this.getLogin)
    },
    methods: {
        changeAccount() {
            this.$store.commit('logining', {
                username: 'b',
                password: '$$$$$$'
            })
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
}
</style>
