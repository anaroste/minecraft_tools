<template>
  <transition
    enter-from-class="w-0"
    enter-to-class="w-[32rem]"
    leave-from-class="w-[32rem]"
    leave-to-class="w-0"
  >
    <div
      v-if="coordinateDetailsOpened"
      class="flex-shrink-0 border-l border-gray-300 duration-300"
    >
      <div class="flex flex-col w-[32rem] h-full">
        <header
          class="flex items-center gap-2 px-4 py-2 border-b border-gray-300 bg-white"
        >
          <p
            class="font-medium whitespace-nowrap text-ellipsis overflow-hidden"
            style="flex: 1"
          >
            {{ coordinate.name }}
          </p>
          <div
            class="flex items-center justify-center w-9 h-9 hover:bg-gray-100 active:bg-gray-200 rounded transition-colors cursor-pointer"
            @click="close"
          >
            <Icon name="times" />
          </div>
        </header>
        <div class="flex flex-col basis-full overflow-auto bg-gray-50">
          <section class="flex flex-col gap-4 p-4 border-b border-gray-300">
            <div class="flex items-center justify-between">
              <WorldTag :world="coordinate.world" />
              <p class="first-letter:capitalize">
                {{ formatRelative(coordinate.date, new Date()) }}
              </p>
            </div>
            <p
              v-if="coordinate.details"
              class="min-h-[calc(22rem/4)] p-2 rounded bg-gray-200 whitespace-pre-line"
            >
              {{ coordinate.details }}
            </p>
            <ul class="flex flex-col gap-1">
              <Coordinate
                v-if="coordinate.world !== 'end'"
                world="overworld"
                :x="coordinate.x"
                :z="coordinate.z"
              />
              <Coordinate
                v-if="coordinate.world === 'end'"
                world="end"
                :x="coordinate.x"
                :z="coordinate.z"
              />
              <Coordinate
                v-if="coordinate.world !== 'end'"
                world="nether"
                :x="coordinate.nx"
                :z="coordinate.nz"
              />
            </ul>
          </section>
          <section class="flex flex-col gap-4 p-4 border-b border-gray-300">
            <header class="flex items-center gap-2">
              <Icon name="mountain-sun" />
              <p class="font-semibold">Biomes</p>
            </header>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="biome in _biomes"
                class="flex items-center gap-1 p-1 rounded bg-gray-100"
              >
                <span
                  class="block w-4 h-4 bg-[url('/biomes.png')]"
                  :style="{ backgroundPosition: biome.position }"
                />
                <span class="font-medium text-sm">{{
                  t(`biomes.${biome.name}`)
                }}</span>
              </li>
            </ul>
          </section>
          <section class="flex flex-col gap-4 p-4 border-b border-gray-300">
            <header class="flex items-center gap-2">
              <Icon name="arrows-left-right" />
              <p class="font-semibold">Distances</p>
            </header>
            <ul class="flex flex-col gap-2">
              <li v-for="dist in distances" class="flex items-center gap-2">
                <p class="whitespace-nowrap">{{ dist.name }}</p>
                <div class="basis-full h-[1px] bg-gray-200" />
                <p class="font-semibold">{{ dist.value }}</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { formatRelative } from 'date-fns'

import { Icon, WorldTag } from '@/components'
import Coordinate from './Coordinate.vue'

import { biomes } from '@/constants'

import { distance } from '@/lib'

const { t } = useI18n()
const store = useStore()

const coordinateDetailsOpened = computed(
  () => store.state.coordinateDetailsOpened
)
const coordinate = computed(() => store.getters['selectedCoordinate'])
const coordinates = computed(() => store.state.coordinates)

const _biomes = computed(() =>
  coordinate.value.biomes.map((name) =>
    biomes.find((biome) => biome.name === name)
  )
)

const distances = computed(() => {
  const targets = coordinates.value.filter(
    (c) => c.world === coordinate.value.world && c.ID !== coordinate.value.ID
  )
  return targets.map((c) => {
    const value = distance(
      {
        x: coordinate.value.x,
        y: coordinate.value.y,
        z: coordinate.value.z,
      },
      { x: c.x, y: c.y, z: c.z }
    )
    return {
      name: c.name,
      value: Math.round(c.world === 'nether' ? value / 8 : value),
    }
  })
})

const close = () => store.dispatch('closeCoordinateDetails')
</script>
