<template>
  <div class="flex h-full overflow-hidden">
    <div class="basis-full h-full divide-y divide-gray-300 grow-0">
      <Section title="Overworld" @add="openCoordinateModal('overworld')">
        <CoordinateRow
          v-for="coordinate in overworldCoordinates"
          v-bind="coordinate"
          @click="openCoordinateDetails(coordinate.ID)"
        />
      </Section>
      <Section title="End" @add="openCoordinateModal('end')">
        <CoordinateRow
          v-for="coordinate in endCoordinates"
          v-bind="coordinate"
          @click="openCoordinateDetails(coordinate.ID)"
        />
      </Section>
      <Section title="Nether" @add="openCoordinateModal('nether')">
        <CoordinateRow
          v-for="coordinate in netherCoordinates"
          v-bind="coordinate"
          @click="openCoordinateDetails(coordinate.ID)"
        />
      </Section>
    </div>
    <CoordinateDetails />
  </div>
</template>

<script setup>
import { CoordinateDetails, CoordinateRow, Section } from '@/components'

const store = useStore()

const overworldCoordinates = computed(
  () => store.getters['overworldCoordinates']
)
const endCoordinates = computed(() => store.getters['endCoordinates'])
const netherCoordinates = computed(() => store.getters['netherCoordinates'])

const openCoordinateModal = (preset) => {
  store.dispatch('openCoordinateModal', preset)
}

const openCoordinateDetails = (ID) => {
  store.dispatch('openCoordinateDetails', ID)
}
</script>
