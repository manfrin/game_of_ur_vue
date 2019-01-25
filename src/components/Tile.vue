<template>
  <div class='board-space' v-bind:class='classObject' @mouseover='isHovering' @mouseout='notHovering' @click='move'>
    <p v-if='hasPip' v-bind:class='pip'></p>
  </div>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    address: Number,
    playerSide: String
  },
  computed: {
    distanceFromHoverSource() {
      if (this.activeHover && this.checkHover) {
        var moves = this.$store.state.moves
        var {address, canMoveFrom} = this.$store.state.hoveringOver
        var start = (canMoveFrom ? +address : (+address - moves))
        return this.address - start
      } else {
        return -1
      }
    },
    hoverDistanceClass() {
      var distClass

      switch(this.distanceFromHoverSource) {
        case 1:
          distClass = 'one-off'
          break
        case 2:
          distClass = 'two-off'
          break
        case 3:
          distClass = 'three-off'
          break
        case 4:
          distClass = 'four-off'
          break
        default:
          distClass = ''
      }

      return distClass
    },
    checkHover() {
      return this.$store.state.canPlay &&
        (this.$store.getters.opponent !== this.playerSide)
    },
    activeHover() {
      return Object.keys(this.$store.state.hoveringOver).length > 0
    },
    canMoveTo () {
      return this.onside && this.validTargets.includes(this.address)
    },
    canMoveFrom () {
      // Ugly hack
      return this.onside && this.validSources.includes('' + this.address)
    },
    canMove () {
      return this.canMoveTo || this.canMoveFrom
    },
    validSources () {
      return Object.keys(this.$store.state.validMoves)
    },
    validTargets () {
      return Object.values(this.$store.state.validMoves)
    },
    classObject() {
      var type = this.type
      var side = this.playerSide
      var hoverDistanceClass = this.hoverDistanceClass
      return {
        [type]: true,
        [side]: true,
        [hoverDistanceClass]: true,
        hovering: this.hovering,
        inBetween: this.inBetween,
        isTargetMove: this.canMoveTo,
        isSourceMove: this.canMoveFrom,
        dim: this.shouldDim
      }
    },
    shouldDim() {
      return this.checkHover && !this.onside
    },
    notInvolved() {
      return !(this.inBetween || this.hovering)
    },
    inBetween() {
      var {address, canMoveTo, canMoveFrom} = this.$store.state.hoveringOver
      var {moves} = this.$store.state

      var upperBound, lowerBound = 0

      if ((this.playerSide !== 'middle') && (this.currentPlayer !== this.playerSide)) {
        return false
      }

      if (canMoveFrom) {
        lowerBound = address
        upperBound = address + moves
      } else if (canMoveTo) {
        lowerBound = address - moves
        upperBound = address
      } else {
        return false
      }

      return !this.hovering &&
        this.address > lowerBound &&
        this.address < upperBound
    },
    hovering() {
      var {address, canMoveTo, canMoveFrom} = this.$store.state.hoveringOver
      var moves = this.$store.state.moves

      var pairAddress = address
      if (canMoveTo) {
        pairAddress -= moves
      } else if (canMoveFrom) {
        pairAddress += moves
      }

      return this.canMove &&
        this.onside &&
        (
          ( pairAddress === this.address) ||
          ( address === this.address )
        )
    },
    hasPip() {
      return this.pip.length > 0
    },
    pipName() {
      return this.pip === 'player1' ? 'Player 1' : 'Player 2'
    },
    pip() {
      // This is bad.
      var pip = ''
      if (this.playerSide === 'middle') {
        if (this.$store.state.pips.player1.includes(this.address)) {
          pip = 'player1'
        }
        if (this.$store.state.pips.player2.includes(this.address)) {
          pip = 'player2'
        }
      } else if (this.$store.state.pips[this.playerSide].includes(this.address)) {
        pip = this.playerSide
      }
      return pip
    },
    type () {
      return this.$store.state.board[this.address].type
    },
    onside () {
      return (this.currentPlayer === this.playerSide) || (this.playerSide === 'middle')
    },
    currentPlayer () {
      return this.$store.state.currentPlayer
    }
  },
  methods: {
    move() {
      if (this.canMoveTo) {
        this.$store.dispatch('movePiece', this.address)
      } else if (this.canMoveFrom) {
        this.$store.dispatch('movePiece', this.address + this.$store.state.moves)
      }
    },
    isHovering() {
      if (this.checkHover && this.onside) {
        this.$store.dispatch('hover', {address: this.address, playerSide: this.playerSide, canMoveTo: this.canMoveTo, canMoveFrom: this.canMoveFrom})
      }
    },
    notHovering() {
      if (this.checkHover) {
        this.$store.dispatch('notHovering')
      }
    }
  }
}
</script>

<style scoped>
.board-space {
  width: 110px;
  height: 110px;
  display: inline-flex;
  font-size: .8em;
  vertical-align: middle;
  margin: 1px;
  align-items: center;
  transition: 1s;
}

.start {
  background-color: rgba(88, 82, 52, 0);
  color: #ccc;
}

.blank {
  background-color: rgba(165, 145, 58, 0.459);
}

.reroll {
  background-color: #d10c06d5;
}

.castle {
  background-color: #2b271ccc
}

.end {
  background-color: rgba(88, 82, 52, 0);
}

.board-space.isTargetMove {
  /* width: 95px;
  height: 95px;
  border: 5px inset #ff0000; */
}

.board-space.isSourceMove {
  /* width: 95px;
  height: 95px;
  border: 5px outset #2632d1; */
}

.board-space.hovering {
  /* border: 5px dashed #239289 !important; */
  background-color: #7ecc18be !important;
}

.board-space.inBetween {
  background-color: #7ecc18be !important;
}

.board-space.one-off {
  transition: all 1s cubic-bezier(0.77, 0, 0.175, 1) !important;
}

.board-space.two-off {
  transition: all 2s cubic-bezier(0.77, 0, 0.175, 1) !important;
}

.board-space.three-off {
  transition: all 3.25s cubic-bezier(0.77, 0, 0.175, 1) !important;
}

.board-space.four-off {
  transition: all 4.5s cubic-bezier(0.77, 0, 0.175, 1) !important;
}
/* 
.board-space.inBetween:not(:first-child):not(:last-child) {
  background-color: #00ff4c !important;
  width: 150px;
  margin: 0 -10px 0 -10px;
} */

.board-space.dim {
  opacity: .2;
}

p {
  padding: 10px;
  border-radius: 20px;
  margin: 0 auto;
  height: 20px;
  width: 20px;
}

.hovering p {
  border: 3px solid #fff;
}

p.player1 {
  background-color: #270830;
  color: #ccc;
}

p.player2 {
  background-color: #ff0000;
  color: #fff;
}


</style>
