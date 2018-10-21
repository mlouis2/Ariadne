const CHUNK_SIZE = 32;

class Chunk {
     constructor(north, east, south, west) {
          this.north = north;
          this.east = east;
          this.south = south;
          this.west = west;
          this.cells = [[]];
          initiateEmptyCells();
          this.chunkSize = CHUNK_SIZE;
          this.hasBeenDrawn = false;
     }
     initiateEmptyCells() {
          for (let row = 0; row < chunkSize; row++) {
               for (let col = 0; col < chunkSize; col++) {
                    this.cells[row][col] = new Cell(row, col, true, true, true, true);
               }
          }
     }
     createMaze() {
          let emptyCell = getEmptyCell();
          while (emptyCell !== null) {
               carvePath(emptyCell);
               emptyCell = getEmptyCell();
          }
     }
     carvePath(cell) {
          let randomEmptyNeighbor = getRandomEmptyNeighbor(cell);
          while (randomEmptyNeighbor !== null) {
               mergeCells(cell, randomEmptyNeighbor);
               cell = randomEmptyNeighbor;
               randomEmptyNeighbor = getRandomEmptyNeighbor(cell);
          }
     }
     getEmptyCell() {
          for (let row = 0; row < chunkSize; row++) {
               for (let col = 0; col < chunkSize; col++) {
                    if (cells[row][col].isEmpty()) {
                         return cells[row][col];
                    }
               }
          }
          return null;
     }
     getRandomEmptyNeighbor(cell) {
          let possibleNeighbors = getPossibleNeighbors(cell);
          let emptyNeighbors = [];
          for (let neighbor of possibleNeighbors) {
               if (neighbor.isEmpty()) {
                    emptyNeighbors.push(neighbor);
               }
          }
          let randomIndex = Math.random() * (emptyNeighbors.length - 1);
          return emptyNeighbors[randomIndex];
     }
     getPossibleNeighbors(cell) {
          let possibleNeighbors = [];
          if (cell.row !== 0) {
               possibleNeighbors.push(cells[cell.row - 1][cell.col]);
          }
          if (cell.col !== 0) {
               possibleNeighbors.push(cells[cell.row][cell.col - 1]);
          }
          if (cell.row !== MAZE_SIZE - 1) {
               possibleNeighbors.push(cells[cell.row + 1][cell.col]);
          }
          if (cell.col !== MAZE_SIZE - 1) {
               possibleNeighbors.push(cells[cell.row][cell.col + 1]);
          }
          return possibleNeighbors;
     }
     mergeCells(a, b) {
          if (a.isAbove(b)) {
               a.hasBottomWall = false;
               b.hasTopWall = false;
          } else if (a.isRightOf(b)) {
               a.hasLeftWall = false;
               b.hasRightWall = false;
          } else if (a.isBelow(b)) {
               a.hasTopWall = false;
               b.hasBottomWall = false;
          } else if (a.isLeftOf(b)) {
               a.hasRightWall = false;
               b.hasLeftWall = false;
          }
          a.isUntouched = false;
          b.isUntouched = false;
     }
     draw() {
          
     }
}
