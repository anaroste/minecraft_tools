<template>
  <div class="flex items-center gap-2">
    <p class="font-medium whitespace-nowrap">
      {{ t(`coordinates.${props.world}`) }}:
    </p>
    <div class="basis-full h-[1px] bg-gray-200" />
    <p
      class="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 active:bg-gray-300 cursor-pointer whitespace-nowrap"
      @click="copy"
    >
      [<span class="font-semibold" :class="textClass">{{ props.x }}</span
      >; <span class="font-semibold" :class="textClass">{{ props.z }}</span
      >]
    </p>
  </div>
</template>

<script setup>
const { t } = useI18n()

const props = defineProps({
  world: String,
  x: Number,
  z: Number,
})

const textClass = computed(() => {
  if (props.world === 'overworld') return 'text-emerald-700'
  if (props.world === 'end') return 'text-purple-700'
  if (props.world === 'nether') return 'text-red-700'
})

const copy = () => {
  navigator.clipboard.writeText(`[${props.x}; ${props.z}]`)
}
</script>
