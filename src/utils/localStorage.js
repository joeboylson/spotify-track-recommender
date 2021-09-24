export const setLocalStorage = (name, data) => {
  if (!name || !data) return;
  window.localStorage.setItem(name, JSON.stringify(data));
}

export const getLocalStorage = (name) => {
  if (!name) return;
  const stringifiedData = window.localStorage.getItem(name);

  if (!stringifiedData) return;
  return JSON.parse(stringifiedData);
}

export const clearLocalStorage = (name) => {
  if (!name) return;
  window.localStorage.removeItem(name);
}

export const clearAllLocalStorage = () => window.localStorage.clear();