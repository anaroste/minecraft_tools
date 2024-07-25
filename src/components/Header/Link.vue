<template>
  <RouterLink class="flex py-2" :to="{ name: props.name }">
    <div
      class="flex items-center gap-2 px-2 rounded"
      :class="{
        'hover:bg-gray-100 active:bg-gray-200 cursor-pointer': !active,
        'text-emerald-700': active,
      }"
    >
      <Icon :name="props.icon" />
      <p class="font-bold">{{ props.text }}</p>
    </div>
  </RouterLink>
</template>

<script setup>
import { Icon } from '@/components'

const route = useRoute()

const props = defineProps({
  icon: String,
  name: String,
  text: String,
})

const active = computed(() => route.name === props.name)
</script>
