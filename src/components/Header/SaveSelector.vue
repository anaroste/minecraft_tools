<template>
  <div class="flex items-center gap-4">
    <div
      v-if="saves.length"
      ref="target"
      class="relative flex items-center gap-2 cursor-pointer p-4 hover:bg-gray-100 focus:bg-gray-100 active:active:bg-gray-200 rounded"
      @click="toggle"
      tabindex="0"
    >
      <p class="font-semibold text-sm">{{ selectedSave?.name }}</p>
      <Icon class="-mt-0.5" name="chevron-down" size="xs" />
      <ul
        v-if="opened"
        class="absolute right-0 bg-white shadow-lg py-2 rounded"
        style="top: calc(100% + 4px)"
      >
        <li
          v-for="save in saves"
          class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 active:bg-gray-200"
          @click="selectSave(save.ID)"
        >
          <p class="basis-full font-semibold text-sm whitespace-nowrap">
            {{ save.name }}
          </p>
          <Icon
            class="-mt-0.5"
            :class="{ 'opacity-0': save.ID !== selectedSave.ID }"
            name="check"
            size="xs"
          />
        </li>
      </ul>
    </div>
    <div
      class="flex items-center justify-center h-12 gap-2 px-2 rounded hover:bg-gray-100 focus:bg-gray-100 active:active:bg-gray-200 cursor-pointer"
      @click="openAddSaveModal"
    >
      <Icon name="floppy-disk" size="xs" />
      <p class="font-semibold text-sm whitespace-nowrap">Create save</p>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@/components'

const store = useStore()

const saves = computed(() => store.state.saves)
const selectedSave = computed(() => store.getters['selectedSave'])

const emits = defineEmits(['change'])

const target = ref(null)
const opened = ref(false)

onClickOutside(target, () => {
  opened.value = false
})

const toggle = () => {
  opened.value = !opened.value
}

const selectSave = (name) => store.dispatch('selectSave', name)

const openAddSaveModal = () => store.dispatch('openSaveModal')
</script>
