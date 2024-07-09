<template>
  <div>
    <textarea
      v-focus="props.autofocus"
      ref="textarea"
      type="text"
      rows="4"
      class="w-full py-2 px-2 rounded border bg-transparent placeholder:text-gray-400 focus:border-gray-400"
      :class="{
        'border-gray-300': !props.error,
        'border-red-500': props.error,
      }"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="handleInput"
    />
    <p v-if="props.error" class="px-2 pt-1 text-sm text-red-500">
      {{ props.error }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  placeholder: String,
  error: String,
  autofocus: Boolean,
})

const emits = defineEmits(['update:modelValue'])

const handleInput = (e) => emits('update:modelValue', e.target.value)

const textarea = ref(null)
const focus = () => textarea.value.focus()

defineExpose({
  focus,
})
</script>
