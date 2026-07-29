import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Overview from "./pages/Overview";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Works from "./pages/Works";

function App() {
  const location = useLocation();

  // Hide Navbar and Footer on the Overview page
  const showLayout = location.pathname !== "/";

  return (
    <>
      {showLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/home" element={<Home />} />
        <Route path="/works" element={<Works />} />

        {/* Show Overview for any unknown route */}
        <Route path="*" element={<Overview />} />

        {/* If you prefer redirecting instead, replace the line above with:
        <Route path="*" element={<Navigate to='/' replace />} />
        */}
      </Routes>

      {showLayout && <Footer />}
    </>
  );
}

export default App;