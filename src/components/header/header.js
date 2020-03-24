import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/authActions";

const Header = ({ auth, signOut }) => {
  const LoginLink = () => {
    if (auth.isLogged) {
      return (
        <div className="signOut">
          <button className="main_btn" onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <li className="header__list_item">
          <NavLink to="/login" activeClassName="selected">
            Login
          </NavLink>
        </li>
      );
    }
  };

  return (
    <header className="header">
      <div className="wr">
        <div className="header__content">
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__list_item">
                <NavLink to="/" activeClassName="selected" exact>
                  Home
                </NavLink>
              </li>
              <li className="header__list_item">
                <NavLink to="/news" activeClassName="selected">
                  News
                </NavLink>
              </li>
              <li className="header__list_item">
                <NavLink to="/profile" activeClassName="selected">
                  Profile
                </NavLink>
              </li>
              <LoginLink />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

const mapDispatchToProps = {
  signOut: signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
