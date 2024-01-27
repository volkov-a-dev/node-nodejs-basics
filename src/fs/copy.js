import { cp } from "node:fs/promises";

import { ERROR_MESSAGE } from "../constants/index.js";
import { getFilePath, isExist } from "../utils/index.js";

const FILE_PATH = getFilePath(import.meta.url, "files");
const FILE_COPY_PATH = getFilePath(import.meta.url, "files-copy");

const copy = async () => {
  // Write your code here
  const isExistFile = await isExist(FILE_COPY_PATH);

  if (isExistFile) {
    throw new Error(ERROR_MESSAGE);
  }

  try {
    await cp(FILE_PATH, FILE_COPY_PATH, {
      errorOnExist: true,
      recursive: true,
    });
  } catch (error) {
    console.log(error);
  }
};

await copy();
