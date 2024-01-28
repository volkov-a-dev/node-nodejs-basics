import { Transform } from "node:stream";

const reverseInput = new Transform({
  transform(chunk, _, callback) {
    callback(null, String(chunk).split("").reverse().join(""));
  },
});

const transform = async () => {
  // Write your code here
  process.stdin.pipe(reverseInput).pipe(process.stdout);
};

await transform();
