import { writeFile } from "node:fs/promises";

import { getFilePath } from "../utils/index.js";
import { ERROR_MESSAGE, ERROR_CODE_EEXIST } from "../constants/index.js";

const FILE_PATH = getFilePath(import.meta.url, "files", "fresh.txt");
const MESSAGE = "I am fresh and young";

const create = async () => {
  try {
    await writeFile(FILE_PATH, MESSAGE, { flag: "wx" }).catch((error) => {
      if (error.code === ERROR_CODE_EEXIST) {
        throw new Error(ERROR_MESSAGE);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

await create();
