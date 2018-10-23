const CHUNK_SIZE = 16;
const CHUNK_SIZE_IN_PIXELS = CELL_SIZE * CHUNK_SIZE;
let testMergeCount = 0;

class Chunk {
     constructor(north, east, south, west) {
          this.north = north;
          this.east = east;
          this.south = south;
          this.west = west;
          this.cells = [[]];
          this.chunkSize = CHUNK_SIZE;
          this.initiateEmptyCells();
          this.hasBeenDrawn = false;
          this.createMaze();
     }
     initiateEmptyCells() {
          for (let row = 0; row < CHUNK_SIZE; row++) {
               this.cells[row] = [];
               for (let col = 0; col < CHUNK_SIZE; col++) {
                    this.cells[row][col] = new Cell(row, col, true, true, true, true);
               }
          }
     }
     createMaze() {
          let first = true;
          let emptyCell = this.getUntouchedCell();
          let emptyNeighbor = this.getRandomEmptyNeighbor(emptyCell);
          while (emptyCell !== undefined && emptyCell !== null) {
               if (!first) {
                    this.carvePath(emptyCell, this.getRandomNotEmptyNeighbor(emptyCell));
               }
               this.carvePath(emptyCell, emptyNeighbor);
               first = false;
               emptyCell = this.getUntouchedCell();
               emptyNeighbor = this.getRandomEmptyNeighbor(emptyCell);
          }
     }

     carvePath(cell, emptyNeighbor) {
          while (emptyNeighbor !== undefined && emptyNeighbor !== null) {
               this.mergeCells(cell, emptyNeighbor);
               cell = emptyNeighbor;
               emptyNeighbor = this.getRandomEmptyNeighbor(cell);
          }
     }
     getUntouchedCell() {
          for (let row = 0; row < CHUNK_SIZE; row++) {
               for (let col = 0; col < CHUNK_SIZE; col++) {
                    if (this.cells[row][col].isUntouched) {
                         return this.cells[row][col];
                    }
               }
          }
          return null;
     }
     getRandomEmptyNeighbor(cell) {
          let possibleNeighbors = this.getPossibleNeighbors(cell);
          if (possibleNeighbors === null) { return null; }
          let emptyNeighbors = [];
          for (let neighbor of possibleNeighbors) {
               if (neighbor.isUntouched) {
                    emptyNeighbors.push(neighbor);
               }
          }
          let randomIndex = Math.floor(Math.random() * emptyNeighbors.length);
          return emptyNeighbors[randomIndex];
     }
     getRandomNotEmptyNeighbor(cell) {
          let possibleNeighbors = this.getPossibleNeighbors(cell);
          if (possibleNeighbors === null) { return null; }
          let notEmptyNeighbors = [];
          for (let neighbor of possibleNeighbors) {
               if (!neighbor.isUntouched) {
                    notEmptyNeighbors.push(neighbor);
               }
          }
          let randomIndex = Math.floor(Math.random() * notEmptyNeighbors.length);
          return notEmptyNeighbors[randomIndex];
     }
     getPossibleNeighbors(cell) {
          if (cell === null) { return null; }
          let possibleNeighbors = [];
          if (cell.row !== 0) {
               possibleNeighbors.push(this.cells[cell.row - 1][cell.col]);
          }
          if (cell.col !== 0) {
               possibleNeighbors.push(this.cells[cell.row][cell.col - 1]);
          }
          if (cell.row !== CHUNK_SIZE - 1) {
               possibleNeighbors.push(this.cells[cell.row + 1][cell.col]);
          }
          if (cell.col !== CHUNK_SIZE - 1) {
               possibleNeighbors.push(this.cells[cell.row][cell.col + 1]);
          }
          return possibleNeighbors;
     }
     mergeCells(a, b) {
          testMergeCount++;
          if (a.isAbove(b)) {
               a.hasBottomWall = false;
               b.hasTopWall = false;
          } else if (a.isRightOf(b)) {
               a.hasRightWall = false;
               b.hasLeftWall = false;
          } else if (a.isBelow(b)) {
               a.hasTopWall = false;
               b.hasBottomWall = false;
          } else if (a.isLeftOf(b)) {
               a.hasLeftWall = false;
               b.hasRightWall = false;
          }
          a.isUntouched = false;
          b.isUntouched = false;
     }
     draw(x, y) {
          for (let row = 0; row < CHUNK_SIZE; row++) {
               for (let col = 0; col < CHUNK_SIZE; col++) {
                    this.cells[row][col].draw(x + (CELL_SIZE * col), y + (CELL_SIZE * row));
               }
          }
     }
}
