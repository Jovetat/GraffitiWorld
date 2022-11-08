<template>
  <span>home</span>
  <DrawingBoard />
</template>
<script>
import { defineComponent } from 'vue'
import DrawingBoard from './DrawingBoard.vue'

export default defineComponent({
  name: 'HomePage',
  setup() {
    return {}
  },
})
</script>
