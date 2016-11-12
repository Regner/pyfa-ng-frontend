import Vue from 'vue'
import Vuex from 'vuex'
import fit from './modules/fit'
import market from './modules/market'
import stats from './modules/stats'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    fit,
    market,
    stats
  }
})

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(['./modules/fit', './modules/market', './modules/stats'], () => {
    const newModuleFit = require('./modules/fit').default
    const newModuleMarket = require('./modules/market').default
    const newModuleStats = require('./modules/stats').default
    // swap in the new actions and mutations
    store.hotUpdate({
      modules: {
        fit: newModuleFit,
        market: newModuleMarket,
        stats: newModuleStats
      }
    })
  })
}

export default store
