import React, { useState } from "react";
import { connect } from "react-redux";
import { login, signOut } from "../../actions/authActions";

const ErrorSign = () => {
  return (
    <div className="error">
      The username or password you entered is incorrect
    </div>
  );
};

const SignIn = ({ auth, login, signOut }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!auth.isLogged) {
    return (
      <div className="SignIn">
        <form className="form">
          <input
            className="input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className="main_btn"
            type="submit"
            onClick={e => {
              e.preventDefault();
              login({
                username,
                password
              });
            }}
          >
            Sign In
          </button>
        </form>
        {auth.error ? <ErrorSign /> : null}
      </div>
    );
  } else {
    return (
      <div className="signOut">
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = {
  // login: (username, password) => login(username, password)
  login: login,
  signOut: signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
