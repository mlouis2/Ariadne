const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

class Game {
     constructor(maze) {
          this.maze = maze;
     }
     init() {
          canvas.width = document.body.clientWidth;
          canvas.height = document.body.clientHeight;
     }
     draw() {
          floorImage.onload = () => {
               this.maze.draw();
          }
     }
}

let maze = new Maze();
let game = new Game(maze);
game.init();
game.draw();
