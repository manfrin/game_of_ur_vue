<template>
  <div>
    <header>
      <div class='header-left'>
        <div>
          <h1>Royal Game of Ur</h1>
          <p>(Wikipedia: <a href="https://en.wikipedia.org/wiki/Royal_Game_of_Ur" target="_blank">Royal Game of Ur</a>)</p>
        </div>
        <h2>Current Player: <span :class='currentPlayer'>{{ currentPlayerReadable }}</span></h2>
      </div>
      <div class='header-right right'>
        <div class='moves'>
          <div class='die'>
            <Die />
          </div>
        </div>
        <h2>Made by Mike Manfrin / <a href="https://twitter.com/manfrin">@manfrin</a> / <a href="https://github.com/manfrin">github.com/manfrin</a></h2>
        <h4>Source Code available on the <a href="https://github.com/manfrin/game_of_ur_vue">repo</a>. I also made a <a href="https://game.manfrincdn.com">Mahjong-ish hex puzzle game</a>.</h4>
      </div>
    </header>
    <nav>
      <button @click='changePage(`game`)'>Board</button>
      <button @click='changePage(`aiStats`)'>AI Stats</button>
      <button @click='changePage(`config`)'>Config</button>
    </nav>
    <div v-if='page === `game`'>
      <Board class='board' v-if="!gameOver" />
      <div v-if="gameOver">
        <h1>{{ winner }} has won!</h1>
        <button @click='newGame'>New Game</button>
      </div>
    </div>
    <div v-if='page === `config`'>
      <Config />
    </div>
    <div v-if='page === `aiStats`'>
      <AIStats />
    </div>
    <div class="players-container">
      <span class='player-2-name player-name'> <Player player='player2' /> <PipDisplay playerSide='player2' /> </span>
      <span class='player-1-name player-name'> <Player player='player1' /> <PipDisplay playerSide='player1' /> </span>
    </div>
    <div class='bottom-container'>
      <Logs />
      <instructions />
    </div>
  </div>
</template>

<script>
import Board from "./Board.vue"
import Config from "./Config.vue"
import Die from "./Die.vue"
import Logs from "./Logs.vue"
import Player from "./Player.vue"
import PipDisplay from "./PipDisplay.vue"
import Instructions from "./Instructions.vue"
import AIStats from "./AIStats.vue"

import { mapState } from "vuex"
import EventBus from '../event-bus'

export default {
  name: 'Game',
  components: {
    Board, 
    Config, 
    Die,
    Logs,
    Instructions,
    Player,
    PipDisplay,
    AIStats
  },
  methods: {
    nextTurn(nextPlayer = true) {
      this.$store.dispatch('nextTurn', nextPlayer)
    },
    newGame() {
      this.$store.dispatch('newGame')
    },
    changePage(page) {
      this.$store.dispatch('changePage', page)
    }
  },
  watch: {
    hasValidMoves: function() {
      if (!this.hasValidMoves) {
        this.$store.dispatch('log', {player: this.currentPlayer, text: `has no valid moves, skipping turn.`})
        this.nextTurn(true)
      }
    },
    finishedPips(val) {
      if (Object.values(val).includes(this.pipsToWin)) {
        this.$store.dispatch('gameOver')
        EventBus.$emit('gameOver')
      }
    },
    canRoll: function(val) {
      if (val) { EventBus.$emit('playerCanRoll') }
    }
  },
  computed: {
    otherPlayer() {
      return this.currentPlayer === 'player1' ? 'player2' : 'player1'
    },
    currentPlayerReadable() {
      return this.displayNames[this.currentPlayer]
    },
    ...mapState([
      'displayNames', 'page', 'pips', 'die', 'canPlay', 'moves', 'board', 'currentPlayer', 'hasValidMoves', 'validMoves', 'finishedPips', 'pipsToWin', 'gameOver', 'winner', 'playing'
    ])
  }
}
</script>

<style>

header {
  width: 900px;
  display: flex;
  text-align: left;
  justify-content: space-between;
  margin: 0 auto;
}

nav {
  width: 900px;
  display: inline-flex;
  text-align: left;
  justify-content: space-between
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

h4 {
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

.header-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

.header-right {
  display: inline-block;
  width: 60%;
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

.players-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 900px;
  margin: 0 auto;
}

.die {
  display: inline-block;
}

.bottom-container {
  display: inline-flex;
  background: rgb(51,51,51);
  background: linear-gradient(180deg, rgba(88, 82, 52, 0.273) 0%, rgba(255,255,255,0) 100%); 
  margin-top: 40px;
  border-radius: 5px;
  width: 858px;
  height: 350px;
  justify-content: space-between;
  padding: 25px;
  padding-top: 0px;
}

</style>
