import { spawn } from "child_process";

import { getFilePath } from "../utils/index.js";

const FILE_PATH = getFilePath(import.meta.url, "files", "script.js");

const spawnChildProcess = async (arr) => {
  // Write your code here
  const childProcess = spawn("node", [FILE_PATH, ...arr]);
  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
