import "./root.css";
import { Outlet } from "react-router-dom";
import TopNavLink from "../components/TopNavLink";

export default function Root() {
  return (
    <>
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li className="nav__item">
            <TopNavLink to={"/"} label={"Home"} />
          </li>
          <li className="nav__item">
            <TopNavLink to={"/contact"} label={"Contact"} />
          </li>
          <li className="nav__item">
            <TopNavLink to={"/contacts"} label={"Contacts"} />
          </li>
          <li className="nav__item">
            <TopNavLink to={"/about"} label={"About"} />
          </li>
          <li className="nav__item">
            <TopNavLink to={"/query"} label={"Queries"} />
          </li>
          <li className="nav__item">
            <TopNavLink to={"/app"} label={"App"} />
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
