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

export const addressToRead = (address) => {
  var tile = '[' + address + ']'
  if ([4, 13].includes(address)) {
    tile = 'reroll ' + tile
  } else if ([8].includes(address)) {
    tile = 'castle ' + tile
  } else if ([15].includes(address)) {
    tile = 'the end ' + tile
  }
  return tile
}