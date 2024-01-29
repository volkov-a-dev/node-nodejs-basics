import { Worker } from "worker_threads";
import { cpus } from "os";

import { getFilePath } from "../utils/index.js";

const WORKER_FILE_PATH = getFilePath(import.meta.url, "", "worker.js");
const CPUS_COUNT = cpus().length;

const serviceWorker = (number, workerFilePath) =>
  new Promise((resolve, _) => {
    console.log("data", number);
    const worker = new Worker(workerFilePath, {
      workerData: number,
    });

    worker.on("message", (res) => resolve({ status: "success", data: res }));
    worker.on("error", () => resolve({ status: "error", data: null }));
  });

const performCalculations = async () => {
  // Write your code here
  const data = Array.from({ length: CPUS_COUNT }, (_, i) =>
    serviceWorker(10 + i, WORKER_FILE_PATH)
  );
  const workers = await Promise.all(data);

  console.log(workers);
};

await performCalculations();
