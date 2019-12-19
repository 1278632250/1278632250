<template>
	<div class='lifeCycle'>
    vue教程之一目了然『 生命周期钩子 』
    <p>通俗说就是Vue实例从创建到销毁的过程,<br />就是生命周期</p>
    <br />
    <p>vue实例中的生命周期：<br />
    beforeCreate( 创建前 )、created ( 创建后 ）、beforeMount（ 挂载前 ）、mounted（ 挂载后 ）、<br />beforeUpdate（ 更新前 ）、updated（ 更新后 ）、destroyed（ 销毁前 ）、beforeDestrioy（ 销毁后 ）</p>

    <button @click="updates">Update（ 更新数据 ）</button>
    <button @click="startUp">启动定时器</button>
    <div>{{text}}</div>
	</div>
</template>

<script>
  let _this;

	export default {
    name: "lifeCycle",
		data() {
			return {
        text: "初始化数据",
        timer: null,
			}
		},

    beforeCreate(){
      //生命周期 - 创建之前
      console.log('beforeCreate: 刚刚new Vue()之后，数据还没有挂载，这个时候取不到实例里面的数据（data）');
      //alert("beforeCreate( 创建前 )");
    },

		//生命周期 - 创建完成（可以访问当前this实例）
		created() {
      _this = this;
      console.log('created:这个时候已经可以使用到数据，也可以更改数据,在这里更改数据不会触发updated函数');
      //alert("created( 创建后 )");
		},

    //生命周期 - 挂载前
    beforeMount(){
      console.log('beforeMount：虚拟dom已经创建完成，马上就要渲染,在这里也可以更改数据，不会触发updated')
      //alert("beforeMount( 挂载前 )");
    },

    //生命周期 - 挂载后
    mounted(){
      console.log('mounted：此时，组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了')
      //alert("beforeMount( 挂载后 )");
    },

    //生命周期 - 更新前
    beforeUpdate(){
      // 此处不能修改数据，否则陷入死循环
      console.log('beforeUpdate:重新渲染之前触发，');
      //alert("beforeUpdate( 更新前 )");
    },

    //生命周期 - 更新后
    updated(){
      // 此处不能修改数据，否则陷入死循环
      console.log('updated:数据已经更改完成，dom也重新render完成');
      //alert("updated( 更新后 )");
    },

    //生命周期 - 销毁前
    beforeDestroy(){
      console.log('beforeDestory:销毁前执行（$destroy方法被调用的时候就会执行）, 清除计时器、清除非指令绑定的事件等等...')
      //alert("beforeDestroy( 销毁前 )");
    },

    //生命周期 - 销毁后
    destroyed(){
      clearInterval(this.timer);
      console.log('destroyed:组件的数据绑定、监听...都去掉了,只剩下dom空壳，清除计时器、清除非指令绑定的事件等等...')
      //alert("destroyed( 销毁后 )");
    },

    methods: {
      updates(){
        this.text = "更新后";
      },

      startUp(){
        let i = 0;
        this.timer = setInterval(()=>{
          console.log("定时器启动~"+(i+=1));
        }, 2000)
      },
    }

	}
</script>

<style scoped>
	/* @import url(); 引入公共css类 */

</style>
