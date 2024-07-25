<template>
  <div class="flex h-8 gap-2">
    <div
      v-for="option in props.options"
      class="flex items-center justify-center rounded text-center"
      :class="{
        'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 cursor-pointer transition-colors':
          option !== props.modelValue,
        'text-white bg-emerald-500': option === props.modelValue,
      }"
      style="flex: 1"
      @click="handleInput(option)"
    >
      <p class="font-medium text-sm">{{ option }}</p>
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
