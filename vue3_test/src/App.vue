<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
import { h } from 'vue';

export default {
  name: 'App',
  // 此处仅用于测试，不考虑响应式的问题
  setup() {
    // 数据
    let name = '张三';
    let age = 18;

    // 方法
    function sayHello() {
      console.log(`我叫${name}, 我今年${age}岁了，你好啊！`);
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      sayHello
    }

    // 返回一个函数（渲染函数）
    // return () => h('h1', '尚硅谷')
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
