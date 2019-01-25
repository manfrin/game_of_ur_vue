import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import board from './data/board.js'
import EventBus from './event-bus'

export default new Vuex.Store({
  state: {
    pips: {
      player1: [0, 0, 0, 0, 0, 0, 0],
      player2: [0, 0, 0, 0, 0, 0, 0],
    },
    finishedPips: {
      player1: 0,
      player2: 0
    },
    canRoll: true,
    canPlay: false,
    die: [0, 0, 0, 0],
    moves: 0,
    validMoves: {},
    currentPlayer: 'player1',
    board,
    logs: []
  },
  mutations: {
    changePlayer (state) {
      state.currentPlayer = state.currentPlayer === 'player1' ? 'player2' : 'player1'
    },
    rollDice (state, {die, moves}) {
      state.die = die
      state.moves = moves
      state.canRoll = false
      state.canPlay = true
    },
    nextTurn (state) {
      state.canPlay = false
      state.canRoll = true
      EventBus.$emit('notHovering')
    },
    log (state, logEntry) {
      state.logs.push(logEntry)
    },
    bumpPiece (state, {idx, player}) {
      Vue.set(state.pips[player], idx, 0)
    },
    movePiece (state, {player, idx, address}) {
      Vue.set(state.pips[player], idx, address)
      state.validMoves = {}
    },
    winPiece (state, {player, idx}) {
      Vue.delete(state.pips[player], idx)
      state.finishedPips[player] += 1
      state.validMoves = {}
    },
    checkValidMoves (state, {valid}) {
      state.validMoves = valid
      state.hasValidMoves = Object.keys(valid).length > 0
    }
  },
  actions: {
    checkValidMoves({commit, state}) {
      var valid = getValidMoves(state)
      if (!(Object.keys(valid).length > 0)) {
        commit('log', {player: state.currentPlayer, text: 'cannot move any pieces, skipping turn.'})
        commit('changePlayer')
        commit('nextTurn')
      } else {
        commit('checkValidMoves', {valid})
      }
    },
    changePlayer ({commit}) {
      commit('changePlayer')
    },
    rollDice ({commit, state, dispatch}) {
      var die = Math.floor(Math.random() * 16).toString(2).padStart(4, '0').split('')
      var moves = die.reduce((a, b) => +a + +b, 0)
      moves = 4
      commit('rollDice', {die, moves})
      if (moves === 0) {
        commit('log', {player: state.currentPlayer, text: 'rolled a zero! Skipping turn.'})
        commit('changePlayer')
        commit('nextTurn')
      }
      dispatch('checkValidMoves')
    },
    nextTurn ({commit}, switchPlayers) {
      if (switchPlayers) {
        commit('changePlayer')
      }
      commit('nextTurn')
    },
    log ({commit}, logEntry) {
      commit('log', logEntry)
    },
    movePiece({commit, state}, address) {
      var moves = state.moves
      var player = state.currentPlayer
      var opponent = state.currentPlayer === 'player1' ? 'player2' : 'player1'
      var pipLoc = +address - moves
      var pipIdx = state.pips[player].indexOf(pipLoc)

      if (+address === 15) {
        commit('log', {player: state.currentPlayer, text: 'got a piece to the end!'})
        commit('winPiece', {player, idx: pipIdx})
      } else {
        var oppPipIdx = state.pips[opponent].indexOf(+address)
        var onReroll = state.board[+address].type === 'reroll'
        commit('log', {player: player, text: `moved a piece from ${address - moves} to ${address}.`})
        if (oppPipIdx >= 0 && !state.board[+address].safe) {
          commit('bumpPiece', {idx: oppPipIdx, player: opponent})
          commit('log', {player: player, text: `took opponents piece.`})
        }
        commit('movePiece', {player, idx: pipIdx, address})
      }
      if (!onReroll) {
        commit('changePlayer')
      }
      commit('nextTurn')
    }
  },
  getters: {
    pipCompletion: state => {
      var player1Finished = +state.finishedPips.player1
      var player1Unfinished = +state.pips.player1.length
      var player2Finished = +state.finishedPips.player2
      var player2Unfinished = +state.pips.player2.length
      return {
        player1: {
          finished: player1Finished,
          unfinished: player1Unfinished
        },
        player2: {
          finished: player2Finished,
          unfinished: player2Unfinished
        }
      }
    }
  }
})

function getValidMoves (state) {
  var valid = {}
  var otherPlayer = state.currentPlayer === 'player1' ? 'player2' : 'player1'
  if (state.moves > 0) {
    state.pips[state.currentPlayer].forEach((pip => {
      var moveFrom = +pip
      var moveTo = +pip + state.moves

      var canMove = (
        (moveTo === 15) ||
        (
          !valid[moveTo] &&
          !(state.pips[state.currentPlayer].includes(moveTo)) &&
          !!state.board[moveTo] &&
          !(+moveTo === 8 && state.pips[otherPlayer].includes(8))
        )
      )

      if (canMove) { 
        valid[moveFrom] = moveTo
      }
    }))
  }
  return valid
}