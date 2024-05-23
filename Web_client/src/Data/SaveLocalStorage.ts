const APP_NAME = 'Firello';

const getKey = (key: string): string => `${APP_NAME}.${key}`;

export const set = <T>(key: string, value: T): void => {
  localStorage.setItem(getKey(key), JSON.stringify(value));
};

export const get = <T>(key: string): T | null => {
  const item = localStorage.getItem(getKey(key));
  return item? JSON.parse(item) : null;
};
