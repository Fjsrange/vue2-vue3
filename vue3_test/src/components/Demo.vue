<template>
  <h1>一个人的信息</h1>
  姓：<input type="text" v-model="person.fistName" />
  <br />
  名：<input type="text" v-model="person.lastName" />
  <br />
  全名：<span>{{ person.fullName }}</span>
  <br />
  全名：<input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'Demo',
  setup() {
    // 数据
    let person = reactive({
      fistName: '张',
      lastName: '三'
    });

    // 计算属性——简写（没有考虑计算属性被修改的情况）
    // person.fullName = computed(() => {
    //   return person.fistName + '-' + person.lastName
    // })

    // 完整写法（考虑读和写）
    person.fullName = computed({
      get() {
        return person.fistName + '-' + person.lastName
      },
      set(value) {
        const newArr = value.split('-')
        person.fistName = newArr[0]
        person.lastName = newArr[1]
      }
    })


    // 返回一个对象（常用）
    return {
      person,
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
