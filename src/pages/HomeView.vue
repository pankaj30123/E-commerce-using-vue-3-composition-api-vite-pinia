<script setup lang="ts">
import { computed } from 'vue'
import NavView from '@/components/NavView.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductCardSkeleton from '@/components/CardLayout.vue'
import { useProductStore } from '@/store/product'

const productStore = useProductStore()

const products = computed(() => productStore.list)
</script>

<template>
  <NavView />
  <div class="p-4 max-w-7xl mx-auto">
    
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ProductCardSkeleton
        v-for="n in 15"
        v-show="!productStore.loaded"
        :key="n"
      />
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
