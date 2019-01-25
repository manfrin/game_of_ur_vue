<template>
  <div class='board-row'>
    <Tile 
      v-for='(address) in layout'
      :key='address + "_" + playerSide'
      :address='address'
      :playerSide='playerSide'
    />
  </div>
</template>

<script>
import Tile from "./Tile.vue"

export default {
  name: 'TileRow',
  components: {Tile},
  props: {
    validMoves: Object,
    playerSide: String,
    layout: Array,
    hoveringTile: Number,
  },
  methods: {
  },
  computed: {
    board() {
      return this.$store.state.board
    },
    currentPlayer() {
      return this.$store.state.currentPlayer
    },
  }
}
</script>

<style>

</style>
