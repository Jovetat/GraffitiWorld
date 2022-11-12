<template>
  <DrawingBoard />
</template>
<script>
import { defineComponent } from 'vue'
import DrawingBoard from './DrawingBoard.vue'

export default defineComponent({
  name: 'HomePage',
  components: { DrawingBoard },
  setup() {
    return {}
  },
})
</script>
