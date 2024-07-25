<template>
  <div
    class="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/30"
    @mousedown="emits('close')"
  >
    <div
      class="flex flex-col max-h-[calc(100%-4rem)] rounded-lg overflow-hidden"
      :class="props.modalClass"
      @mousedown.stop
    >
      <header
        class="flex items-center gap-2 p-4 bg-white border-b border-gray-200"
      >
        <Icon v-if="props.icon" :name="props.icon" />
        <p class="font-semibold">{{ props.title }}</p>
      </header>
      <div class="p-4 bg-white" :class="contentClass" style="flex: 1">
        <slot />
      </div>
      <footer
        v-if="props.actions?.length"
        class="flex items-center justify-end gap-2 p-4 bg-white border-t border-gray-200"
      >
        <Button
          v-for="action in props.actions"
          :text="action.text"
          @click="action.onClick"
        />
      </footer>
    </div>
  </div>
</template>

<script setup>
import { Button, Icon } from '@/components'

const props = defineProps({
  icon: String,
  title: String,
  modalClass: String,
  contentClass: String,
  actions: Array,
})

const emits = defineEmits(['close'])
</script>
