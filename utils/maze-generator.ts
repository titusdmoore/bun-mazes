import { type MazeResponse, type Point } from "./types";

export default function generateMaze(width: number, height: number): MazeResponse {
    let maze = new Array(height);

    let start = generatePoint(width, height);
    let end = generatePoint(width, height, start);

    // I like inclusive arguments 
    for ( let i = 0; i < maze.length; i++ ) {
        let row = new Array(width);
        row.fill("X");

        if ( start.y == i ) {
            row[start.x] = " ";
        } 
        if ( end.y == i ) {
            row[end.x] = " "; 
        }

        maze[i] = row.join('');
    }

    return { maze, start, end };
}

function randomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

function generatePoint(width: number, height: number, usedPoint: Point | undefined = undefined): Point {
    let x, y: number; 

    // Should only ever run once, but we cannot have the same start and end point so edge case baby!!
    do {
        switch ( randomInt(2) ) {
            // Point will be either 0, height in y-axis
            case 0:
                y = randomInt(2) ? 0 : height - 1;

                // X cannot put us in the corner, so we must prevent it from being 0 or width
                x = Math.min(Math.max(randomInt(width), 1), width - 2);
                break;
            // Point will be either 0, width in x-axis
            default:
                x = randomInt(2) ? 0 : width - 1;

                // Y cannot put us in the corner, so we must prevent it from being 0 or height 
                y = Math.min(Math.max(randomInt(height), 1), height - 2);
                break;
        }
    } while ( usedPoint != undefined && usedPoint.x == x && usedPoint.y == y );

    return { x, y };
}

function createPath(maze: string[], start: Point, end: Point, visited: boolean[][], walls: Point[]): void {
    
}

// Work in progress maze generator code
function buildMaze(width, height) {
	let maze = new Array(height);
  
  for ( let i = 0; i < maze.length; i++ ) {
  	let tmp = new Array(width);
    
    if ( i == 0 || i == height - 1) {
    	tmp.fill('#');
      maze[i] = tmp.join('');
      continue;
    }
    
    tmp.fill(' ');
    tmp[0] = "#";
    tmp[width - 1] = "#";
    
    maze[i] = tmp.join('');
  }
  
 	return maze;
}

function splitCompartment(startVertex, endVertex, maze) {
	let vertSplit = randomNumber(startVertex.x + 1, endVertex.x - 1);
  let horizontalSplit = randomNumber(startVertex.y + 1, endVertex.y - 1);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function insertChar(maze, row, col, newChar) {
  let tmp = maze[row]
  tmp = tmp.split('')
  tmp.splice(col, 1, newChar)
  maze[row] = tmp.join('')
}


let mazeArr = buildMaze(10, 10);

insertChar(mazeArr, 4, 3, "D")
console.log(mazeArr)
console.log(`\n${mazeArr.join("\n")}\n`)
console.log(randNum(2))
