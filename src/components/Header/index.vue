<template>
  <header
    ref="header"
    class="relative flex items-center justify-between flex-shrink-0 gap-4 h-16 px-8 bg-white shadow"
  >
    <div class="flex items-center h-full gap-4">
      <img src="/favicon.png" class="w-8" @dblclick="deleteLocalStorage" />
      <h1 class="font-bold text-xl">Minecraft Tools</h1>
      <nav class="flex h-full gap-4 ml-12">
        <Link icon="location-dot" name="Coordinates" text="Coordinates" />
      </nav>
    </div>
    <SaveSelector />
  </header>
</template>

<script setup>
import Link from './Link.vue'
import SaveSelector from './SaveSelector.vue'

const store = useStore()

const header = ref(null)
const { height } = useElementBounding(header)

watch(
  height,
  (_height) => {
    store.dispatch('setAppBarHeight', _height)
  },
  { immediate: true }
)

const deleteLocalStorage = () => {
  localStorage.removeItem('mt')
  console.log('Data deleted.')
}
</script>
