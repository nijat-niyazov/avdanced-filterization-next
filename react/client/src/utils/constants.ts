export const devMode = true;

export const mainURL = devMode ? import.meta.env.VITE_DEV_URL : import.meta.env.VITE_PROD_URL;
