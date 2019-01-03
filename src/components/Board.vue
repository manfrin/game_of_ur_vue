<template>
  <div>
    <div class='board-container'>
      <h3 class='player-2-name'>Player 2</h3>
      <TileRow :pips='pips' :layout='boardLayout.player' playerSide='player2' :validMoves='validMoves' :board='board' :currentPlayer='currentPlayer' @makeMove='makeMove' />
      <TileRow :pips='pips' :layout='boardLayout.middle' playerSide='middle' :validMoves='validMoves' :board='board' :currentPlayer='currentPlayer' @makeMove='makeMove' />
      <TileRow :pips='pips' :layout='boardLayout.player' playerSide='player1' :validMoves='validMoves' :board='board' :currentPlayer='currentPlayer' @makeMove='makeMove' />
      <h3 class='player-1-name'>Player 1</h3>
    </div>
  </div>
</template>

<script>
import TileRow from "./TileRow.vue"

export default {
  name: 'Board',
  components: {TileRow},
  props: {
    board: Object,
    validMoves: Object,
    pips: Object,
    currentPlayer: String
  },
  data() {
    return {
      boardLayout: {
        player: [4, 3, 2, 1, 0, 15, 14, 13],
        middle: [5, 6, 7, 8, 9, 10, 11, 12]
      }
    }
  },
  methods: {
    makeMove(address, toOrFrom) {
      this.$emit('makeMove', address, toOrFrom)
    }
  },
  computed: {
    moveFromKeys: function () {
      return Object.keys(this.validMoves[this.currentPlayer])
    },
    moveToKeys: function () {
      return Object.values(this.validMoves[this.currentPlayer])
    }
  }
}
</script>

<style scoped>
.board-container {
  display: inline-block;
  background: #333;
  transform: rotateX(35deg);
  padding: 6px;
}
.player-1-name {
  text-align: left;
  margin-left: 20px;
}

.player-2-name {
  text-align: right;
  margin-right: 20px;
}
</style>
