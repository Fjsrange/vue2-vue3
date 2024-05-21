<template>
  <h4>当前的x值是：{{ x.y }}</h4>
  <button @click="x = { y: 888 }">点我替换x</button>
  <button @click="x.y++">点我替换x</button>
  <hr>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef } from 'vue';

export default {
  name: 'Demo',
  setup() {
    // 数据
    // let person = shallowReactive({ // 只考虑第一层数据的响应式（浅响应式）
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    let x = shallowRef({
      y: 0
    })

    console.log('xxxx', x);



    // 返回一个对象（常用）
    return {
      x,
      ...toRefs(person)
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
