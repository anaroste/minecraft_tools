// Enable form submission with no submit button when enter key is pressed and prevent the default page reloading behaviour
const vSubmit = {
  mounted: (element, binding) => {
    const input = document.createElement('input')
    input.setAttribute('type', 'submit')
    input.setAttribute('hidden', '')
    element.appendChild(input)
    element.addEventListener('submit', (event) => {
      event.preventDefault()
      binding.value()
    })
  },
}

export default vSubmit
