<template>
  <div>
    <div class='dice' v-for="(dice, index) in die" :key='index' :class='{rolledPip: dice > 0, disabled: canRoll}'>
      {{ dice }} 
    </div>
    <button :disabled='!canRoll' @click='clickRoll'>Roll</button>
    <button @click='togglePlay'>{{this.playOrPause}}</button>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'Die',
  computed: {
    playOrPause() {
      return this.playing ? 'Pause' : 'Play'
    },
    ...mapState(['die', 'canRoll', 'moves', 'playing'])
  },
  methods: {
    clickRoll() {
      this.$store.dispatch('rollDice')
    },
    togglePlay() {
      this.$store.dispatch('togglePlay')
    }
  }
}
</script>

<style scoped>
.dice {
  display: inline-block;
  background-color: #ddd;
  color: #333;
  border: 3px dashed #333;
  margin: 6px;
  padding: 20px;
  line-height: .5em;
}

.dice.rolledPip {
  border: 3px solid #00ff33;
  background-color: #333;
  color: #ccc;
}

.dice.disabled {
  border: 3px solid rgb(83, 83, 83);
  background-color: #fff;
  color: #fff;
}

button {
  line-height: 0;
  padding: 20px;
  font-size: 2em;
  vertical-align: middle;
  margin: 0 0px 0 10px;
  height: 55px;
}
</style>
