import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream/promises";

import { ERROR_ZIP__MESSAGE } from "../constants/index.js";
import { getFilePath, isExist } from "../utils/index.js";

const INPUT_FILE_PATH = getFilePath(
  import.meta.url,
  "files",
  "fileToCompress.txt"
);
const GZ_FILE_PATH = getFilePath(import.meta.url, "files", "archive.gz");

const decompress = async (inputFilePath, outputFilePath) => {
  // Write your code here
  const isExistFile = await isExist(inputFilePath);

  if (!isExistFile) {
    throw new Error(ERROR_ZIP__MESSAGE);
  }

  const readStream = createReadStream(inputFilePath);
  const writeStream = createWriteStream(outputFilePath);
  const gunzipStream = createGunzip();

  await pipeline(readStream, gunzipStream, writeStream);
};

await decompress(GZ_FILE_PATH, INPUT_FILE_PATH);
