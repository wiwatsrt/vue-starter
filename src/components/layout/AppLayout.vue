<template>
  <div id="app">
    <div class="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />
      <div class="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div class="pt-2 pb-6 md:py-6">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <slot name="header" />
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <slot />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'

export default defineComponent({
  components: {
    Navbar,
    Sidebar,
  },
  setup() {
    return {}
  },
})
</script>
