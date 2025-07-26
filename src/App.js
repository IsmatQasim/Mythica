import React from "react";
import "./index.css";
// import CommunityAndPrivacy from "./Pages/Community&Privacy";
// import Profile from "./Pages/Profile";
// import Stories from "./Pages/Stories";
// import StoryCreatePage from "./Pages/CreateYourOwnStory";
import "./Styles/CreateStoryForm.css";

import Homepage from './Pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import AiStoryGenerator from './Pages/AiStoryGenerator';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      {/* <Stories />
      <CommunityAndPrivacy />
      <Profile /> */}
      {/* <StoryCreatePage /> */}


      <Router>
      <Routes>
          <Route path="/" element={<Homepage />} />  {/* Homepage route */}
          <Route path="/about" element={<About />} />  {/* About page route */}
          
        </Routes>
      </Router>

      <AiStoryGenerator/>
       </div>

       



       
  );
}
export default App;
