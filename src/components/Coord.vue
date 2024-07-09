<template>
  <div
    class="grid grid-cols-[6rem_6rem_6rem_6rem_1fr] px-8 hover:bg-gray-100 border-b border-gray-200"
    :title="props.text"
  >
    <div class="px-4 py-2">
      <p class="text-right">
        <span class="font-bold">{{ props.x }}</span>
      </p>
    </div>
    <div class="px-4 py-2 border-l border-gray-200">
      <p class="text-right">
        <span class="font-bold">{{ props.z }}</span>
      </p>
    </div>
    <div class="px-4 py-2 border-l border-gray-200">
      <p class="text-right">
        <span class="font-bold">{{ Math.floor(props.x / 8) }}</span>
      </p>
    </div>
    <div class="px-4 py-2 border-l border-gray-200">
      <p class="text-right">
        <span class="font-bold">{{ Math.floor(props.z / 8) }}</span>
      </p>
    </div>
    <div class="px-4 py-2 border-l border-gray-200">
      <p class="">{{ props.title }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  text: String,
  x: String,
  z: String,
})
</script>
