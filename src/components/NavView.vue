<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCartStore } from '../store/cart'
import Search from './SearchView.vue'
import routes from '../routes'
import { getAuth, signOut } from 'firebase/auth'

const cartStore = useCartStore()
const count = ref<number>(cartStore.count)
const auth = getAuth()

watch(
  () => cartStore.count,
  (newCount) => {
    count.value = newCount
  }
)

const logOut = async () => {
  try {
    await signOut(auth!)
    console.log('Sign out successful')
    routes!.push('/login')
  } catch (error) {
    console.log(error)
    alert(error)
  }
}
</script>

<template>
  <div class="navbar mb-2 shadow-lg bg-emerald-700 text-neutral-content">
    <div class="flex-none lg:hidden">
      <label for="drawer-input" class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>
    </div>
    <div class="flex-none px-2 mx-2">
      <span class="text-lg font-bold">Fashion Store</span>
    </div>
    <div class="flex-1 px-2 mx-2">
      <div class="items-stretch hidden lg:flex">
        <router-link class="btn btn-ghost btn-sm rounded-btn" to="/"> Home </router-link>
        <router-link class="btn btn-ghost btn-sm rounded-btn" to="/cart">
          Cart
          <div class="badge ml-2 badge-outline" v-text="count" />
        </router-link>
      </div>
    </div>
    <div class="flex-1 lg:flex-none mx-2">
      <Search />
    </div>
    <button @click="logOut" class="border border-black bg-emerald-500 px-2 py-2 rounded-md">
      <div class="text-black">Logout</div>
    </button>
  </div>
</template>
