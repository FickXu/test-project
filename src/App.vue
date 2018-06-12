<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		background-color: #eef1f6;
		width: 100vw;
		height: 100vh;
		overflow: auto;
		.border-bottom {
			border-bottom: 1px solid #e0e5ee;
		}
		.header {
			height: 49px;
			line-height: 49px;
			font-size: 25px;
			font-weight: bold;
			box-shadow: 0 0 5px #cccccc;
			background-color: #ffffff;
		}
		.description {
			font-size: 25px;
		}
		.card {
			background: #fff;
			margin: 20px 10px;
			padding: 0 15px;
			border-radius: 5px;
			box-shadow: 0px 2px 5px #ccc;
			.title,
			.item {
				min-height: 29px;
				display: flex;
				align-items: center;
				padding: 12px 0;
			}
			.title {
				display: inherit;
				text-align: center;
			}
			.item {
				text-align: left;
				word-break: break-all;
				&:not(:last-child) {
						border-bottom: 1px solid #e0e5ee;
				}
			}
		}
	}
</style>
