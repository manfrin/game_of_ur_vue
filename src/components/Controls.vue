<template>
  <button v-if='canRoll' @click='clickRoll'>Roll</button>
</template>

<script>
export default {
  name: 'Controls',
  props: {
    canRoll: Boolean
  },
  methods: {
    clickRoll() {
      this.$emit('click-roll')
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
