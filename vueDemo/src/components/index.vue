<template>
	<div class='index'>

	</div>
</template>

<script>
	export default {
		name: "index",
		data() {
			return {

			};
		},


		//方法集合
		methods: {
      deepClone(obj){
          let objClone = Array.isArray(obj)?[]:{};
          if(obj && typeof obj==="object"){
              for(let key in obj){
                  if(obj.hasOwnProperty(key)){
                      //判断ojb子元素是否为对象，如果是，递归复制
                      if(obj[key]&& typeof obj[key] ==="object"){
                          objClone[key] = this.deepClone(obj[key]);
                      }else{
                          //如果不是，简单复制
                          objClone[key] = obj[key];
                      }
                  }
              }
          }

          return objClone;
      }
		},
		//生命周期 - 创建完成（可以访问当前this实例）
		created() {

		},
		//生命周期 - 挂载完成（可以访问DOM元素）
		mounted() {

      let obj = [
        {
          "txt": "123",
          a: {
            "test": "0912",
            b: {
              "test": "0912"
            }
          }
        },
        {
          "txt": "456",
          a: {
            "test": "0912",
            b: {
              "test": "0912"
            }
          },
        },
       ]
      console.log(this.deepClone(obj));
		},


	}
</script>

<style scoped>
	/* @import url(); 引入公共css类 */

</style>
