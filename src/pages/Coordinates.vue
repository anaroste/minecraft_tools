<template>
  <div class="h-full divide-y divide-gray-300 grow-0">
    <Section title="Overworld" @add="opencoordinateModal('Overworld')">
      <Coord v-for="coord in overworldCoordinates" v-bind="coord" />
    </Section>
    <Section title="End" @add="opencoordinateModal('End')">
      <Coord v-for="coord in endCoordinates" v-bind="coord" />
    </Section>
    <Section title="Nether" @add="opencoordinateModal('Nether')">
      <Coord v-for="coord in netherCoordinates" v-bind="coord" />
    </Section>
  </div>
</template>

<script setup>
import { Coord, Section } from '@/components'

const store = useStore()
const endCoordinates = computed(() => store.getters['endCoordinates'])
const netherCoordinates = computed(() => store.getters['netherCoordinates'])
const overworldCoordinates = computed(
  () => store.getters['overworldCoordinates']
)

const opencoordinateModal = (preset) => {
  store.dispatch('opencoordinateModal', preset)
}
</script>
