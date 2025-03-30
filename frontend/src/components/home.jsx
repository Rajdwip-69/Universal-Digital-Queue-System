import { Link } from "react-router-dom";
export const Home = () => (
    <div className="p-6 text-center flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white">
      <h2 className="text-5xl font-bold mb-4">Welcome to the Digital Queue System</h2>
      <p className="text-lg max-w-2xl mb-6">
        Say goodbye to long waiting times! Our system allows you to book tokens online and track your queue position in real-time. No more standing in lines—just seamless service at your fingertips.
      </p>
      <div className="flex space-x-4">
        <Link to="/token-booking" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200">
          Get Your Token Now
        </Link>
        <Link to="/queue-status" className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500">
          Check Queue Status
        </Link>
      </div>
    </div>
  );