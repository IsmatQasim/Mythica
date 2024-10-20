import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/Logo.png'; // Importing the image from the images folder
//import "..src/Style/Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 492) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log("Navbar Sticky:", isScrolled ? "Yes" : "No");


  return (
    
    <header>
      <nav className={` mt-8 navbar fixed top-0 w-full z-50 ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'} transition-all duration-300`

      }>
        {/* Logo Section */}
        <div className="logo ml-5 pt-6">
          <Link to="/">
            <img src={logo} alt="Mythica Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links paragraph flex space-x-4 mr-3 pt-2 bold">
          
          <li>
            <Link to="/" className=" m-6 text-[25px] text-white no-underline hover:underline">Home</Link>
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
      </nav>
    </header>
  );
}
