<template>
  <div class='instructions-container'>
    <h2>Instructions</h2>
    <p>The Royal Game of Ur is one of the earliest known board games humans have created. </p>
    <p>The game is played by two players taking turns rolling 4 2d dice and moving their pieces down the board. The pieces must travel from the beginning (near the middle), down the left, around and back right down the middle, then back left (on their own side).</p>
    <p>Pieces must move exactly the number of moves rolled. Only one piece can be on a tile at a time -- if you land on a tile occupied by your opponent's piece, you bump theirs back to the beginning. </p>
    <p>Landing on red tiles lets you roll again. The grey tile is a special tile where the occupant cannot be bumped back. Pieces are safe on their own sides (top or bottom). A piece must land exactly on the end to move off the board.</p>
  </div>
</template>

<script>
export default {
  name: 'Instructions'
}
</script>

<style scoped>
.instructions-container {
  width: 60%;
  height: 350px;
  padding: 0;
  margin: 0;
  margin-right: 30px;
}

h2 {
  text-align: right;
  padding-right: 20px;
}

p {
  text-align: left;
  font-size: .85em;
  line-height: 1.5em;
  margin: 12px;
}
</style>
