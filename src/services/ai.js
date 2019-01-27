const potentialMoves = (pips, moves) => {
  var starts = [] + pips
  return pips.map(n => n + moves).filter(n => n < 16).filter(n => !starts.includes(n))

}

const canScore = (targets) => {
  return targets.includes(15)
}

const intersection = (targets, group) => {
  return group.filter(pip => targets.includes(pip))
}

const scores = ({targets}) => {
  return targets.includes(15) ? [15] : []
}

const rerolls = ({targets}) => {
  return intersection(targets, [4, 13])
}

const safes = ({targets}) => {
  return intersection(targets, [1, 2, 3, 4, 8, 13, 14, 15])
}

const castles = ({targets}) => {
  return targets.includes(8) ? [8] : []
}

const bumps = ({targets, opponentPips}) => {
  return intersection(targets, opponentVulnerable(opponentPips))
}

const furthests = ({targets}) => {
  return [Math.max(...targets)]
}

const anys = ({targets}) => {
  return targets
}

const opponentVulnerable = (pips) => {
  return intersection(pips, [5, 6, 7, 9, 10, 11, 12])
}

const pipOnCastle = (pips) => {
  return pips.includes(8)
}

const possibleMoves = (pips, opponentPips, moves) => {
  var targets = potentialMoves(pips, moves)
  if (pipOnCastle(opponentPips)) {
    targets.splice(targets.indexOf(8), 1)
  }
  return targets
}

export const AI_TYPES = {
  default: ['score', 'reroll', 'bump', 'castle', 'furthest', 'safe', 'any'],
  rush: ['score', 'reroll', 'furthest', 'castle', 'safe', 'bump', 'any'],
  aggressive: ['bump', 'castle', 'safe', 'reroll', 'furthest', 'score', 'any'],
  peaceful: ['score', 'reroll', 'safe', 'furthest', 'castle', 'bump', 'any']
}

const AI_TYPE_FUNCTIONS = {
  score: scores,
  reroll: rerolls,
  bump: bumps,
  furthest: furthests,
  safe: safes,
  castle: castles,
  any: anys
}

export const AI_TYPE_KEYS = Object.keys(AI_TYPES)

export const aiStrategy = function(pips, opponentPips, moves, strategy) {
  var targets = possibleMoves(pips, opponentPips, moves)

  var targetOrder = AI_TYPES[strategy] || AI_TYPES.default

  var move = targets[0]
  var type = targetOrder.find(moveType => {
    var anyMove
    var found = false
    anyMove = AI_TYPE_FUNCTIONS[moveType]({targets, opponentPips})
    found = anyMove.length > 0
    if (found) {
      move = anyMove[0]
    }
    return found
  });
  return move
}

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