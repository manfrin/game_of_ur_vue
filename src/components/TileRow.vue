<template>
  <div class='board-row'>
    <Tile 
      v-for='(address) in layout'
      :key='address + "_" + playerSide'
      :address='address'
      :canMoveFrom='tileMoveFrom(+address)'
      :canMoveTo='tileMoveTo(+address)'
      :type='board[address].type'
      :hasPipFor='hasPipFor(address)'
      :hovering='+hoveringTile === +address'
      @makeMove='makeMove'
    />
  </div>
</template>

<script>
import Tile from "./Tile.vue"

export default {
  name: 'TileRow',
  components: {Tile},
  props: {
    pips: Object,
    validMoves: Object,
    board: Object,
    playerSide: String,
    layout: Array,
    hoveringTile: Number,
    currentPlayer: String
  },
  methods: {
    tileMoveFrom: function (address) {
      return this.moveFromKeys.includes(+address)
    },
    tileMoveTo: function (address) {
      return this.moveToKeys.includes(+address)
    },
    hasPipFor: function (address) {
      var p1Has = this.pips.player1.includes(+address)
      var p2Has = this.pips.player2.includes(+address)
      if (this.playerSide === 'middle') {
        if (p1Has) {
          return 'player1'
        } else if (p2Has) {
          return 'player2'
        } else {
          return ''
        }
      } else {
        return this.pips[this.playerSide].includes(+address) ? this.playerSide : ''
      }
    },
    makeMove(address, toOrFrom) {
      this.$emit('makeMove', address, toOrFrom)
    }
  },
  computed: {
    trueValidMoves: function () {
      if (
        this.playerSide === 'middle' ||
        this.playerSide === this.currentPlayer
      ) {
        return this.validMoves
      } else {
        return {player1: [], player2: []}
      }
    },
    moveFromKeys: function () {
      var moveFrom = Object.keys(this.trueValidMoves[this.currentPlayer])
      moveFrom = moveFrom.map(n => { return +n })
      return moveFrom
    },
    moveToKeys: function () {
      var moveTo = Object.values(this.trueValidMoves[this.currentPlayer])
      moveTo =  moveTo.filter(n => { return !this.moveFromKeys.includes(n) })
      return moveTo
    }
  }
}
</script>

<style>

</style>
