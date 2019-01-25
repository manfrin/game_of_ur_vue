import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import board from './data/board.js'
import EventBus from './event-bus'
import getValidMoves from './services/get-valid-moves'
import {
  checkForWin,
  otherPlayer,
  addressToRead
} from './helpers'

const PIPS_IN_GAME = 7

function initialConfig() {
  return {
    displayNames: {
      player1: 'Player 1',
      player2: 'Player 2'
    },
    pipsToWin: PIPS_IN_GAME,
    board,
    ai: {
      player1: false,
      player2: false,
    },
    aiType: {
      player1: 'default',
      player2: 'default',
    },
    playing: false,
    aiDelay: 100,
    aiContinualPlay: false,
    page: 'game'
  }
}

function initialState() {
  return {
    pips: {
      player1: new Array(PIPS_IN_GAME).fill(0),
      player2: new Array(PIPS_IN_GAME).fill(0),
    },
    finishedPips: {
      player1: 0,
      player2: 0
    },
    gameOver: false,
    winner: null,
    canRoll: true,
    canPlay: false,
    die: [0, 0, 0, 0],
    moves: 0,
    validMoves: {},
    currentPlayer: 'player1',
  }
}

export default new Vuex.Store({
  state: {
    wins: {
      player1: 0,
      player2: 0
    },
    logs: [],
    ...initialConfig(),
    ...initialState()
  },
  mutations: {
    changePlayer (state) {
      state.currentPlayer = otherPlayer(state.currentPlayer)
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
    },
    stopGame(state, {winner}) {
      state.gameOver = true
      state.winner = winner
      state.canPlay = false
      state.canRoll = false
      state.wins[winner] += 1
    },
    trimLogs(state) {
      state.logs.splice(40, 10)
    },
    reset(state) {
      const s = initialState()
      Object.keys(s).forEach(key => {
        state[key] = s[key]
      })
    },
    setAI(state, {player, val}) {
      Vue.set(state.ai, player, val)
    },
    togglePlay(state) {
      state.playing = !state.playing
    },
    setConfig(state, {parent, field, value}) {
      if (parent) {
        Vue.set(state[parent], field, value)
      } else {
        state[field] = value
      }
    },
    setPage(state, page) {
      state.page = page
      state.playing = false
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
    async log ({commit, state, dispatch}, logEntry) {
      await commit('log', logEntry)
      if (state.logs.length > 50) {
        dispatch('trimLogs')
      }
    },
    trimLogs ({commit}) {
      commit('trimLogs')
    },
    movePiece({commit, state, dispatch}, address) {
      var moves = state.moves
      var player = state.currentPlayer
      var opponent = otherPlayer(state.currentPlayer)
      var pipLoc = +address - moves
      var pipIdx = state.pips[player].indexOf(pipLoc)

      if (+address === 15) {
        commit('log', {player: state.currentPlayer, text: 'got a piece to the end!'})
        commit('winPiece', {player, idx: pipIdx})
      } else {
        var oppPipIdx = state.pips[opponent].indexOf(+address)
        var onReroll = state.board[+address].type === 'reroll'
        commit('log', {player: player, text: `moved a piece from ${addressToRead(address - moves)} to ${addressToRead(address)}.`})
        if (oppPipIdx >= 0 && !state.board[+address].safe) {
          commit('bumpPiece', {idx: oppPipIdx, player: opponent})
          commit('log', {player: player, text: `took opponents piece.`})
        }
        commit('movePiece', {player, idx: pipIdx, address})
      }
      if (!onReroll) {
        commit('changePlayer')
      }
      var winner = checkForWin(state.finishedPips, state.pipsToWin)
      if (winner) {
        dispatch('gameOver', winner)
      } else {
        commit('nextTurn')
      }
    },
    gameOver({commit}, winner) {
      commit('log', {player: winner, text: 'won the game!'})
      commit('stopGame', {winner})
    },
    newGame({commit}) {
      commit('reset')
    },
    setAI({commit}, ai) {
      commit('setAI', ai)
    },
    togglePlay({commit}) {
      commit('togglePlay')
    },
    setConfig({commit}, {parent, field, value}) {
      commit('setConfig', {parent, field, value})
    },
    changePage({commit}, page) {
      commit('setPage', page)
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

