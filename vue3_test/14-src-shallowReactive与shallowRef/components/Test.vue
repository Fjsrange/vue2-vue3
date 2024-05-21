<template>
  <h2>我是test组件</h2>
  {{ point }}
</template>

<script>
import usePoint from '../hooks/usePoint'

export default {
  name: 'Test',
  setup() {
    const point = usePoint()

    return {
      point
    }
  }


}




</script>

<style lang="scss" scoped></style>