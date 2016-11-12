import pyfa from '../../api/pyfa'

const state = {
  loaded: false,
  groups: {}
}

const getters = {
  rootMarketGroups () {
    return Object.keys(state.groups).filter(function (key) {
      return !state.groups[key].parent
    })
  },
  marketGroups () {
    return state.groups
  },
  marketLoaded () {
    return state.loaded
  }
}

const actions = {
  loadMarketGroups ({commit, state}) {
    pyfa.getMarketGroups()
      .then(function (response) {
        commit({
          type: 'addMarketGroups',
          groups: response.data
        })

        commit('setMarketGroupsLoaded')
      })
  }
}

const mutations = {
  toggleMarketGroup (state, payload) {
    state.groups[payload.id].expanded = !state.groups[payload.id].expanded
  },
  setMarketGroupsLoaded () {
    state.loaded = true
  },
  addMarketGroups (state, payload) {
    payload.groups.forEach(function (group) {
      state.groups[group.id] = group
      state.groups[group.id].expanded = false
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
