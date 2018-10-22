const CHUNKS_WIDTH = screen.width / CHUNK_SIZE_IN_PIXELS;
const CHUNKS_HEIGHT = screen.height / CHUNK_SIZE_IN_PIXELS;

class Maze {
     constructor() {
          this.baseChunk = new Chunk(null, null, null, null);
          this.currentChunks = [[]];
     }
     draw() {
          this.baseChunk.draw((window.innerWidth / 2) - (CHUNK_SIZE_IN_PIXELS / 2), (window.innerHeight / 2) - (CHUNK_SIZE_IN_PIXELS / 2));
     }
}
