<template>
  <div class="rounded-full overflow-hidden">
    <img v-if="src" :class="className" :src="src" :alt="name" />
    <div
      v-if="!src"
      :class="className"
      class="flex items-center justify-center font-medium uppercase text-white bg-primary-300"
      :alt="name"
    >
      {{ initials }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: String,
    name: {
      type: String,
      default: '',
    },
    className: String,
  },

  setup(props) {
    const getInitials = (name: string): string => {
      const [firstName, lastName] = name.split(' ')

      if (firstName && lastName) {
        return `${firstName.charAt(0)}${lastName.charAt(0)}`
      } else {
        return firstName.charAt(0)
      }
    }

    const initials = props.name ? getInitials(props.name) : ''

    return {
      initials,
    }
  },
})
</script>

<style scoped></style>
