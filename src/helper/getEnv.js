function getEnv(key) {
  if (window && window._env_ && window._env_[key]) {
    return window._env_[key];
  } else {
    return process.env[key];
  }
}

export default getEnv;
