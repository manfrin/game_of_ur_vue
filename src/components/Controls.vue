<template>
  <button v-if='canRoll' @click='clickRoll'>Roll</button>
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
  padding: 50px;
  font-size: 3em;
}
</style>
