import { readFile } from "node:fs/promises";

import { getFilePath } from "../utils/index.js";
import { ERROR_MESSAGE, ERROR_CODE_ENOENT } from "../constants/index.js";

const read = async () => {
  // Write your code here
  try {
    const txt = await readFile(
      getFilePath(import.meta.url, "files", "fileToRead.txt"),
      "utf-8"
    ).catch((error) => {
      if (error.code === ERROR_CODE_ENOENT) {
        throw new Error(ERROR_MESSAGE);
      }
    });
    console.log(txt);
  } catch (error) {
    console.log(error);
  }
};

await read();
