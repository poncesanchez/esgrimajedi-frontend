const ENV_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || '',
  INSTAGRAM_TOKEN: import.meta.env.VITE_INSTAGRAM_TOKEN || '',
  INSTAGRAM_USER: import.meta.env.VITE_INSTAGRAM_USER || ''
};

export default ENV_CONFIG;