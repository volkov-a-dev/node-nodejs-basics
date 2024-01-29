import { readdir } from "node:fs/promises";

import { getFilePath, isExist } from "../utils/index.js";

const FILES_PATH = getFilePath(import.meta.url, "files");

const list = async () => {
  // Write your code here
  try {
    const files = await readdir(FILES_PATH).catch((error) => {
      if (error.code === ERROR_CODE_ENOENT) {
        throw new Error(ERROR_MESSAGE);
      }
    });
    console.log(files);
  } catch (error) {
    console.log(error);
  }
};

await list();
