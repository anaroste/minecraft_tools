<template>
  <Modal
    modalClass="w-96"
    title="New coordinate"
    icon="plus"
    :actions="actions"
    @close="close"
  >
    <form v-submit="submit" class="flex flex-col gap-4">
      <Input
        placeholder="Title"
        :error="title.error"
        autofocus
        v-model="title.value"
      />
      <div class="flex gap-2">
        <Input placeholder="x" :error="x.error" v-model="x.value" />
        <Input placeholder="z" :error="z.error" v-model="z.value" />
      </div>
      <Input placeholder="Text" :error="text.error" v-model="text.value" />
    </form>
  </Modal>
</template>

<script setup>
import { Input, Modal } from '@/components'

const store = useStore()

useEventListener(window, 'keydown', (e) => {
  if (e.key === 'Escape') close()
})

const close = () => store.dispatch('closeCoordModal')

const title = reactive({ value: '', error: '' })
const x = reactive({ value: '', error: '' })
const z = reactive({ value: '', error: '' })
const text = reactive({ value: '', error: '' })
const submit = () => {
  title.error = title.value === '' ? 'Required.' : ''
  x.error = x.value === '' ? 'Required.' : ''
  z.error = z.value === '' ? 'Required.' : ''
  text.error = text.value === '' ? 'Required.' : ''
  if (title.error || x.error || z.error || text.error) {
    return
  }
  store.dispatch('addCoordinate', {
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
