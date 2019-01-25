<template>
  <button :disabled='!canRoll' @click='clickRoll'>Roll</button>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: 'Controls',
  computed: {
    ...mapState(['canRoll'])
  },
  methods: {
    clickRoll() {
      this.$store.dispatch('rollDice')
    }
  }
}
</script>

<style scoped>
button {
  line-height: 0;
  padding: 20px;
  font-size: 2em;
  vertical-align: middle;
  margin: 0 0px 0 10px;
  height: 55px;
}
</style>
