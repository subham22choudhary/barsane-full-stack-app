import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import NoPage from "./pages/nopage";

import Bookpuja from "./components/bookingpuja/bookpuja";

import Footer from "./components/footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/bookpuja" element={<Bookpuja />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
