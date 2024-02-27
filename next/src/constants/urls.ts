const devmode = true;

export const mainURL = devmode ? process.env.DEV_URL : process.env.PROD_URL;
