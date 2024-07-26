<template>
  <div id="app" class="h-screen bg-gray-50 text-gray-800 select-none">
    <Header />
    <main v-if="selectedSave" :style="mainStyle">
      <router-view />
    </main>
    <CoordinateModal v-if="coordinateModalOpened" />
    <SaveModal v-if="saveModalOpened" />
  </div>
</template>

<script setup>
import { CoordinateModal, Header, SaveModal } from '@/components'

const store = useStore()
const coordinateModalOpened = computed(() => store.state.coordinateModalOpened)
const saveModalOpened = computed(() => store.state.saveModalOpened)
const selectedSave = computed(() => store.getters['selectedSave'])
const appBarHeight = useAppBarHeight()

onMounted(() => store.dispatch('initDB'))

useEventListener(window, 'keydown', (e) => {
  if (e.ctrlKey && !coordinateModalOpened.value && !saveModalOpened.value) {
    if (e.code === 'KeyA' && selectedSave.value) {
      e.preventDefault()
      e.stopPropagation()
      store.dispatch('openCoordinateModal')
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
</script>
