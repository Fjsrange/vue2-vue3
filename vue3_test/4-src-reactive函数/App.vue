<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>工作种类：{{ person.job.type }}</h2>
  <h2>爱好：{{ person.hobby }}</h2>
  <h2>测试的数据C: {{ person.job.a.b.c }}</h2>
  <button @click="changeInfo">修改个人信息</button>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'App',
  // 此处仅用于测试，不考虑响应式的问题
  setup() {
    // 数据
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端工程师',
        salary: '30k',
        a: {
          b: {
            c: 666
          }
        }
      },
      hobby: ['抽烟', '喝酒', '烫头']
    });


    // 方法
    function changeInfo() {
      // console.log('@', name, age);
      // ref: 引用对象、引用实现对象
      // RefImpl
      // Ref：reference 引用，Impl: implement 实现
      person.name = '李四';
      person.age = 20;
      person.job.type = 'UI设计师';
      person.job.salary = '50k';
      person.job.a.b.c = 999;
      person.hobby[0] = '学习';
    }

    // 返回一个对象（常用）
    return {
      person,
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
