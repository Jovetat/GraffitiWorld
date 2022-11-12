<template>
  <div class="mirror">
    <a-spin tip="加载中..." :spinning="cameraLoading">
      <video ref="videoRef" autoplay="autoplay" />
      <canvas ref="canvasRef" />
    </a-spin>
  </div>
</template>
<script>
import { handInit, startVideo, stopVideo } from '@/hooks/useHandTrack'
import { defineComponent, onMounted, ref } from 'vue'
import { message } from 'ant-design-vue'

export default defineComponent({
  name: 'MirrorShows',
  setup() {
    const canvasRef = ref(null)
    const videoRef = ref(null)
    const cameraLoading = ref(false)

    onMounted(() => {
      message.loading({
        content: '模型加载中...',
        key: 'modelLoading',
      })
      handInit(canvasRef.value, videoRef.value, () => {
        message.success({
          content: '模型加载完毕!',
          key: 'modelLoading',
          duration: 2,
        })
      })
    })

    const startMirror = () => {
      cameraLoading.value = true
      startVideo(() => {
        cameraLoading.value = false
      })
    }
    const stopMirror = () => {
      stopVideo()
    }

    return {
      canvasRef,
      videoRef,
      cameraLoading,
      startMirror,
      stopMirror,
    }
  },
})
</script>

<style lang="less" scoped>
.mirror {
  width: 351px; // w27:h20
  height: 260px;
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
