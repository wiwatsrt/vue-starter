<template>
  <div className="relative">
    <div v-if="isOpen" class="fixed inset-0" @click="toggleDropdown"></div>
    <div @click="toggleDropdown">
      <slot name="trigger" />
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      leave-active-class="transition ease-in duration-75"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
      >
        <div
          className="py-1 rounded-md bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const isOpen = ref<boolean>(false)

    const toggleDropdown = () => (isOpen.value = !isOpen.value)

    return {
      isOpen,
      toggleDropdown,
    }
  },
})
</script>
