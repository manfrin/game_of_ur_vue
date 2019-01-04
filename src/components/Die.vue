<template>
  <div>
    <div class='dice' v-for="(dice, index) in die" :key='index' :class='{rolledPip: dice > 0, disabled: canRoll}'>
      {{ dice }} 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Die',
  computed: {
    die() {
      return this.$store.state.die
    },
    canRoll() {
      return this.$store.state.canRoll
    },
    moves() {
      return this.$store.state.moves
    }
  }
}
</script>

<style>
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
</style>
