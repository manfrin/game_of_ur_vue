const potentialMoves = (pips, moves) => {
  return pips.map(n => n + moves).filter(n => n < 16)
}

const canScore = (targets) => {
  return targets.includes(15)
}

const intersection = (targets, group) => {
  return group.filter(pip => targets.includes(pip))
}

const rerolls = (targets) => {
  return intersection(targets, [4, 13])
}

const bumps = (targets, opponentPips) => {
  return intersection(targets, opponentPips)
}

const opponentVulnerable = (pips) => {
  return intersection(pips, [5, 6, 7, 9, 10, 11, 12])
}

const pipOnCastle = (pips) => {
  return pips.includes(8)
}

export const AI_TYPES = {
  default: ['score', 'reroll', 'bump', 'furthest', 'safe'],
  rush: ['score', 'reroll', 'furthest', 'safe', 'bump'],
  aggressive: ['bump', 'castle', 'safe', 'reroll', 'furthest'],
  peaceful: ['score', 'reroll', 'safe', 'furthest', 'bump']
}

export const AI_TYPE_KEYS = Object.keys(AI_TYPES)

const ai = function(pips, opponentPips, moves) {
  var opponentVulnPips = opponentVulnerable(opponentPips)
  var targets = potentialMoves(pips, moves)
  var rerollable = rerolls(targets)
  var canReroll = rerollable.length > 0
  var bumpable = bumps(targets, opponentVulnPips)
  var canBump = bumpable.length > 0

  if (pipOnCastle(targets) && pipOnCastle(opponentPips)) {
    targets.splice(targets.indexOf(8), 1)
  }

  if (canScore(targets)) {
    return 15
  } else if (canReroll) {
    return rerollable[0]
  } else if (canBump) {
    return bumpable[0]
  } else {
    return targets[0]
  }
}

export default ai