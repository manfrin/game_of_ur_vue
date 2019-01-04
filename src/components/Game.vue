<template>
  <div>
    <header>
      <div class='header-half'>
        <h1>Royal Game of Ur</h1>
        <p>(<a href="https://en.wikipedia.org/wiki/Royal_Game_of_Ur" target="_blank">Wikipedia: Royal Game of Ur</a>)</p>
        <h2>Current Player: <span :class='currentPlayer'>{{ currentPlayerReadable }}</span></h2>
      </div>
      <div class='header-half right'>
        <div class='die'>
          <Die />
        </div>
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

header {
  width: 1050px;
  display: inline-block;
  text-align: left;
}

h1 {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

a {
  color: #fff;
}


a:visited {
  color: #fff;
}


a:hover {
  color: #ff0000;
}

.header-half {
  display: inline-block;
  width: 50%;
  margin: 0;
  padding: 0;
}

.right {
  text-align: right;
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
  display: inline-block;
}

</style>
