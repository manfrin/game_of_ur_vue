<template>
  <div>
    <header>
      <div class='header-half'>
        <h1>Royal Game of Ur</h1>
        <p>(<a href="https://en.wikipedia.org/wiki/Royal_Game_of_Ur" target="_blank">Wikipedia: Royal Game of Ur</a>)</p>
        <h2>Current Player: <span :class='currentPlayer'>{{ currentPlayerReadable }}</span></h2>
      </div>
      <div class='header-half right'>
        <div class='moves'>
          <div class='die'>
            <Die />
          </div>
          <Controls />
        </div>
        <h2>Made by Mike Manfrin / <a href="https://twitter.com/manfrin">@manfrin</a> / <a href="https://github.com/manfrin">github.com/manfrin</a></h2>
        <h3>Source Code available on the <a href="https://github.com/manfrin/game_of_ur_vue">repo</a>. I also made a <a href="https://game.manfrincdn.com">Mahjong-ish hex puzzle game</a>.</h3>
      </div>
    </header>
    <Board class='board' />
    <div class='bottom-container'>
      <Logs />
      <instructions />
    </div>
  </div>
</template>

<script>
import Board from "./Board.vue"
import Controls from "./Controls.vue"
import Die from "./Die.vue"
import Logs from "./Logs.vue"
import Instructions from "./Instructions.vue"

export default {
  name: 'Game',
  components: {
    Board, 
    Controls, 
    Die,
    Logs,
    Instructions
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
  display: inline-flex;
  text-align: left;
}

h1 {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

h2 {
  margin: 30px 0 10px 0;
  padding: 0;
  font-size: 1em;
}

h3 {
  font-size: .8em;
  color: #fff;
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

.bottom-container {
  display: inline-flex;
  background: rgb(51,51,51);
  background: linear-gradient(180deg, rgba(51,51,51,1) 0%, rgba(255,255,255,0) 100%); 
  margin-top: -15px;
  border-radius: 5px;
  width: 1000px;
  height: 350px;
  justify-content: space-between;
  padding: 25px;
  padding-top: 0px;
}

</style>
