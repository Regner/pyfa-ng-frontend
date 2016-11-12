import axios from 'axios'

export default {
  getMarketGroups () {
    return axios.get('/market_groups/')
  }
}
