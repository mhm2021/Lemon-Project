import React from "react";
import { NavLink } from "react-router-dom";
<link rel="stylesheet" href="Nav.css">

function Nav() {
  const linkStyle = {
    textDecoration: "none",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
  };

  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? "white" : "black",
          backgroundColor: isActive ? "#f4ce14" : "transparent",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/reserve"
        style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? "white" : "black",
          backgroundColor: isActive ? "#f4ce14" : "transparent",
        })}
      >
        Reserve
      </NavLink>

      <NavLink
        to="/confirmation"
        style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? "white" : "black",
          backgroundColor: isActive ? "#f4ce14" : "transparent",
        })}
      >
        Confirmation
      </NavLink>
    </nav>
  );
}

export default Nav;



