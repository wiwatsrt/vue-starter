<template>
  <div class="flex">
    <!-- Off-canvas menu for mobile -->
    <transition leave-active-class="duration-300">
      <div v-show="isSidebarOpen" class="md:hidden">
        <div class="fixed inset-0 flex z-40">
          <!--
              Off-canvas menu overlay, show/hide based on off-canvas menu state.
            -->
          <transition
            enter-active-class="transition-opacity ease-linear duration-300"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity ease-linear duration-300"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-show="isSidebarOpen" class="fixed inset-0">
              <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
          </transition>
          <!--
              Off-canvas menu, show/hide based on off-canvas menu state.
            -->
          <transition
            enter-active-class="transition ease-in-out duration-300 transform"
            enter-class="-translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition ease-in-out duration-300 transform"
            leave-class="translate-x-0"
            leave-to-class="-translate-x-full"
          >
            <div
              v-show="isSidebarOpen"
              class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800"
            >
              <div class="absolute top-0 right-0 -mr-14 p-1">
                <button
                  v-show="isSidebarOpen"
                  aria-label="Close sidebar"
                  class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                  @click="hideSidebar"
                >
                  <svg
                    class="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex-shrink-0 flex items-center px-4">
                <Logo />
              </div>
              <div class="mt-5 flex-1 h-0 overflow-y-auto">
                <nav class="px-2">
                  <sidebar-link />
                </nav>
              </div>
            </div>
          </transition>
          <div class="flex-shrink-0 w-14">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </div>
    </transition>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
          <Logo />
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto">
          <nav class="flex-1 px-2 py-4 bg-gray-800">
            <sidebar-link text-size="sm" />
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Logo from '@/components/Logo.vue'
import SidebarLink from './SidebarLink.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    Logo,
    SidebarLink,
  },
  setup() {
    const store = useStore()

    const isSidebarOpen = computed(() => store.getters['app/isSidebarOpen'])

    const hideSidebar = () => store.dispatch('app/hideSidebar')

    return {
      isSidebarOpen,
      hideSidebar,
    }
  },
})
</script>
