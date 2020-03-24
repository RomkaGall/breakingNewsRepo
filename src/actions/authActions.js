export const login = data => {
  return {
    type: "SIGN_IN",
    payload: data
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const checkLocalStorage = () => {
  return {
    type: "CHECK_LOCAL_STORAGE"
  };
};
