<template>
  <div class="mirror">
    <video ref="videoRef" autoplay="autoplay" />
    <canvas ref="canvasRef" />
    <a-button @click="startVideo">开始</a-button>
    <button @click="stopVideo">关闭</button>
  </div>
</template>
<script>
import { handInit, startVideo, stopVideo } from '@/hooks/useHandTrack'
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
      startVideo,
      stopVideo,
    }
  },
})
</script>

<style lang="less" scoped>
.mirror {
  width: 351px; // w27:h20
  height: 260px;
  background-color: black;
  canvas {
    width: 100%;
    height: 100%;
  }
  video {
    display: none;
    width: 100%;
    height: 100%;
  }
}
</style>
