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
import ai from '../services/ai';
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
    isTurn: function(val) {
      if (val) {
        this.setAct()
      } else {
        clearInterval(this.interval)
        this.interval = null
      }
    },
    isAI: function(val) {
      if (val) {
        this.setAct()
      }
    },
    playing: function(isPlaying) {
      if (isPlaying && this.isAI) {
        this.setAct()
      }
    }
  },
  computed: {
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
    isAI: {
      get() {
        return this.ai[this.player]
      },
      set(val) {
        this.$store.dispatch('setAI', {player: this.player, val})
      }
    },
    ...mapState(['aiDelay', 'currentPlayer', 'canRoll', 'canPlay', 'moves', 'pips', 'displayNames', 'wins', 'ai', 'playing'])
  },
  methods: {
    setAct() {
      var vm = this
      this.interval = setInterval(vm.act, this.aiDelay)
    },
    act() {
      if (this.isTurn && this.isAI && this.playing) {
        if (this.canRoll) {
          this.roll()
        } else if (this.canPlay) {
          this.move()
        }
      }
    },
    roll() {
      this.$store.dispatch('rollDice')
    },
    move() {
      var pips = this.pips[this.player]
      var opponentPips = this.pips[otherPlayer(this.player)]
      var move = ai(pips, opponentPips, this.moves)
      if (move) {
        this.$store.dispatch('movePiece', move)
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
