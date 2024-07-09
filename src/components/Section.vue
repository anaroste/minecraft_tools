<template>
  <section class="h-1/3 grid grid-rows-[auto_1fr]">
    <header
      class="flex items-center justify-between px-8 py-2 border-b border-gray-200 bg-gray-100"
    >
      <h2 class="font-semibold">{{ props.title }}</h2>
      <Button text="Add" icon="add" @click="emits('add')" />
    </header>
    <div class="overflow-y-scroll">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { Button } from '@/components'

const props = defineProps({
  title: String,
})

const emits = defineEmits(['add'])
</script>
