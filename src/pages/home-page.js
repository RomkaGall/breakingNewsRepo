import React from "react";
import { Link } from "react-router-dom";

const homePage = () => {
  return (
    <div className="container">
      <Link to="/news">
        <button className="main_btn">To news</button>
      </Link>
    </div>
  );
};

export default homePage;
