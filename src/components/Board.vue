<template>
  <div>
    <div class='board-container'>
      <TileRow :pips='pips' :layout='boardLayout.player' playerSide='player2' :hoveringOver='activeHover'/>
      <TileRow :pips='pips' :layout='boardLayout.middle' playerSide='middle' :hoveringOver='activeHover'/>
      <TileRow :pips='pips' :layout='boardLayout.player' playerSide='player1' :hoveringOver='activeHover'/>
    </div>
  </div>
</template>

<script>
import TileRow from "./TileRow.vue"
import EventBus from '../event-bus'

import { mapState } from 'vuex'

export default {
  name: 'Board',
  components: {TileRow},
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
    EventBus.$on('hovering', vm.hover)
    EventBus.$on('notHovering', vm.unHover)
  },
  methods: {
    hover({address, playerSide, canMoveTo, canMoveFrom}) {
      if (this.hoverEffects) {
        this.activeHover.address = address
        this.activeHover.playerSide = playerSide
        this.activeHover.canMoveTo = canMoveTo
        this.activeHover.canMoveFrom = canMoveFrom
      }
    },
    unHover() {
      this.activeHover.address = -1
      this.activeHover.playerSide = 'middle'
      this.activeHover.canMoveTo = false
      this.activeHover.canMoveFrom = false
    }
  },
  computed: {
    moveFromKeys: function () {
      return Object.keys(this.validMoves[this.currentPlayer])
    },
    moveToKeys: function () {
      return Object.values(this.validMoves[this.currentPlayer])
    },
    ...mapState(['pips', 'currentPlayer', 'hoverEffects'])
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

</style>
