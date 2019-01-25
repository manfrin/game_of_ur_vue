<template>
  <div>
    <div class='board-container'>
      <span class='player-2-name player-name'><PipDisplay playerSide='player2' /> <Player player='player2' /> </span>
      <TileRow :pips='pips' :layout='boardLayout.player' playerSide='player2' :hoveringOver='activeHover'/>
      <TileRow :pips='pips' :layout='boardLayout.middle' playerSide='middle' :hoveringOver='activeHover'/>
      <TileRow :pips='pips' :layout='boardLayout.player' playerSide='player1' :hoveringOver='activeHover'/>
      <span class='player-1-name player-name'> <Player player='player1' /> <PipDisplay playerSide='player1' /></span>
    </div>
  </div>
</template>

<script>
import TileRow from "./TileRow.vue"
import PipDisplay from "./PipDisplay.vue"
import Player from "./Player.vue"

import EventBus from '../event-bus'

export default {
  name: 'Board',
  components: {TileRow, PipDisplay, Player},
  props: {
    validMoves: Object,
  },
  data() {
    return {
      boardLayout: {
        player: [4, 3, 2, 1, 0, 15, 14, 13],
        middle: [5, 6, 7, 8, 9, 10, 11, 12]
      },
      board: this.$store.state.board,
      activeHover: {
        address: -1,
        playerSide: '',
        canMoveTo: false,
        canMoveFrom: false
      }
    }
  },
  mounted() {
    var vm = this
    EventBus.$on('hovering', ({address, playerSide, canMoveTo, canMoveFrom}) => {
      this.activeHover.address = address
      this.activeHover.playerSide = playerSide
      this.activeHover.canMoveTo = canMoveTo
      this.activeHover.canMoveFrom = canMoveFrom
    })
    EventBus.$on('notHovering', vm.unHover)
  },
  methods: {
    unHover() {
      this.activeHover.address = -1
      this.activeHover.playerSide = ''
      this.activeHover.canMoveTo = false
      this.activeHover.canMoveFrom = false
    }
  },
  computed: {
    pips() {
      return this.$store.state.pips
    },
    currentPlayer() { 
      return this.$store.state.currentPlayer 
    },
    moveFromKeys: function () {
      return Object.keys(this.validMoves[this.currentPlayer])
    },
    moveToKeys: function () {
      return Object.values(this.validMoves[this.currentPlayer])
    }
  }
}
</script>

<style>
.board-container {
  display: inline-block;
  /* background: rgba(88, 82, 52, 0.273); */
  /* transform: rotateX(35deg); */
  padding: 6px;
}
.player-1-name {
  justify-content: left;
  display: flex;
}

.player-2-name {
  justify-content: right;
  display: flex;
}

</style>
