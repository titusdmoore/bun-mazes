import { type Point } from "./types";

let directions = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 },
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    if ( curr.x < 0 || curr.y < 0 || curr.x >= maze[0].length || curr.y >= maze.length ) return false;
    if ( maze[curr.y][curr.x] === wall ) return false;
    if ( seen[curr.y][curr.x] ) return false;
    if ( curr.x === end.x && curr.y === end.y ) {
        path.push(end);
        return true;
    } 

    path.push(curr);
    seen[curr.y][curr.x] = true;

    for( let i = 0; i < directions.length; i++) {
        let nextPoint = {
            x: curr.x + directions[i].x,
            y: curr.y + directions[i].y
        };

        if ( walk( maze, wall, nextPoint, end, seen, path ) ) {
            return true;
        }
    }   

    path.pop();
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = []; 

    for( let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
