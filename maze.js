class Maze {
     constructor() {
          this.baseChunk = new Chunk(null, null, null, null);
          this.baseChunk.x = screen.width / 2 - (CHUNK_SIZE / 2);
          this.baseChunk.y = screen.height / 2 - (CHUNK_SIZE / 2);
     }
     draw() {
          this.baseChunk.draw();
     }
}
