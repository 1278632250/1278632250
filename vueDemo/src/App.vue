<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view/>
    <!-- 3. 使用组件 -->
    <menuRight></menuRight>
  </div>
</template>

<script>
// 1. 引用组件
import menuRight from './components/menuRight.vue'
export default {
	// 2. 注册组件
  components: {
   menuRight
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
