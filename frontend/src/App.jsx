import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { QueueStatus } from "./components/queueStatus";
import { TokenBooking } from "./components/tokenBooking";
import { AdminDashboard } from "./components/adminDashboard";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode; // Toggle the mode
    setDarkMode(newMode); // Update state
    localStorage.setItem("darkMode", newMode); // Ensure it's saved
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col transition-all bg-white text-black dark:bg-gray-900 dark:text-white`}>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className="flex-1 px-4 py-6 bg-gray-200 dark:bg-gray-800 transition-all">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/queue-status" element={<QueueStatus />} />
            <Route path="/token-booking" element={<TokenBooking />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
