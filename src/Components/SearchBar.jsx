import React, { useState } from "react";

const SearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(true); // State to track visibility of the button

  // Toggle visibility of the input field
  const handleSearchToggle = () => {
    setShowInput((prev) => !prev); // Toggle the input visibility
    setIsVisible(false); // Hide the button when clicked
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    setSearchTerm(""); // Clear input after search
    setShowInput(false); // Close input after search
    setIsVisible(true); // Optionally, show the button again after search
  };

  return (
    <div className="relative flex items-center">
      {isVisible && (
        <button
          onClick={handleSearchToggle}
          className="px-4 py-2 font-medium text-black bg-transparent rounded-md focus:outline-none"
        >
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="11" />
            <line x1="20" x2="31" y1="20" y2="31" />
          </svg>
        </button>
      )}

      {showInput && (
        <form onSubmit={handleSearch} className="flex items-center ml-2">
          <div className="relative">
            {/* Search input with icon */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search .."
              className="pl-10 px-4 py-2 bg-transparent  border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
            >
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <line x1="20" x2="31" y1="20" y2="31" />
              </svg>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SearchBar;
