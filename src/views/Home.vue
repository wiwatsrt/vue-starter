<template>
  <app-layout>
    <template #header>
      <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
    </template>
    <div class="py-4">
      <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
    </div>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLayout from '@/components/layout/AppLayout.vue'

export default defineComponent({
  name: 'Home',
  components: {
    AppLayout,
  },
})
</script>
