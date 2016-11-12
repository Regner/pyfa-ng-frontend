<template>
  <div>
    <h1>Market Tree</h1>
    <ul v-if="loaded">
      <market-group v-for="id in rootGroups" v-bind:id="id"></market-group>
    </ul>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MarketGroup from './MarketGroup.vue'

export default {
  components: { MarketGroup },
  computed: mapGetters({
    rootGroups: 'rootMarketGroups',
    loaded: 'marketLoaded'
  }),
  created () {
    this.$store.dispatch('loadMarketGroups')
  }
}
</script>
