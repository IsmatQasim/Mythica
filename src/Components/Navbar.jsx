import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/Logo.png'; // Importing the image from the images folder

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track sidebar state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 492) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      {/* Navbar */}
      <nav className={`navbar fixed top-0 w-full z-50 ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'} transition-all duration-300`}>
        {/* Logo Section */}
        <div className="logo ml-5 pt-6">
          <Link to="/">
            <img src={logo} alt="Mythica Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="hamburger-icon lg:hidden absolute right-8 top-6" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>

        {/* Regular Navigation Links for larger screens */}
        <ul className="nav-links hidden lg:flex space-x-4 mr-3 pt-2 bold">
          <li>
            <Link to="/" className="m-6 text-[25px] text-white no-underline hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/stories" className="m-6 text-[25px] text-white no-underline hover:underline">Stories</Link>
          </li>
          <li>
            <Link to="/Ai-Stories" className="m-6 text-[25px] text-white no-underline hover:underline">AI Stories</Link>
          </li>
          <li>
            <Link to="/about" className="m-6 text-[25px] text-white no-underline hover:underline">About Us</Link>
          </li>
          <li>
            <Link to="/Profile" className="m-6 text-[25px] text-white no-underline hover:underline">Profile</Link>
          </li>
        </ul>

        {/* Sidebar for smaller screens */}
        <div
          className={`fixed top-0 right-0 w-[250px] h-full bg-black transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex justify-end p-4">
            <button className="text-white" onClick={toggleSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.707-8.707a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414L11.414 11l1.293 1.293a1 1 0 01-1.414 1.414L10 12.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 11l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col space-y-4 mt-8 p-4">
            <li>
              <Link to="/" className="text-[25px] text-white no-underline" onClick={toggleSidebar}>Home</Link>
            </li>
            <li>
              <Link to="/stories" className="text-[25px] text-white no-underline" onClick={toggleSidebar}>Stories</Link>
            </li>
            <li>
              <Link to="/Ai-Stories" className="text-[25px] text-white no-underline" onClick={toggleSidebar}>AI Stories</Link>
            </li>
            <li>
              <Link to="/about" className="text-[25px] text-white no-underline" onClick={toggleSidebar}>About Us</Link>
            </li>
            <li>
              <Link to="/Profile" className="text-[25px] text-white no-underline" onClick={toggleSidebar}>Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
