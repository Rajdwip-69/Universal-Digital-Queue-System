import { useState } from "react";

export const TokenBooking = () => {
    const [service, setService] = useState("");
    const [location, setLocation] = useState("");
    const [token, setToken] = useState(null);
  
    const handleBooking = () => {
      if (service && location) {
        const tokenNumber = Math.floor(1000 + Math.random() * 9000);
        setToken({ number: tokenNumber, qr: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Token:${tokenNumber}` });
      }
    };
  
    return (
      <div className="p-6 text-center dark:bg-gray-800 dark:text-white">
        <h2 className="text-2xl font-semibold">Token Booking</h2>
        <div className="mt-4 flex justify-center space-x-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold">Offline Booking</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Visit our service center to book your token manually.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold">Online Booking</h3>
            <div className="mt-4">
              <select className="border p-2 rounded w-full appearence-none bg-white dark:bg-gray-900" value={service} onChange={(e) => setService(e.target.value)}>
                <option  value="">Select Service</option>
                <option value="Banking">Banking</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Government Office">Government Office</option>
              </select>
              <select className="border p-2 rounded w-full mt-2 appearence-none bg-white dark:bg-gray-900" value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="">Select Location</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
              </select>
              <button onClick={handleBooking} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full">Book Now</button>
            </div>
            {token && (
              <div className="mt-4">
                <p className="text-lg font-semibold">Your Token: {token.number}</p>
                <img src={token.qr} alt="QR Code" className="mx-auto mt-2" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };