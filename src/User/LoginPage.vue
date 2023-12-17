<script setup lang="ts">
import { ref } from 'vue'
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth'
import router from '../routes'
import { auth } from '../Authentication/file'
const email = ref('')
const password = ref('')

const signIn = async () => {
  try {
    await setPersistence(auth, browserLocalPersistence)
    await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log('Successful sign-in!')
    router.push('/')
  } catch (error) {
    console.log('reached catch')
    alert(error)
  }
}
</script>

<template>
  <div class="">
    <div class="min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-emerald-500">
          Sign in your existing account below
        </h2>
      </div>

      <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="w-full text-start">
          <label for="email" class="text-align-left text-sm font-medium leading-6 text-emerald-500"
            >Email address</label
          >
        </div>
        <div>
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              v-model="email"
              required="true"
              class="w-full border-0 py-1.5 text-gray-900 shadow-sm ring-emerald-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="relative top-2">
          <div class="flex items-center justify-between">
            <label for="password" class="top-10 text-sm font-medium leading-6 text-emerald-500"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required="true"
              v-model="password"
              class="w-full border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            class="flex w-full justify-center text-emerald-500 bg-emerald-500 px-3 py-1.5 text-sm font-semibold leading-6 relative top-5 text-white shadow-sm hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            @click="signIn"
          >
            Sign in
          </button>
        </div>

        <p class="mt-10 text-center text-sm text-gray-500">
          New user?
          {{ '  ' }}
          <router-link
            to="/Register"
            class="font-semibold leading-6 text-emerald-500 hover:text-emerald-600"
            >Register</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
