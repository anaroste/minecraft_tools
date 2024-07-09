<template>
  <header
    ref="header"
    class="flex flex-shrink-0 items-center gap-4 h-16 px-8 bg-emerald-500 text-white"
  >
    <img src="/favicon.png" class="w-8" @dblclick="tmp" />
    <h1 class="font-bold text-xl">Minecraft Tools</h1>
    <nav class="flex gap-4 ml-12">
      <HeaderButton
        v-for="name in saveNames"
        :text="name"
        :active="name === selectedSave"
        @click="selectSave(name)"
      />
      <HeaderButton icon="plus" @click="openAddSaveModal" />
    </nav>
  </header>
</template>

<script setup>
import { HeaderButton } from '@/components'

const store = useStore()

const saveNames = computed(() => store.getters['saveNames'])
const selectedSave = computed(() => store.getters['selectedSave'])

const header = ref(null)
const { height } = useElementBounding(header)

watch(
  height,
  (_height) => {
    store.dispatch('setAppBarHeight', _height)
  },
  { immediate: true }
)

const openAddSaveModal = () => store.dispatch('openSaveModal')

const selectSave = (name) => store.dispatch('selectSave', name)

const tmp = () => {
  localStorage.removeItem('mt')
  console.log('Data deleted.')
}
</script>
