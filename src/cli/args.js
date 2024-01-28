const parseArgs = () => {
  // Write your code here
  const { argv } = process;
  const args = argv.slice(2);
  const list = [];

  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].slice(2);
    const value = args[i + 1];
    list.push(`${key} as ${value}`);
  }

  console.log(list.join(", "));
};

parseArgs();
