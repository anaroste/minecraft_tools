import { createStore } from 'vuex'

const state = () => ({
  appBarHeight: 0,
  saveModalOpened: false,
  coordModalOpened: false,

  data: JSON.parse(localStorage.getItem('mt') || '{}'),
})

const actions = {
  setAppBarHeight: ({ state }, value) => {
    state.appBarHeight = value
  },
  openSaveModal: ({ state }) => {
    state.saveModalOpened = true
  },
  closeSaveModal: ({ state }) => {
    state.saveModalOpened = false
  },
  openCoordModal: ({ state }) => {
    state.coordModalOpened = true
  },
  closeCoordModal: ({ state }) => {
    state.coordModalOpened = false
  },

  addSave: ({ state }, name) => {
    const newData = JSON.parse(JSON.stringify(state.data))
    newData.saves = [
      ...(state.data.saves || []),
      {
        name,
        coords: {
          end: [],
          nether: [],
          overworld: [],
        },
      },
    ]
    newData.selectedSave = name
    state.data = newData
    localStorage.setItem('mt', JSON.stringify(newData))
  },
  selectSave: ({ state }, name) => {
    const newData = JSON.parse(JSON.stringify(state.data))
    newData.selectedSave = name
    state.data = newData
    localStorage.setItem('mt', JSON.stringify(newData))
  },
  addCoordinate: ({ state }, data) => {
    const newData = JSON.parse(JSON.stringify(state.data))
    const index = newData.saves.findIndex(
      (save) => save.name === newData.selectedSave
    )
    if (index !== -1) {
      newData.saves[index].coords.overworld.push(data)
      state.data = newData
      localStorage.setItem('mt', JSON.stringify(newData))
    }
  },
}

const getters = {
  saveNames: (state) => {
    if (!state.data?.saves) return []
    else return state.data.saves?.map((save) => save.name)
  },
  selectedSave: (state) => state.data.selectedSave || '',
  endCoordinates: (state) =>
    state.data.saves?.find(({ name }) => name === state.data.selectedSave)
      .coords.end,
  netherCoordinates: (state) =>
    state.data.saves?.find(({ name }) => name === state.data.selectedSave)
      .coords.nether,
  overworldCoordinates: (state) =>
    state.data.saves?.find(({ name }) => name === state.data.selectedSave)
      .coords.overworld,
}

const store = createStore({
  state,
  actions,
  getters,
})

export default store
