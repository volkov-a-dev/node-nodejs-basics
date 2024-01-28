import { createWriteStream } from "node:fs";

import { getFilePath } from "../utils/index.js";

const FILE_PATH = getFilePath(import.meta.url, "files", "fileToWrite.txt");

const write = async (file) => {
  // Write your code here
  const stream = createWriteStream(file);
  process.stdin.on("data", (chunk) => stream.write(chunk));
};

await write(FILE_PATH);
