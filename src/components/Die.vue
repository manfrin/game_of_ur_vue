<template>
  <div v-if='!canRoll'>
    <p>Moves: {{ moves }} </p>
    <div class='dice' v-for="(dice, index) in die" :key='index' :class='{rolledPip: dice > 0}'>
      {{ dice }} 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Die',
  props: {
    die: Array,
    moves: Number,
    canRoll: Boolean
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
</style>
