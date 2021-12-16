const key = "WE_FIXIT_AUTH_TOKEN";

export const getToken = () => {
  const token = localStorage.getItem(key);
  return token;
};

export const setToken = (token) => {
  localStorage.setItem(key, token);
  return token;
};
