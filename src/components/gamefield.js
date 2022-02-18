function generateBombCoordinates(fieldSize, bombCount) {
  let coordinates = []

  while (coordinates.length < bombCount) {
    // Generate coordinates
    let row = Math.floor(Math.random() * fieldSize)
    let column = Math.floor(Math.random() * fieldSize)
    let uniqueCoordinates = true

    // Compare new coordinates with already generated
    coordinates.forEach(coor => {
      if (coor[0] == row && coor[1] == column) {
        uniqueCoordinates = false
      }
    })

    // If coordinates are unique append into coordinate array
    if (uniqueCoordinates) {
      coordinates.push([row, column])
    }
  }

  return coordinates
}

function generateEmptyField(fieldSize) {
  let field = []
  for (let r = 0; r < fieldSize; r++) {
    field[r] = []
    for (let c = 0; c < fieldSize; c++) {
      field[r].push({
        isBomb: false,
        value: 0,
        valueShown: false,
        flagShown: false,
      })
    }
  }

  return field
}

function getCoordinatesAroundBomb(row, column, fieldSize) {
  let coordinatesForValues = []

  for (let x = row - 1; x <= row + 1; x++) {
    if (0 <= x && x < fieldSize) {
      for (let y = column - 1; y <= column + 1; y++) {
        if (0 <= y && y < fieldSize) {
          coordinatesForValues.push([x, y])
        }
      }
    }
  }

  return coordinatesForValues
}

export function generateField(fieldSize, bombCount) {
  const bombCoordinate = generateBombCoordinates(fieldSize, bombCount)
  let field = generateEmptyField(fieldSize)

  // Generate values for bombs
  bombCoordinate.forEach(bomb => {
    getCoordinatesAroundBomb(bomb[0], bomb[1], fieldSize).forEach(coor => {
      field[coor[0]][coor[1]]["value"] += 1
    })
  })

  // Add bombs
  bombCoordinate.forEach(bomb => {
    field[bomb[0]][bomb[1]]["isBomb"] = true
  })

  return field
}
