const WALL_SIZE = 5;
const CELL_SIZE = 100;

class Cell {
     constructor(row, col, topWall, rightWall, bottomWall, leftWall) {
          this.row = row;
          this.col = col;
          this.hasTopWall = topWall;
          this.hasRightWall = rightWall;
          this.hasBottomWall = bottomWall;
          this.hasLeftWall = leftWall;
          this.item = null;
          this.room = null;
          this.isUntouched = true;
     }
     assignItem(item) {
          this.item = item;
     }
     assignToRoom(room) {
          this.room = room;
     }
     touch() {
          this.isUntouched = false;
     }
     isAbove(otherCell) {
          return this.row < otherCell.row;
     }
     isRightOf(otherCell) {
          return this.col < otherCell.col;
     }
     isBelow(otherCell) {
          return this.row > otherCell.row;
     }
     isLeftOf(otherCell) {
          return this.col > otherCell.col;
     }
     draw(x, y) {
          ctx.drawImage(floorImage, x, y, CELL_SIZE, CELL_SIZE);
          if (this.hasTopWall) {
               ctx.fillRect(x, y, CELL_SIZE, WALL_SIZE);
          }
          if (this.hasRightWall) {
               ctx.fillRect(x + (CELL_SIZE - WALL_SIZE), y, WALL_SIZE, CELL_SIZE);
          }
          if (this.hasBottomWall) {
               ctx.fillRect(x, y + (CELL_SIZE - WALL_SIZE), CELL_SIZE, WALL_SIZE);
          }
          if (this.hasLeftWall) {
               ctx.fillRect(x, y, WALL_SIZE, CELL_SIZE);
          }
      }
}
