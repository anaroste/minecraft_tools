<template>
  <div
    class="flex items-center gap-2 px-3 py-2 rounded transition-colors"
    :class="{
      'hover:bg-emerald-600 active:bg-emerald-700 cursor-pointer':
        !props.active,
      'bg-emerald-600': props.active,
    }"
  >
    <Icon v-if="props.icon" :name="props.icon" />
    <p v-if="props.text" class="font-semibold">{{ props.text }}</p>
  </div>
</template>

<script setup>
import { Icon } from '@/components'

const props = defineProps({
  text: String,
  icon: String,
  active: Boolean,
})
</script>
