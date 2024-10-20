// Import React 
import React from 'react';
import AiStoryGenerator from './AiStoryGenerator';
// Import Components
import Navbar from '../Components/Navbar';
import MyCarousel from '../Components/MyCarousel';
import About from '../Components/About';

// Import the image
import homeImage from '../Images/Home.png'; // Adjust the path to where your image is

// Homepage Component
const Homepage = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 bg-no-repeat"
        style={{ backgroundImage: `url(${homeImage})`, height: '100vh' }}
      ></div>


      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Heading */}
        <div className="relative min-h-screen flex flex-col justify-center items-center text-center">
          <h1 className="text-black heroSectionHeading md:text-7xl font-bold mb-20 animate-slideIn">
            Discover World of Wonder <br />One Story at a Time
          </h1>


          <p className="subHeading text-black mb-1">
            Unleash your imagination with AI-generated <br />tales, handcrafted just for you. <br />
            Explore stories, write your own, and <br />let your creativity soar!
          </p>

          <button className="subHeading bg-transparent text-black mt-8 px-8 py-3 border border-black rounded-full shadow-lg hover:bg-purple-100 transition duration-300">
            Read Stories Now
          </button>
        </div>

        {/* Carousel */}
        <div className="flex justify-center mb-0 mt-0">
          <MyCarousel />
        </div>

        {/* About Section Below Carousel */}
        <div className="mt-12 flex justify-center">
          <About /> {/* Place About section here */}

        </div>
      </div>
      
    </div>

  );
}

export default Homepage;
