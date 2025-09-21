import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

function Main() {
  const navigate = useNavigate();

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to Little Lemon 🍋</h1>
      <p>
        We’re a family-owned Mediterranean restaurant focused on traditional
        recipes served with a modern twist.
      </p>
      <button
        onClick={() => navigate("/reserve")}
        style={{
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#f4ce14",
          cursor: "pointer",
        }}
      >
        Reserve a Table
      </button>
    </main>
  );
}

export default Main;

