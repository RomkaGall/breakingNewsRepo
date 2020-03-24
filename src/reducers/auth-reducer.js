import history from "../history";

const initialState = {
  isLogged: false,
  error: false
};

const checkLocalStorage = () => {
  if (localStorage.getItem("isLogged") === "true") {
    return {
      isLogged: true,
      error: false
    };
  } else {
    return {
      isLogged: false,
      error: false
    };
  }
};

const validateUserData = (state, data) => {
  if (data.username === "admin" && data.password === "12345") {
    localStorage.setItem("isLogged", true);
    history.push("/");
    return {
      isLogged: true,
      error: false
    };
  }
  return {
    isLogged: false,
    error: true
  };
};

const signOut = () => {
  localStorage.setItem("isLogged", false);

  return {
    isLogged: false,
    error: false
  };
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return validateUserData(state, action.payload);

    case "SIGN_OUT":
      return signOut();

    case "CHECK_LOCAL_STORAGE":
      return checkLocalStorage();

    default:
      return state;
  }
};

export default authReducer;
