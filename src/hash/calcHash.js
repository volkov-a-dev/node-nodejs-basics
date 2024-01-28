import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { getFilePath } from "../utils/index.js";

const FILES_PATH = getFilePath(
  import.meta.url,
  "files",
  "fileToCalculateHashFor.txt"
);

const calculateHash = async (filename, hashAlgorithm = "sha256") => {
  // Write your code here
  const hash = createHash(hashAlgorithm);
  const input = createReadStream(filename);
  input.on("data", (data) => hash.update(data));
  input.on("end", () => {
    const hex = hash.digest("hex");
    console.log(hex);
  });
};

await calculateHash(FILES_PATH);
