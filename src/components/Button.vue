<template>
  <div
    class="flex items-center gap-2 h-8 px-2 rounded bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white cursor-pointer transition-colors"
  >
    <Icon v-if="props.icon" :name="props.icon" />
    <p class="font-semibold text-sm">{{ props.text }}</p>
  </div>
</template>

<script setup>
import { Icon } from '@/components'

const props = defineProps({
  text: String,
  icon: String,
})
</script>
