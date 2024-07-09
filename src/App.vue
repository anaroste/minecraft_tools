<template>
  <div
    id="app"
    class="flex flex-col min-h-screen bg-gray-50 text-gray-800 dark:text-zinc-50 dark:bg-zinc-900"
  >
    <img src="/biomes.png" class="w-fit" />
    <Saves />
    <Saves />
    <Saves />
  </div>
</template>

<script setup>
import { Saves } from '@/views'
</script>
