<template>
  <div class='board-row'>
    <Tile 
      v-for='(address) in layout'
      :key='address + "_" + playerSide'
      :address='address'
      :playerSide='playerSide'
      :hoveringOver='hoveringOver'
    />
  </div>
</template>

<script>
import Tile from "./Tile.vue"

export default {
  name: 'TileRow',
  components: {Tile},
  props: {
    playerSide: String,
    layout: Array,
    hoveringOver: Object
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
