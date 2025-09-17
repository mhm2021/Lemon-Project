import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { date, time, guests, occasion } = location.state || {};

  if (!date || !time || !guests) {
    return (
      <div>
        <h2>No reservation data found</h2>
        <button onClick={() => navigate("/reserve")}>Make a Reservation</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "400px" }}>
      <h2>Reservation Confirmed 🎉</h2>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Guests:</strong> {guests}</p>
      {occasion && <p><strong>Occasion:</strong> {occasion}</p>}

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default Confirmation;
