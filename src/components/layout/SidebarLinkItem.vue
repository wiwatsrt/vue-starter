<template>
  <router-link v-slot="{ isActive, href }" :to="url" custom>
    <router-link
      :to="href"
      :class="[
        isActive
          ? 'text-white bg-gray-900'
          : 'text-gray-300 hover:text-white hover:bg-gray-700 ',
      ]"
      class="mt-1 group flex items-center px-2 py-2 leading-6 font-medium rounded-md focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
    >
      <slot />
    </router-link>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    url: {
      type: String,
      default: '/',
      required: true,
    },
  },
})
</script>
