<template>
  <span>画板</span>
  <img ref="imgRef" />
</template>
<script>
import { handInit } from '@/hooks/useHandTrack'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'DrawingBoard',
  setup() {
    const imgRef = ref(null)

    onMounted(() => {
      // handInit(imgRef.value)
    })

    return {
      imgRef,
    }
  },
})
</script>
