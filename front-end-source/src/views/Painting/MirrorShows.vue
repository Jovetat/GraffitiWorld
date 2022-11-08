<template>
  <div class="mirror">
    <canvas ref="canvasRef" />
    <video ref="videoRef"></video>
  </div>
</template>
<script>
import { handInit } from '@/hooks/useHandTrack'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'MirrorShows',
  setup() {
    const canvasRef = ref(null)
    const videoRef = ref(null)

    onMounted(() => {
      handInit(canvasRef.value, videoRef.value)
    })

    return {
      canvasRef,
      videoRef,
    }
  },
})
</script>

<style lang="less" scoped>
.mirror {
  width: 270px;
  height: 200px;
  background-color: black;
  canvas {
    width: 100%;
    height: 100%;
  }
  video {
    width: 100%;
    height: 100%;
  }
}
</style>
