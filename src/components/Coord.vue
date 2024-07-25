<template>
  <div
    class="grid grid-cols-[6rem_6rem_6rem_6rem_1fr_12rem] px-8 hover:bg-gray-100 border-b border-gray-200"
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
        <span class="font-bold text-red-700">{{ nx }}</span>
      </p>
    </div>
    <div class="px-4 py-2 border-l border-gray-200">
      <p class="text-right">
        <span class="font-bold text-red-700">{{ nz }}</span>
      </p>
    </div>
    <div class="px-4 py-2 border-l border-gray-200">
      <p class="">{{ props.title }}</p>
    </div>
    <div class="flex items-center gap-1 px-4 py-2 border-l border-gray-200">
      <span
        v-for="biome in _biomes"
        class="w-4 h-4 bg-[url('/biomes.png')]"
        :style="{
          backgroundPosition: biome.position,
        }"
        :title="t(`biomes.${biome.name}`)"
      />
    </div>
  </div>
</template>

<script setup>
import { biomes } from '@/constants'

const { t } = useI18n()

const props = defineProps({
  title: String,
  text: String,
  x: String,
  z: String,
  nx: String,
  nz: String,
  biomes: Array,
})

const _biomes = computed(() =>
  props.biomes.map((b) => biomes.find(({ name }) => name === b)).slice(0, 8)
)
</script>
