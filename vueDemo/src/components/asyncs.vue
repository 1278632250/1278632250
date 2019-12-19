<template>
  <div class="promises">
    ES6教程之一目了然『 Promise 』
    <p>建立三个异步函数，模拟后台访问的接口</p>
  </div>
</template>

<script>
  export default{
    name: "promises",
    data() {
      return {

      }
    },

    mounted(){
      // 执行运行函数
      this.run();
    },

    methods: {
      // 运行函数
      run(){
        // 顺序执行
         this.acync1().then((data)=>{

            console.log(data);
            return this.acync2();

         }).then((data)=>{

            console.log(data);
            return this.acync3();

         }).then((data) => {

           console.log(data);
           console.log("then的返回值(return) 可做下一次的异步操作~");

         })
      },

      // 异步1
      acync1(){
        let ay1 = new Promise((resolve, reject) => {
            // 异步操作
            setTimeout(() => {
              console.log("测试异步1完成~");
              // resolve 完成的回调函数
              // reject 失败的回调函数
              let obj = {
                text: "返回参数1",
                code: 200,
              }
              resolve(obj)

            }, 1500);
        })
        return ay1;
      },

      // 异步2
      acync2(){
        let ay2 = new Promise((resolve, reject) => {
            // 异步操作
            setTimeout(() => {
              console.log("测试异步2完成~");
              // resolve 完成的回调函数
              // reject 失败的回调函数
              let obj = {
                text: "返回参数2",
                code: 200,
              }
              resolve(obj);
            }, 5000);
        })
        return ay2;
      },

      // 异步3
      acync3(){
        let ay3 = new Promise((resolve, reject) => {
            // 异步操作
            setTimeout(() => {
              console.log("测试异步3完成~");
              // resolve 完成的回调函数
              // reject 失败的回调函数
              let obj = {
                text: "返回参数3",
                code: 200,
              }
              resolve(obj);
            }, 1000);
        })
        return ay3;
      },
    }

  }
</script>

<style>
</style>
