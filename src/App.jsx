import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./components/home";
import { QueueStatus } from "./components/queueStatus";
import { TokenBooking } from "./components/tokenBooking";
import { AdminDashboard } from "./components/adminDashboard";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  return (
    <Router>
      <div className={`bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col transition-all`}>
        <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/queue-status" element={<QueueStatus/>} />
            <Route path="/token-booking" element={<TokenBooking/>} />
            <Route path="/admin" element={<AdminDashboard/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
