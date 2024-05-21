<template>
  <h2>当前求和为: {{ sum }}</h2>
  <button @click="sum++">点我加一</button>
  <h2>当前点击时鼠标的坐标是：x {{ point.x }} --- y {{ point.y }}</h2>
</template>

<script>
import { ref } from 'vue';
import savaPoint from '../hooks/usePoint';

export default {
  name: 'Demo',
  setup() {
    console.log('---setup---');
    // 数据
    let sum = ref(0);


    let point = savaPoint()
    console.log('point', point);


    // 返回一个对象（常用）
    return {
      sum,
      point
    }
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
