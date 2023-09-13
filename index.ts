import generateMaze from "./utils/maze-generator";
import { serve, file } from "bun";

let maze = generateMaze(10, 10);
console.log(maze)
console.log(maze.maze.join("\n"));

serve({
    port: 1521,
    fetch(req) {
        return new Response(Bun.file("./pages/index.html"));
    }
})
