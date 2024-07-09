<template>
  <Modal
    modalClass="w-96"
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
        <TextInput placeholder="X" :error="x.error" v-model="x.value" />
        <TextInput placeholder="Z" :error="z.error" v-model="z.value" />
      </div>
      <TextArea
        placeholder="Details"
        :error="text.error"
        v-model="text.value"
      />
    </form>
  </Modal>
</template>

<script setup>
import { Modal, Options, TextArea, TextInput } from '@/components'

const store = useStore()

const coordModalPreset = computed(() => store.state.coordModalPreset)

onMounted(() => {
  world.value = coordModalPreset.value
})

useEventListener(window, 'keydown', (e) => {
  if (e.key === 'Escape') close()
})

const close = () => store.dispatch('closeCoordModal')

const world = reactive({ value: '', error: '' })
const title = reactive({ value: '', error: '' })
const x = reactive({ value: '', error: '' })
const z = reactive({ value: '', error: '' })
const text = reactive({ value: '', error: '' })
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
