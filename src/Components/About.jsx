import React from 'react';
import aboutBackground from '../Images/About.png'; // Import your background image

const About = () => {
  return (
    <div>
      {/* About Section */}
      <div
        className="about-section flex flex-col justify-center items-center text-center py-10 overflow-hidden"
        style={{
          backgroundImage: `url(${aboutBackground})`,
          backgroundSize: 'cover', // Make sure the image covers the entire section
          backgroundAttachment: 'fixed', // Make the background image fixed during scroll
          backgroundPosition: 'center', // Center the image
          minHeight: '100vh', // Ensure it takes the full viewport height
          width: '100vw', // Ensure it takes the full viewport width
          height: '100vh', // Ensure full height as well
        }}
      >
        <div>
          <h2 className="mb-9 mainHeading">About Us</h2>
          <p className="paragraph">
            Welcome to Mythica, where imagination and creativity come to life! At Mythica,<br></br> 
            we believe that stories are the threads that connect us all, weaving together <br></br>
            the fabric of our shared human experience. Our platform is dedicated to providing <br></br>
            a space where storytellers, writers, and dreamers can explore new realms, create <br></br>
            unforgettable narratives, and share their voices with the world.<br></br>
            Whether you're here to write your own stories, collaborate with AI to spark fresh <br></br>
            ideas, or simply immerse yourself in the rich tapestry of tales crafted by others, <br></br>
            Mythica is your haven. We are passionate about fostering a supportive and <br></br>
            inclusive community where creativity knows no bounds. Join us, and let your <br></br>
            imagination soar as we journey together through the limitless landscapes of <br></br>
            fiction. 
          </p>
          <button className="subHeading bg-lightpink text-black px-12 py-4 border border-black rounded-full hover:bg-purple-100 transition duration-300">
  Read More
</button>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-lg text-white py-2 text-center ">
        <p className="footer">Designed & Developed by HIZ!</p>
      </footer>
    </div>
  );
};

export default About;
