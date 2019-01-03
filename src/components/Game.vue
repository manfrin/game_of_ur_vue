<template>
  <div>
    <header>
      <h1>Royal Game of Ur</h1>
      <h2>Current Player: <span :class='currentPlayer'>{{ currentPlayerReadable }}</span></h2>
      <div class='die'>
        <Die :die='die' :moves='moves' :canRoll='canRoll'/>
        <Controls @click-roll='clickRoll' :canRoll='canRoll' />
      </div>
    </header>
    <Board class='board' :board='board' :pips='pips' :validMoves='validMoves' :currentPlayer='currentPlayer' @makeMove='makeMove'/>
    <Logs :logs='logs' />
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
  data() {
    return {
      currentPlayer: 'player1',
      canRoll: true,
      canPlay: false,
      die: [0, 0, 0, 0],
      hoveringOver: 0,
      logs: [],
      pips: {
        player1: [0, 0, 0, 0, 0, 0, 0],
        player2: [0, 0, 0, 0, 0, 0, 0],
      },
      board: {
        0: {
          type: 'start',
          safe: true
        },
        1: {
          type: 'blank',
          safe: true
        },
        2: {
          type: 'blank',
          safe: true
        },
        3: {
          type: 'blank',
          safe: true
        },
        4: {
          type: 'reroll',
          safe: true
        },
        5: {
          type: 'blank',
          safe: false
        },
        6: {
          type: 'blank',
          safe: false
        },
        7: {
          type: 'blank',
          safe: false
        },
        8: {
          type: 'castle',
          safe: true
        },
        9: {
          type: 'blank',
          safe: false
        },
        10: {
          type: 'blank',
          safe: false
        },
        11: {
          type: 'blank',
          safe: false
        },
        12: {
          type: 'blank',
          safe: false
        },
        13: {
          type: 'reroll',
          safe: true
        },
        14: {
          type: 'blank',
          safe: true
        },
        15: {
          type: 'end',
          safe: true
        }
      }
    }
  },
  methods: {
    clickRoll() {
      var roll = Math.floor(Math.random() * 16).toString(2).padStart(4, '0').split('');
      this.die = roll
      this.canRoll = false
      this.canPlay = true
      this.logs.push({player: this.currentPlayer, text: `rolled dice: ${roll.join(', ')}.`})
    },
    nextTurn(nextPlayer = true) {
      if (nextPlayer) {
        this.currentPlayer = this.otherPlayer
      }
      this.canPlay = false
      this.canRoll = true
    },
    makeMove(address, toOrFrom) {
      var moves = this.moves
      if (toOrFrom === 'from') {
        address += moves
      }
      var player = this.currentPlayer
      var pipLoc = +address - moves
      var pipIdx = this.pips[player].indexOf(pipLoc)
      var oppPipIdx = this.pips[this.otherPlayer].indexOf(+address)
      this.logs.push({player: this.currentPlayer, text: `moved a piece from ${address - moves} to ${address}.`})
      if (oppPipIdx >= 0 && !this.board[+address].safe) {
        this.$set(this.pips[this.otherPlayer], oppPipIdx, 0)
        this.logs.push({player: this.currentPlayer, text: `took opponents piece.`})
      }
      this.$set(this.pips[player], pipIdx, +address)
      this.nextTurn(!this.onReroll(address))
    },
    onReroll(address) {
      return this.board[+address].type === 'reroll'
    }
  },
  watch: {
    hasLegalMoves: function() {
      if (!this.hasLegalMoves) {
        this.logs.push({player: this.currentPlayer, text: `has no valid moves, skipping turn.`})
        this.nextTurn(true)
      }
    },
    moves: function(moves) {
      if (moves === 0) {
        this.logs.push({player: this.currentPlayer, text: `rolled a 0 and cannot move.`})
        this.nextTurn(true)
      }
    }
  },
  computed: {
    hasLegalMoves() {
      return this.validMoves[this.currentPlayer].length > 0
    },
    otherPlayer() {
      return this.currentPlayer === 'player1' ? 'player2' : 'player1'
    },
    currentPlayerReadable() {
      return this.currentPlayer === 'player1' ? 'Player 1' : 'Player 2'
    },
    moves: function () {
      return this.die.reduce((a, b) => +a + +b, 0)
    },
    validMoves: function () {
      var valid = {player1: {}, player2: {}}
      if (this.moves > 0 && this.canPlay) {
        this.pips[this.currentPlayer].forEach((pip => {
          var moveFrom = +pip
          var moveTo = +pip + this.moves
          var canMove = (
            !valid[this.currentPlayer][moveTo] &&
            !(this.pips[this.currentPlayer].indexOf(moveTo) >= 0) &&
            !!this.board[moveTo]
          )
          if (+moveTo === 8 && this.pips[this.otherPlayer].includes(8)) {
            canMove = false
          }
          if (canMove) { 
            valid[this.currentPlayer][moveFrom] = moveTo
          }
        }))
      }
      return valid
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
