<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <!-- 第三步，以标签的形式显示该组件 -->
  <!-- <MyComponent :title="title" :age="age" :names="names"/> -->
  <MyComponent @onEvent="getDataHandle" />

  <h2>子组件向父组件传递的数据: {{ message }}</h2>
  <!-- 或者用-连接 -->
  <!-- <my-component /> -->

  <MySwiperSlideVue/>
  <MyAxios/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//第一步，引入自定义的组件
import MyComponent from './components/MyComponent.vue'
import MySwiperSlideVue from './components/MySwiperSlide.vue'
import MyAxios from './components/MyAxios.vue'


export default {
  name: 'App',
  // data(){
  //   return{
  //     title:"我是来自App.vue中的一个标题",
  //     age:20,
  //     //传递数组类型
  //     names:["iwen","ime","frank"]
  //   }
  // },
  
  //第二步，挂载导入的组件
  components: {
    HelloWorld,
    MyComponent,
    MySwiperSlideVue,
    MyAxios
  },

  data(){
    return{
      message:""
    }
  },
  methods:{
    getDataHandle(data){
      console.log(data);
      this.message=data;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
