<template>
  <div class="home">
    <div class="min-h-screen flex items-center justify-center">
      <HelloWorld msg="Hello Vue 3 + TypeScript + Tailwind" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
})
</script>
