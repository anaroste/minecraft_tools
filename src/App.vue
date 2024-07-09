<template>
  <div id="app" class="h-screen bg-gray-50 text-gray-800 select-none">
    <Header />
    <main
      v-if="selectedSave"
      class="divide-y divide-gray-300 grow-0"
      :style="mainStyle"
    >
      <Section title="Overworld" @add="openCoordModal('Overworld')">
        <Coord v-for="coord in overworldCoordinates" v-bind="coord" />
      </Section>
      <Section title="End" @add="openCoordModal('End')">
        <Coord v-for="coord in endCoordinates" v-bind="coord" />
      </Section>
      <Section title="Nether" @add="openCoordModal('Nether')">
        <Coord v-for="coord in netherCoordinates" v-bind="coord" />
      </Section>
    </main>
    <CoordModal v-if="coordModalOpened" />
    <SaveModal v-if="saveModalOpened" />
    <!-- <img src="/biomes.png" class="w-fit" /> -->
  </div>
</template>

<script setup>
import { Coord, CoordModal, Header, SaveModal, Section } from '@/components'

const store = useStore()
const coordModalOpened = computed(() => store.state.coordModalOpened)
const saveModalOpened = computed(() => store.state.saveModalOpened)
const selectedSave = computed(() => store.getters['selectedSave'])
const endCoordinates = computed(() => store.getters['endCoordinates'])
const netherCoordinates = computed(() => store.getters['netherCoordinates'])
const overworldCoordinates = computed(
  () => store.getters['overworldCoordinates']
)
const appBarHeight = useAppBarHeight()

useEventListener(window, 'keydown', (e) => {
  if (e.ctrlKey && !coordModalOpened.value && !saveModalOpened.value) {
    if (e.code === 'KeyA' && selectedSave.value) {
      e.preventDefault()
      e.stopPropagation()
      store.dispatch('openCoordModal')
    } else if (e.code === 'KeyS') {
      e.preventDefault()
      e.stopPropagation()
      store.dispatch('openSaveModal')
    }
  }
})

const mainStyle = computed(() => ({
  height: `calc(100% - ${appBarHeight.value}px)`,
}))

const openCoordModal = (preset) => {
  store.dispatch('openCoordModal', preset)
}
</script>
