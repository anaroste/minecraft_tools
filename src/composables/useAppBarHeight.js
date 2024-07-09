const useAppBarHeight = () => {
  const store = useStore()
  const appBarHeight = computed(() => store.state.appBarHeight)

  return appBarHeight
}

export default useAppBarHeight
