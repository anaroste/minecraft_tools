const vFocus = {
  mounted: (element, binding) => {
    if (!binding.hasOwnProperty('value') || binding.value) {
      element.focus()
    }
  },
}

export default vFocus
