<template>
  <button :disabled='!canRoll' @click='clickRoll'>Roll</button>
</template>

<script>
export default {
  name: 'Controls',
  computed: {
    canRoll() {
      return this.$store.state.canRoll
    }
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
}
</style>
