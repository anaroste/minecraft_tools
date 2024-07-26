<template>
  <div class="flex h-8 gap-2">
    <div
      v-for="option in props.options"
      class="flex items-center justify-center rounded text-center"
      :class="{
        'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 cursor-pointer transition-colors':
          option.value !== props.modelValue,
        'text-white bg-emerald-500': option.value === props.modelValue,
      }"
      style="flex: 1"
      @click="handleInput(option.value)"
    >
      <p class="font-medium text-sm">{{ option.text }}</p>
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
