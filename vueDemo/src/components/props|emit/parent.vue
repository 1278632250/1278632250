<template>
  <div class="parent">
    vue教程之一目了然『 父子传参 』
    <p>props属性 VS $emit方法</p>
    <div class="describe">
      <p>
        1. 在子组件中创建一个props属性，接收父组件传的值<br/>
        2. 父组件中注册子组件<br/>
        3. 在子组件标签中添加子组件props中创建的属性<br/>
        4. 把需要传给子组件的值赋给该属性<br/>
      </p>
      <p>
        1. 子组件中需要以某种方式来触发一个自定义事件<br/>
        2. 将传的值作为$emit的第二个参数，该值将作为实参传给自定义事件的方法里<br/>
        3. 在父组件中注册子组件，并在子组件标签上绑定对自定义事件的监听<br/>
        <!-- 4. 在组件通信中，无论是子传父还是父传子，都有一个共同点就是有中间介质，子向父的介质是自定义事件，父向子的介质是props中的属性。抓准这两点对于父子通信就好理解了 -->
        <br/>
      </p>
    </div>
    <br />
    <br />
    <input type="button" value="修改" @click="setData" />
    <p>{{emitTxt}}</p>

    <br />
    <emitTemp :setText="text" :status="bools" :nums="num" v-if="bools" @emitData="getEmitData"></emitTemp>

  </div>
</template>

<script>
  let _this;
  import store from '../../store/store'
  import emitTemp from "./emit.vue"
  export default {
    components: {
      emitTemp
    },
    name: 'parent',
    data() {
      return {
        text: "文字修改后~",
        bools: true,
        num: 1,
        emitTxt: "父级数据",
      }
    },
    created(){
      _this = this;
       // console.log(_this.text);
      console.log("add方法 前", _this.$store.state.count);
      store.commit('add');  // 执行方法
      console.log("add方法 后", _this.$store.state.count);
    },

    methods: {
      setData(){
        _this.bools = !_this.bools;
        _this.num = _this.bools ? _this.num+=1 : _this.num;
        _this.text = "文字修改后~";
      },

      getEmitData(nums, data){
        console.log("拿到子页面的值");
        _this.emitTxt = data+nums;
      },




    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  input {
    border: 1px solid #ccc;
  }

  .describe {
    display: flex;
    justify-content: space-between;
    width: 720px;
    margin: 0 auto;
  }

  .describe p {
    width: 45%;
    text-align: left;
    margin: 0 auto;
    font-size: 14px;
    line-height: 26px;
    border: 1px solid #ccc;
    background: #eee;
    padding: 10px;
    border-radius: 10px;
  }

</style>
