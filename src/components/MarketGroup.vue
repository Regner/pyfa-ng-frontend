<template>
  <li>
    <label v-on:click="toggle">
      <i v-bind:class="icon"></i>
      {{ name }}
    </label>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: [
    'id'
  ],
  data () {
    return {
      expanded: false
    }
  },
  computed: {
    name () {
      return this.$store.getters.marketGroups[this.id].name
    },
    icon () {
      if  (this.$store.getters.marketGroups[this.id].expanded) {
        return 'fa fa-minus'
      } else {
        return 'fa fa-plus'
      }
    }
  },
  methods: {
    toggle () {
      this.$store.commit({
        type: 'toggleMarketGroup',
        id: this.id
      })
    }
  }
}
</script>
