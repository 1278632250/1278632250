<template>
  <div class="menuRight">
    <ul>
      <li v-for="(item, index) in menu" :key="index">
        <div v-if="item.text" :class="item.active ? 'acitve' : ''" @click="GoPath(item.path, index)">{{item.text}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: "menuRight",
    data(){
      return {
        menu: [
          {
            path: "/",
            text: "vue生命周期",
            active: false,
          },
          {
            path: "/parent",
            text: "vue父子传参",
            active: false,
          },
          {
            path: "asyncs",
            text: "ES6异步加载",
            active: false,
          },
		  {
		    path: "getUrlParam",
		    text: "获取url指定参数值",
		    active: false,
		  },


        ]
      }
    },

    mounted(){
      for(let i in this.menu) {
        if(this.$route.name == this.menu[i].path) {
          this.menu[i].active = true;
        }
      }
    },

    methods: {
      GoPath(path, index){
        for(let i in this.menu) {
          this.menu[i].active = false;
        }
        this.menu[index].active = true;
        if(this.$route.name != path) {
          this.$router.push({
            path: path
          })
        }
      }
    }
  }
</script>

<style scoped>
  .menuRight {
    position: fixed;
    top: 20px;
    right: 0px;
    border: 1px solid #ccc;
    background-color: #eee;
    padding: 10px 10px;
    border-radius: 10px;
  }

  .menuRight li {
    line-height: 30px;
    cursor: pointer;
  }

  .menuRight li .acitve {
    color: red;
  }



</style>
