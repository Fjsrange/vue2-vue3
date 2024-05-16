<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作种类：{{ job.type }}</h2>
  <h2>薪水：{{ job.salary }}</h2>
  <button @click="changeInfo">修改个人信息</button>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  // 此处仅用于测试，不考虑响应式的问题
  setup() {
    // 数据
    let name = ref('张三');
    let age = ref(18);
    let job = ref({
      type: '前端工程师',
      salary: '30k'
    });

    // 方法
    function changeInfo() {
      // console.log('@', name, age);
      // ref: 引用对象、引用实现对象
      // RefImpl
      // Ref：reference 引用，Impl: implement 实现
      // name.value = '李四';
      // age.value = 20;
      job.value.type = 'UI设计师';
      job.value.salary = '50k';
      console.log(job.value);

    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      job,
      changeInfo
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
