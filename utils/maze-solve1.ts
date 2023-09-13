import { type Point } from "./types";

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    let path: Point[] = [];
    let visited: Boolean[][] = new Array(maze.length);
    for ( let i = 0; i < visited.length; i++ ) {
        visited[i] = new Array(maze[0].length).fill(false);
    }

    let _ = walk(maze, wall, start, end, path, visited);

    return path;
}

function walk(maze: string[], wall: string, start: Point, end: Point, path: Point[], visited: Boolean[][]): boolean {
    if ( !(start.y >= 0 && start.y < maze.length) || !(start.x >= 0 && start.x < maze[start.y].length) ) {
        return false;
    }

    if ( maze[start.y][start.x] == wall || visited[start.y][start.x] ) {
        return false;
    }

    if ( start.x == end.x && start.y == end.y ) {
        path.push(end);
        return true;
    }

    visited[start.y][start.x] = true;
    path.push(start)

    let up = walk(maze, wall, { x: start.x, y: start.y - 1 }, end, path, visited);
    let down = walk(maze, wall, { x: start.x, y: start.y + 1 }, end, path, visited);
    let left = walk(maze, wall, { x: start.x - 1, y: start.y }, end, path, visited);
    let right = walk(maze, wall, { x: start.x + 1, y: start.y }, end, path, visited);


    if (!up && !down && !left && !right) {
        path.pop();
    }

    return up || right || down || left;
}
