const NUM_CHUNKS_WIDE = screen.width / CHUNK_SIZE_IN_PIXELS;
const NUM_CHUNKS_HIGH = screen.height / CHUNK_SIZE_IN_PIXELS;
//[1][2][3]
//[4][5][6]
//[7][8][9]

//[2][3][10]
//[5][6][11]
//[8][9][12]



class Maze {
     constructor() {
          // this.baseChunk = new Chunk(null, null, null, null);
          this.currentChunks = [[]];
          this.initiateCurrentChunks();
          this.baseChunk = this.currentChunks[Math.floor(this.currentChunks.length / 2)][Math.floor(this.currentChunks[0].length / 2)];
     }
     initiateCurrentChunks() {
          for (let row = 0; row < NUM_CHUNKS_HIGH; row++) {
               this.currentChunks[row] = [];
               for (let col = 0; col < NUM_CHUNKS_WIDE; col++) {
                    this.currentChunks[row][col] = new Chunk(null, null, null, null);
               }
          }
          for (let row = 0; row < NUM_CHUNKS_HIGH; row++) {
               for (let col = 0; col < NUM_CHUNKS_WIDE; col++) {
                    if (row - 1 > -1) {
                         console.log("row is " + row);
                         console.log("col is " + col);
                         this.currentChunks[row][col].north = this.currentChunks[row - 1][col];
                    }
                    if (row + 1 <= NUM_CHUNKS_HIGH - 1) {
                         this.currentChunks[row][col].south = this.currentChunks[row + 1][col];
                    }
                    if (col - 1 > -1) {
                         this.currentChunks[row][col].west = this.currentChunks[row][col - 1];
                    }
                    if (row + 1 <= NUM_CHUNKS_WIDE - 1) {
                         this.currentChunks[row][col].east = this.currentChunks[row][col + 1];
                    }
               }
          }
     }
     draw() {
          for (let row = 0; row < NUM_CHUNKS_HIGH; row++) {
               for (let col = 0; col < NUM_CHUNKS_WIDE; col++) {
                    this.currentChunks[row][col].draw(col * CHUNK_SIZE_IN_PIXELS, row * CHUNK_SIZE_IN_PIXELS);
               }
          }
          // this.baseChunk.draw((window.innerWidth / 2) - (CHUNK_SIZE_IN_PIXELS / 2), (window.innerHeight / 2) - (CHUNK_SIZE_IN_PIXELS / 2));
     }
}
