const SEARCH_ENV_PREFIX = "RSS_";

const parseEnv = () => {
  // Write your code here
  const { env } = process;
  const list = [];

  for (const [key, value] of Object.entries(env)) {
    if (key.startsWith(SEARCH_ENV_PREFIX)) {
      list.push(`${key}=${value}`);
    }
  }
};

parseEnv();
