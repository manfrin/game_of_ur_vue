function getValidMoves (state) {
  var valid = {}
  var otherPlayer = state.currentPlayer === 'player1' ? 'player2' : 'player1'
  if (state.moves > 0) {
    state.pips[state.currentPlayer].forEach((pip => {
      var moveFrom = +pip
      var moveTo = +pip + state.moves

      var canMove = (
        (moveTo === 15) ||
        (
          !valid[moveTo] &&
          !(state.pips[state.currentPlayer].includes(moveTo)) &&
          !!state.board[moveTo] &&
          !(+moveTo === 8 && state.pips[otherPlayer].includes(8))
        )
      )

      if (canMove) { 
        valid[moveFrom] = moveTo
      }
    }))
  }
  return valid
}

export default getValidMoves