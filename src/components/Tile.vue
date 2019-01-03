<template>
  <div class='board-space' v-bind:class='[type, hovering ? "hovering" : ""]'>
    <button v-if='canMoveTo' @click='moveTo'>{{moveToText}}</button>
    <button v-if='canMoveFrom' @click='moveFrom'>{{moveFromText}}</button>
    <p v-if='hasPipFor' v-bind:class='hasPipFor'>{{ pipName }}</p>
  </div>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    address: Number,
    canMoveFrom: Boolean,
    canMoveTo: Boolean,
    hasPipFor: String,
    hovering: Boolean,
    type: String
  },
  computed: {
    pipName() {
      return this.hasPipFor === 'player1' ? 'Player 1' : 'Player 2'
    },
    inMiddle() {
      return this.address < 14 && this.address > 4
    },
    directionText() {
      return this.inMiddle ? '----->' : '<-----'
    },
    moveFromText() {
      return this.inMiddle ? ('o ' + this.directionText) : (this.directionText + ' o')
    },
    moveToText() {
      return !this.inMiddle ? ('Here ' + this.directionText) : (this.directionText + ' Here')
    }
  },
  methods: {
    moveTo() {
      this.$emit('makeMove', this.address, 'to')
    },
    moveFrom() {
      this.$emit('makeMove', this.address, 'from')
    }
  }
}
</script>

<style>
.board-space {
  width: 100px;
  height: 100px;
  display: inline-block;
  border: 1px #000;
  font-size: .8em;
  vertical-align: middle;
  margin: 9px;
}

p {
  padding: 10px;
  border-radius: 20px;
  margin: 10px;
}

p.player1 {
  background-color: #270830;
  color: #ccc;
}

p.player2 {
  background-color: #ff0000;
  color: #fff;
}

.start {
  background-color: #333;
  color: #ccc;
}

.blank {
  background-color: #ccc;
}

.reroll {
  background-color: #55ccff;
}

.castle {
  background-color: #ccff11
}

.end {
  background-color: #333;
}

</style>
