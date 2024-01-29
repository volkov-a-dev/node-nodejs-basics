import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";

import { ERROR_ZIP__MESSAGE } from "../constants/index.js";
import { getFilePath, isExist } from "../utils/index.js";

const INPUT_FILE_PATH = getFilePath(
  import.meta.url,
  "files",
  "fileToCompress.txt"
);
const GZ_FILE_PATH = getFilePath(import.meta.url, "files", "archive.gz");

const compress = async (filePath, zipFilePath) => {
  // Write your code here
  const isExistFileGZ = await isExist(zipFilePath);
  const isExistFile = await isExist(filePath);

  if (!isExistFile || isExistFileGZ) {
    throw new Error(ERROR_ZIP__MESSAGE);
  }

  const readStream = createReadStream(filePath);
  const writeStream = createWriteStream(zipFilePath);
  const gzipStream = createGzip();

  await pipeline(readStream, gzipStream, writeStream);
};

await compress(INPUT_FILE_PATH, GZ_FILE_PATH);
