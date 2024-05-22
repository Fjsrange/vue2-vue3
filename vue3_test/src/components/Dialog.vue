<template>
  <div>
    <button @click="isShow = true">点我弹窗</button>
    <teleport to="#atguigu">
      <div class="mask" v-if="isShow">
        <div class="dialog">
          <h3>我是一个弹窗</h3>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <button @click="isShow = !isShow">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref, provide } from 'vue';

export default {
  name: 'Dialog',
  components: {},
  setup() {
    let isShow = ref(false)

    return {
      isShow
    }
  }
}
</script>
<style scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center
}

.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background-color: green;
  color: #fff;
  text-align: center;
}
</style>