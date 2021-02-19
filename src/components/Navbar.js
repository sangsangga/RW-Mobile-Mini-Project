import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const cleanDetail = () => {
    dispatch({
      type: "SET_DETAIL_MOVIES",
      payload: {},
    });
  };
  const style = {
    backgroundColor: "black",
    padding: "10px",
  };
  return (
    <React.Fragment>
      <nav
        style={style}
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" href="https://bulma.io">
            <h1 className="title has-text-white">MoviesBox</h1>
          </Link>

          <Link
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link
              to="/"
              className="navbar-item has-text-white"
              onClick={cleanDetail}
            >
              Home
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
