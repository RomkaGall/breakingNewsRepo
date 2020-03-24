import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { homePage, loginPage, newsPage, ProfilePage } from "../../pages";
import { checkLocalStorage } from "../../actions/authActions";
import "./app.scss";

import Header from "../header";
import { connect } from "react-redux";

const App = ({ auth, checkLocalStorage }) => {
  useEffect(() => {
    if (localStorage.getItem("isLogged") === "true") {
      checkLocalStorage();
    }
  }, [checkLocalStorage]);
  return (
    <main role="main">
      <Header />
      <Switch>
        <Route path="/profile">
          {localStorage.getItem("isLogged") === "true" ? (
            <ProfilePage />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/" component={homePage} exact />

        <Route path="/login" component={loginPage} />
        <Route path="/news" component={newsPage} />
      </Switch>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
const mapDispatchToProps = {
  checkLocalStorage: checkLocalStorage
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
