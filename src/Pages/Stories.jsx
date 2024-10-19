import React , { useState } from "react";
import "../Styles/Stories.css";
import Dropdown from "../Components/Dropdown";
import SearchBar from "../Components/SearchBar";
import StoryAPI from "../Components/StoryAPI";

const Stories = () => {
  const [searchTerm, setSearchTerm] = useState('adventure'); // Default search term

  // Function to handle search term from SearchBar
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <div className="storyBackground">
      <h1 className="mainHeading text-center pt-20">Stories</h1>
      <div className="flex justify-center space-x-4">
        <Dropdown />
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex flex-wrap px-4"> {/* Side padding added */}
      <StoryAPI searchTerm={searchTerm}/>
      </div>
    </div>
  );
};

export default Stories;
