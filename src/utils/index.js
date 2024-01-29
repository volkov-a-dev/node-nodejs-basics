import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { access, constants } from "node:fs/promises";

export const getFilePath = (url, ...path) =>
  join(dirname(fileURLToPath(url)), ...path);

export const isExist = async (path) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};
