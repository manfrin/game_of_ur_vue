<template>
  <div class='pip-display'>
    <div v-for='(pip, i) in finishedPips' :key='i + "_finished"' :class='[playerSide, "pips", "finished"]'></div>
    <div v-for='(pip, i) in unfinishedPips' :key='i + "_unfinished"' :class='[playerSide, "pips", "unfinished"]'></div>
  </div>
</template>

<script>
export default {
  name: 'PipDisplay',
  props: {
    playerSide: String
  },
  computed: {
    pipCompletion () {
      return this.$store.getters.pipCompletion[this.playerSide]
    },
    finishedPips () {
      return this.pipCompletion.finished
    },
    unfinishedPips () {
      return this.pipCompletion.unfinished
    }
  }
}
</script>

<style scoped>
.pip-display {
  width: 250px;
  display: inline-block;
}

.pips {
  height: 20px;
  width: 20px;
  border-radius: 20px;
  margin: 0 5px -3px 5px;
  background-color: #ccc;
  display: inline-block;
}

.pips.finished.player1 {
  background-color: #270830;
}

.pips.finished.player2 {
  background-color: #ff0000;
}

</style>
