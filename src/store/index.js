import { createStore } from 'vuex'
import localStorageDB from 'localstoragedb'

const state = () => ({
  appBarHeight: 0,

  saveModalOpened: false,

  coordinateModalOpened: false,
  coordinateModalPreset: '',

  coordinateDetailsOpened: false,

  db: null,
  saves: [],
  coordinates: [],
  selectedSaveID: Number(localStorage.getItem('mt_selected_save') || 0),
  selectedCoordinateID: 0,

  data: JSON.parse(localStorage.getItem('mt') || '{}'),
})

const actions = {
  initDB: ({ state }) => {
    state.db = new localStorageDB('mt', localStorage)
    if (state.db.isNew()) {
      state.db.createTable('saves', ['name', 'date'])
      state.db.createTable('coordinates', [
        'saveID',
        'world',
        'name',
        'details',
        'x',
        'y',
        'z',
        'nx',
        'ny',
        'nz',
        'biomes',
        'date',
      ])
      state.db.commit()
    }
    state.saves = state.db.queryAll('saves')
    state.coordinates = state.db.queryAll('coordinates')
  },
  setAppBarHeight: ({ state }, value) => {
    state.appBarHeight = value
  },
  openSaveModal: ({ state }) => {
    state.saveModalOpened = true
  },
  closeSaveModal: ({ state }) => {
    state.saveModalOpened = false
  },
  openCoordinateModal: ({ state }, preset = 'overworld') => {
    state.coordinateModalPreset = preset
    state.coordinateModalOpened = true
  },
  closeCoordinateModal: ({ state }) => {
    state.coordinateModalOpened = false
  },
  openCoordinateDetails: ({ state, dispatch }, ID) => {
    if (state.selectedCoordinateID === ID) {
      dispatch('closeCoordinateDetails')
    } else {
      state.selectedCoordinateID = ID
      state.coordinateDetailsOpened = true
    }
  },
  closeCoordinateDetails: ({ state }) => {
    state.selectedCoordinateID = 0
    state.coordinateDetailsOpened = false
  },

  addSave: ({ state, dispatch }, name) => {
    const ID = state.db.insert('saves', { name, date: new Date() })
    if (state.db.commit()) {
      state.saves = state.db.queryAll('saves')
      dispatch('selectSave', ID)
    } else {
      console.error('Add save failed.')
    }
  },
  selectSave: ({ state, dispatch }, ID) => {
    dispatch('closeCoordinateDetails')
    localStorage.setItem('mt_selected_save', ID)
    state.selectedSaveID = ID
  },
  addCoordinate: ({ state }, data) => {
    const isNether = data.world === 'nether'
    state.db.insert('coordinates', {
      saveID: state.selectedSaveID,
      world: data.world,
      name: data.name,
      details: data.details,
      x: Number(isNether ? data.x * 8 : data.x),
      y: 0,
      z: Number(isNether ? data.z * 8 : data.z),
      nx: Number(isNether ? data.x : Math.floor(data.x / 8)),
      ny: 0,
      nz: Number(isNether ? data.z : Math.floor(data.z / 8)),
      biomes: [...data.biomes],
      date: new Date(),
    })
    if (state.db.commit()) {
      state.coordinates = state.db.queryAll('coordinates')
    } else {
      console.error('Add coordinate failed.')
    }
  },
}

const getters = {
  selectedSave: (state) =>
    state.saves.find((save) => save.ID === state.selectedSaveID),
  overworldCoordinates: (state) =>
    state.coordinates.filter(
      ({ saveID, world }) =>
        saveID === state.selectedSaveID && world === 'overworld'
    ),
  endCoordinates: (state) =>
    state.coordinates.filter(
      ({ saveID, world }) => saveID === state.selectedSaveID && world === 'end'
    ),
  netherCoordinates: (state) =>
    state.coordinates.filter(
      ({ saveID, world }) =>
        saveID === state.selectedSaveID && world === 'nether'
    ),
  selectedCoordinate: (state) =>
    state.coordinates.find(({ ID }) => ID === state.selectedCoordinateID),
}

const store = createStore({
  state,
  actions,
  getters,
})

export default store
