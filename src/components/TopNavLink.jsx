import { NavLink } from "react-router-dom";

export default function TopNavLink({ to, label }) {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        {label}
      </NavLink>
    </>
  );
}
