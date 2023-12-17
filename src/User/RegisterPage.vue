<script setup lang="ts">
import { ref } from 'vue'
import { auth } from '../Authentication/file'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import router from '../routes'

const email = ref<any>('')
const password = ref<any>('')
const errorMessage = ref<any>('')

const signup = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    router.push('/')
  } catch (error) {
    const errorCode = error
    if (errorCode === 'auth/email-already-in-use') {
      errorMessage.value = 'The email address is already in use'
      console.log(errorMessage)
    }
  }
}
</script>

<template>
  <div class="flex min-h flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-0 text-center text-2xl font-bold text-emerald-500">Register below</h2>
      <form class="max-w-sm mx-auto space-y-2">
        <div class="mb-4">
          <label for="email" class="text-sm font-medium text-emerald-500 leading-6"
            >Email address</label
          >
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            required
            v-model="email"
            class="w-full py-1.5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6;"
          />
        </div>

        <div class="mb-4">
          <div class="flex items-center justify-between">
            <label for="password" class="text-sm font-medium leading-6 text-emerald-500"
              >Password</label
            >
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
            v-model="password"
            class="@apply w-full py-1.5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6;"
          />
        </div>

        <div>
          <button
            type="button"
            @click="signup"
            class="flex w-full justify-center bg-emerald-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600;"
          >
            Register here
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500 ">
        Registered user ?
        <router-link to="/Login" class="link">Sign In</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.link {
  @apply font-semibold leading-6 text-emerald-500 hover:text-emerald-500;
}
</style>
