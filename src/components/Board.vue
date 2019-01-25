<template>
  <div>
    <div class='board-container'>
      <h3 class='player-2-name'><PipDisplay playerSide='player2' /> Player 2</h3>
      <TileRow :pips='pips' :layout='boardLayout.player' playerSide='player2' :hoveringOver='activeHover'/>
      <TileRow :pips='pips' :layout='boardLayout.middle' playerSide='middle' :hoveringOver='activeHover'/>
      <TileRow :pips='pips' :layout='boardLayout.player' playerSide='player1' :hoveringOver='activeHover'/>
      <h3 class='player-1-name'>Player 1 <PipDisplay playerSide='player1' /></h3>
    </div>
  </div>
</template>

<script>
import TileRow from "./TileRow.vue"
import PipDisplay from "./PipDisplay.vue"

import EventBus from '../event-bus'

export default {
  name: 'Board',
  components: {TileRow, PipDisplay},
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
  text-align: left;
  margin-left: 20px;
}

.player-2-name {
  text-align: right;
  margin-right: 20px;
}

</style>
