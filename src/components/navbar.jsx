import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
export const Navbar = ({ toggleDarkMode, darkMode }) => (
  <nav className="bg-blue-600 dark:bg-gray-900 p-4 text-white flex justify-between">
    <h1 className="text-xl font-bold">Digital Queue System</h1>
    <div>
      <Link className="mx-2 hover:text-gray-300" to="/">Home</Link>
      <Link className="mx-2 hover:text-gray-300" to="/queue-status">Queue Status</Link>
      <Link className="mx-2 hover:text-gray-300" to="/token-booking">Token Booking</Link>
      <Link className="mx-2 hover:text-gray-300" to="/admin">Admin</Link>
    </div>
    <button onClick={toggleDarkMode} className="ml-4 p-2 bg-gray-800 dark:bg-yellow-400 rounded-full">
      {darkMode ? <Sun className="text-black" /> : <Moon className="text-black" />}
    </button>
  </nav>
);