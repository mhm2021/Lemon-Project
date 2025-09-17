import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ReservationForm from "./ReservationForm";
import Confirmation from "./Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reserve" element={<ReservationForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
