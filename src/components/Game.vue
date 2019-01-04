<template>
  <div>
    <header>
      <h1>Royal Game of Ur</h1>
      <h2>Current Player: <span :class='currentPlayer'>{{ currentPlayerReadable }}</span></h2>
      <div class='die'>
        <Die />
        <Controls />
      </div>
    </header>
    <Board class='board' />
    <Logs />
  </div>
</template>

<script>
import Board from "./Board.vue"
import Controls from "./Controls.vue"
import Die from "./Die.vue"
import Logs from "./Logs.vue"

export default {
  name: 'Game',
  components: {
    Board, 
    Controls, 
    Die,
    Logs
  },
  methods: {
    nextTurn(nextPlayer = true) {
      this.$store.dispatch('nextTurn', nextPlayer)
    }
  },
  watch: {
    hasValidMoves: function() {
      if (!this.hasValidMoves) {
        this.$store.dispatch('log', {player: this.currentPlayer, text: `has no valid moves, skipping turn.`})
        this.nextTurn(true)
      }
    }
  },
  computed: {
    pips() {
      return this.$store.state.pips
    },
    die() {
      return this.$store.state.die
    },
    canPlay() {
      return this.$store.state.canPlay
    },
    moves() {
      return this.$store.state.moves
    },
    board() {
      return this.$store.state.board
    },
    currentPlayer() {
      return this.$store.state.currentPlayer
    },
    hasLegalMoves() {
      return this.validMoves[this.currentPlayer].length > 0
    },
    otherPlayer() {
      return this.currentPlayer === 'player1' ? 'player2' : 'player1'
    },
    currentPlayerReadable() {
      return this.currentPlayer === 'player1' ? 'Player 1' : 'Player 2'
    },
    hasValidMoves() {
      return this.$store.state.hasValidMoves
    },
    validMoves: function () {
      return this.$store.state.validMoves
    }
  }
}
</script>

<style>
.board {
  perspective: 1000px;
}

header {
  width: 868px;
  display: inline-block;
  text-align: left;
}

span {
  padding: 5px;
  border-radius: 10px;
}

span.player1 {
  background-color: #270830;
  color: #ccc;
}

span.player2 {
  background-color: #ff0000;
  color: #fff;
}

.die {
  height: 120px;
}

</style>
