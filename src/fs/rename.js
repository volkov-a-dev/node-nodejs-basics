import { rename as fsRename } from "node:fs/promises";

import { ERROR_MESSAGE } from "../constants/index.js";
import { getFilePath, isExist } from "../utils/index.js";

const WRONG_FILE_PATH = getFilePath(
  import.meta.url,
  "files",
  "wrongFilename.txt"
);
const NEW_FILE_PATH = getFilePath(
  import.meta.url,
  "files",
  "properFilename.md"
);

const rename = async () => {
  // Write your code here
  const isExistWrongFile = await isExist(WRONG_FILE_PATH);
  const isExistNewFile = await isExist(NEW_FILE_PATH);

  try {
    if (isExistWrongFile && !isExistNewFile) {
      await fsRename(WRONG_FILE_PATH, NEW_FILE_PATH);
    } else {
      throw new Error(ERROR_MESSAGE);
    }
  } catch (error) {
    console.log(error);
  }
};

await rename();
