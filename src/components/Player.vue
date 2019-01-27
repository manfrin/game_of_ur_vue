<template>
  <div class='player-name-container'>
    <h3> {{ this.displayNameWithAI }} [{{this.playerWins}} wins]</h3> 
    <label>
      <span class='ai-checkbox'>
        Autoplay: 
        <input type='checkbox' v-model='isAI' />
      </span>
    </label>
  </div>
</template>

<script>
import { mapState } from "vuex"
import { aiStrategy } from '../services/ai';
import { otherPlayer } from '../helpers'

export default {
  name: 'Player',
  props: {
    player: String
  },
  data() {
    return  {
      interval: null
    }
  },
  beforeDestroy () {
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  watch: {
    aiShouldPlay: function(val) {
      if (val) {
        this.setAct()
      }
    },
  },
  computed: {
    aiShouldPlay() {
      return this.playing && this.isTurn && this.isAI
    },
    displayNameWithAI() {
      var name = this.displayNames[this.player]
      this.isAI && (name += ' [AI]')
      return name
    },
    isTurn() {
      return this.currentPlayer === this.player
    },
    playerWins() {
      return this.wins[this.player]
    },
    strat() {
      return this.aiType[this.player]
    },
    isAI: {
      get() {
        return this.ai[this.player]
      },
      set(val) {
        this.$store.dispatch('setAI', {player: this.player, val})
      }
    },
    ...mapState(['aiDelay', 'currentPlayer', 'canRoll', 'canPlay', 'moves', 'pips', 'displayNames', 'wins', 'ai', 'playing', 'aiType'])
  },
  methods: {
    setAct() {
      var vm = this
      this.interval = setTimeout(vm.act, this.aiDelay)
    },
    clearAct() {
      clearInterval(this.interval)
      this.interval = null
    },
    act() {
      if (!this.playing || !this.isTurn || !this.isAI) {
        this.clearAct()
      } else {
        if (this.canRoll) {
          this.roll()
        } else if (this.canPlay) {
          this.move()
        }
        this.setAct()
      }
    },
    roll() {
      this.$store.dispatch('rollDice')
    },
    move() {
      var pips = this.pips[this.player]
      var opponentPips = this.pips[otherPlayer(this.player)]
      var move = aiStrategy(pips, opponentPips, this.moves, this.strat)
      if (move) {
        this.$store.dispatch('movePiece', {address: move})
      }
    }
  }
}
</script>

<style scoped>
  span, h3, label {
    display: inline-block;
    font-size: 1em;
  }

  label {
    margin: 0 0 0 10px;
  }

  h3 {
    font-size: 1.5em;
    margin: 0;
    padding: 0;
  }

  input {
    margin: 0;
  }

  .ai-checkbox {
    display: block;
  }

  .player-name-container {
    margin: 10px;
    display: flex;
    align-items: center;
  }
</style>
