function getValidMoves (state) {
  var valid = {}
  var otherPlayer = state.currentPlayer === 'player1' ? 'player2' : 'player1'
  var playerPips = state.pips[state.currentPlayer]
  var oppPipCastle = state.pips[otherPlayer].includes(8)
  if (state.moves > 0) {
    playerPips.forEach((pip => {
      var moveFrom = +pip
      var moveTo = +pip + state.moves

      var canMove = (
        (moveTo === 15) ||
        (
          !valid[moveFrom] &&
          !(playerPips.includes(moveTo)) &&
          (moveTo < 16) &&
          !(moveTo === 8 && oppPipCastle)
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