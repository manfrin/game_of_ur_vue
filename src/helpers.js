export const otherPlayer = (player) => {
  return player === 'player1' ? 'player2' : 'player1'
}

export const checkForWin = (finishedPips, pipsToWin) => {
  if (finishedPips.player1 >= pipsToWin) {
    return 'player1'
  } else if (finishedPips.player2 >= pipsToWin) {
    return 'player2'
  } else {
    return null
  }
}