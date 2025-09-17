import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReservationForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", {
      state: { date, time, guests, occasion },
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem", maxWidth: "400px" }}>
      <h2>Reserve a Table</h2>

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">-- Select a time --</option>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="">-- Select an occasion --</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>

      <button type="submit">Confirm Reservation</button>
    </form>
  );
}

export default ReservationForm;
