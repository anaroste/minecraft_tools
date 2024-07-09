<template>
  <Modal
    modalClass="w-96"
    title="New save"
    icon="plus"
    :actions="actions"
    @close="close"
  >
    <form v-submit="submit">
      <Input
        placeholder="Name"
        :error="name.error"
        autofocus
        v-model="name.value"
      />
    </form>
  </Modal>
</template>

<script setup>
import { Input, Modal } from '@/components'

const store = useStore()

useEventListener(window, 'keydown', (e) => {
  if (e.key === 'Escape') close()
})

const close = () => store.dispatch('closeSaveModal')

const name = reactive({
  value: '',
  error: '',
})
const submit = () => {
  if (name.value === '') {
    name.error = 'Required.'
    return
  }
  // TODO: Name already used
  store.dispatch('addSave', name.value)
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
