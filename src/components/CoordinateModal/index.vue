<template>
  <Modal
    modalClass="w-[48rem]"
    contentClass="overflow-auto"
    title="New coordinate"
    icon="plus"
    :actions="actions"
    @close="close"
  >
    <form v-submit="submit" class="flex flex-col gap-4">
      <Options
        :options="['Overworld', 'End', 'Nether']"
        v-model="world.value"
      />
      <TextInput
        placeholder="Title"
        :error="title.error"
        autofocus
        v-model="title.value"
      />
      <div class="flex gap-2">
        <TextInput
          class="basis-full"
          placeholder="X"
          :error="x.error"
          v-model="x.value"
        />
        <TextInput
          class="basis-full"
          placeholder="Z"
          :error="z.error"
          v-model="z.value"
        />
      </div>
      <TextArea
        placeholder="Details"
        :error="text.error"
        v-model="text.value"
      />
      <Separator />
      <div class="flex items-center gap-2">
        <Icon name="mountain-sun" />
        <p class="font-semibold">Biomes</p>
      </div>
      <BiomesInput v-model="biomes.value" :world="world.value" />
    </form>
  </Modal>
</template>

<script setup>
import {
  Icon,
  Modal,
  Options,
  Separator,
  TextArea,
  TextInput,
} from '@/components'
import BiomesInput from './BiomesInput.vue'

const store = useStore()

const coordinateModalPreset = computed(() => store.state.coordinateModalPreset)

onMounted(() => {
  world.value = coordinateModalPreset.value
})

useEventListener(window, 'keydown', (e) => {
  if (e.key === 'Escape') close()
})

const close = () => store.dispatch('closecoordinateModal')

const world = reactive({ value: '', error: '' })
const title = reactive({ value: '', error: '' })
const x = reactive({ value: '', error: '' })
const z = reactive({ value: '', error: '' })
const text = reactive({ value: '', error: '' })
const biomes = reactive({ value: [], error: '' })
const submit = () => {
  title.error = title.value === '' ? 'Required.' : ''
  x.error = x.value === '' ? 'Required.' : ''
  z.error = z.value === '' ? 'Required.' : ''
  if (title.error || x.error || z.error) {
    return
  }
  store.dispatch('addCoordinate', {
    world: world.value,
    title: title.value,
    x: x.value,
    z: z.value,
    text: text.value,
    biomes: biomes.value,
  })
  close()
}

const actions = [
  {
    text: 'Cancel',
    onClick: close,
  },
  {
    text: 'Add',
    onClick: submit,
  },
]
</script>
