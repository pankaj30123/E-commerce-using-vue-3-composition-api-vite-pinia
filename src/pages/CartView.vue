<script setup lang="ts">
import { computed } from 'vue'
import CartComp from '../components/CartComp.vue'
import NavView from '@/components/NavView.vue'
import CardLayout from '../components/CardLayout.vue'
import { toCurrency } from '../shared/utils'
import { useCartStore } from '../store/cart'
import { useProductStore } from '../store/product'

const cartStore = useCartStore()
const productStore = useProductStore()

const formattedCart = computed(() => cartStore.formattedCart)
</script>

<template>
  <NavView />
  <div class="p-4 max-w-4xl mx-auto">
    <div v-if="!productStore.loaded" class="space-y-4">
      <CardLayout v-for="n in 15" :key="n" />
    </div>
    <div v-else-if="!formattedCart.length">
      <h1 class="text-xl">Cart is empty.</h1>
    </div>
    <div v-else class="space-y-4">
      <CartComp
        v-for="(cartProduct, index) in formattedCart"
        :key="index"
        :cart-product="cartProduct"
      />
      <div class="text-right text-2xl md:text-4xl">Total: {{ toCurrency(cartStore.total) }}</div>
    </div>
  </div>
</template>
