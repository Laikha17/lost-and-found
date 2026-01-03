// Save item to localStorage
export const saveItem = (key, data) => {
  const existing = JSON.parse(localStorage.getItem(key)) || [];
  existing.push(data);
  localStorage.setItem(key, JSON.stringify(existing));
};

// Get items from localStorage
export const getItems = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};
