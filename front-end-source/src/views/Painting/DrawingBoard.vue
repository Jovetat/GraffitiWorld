<template>
  <MirrorShows />
</template>
<script>
import MirrorShows from './MirrorShows.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DrawingBoard',
  components: { MirrorShows },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
