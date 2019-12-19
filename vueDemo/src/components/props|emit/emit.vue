<template>
  <div class="sub">
    <p>{{age}}</p>
    <input type="button" value="获取子级数据" @click="handData" />123
  </div>
</template>

<script>
  let _this;
  export default {
    props: ["setText","nums", "status"],
    data() {
      return {
        age: '文字修改前',
        test: "子级数据"
      }
    },
    created(){
      _this = this;


      if(_this.status) {

        _this.age = _this.setText+_this.nums;
      }
    },

    methods: {
      handData(){
        console.log("发送子级数据~");
       _this.$emit("emitData", _this.nums, _this.test);
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  input {
    border: 1px solid #ccc;
  }
</style>
