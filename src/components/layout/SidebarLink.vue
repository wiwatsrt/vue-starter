<template>
  <sidebar-link-item
    v-for="(link, key) in links"
    :key="key"
    :url="link.url"
    :class="[textSize == 'sm' ? 'text-sm' : 'text-base']"
  >
    {{ link.name }}
  </sidebar-link-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SidebarLinkItem from './SidebarLinkItem.vue'

export default defineComponent({
  components: {
    SidebarLinkItem,
  },
  props: {
    textSize: {
      type: String,
      default: 'base',
    },
  },
  setup() {
    const links = [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'About',
        url: '/about',
      },
    ]

    return {
      links,
    }
  },
})
</script>
