import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="my-5">
      <Link className="mx-5" to="/">
        Home
      </Link>
      <Link className="mx-5" to="/restaurant">
        Restaurant
      </Link>
      <Link className="mx-5" to="/about">
        About
      </Link>
    </div>
  );
};

export default Header;
