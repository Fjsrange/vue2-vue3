<template>
  <input type="text" v-model="keyword">
  <h3>{{ keyword }}</h3>
</template>

<script>
import { ref, customRef } from 'vue'

export default {
  name: 'App',
  setup() {
    // 自定义有一个ref——名为：myRef
    function myRef(value, delay) {
      let timer;
      console.log('---myRef---', value);
      return customRef((trick, trigger) => {
        return {
          get() {
            console.log('---get---', value);
            trick(); // 告诉vue追踪数据的变化
            return value
          },
          set(newValue) {
            console.log('---set---', newValue);
            clearTimeout(timer);
            // 防抖
            timer = setTimeout(() => {
              value = newValue;
              trigger(); // 通知vue去重新解析模板
            }, delay)
          }
        }
      })
    }
    // let keyword = ref('hello'); // 使用vue提供的ref
    let keyword = myRef('hello', 500); // 使用程序员自定义的ref

    return {
      keyword
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
