import React from "react";
//import "./index.css";
// import CommunityAndPrivacy from "./Pages/Community&Privacy";
//import Profile from "./Pages/Profile";
import './Styles/CreateStoryForm.css'; // Import the CSS for styling
import StoryCreatePage from './Pages/CreateYourOwnStory'; // Adjust the import for your folder structure

function App() {
  return (
    <div>
      <StoryCreatePage /> {/* Render the StoryCreatePage component */}
       {/* <CommunityAndPrivacy /> */}
       {/*<Profile />*/ }
      
    </div>
  );
}
export default App;