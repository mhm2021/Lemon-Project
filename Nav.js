import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
        Home
      </Link>
      <Link to="/reserve" style={{ textDecoration: "none", fontWeight: "bold" }}>
        Reserve
      </Link>
      <Link to="/confirmation" style={{ textDecoration: "none", fontWeight: "bold" }}>
        Confirmation
      </Link>
    </nav>
  );
}

export default Nav;
