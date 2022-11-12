<template>
  <a-button @click="startMirror">开始</a-button>&nbsp;&nbsp;&nbsp;
  <a-button @click="stopMirror">关闭</a-button>
  <MirrorShows ref="mirror" />
</template>
<script>
import MirrorShows from './MirrorShows.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DrawingBoard',
  components: { MirrorShows },
  setup() {
    const mirror = ref(null)

    const startMirror = () => {
      mirror.value.startMirror()
    }
    const stopMirror = () => {
      mirror.value.stopMirror()
    }

    return { mirror, startMirror, stopMirror }
  },
})
</script>

<style scoped></style>
