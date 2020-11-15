<template>
  <div class="hello">
    <h1 class="text-5xl font-bold text-purple-500">
      {{ msg }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
})
</script>
