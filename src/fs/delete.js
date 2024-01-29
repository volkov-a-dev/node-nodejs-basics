import { unlink } from "node:fs/promises";
import { getFilePath } from "../utils/index.js";
import { ERROR_MESSAGE, ERROR_CODE_ENOENT } from "../constants/index.js";

const FILE_PATH = getFilePath(import.meta.url, "files", "fileToRemove.txt");

const remove = async () => {
  // Write your code here
  try {
    await unlink(FILE_PATH).catch((error) => {
      if (error.code === ERROR_CODE_ENOENT) {
        throw new Error(ERROR_MESSAGE);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

await remove();
