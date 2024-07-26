<template>
  <p
    class="w-fit px-2 rounded font-medium text-white whitespace-nowrap"
    :class="{
      'bg-emerald-700': props.world === 'overworld',
      'bg-purple-700': props.world === 'end',
      'bg-red-700': props.world === 'nether',
    }"
  >
    {{ t(`worlds.${props.world}`) }}
  </p>
</template>

<script setup>
const { t } = useI18n()
const props = defineProps({
  world: String,
})
</script>
