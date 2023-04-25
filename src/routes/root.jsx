import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li className="nav__item">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#efb42b",
                fontSize: "1.2rem",
              }}
            >
              Home Page
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "#efb42b",
                fontSize: "1.2rem",
              }}
            >
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#efb42b",
                fontSize: "1.2rem",
              }}
            >
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Outlet />
      </div>
    </>
  );
}

const styles = {
  nav: {
    backgroundColor: "#233e5c",
    display: "flex",
    width: "100%",
    flexDirection: "row",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    columnGap: "90px",
    padding: "1.5rem 0 1.5rem 0",
    margin: "0 0 0 2rem",
  },
};
