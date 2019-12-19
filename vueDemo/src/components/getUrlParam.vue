<template>
	<div class='getUrlParam'>
		<p>http://localhost:8080/#/GoodsDetail?goods_id=58135&result=0&VNK=2a806339</p>
		<input type="text" v-model="urlVal" >
		<button @click="GetQuery(urlVal)">获取url指定参数</button>
		<p>指定参数：{{urlData}}</p>
	</div>
</template>

<script>
	export default {
		name: "getUrlParam",
		data() {
			return {
				url: 'http://localhost:8080/#/GoodsDetail?goods=58135&result=0&VNK=2a806339',
				urlVal: "", // 指定参数
				urlData: "",
			};
		},
		
		
		//方法集合
		methods: {
			GetQuery(val) {
				this.GetQueryString(val);
				this.urlData = this.GetQueryString(val);
			},
			GetQueryString(name) {
				console.log(name);
				if(name) {
					var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
					// var r = window.location.search.substr(1).match(reg);
					console.log(this.url.split("?")[1]);
					var r = this.url.split("?")[1].match(reg);
					if (r != null) return unescape(r[2]); return null;
				} else {
					alert("请输入指定key值");
				}
			},
			
		},
		//生命周期 - 创建完成（可以访问当前this实例）
		created() {

		},
		//生命周期 - 挂载完成（可以访问DOM元素）
		mounted() {

		},
		
		
	}
</script>

<style scoped>
	/* @import url(); 引入公共css类 */
	
</style>
