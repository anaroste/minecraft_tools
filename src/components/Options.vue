<template>
  <div
    class="flex h-10 rounded border border-gray-300 divide-x divide-gray-300"
  >
    <div
      v-for="option in props.options"
      class="flex items-center justify-center text-center"
      :class="{
        'bg-gray-200 cursor-pointer': option !== props.modelValue,
        'text-white bg-emerald-500': option === props.modelValue,
      }"
      style="flex: 1"
      @click="handleInput(option)"
    >
      <p class="font-medium">{{ option }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  options: Array,
})

const emits = defineEmits(['update:modelValue'])

const handleInput = (value) => emits('update:modelValue', value)
</script>
