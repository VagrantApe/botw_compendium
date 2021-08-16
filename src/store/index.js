import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    creatures: [],
    equipment: [],
    materials: [],
    monsters: [],
    treasure: [],
    loaded: false,
    error: null
  },
  mutations: {
    SET_CREATURES(state, creatures) {
      state.creatures = creatures
    },
    SET_EQUIPMENT(state, equipment) {
      state.equipment = equipment
    },
    SET_MATERIALS(state, materials) {
      state.materials = materials
    },
    SET_MONSTERS(state, monsters) {
      state.monsters = monsters
    },
    SET_TREASURE(state, treasure) {
      state.treasure = treasure
    },
    SET_LOADED(state, loaded) {
      state.loaded = loaded
    },
    SET_ERROR(state, err) {
      state.error = err
    }
  },
  actions: {
    getAll({commit}) {
      fetch("https://botw-compendium.herokuapp.com/api/v2")
      .then(response => response.json())
      .then(({ data }) => {
        commit('SET_CREATURES', [...data.creatures.food, ...data.creatures.non_food])
        commit('SET_EQUIPMENT', data.equipment)
        commit('SET_MATERIALS', data.materials)
        commit('SET_MONSTERS', data.monsters)
        commit('SET_TREASURE', data.treasure)
      })
      .then(() =>
        commit('SET_LOADED', true)
      ).catch(err => commit('SET_ERROR', err))
    }
  },
  getters: {
    getLoaded: state => state.loaded,
    getCreatures: state => state.creatures,
    getEquipment: state => state.equipment,
    getMaterials: state => state.materials,
    getMonsters: state => state.monsters,
    getTreasure: state => state.treasure,
    getError: state => state.error,
  }
})
