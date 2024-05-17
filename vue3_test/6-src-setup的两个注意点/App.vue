<template>
  <Demo @hello="showHelloMsg" msg="你好啊" school="尚硅谷">
    <template v-slot:row>
      <span>尚硅谷</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'

export default {
  name: 'App',
  components: { Demo },
  setup() {
    function showHelloMsg(value) {
      console.log(`你好啊, 你触发了hello事件，我收到的参数是${value}! `)
    }

    return {
      showHelloMsg
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
