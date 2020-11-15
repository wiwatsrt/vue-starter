<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full">
      <form class="bg-white shadow rounded-lg p-8" @submit.prevent="submitForm">
        <h2
          class="mb-6 uppercase text-center text-3xl leading-9 font-medium text-gray-900"
        >
          Login
        </h2>
        <div class="mb-4">
          <label class="block mb-2 font-bold text-gray-700" for="email"
            >Email</label
          >
          <input
            id="email"
            v-model="form.email"
            class="form-input mt-1 block w-full"
            type="email"
            autocomplete="email"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block mb-2 font-bold text-gray-700" for="password"
            >Password</label
          >
          <input
            id="password"
            v-model="form.password"
            class="form-input mt-1 block w-full"
            type="password"
            autocomplete="current-password"
            required
          />
        </div>

        <div class="mt-6 flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              v-model="form.rememberMe"
              class="form-checkbox"
              type="checkbox"
            />
            <label for="remember_me" class="ml-2 text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:underline"
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <div class="mt-6">
          <button
            type="submit"
            class="button button-primary w-full transition duration-150 ease-in-out"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

interface LoginForm {
  email: string
  password: string
  rememberMe: boolean
}

export default defineComponent({
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const form = ref<LoginForm>({
      email: '',
      password: '',
      rememberMe: false,
    })

    const submitForm = () => {
      store
        .dispatch('auth/signInWithEmail', {
          email: form.value.email,
          password: form.value.password,
        })
        .then(() => {
          router.push((route.query.redirect as string) || '/')
        })
        .catch((error) => {
          console.error(error.message)
        })
    }

    return {
      form,
      submitForm,
    }
  },
})
</script>
