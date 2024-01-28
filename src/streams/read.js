import { createReadStream } from "node:fs";

import { getFilePath } from "../utils/index.js";

const FILE_PATH = getFilePath(import.meta.url, "files", "fileToRead.txt");

const read = async (file) => {
  // Write your code here
  const stream = createReadStream(file);
  stream.on("data", (chunk) => process.stdout.write(chunk));
};

await read(FILE_PATH);
