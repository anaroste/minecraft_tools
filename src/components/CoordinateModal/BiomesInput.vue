<template>
  <div v-for="_type in types">
    <p v-if="world === 'overworld'" class="font-semibold text-sm">
      {{ t(`biomesTypes.${_type}`) }}
    </p>
    <div class="flex flex-wrap gap-2">
      <div
        v-for="biome in availableBiomes
          .filter((biome) => biome.type === _type)
          .sort((a, b) => a.name.localeCompare(b.name))"
        class="flex items-center gap-1 p-1 rounded cursor-pointer transition-colors"
        :class="{
          'bg-gray-100 hover:bg-gray-200': !props.modelValue.includes(
            biome.name
          ),
          'bg-emerald-500 hover:bg-emerald-600 text-white':
            props.modelValue.includes(biome.name),
        }"
        @click="handleInput(biome.name)"
      >
        <span
          class="block w-4 h-4 bg-[url('/biomes.png')]"
          :style="{ backgroundPosition: biome.position }"
        />
        <span class="font-medium text-sm">{{ t(`biomes.${biome.name}`) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import uniq from 'ramda/src/uniq'
import { biomes } from '@/constants'

const { t } = useI18n()

const props = defineProps({
  modelValue: Array,
  world: String,
})

const emits = defineEmits(['update:modelValue'])

const world = computed(() => props.world.toLowerCase())

watch(world, () => {
  emits('update:modelValue', [])
})

const availableBiomes = computed(() =>
  biomes.filter((biome) => biome.world === world.value)
)

const types = computed(() =>
  uniq(availableBiomes.value.map(({ type }) => type))
)

const handleInput = (value) => {
  if (props.modelValue.includes(value)) {
    emits(
      'update:modelValue',
      props.modelValue.filter((biome) => biome !== value)
    )
  } else {
    emits('update:modelValue', [...props.modelValue, value])
  }
}
</script>
