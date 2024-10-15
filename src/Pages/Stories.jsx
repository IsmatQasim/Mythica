import React from "react";
import "../Styles/Stories.css";
import Dropdown from "../Components/Dropdown";
import SearchBar from "../Components/SearchBar";
import StoryCard from "../Components/StoryCard";

const Stories = () => {
  return (
    <div className="storyBackground">
      <h1 className="text-[45px] bold text-center pt-20">Stories</h1>
      <div className="flex justify-center space-x-4">
        <Dropdown />
        <SearchBar />
      </div>
      <div className="flex flex-wrap px-4"> {/* Side padding added */}
      <StoryCard title="The Great Adventure" author="John Doe" rating={4.5} />
      <StoryCard title="Mystery of the Lost Treasure" author="Jane Smith" rating={5} />
      <StoryCard title="Journey to the Unknown" author="Alice Johnson" rating={4} />
      <StoryCard title="The Lost Kingdom" author="Bob Brown" rating={3.5} />
      <StoryCard title="Secrets of the Ocean" author="Mary White" rating={4.2} />
      <StoryCard title="The Great Adventure" author="John Doe" rating={4.5} />
      <StoryCard title="Mystery of the Lost Treasure" author="Jane Smith" rating={5} />
      <StoryCard title="Journey to the Unknown" author="Alice Johnson" rating={4} />
      <StoryCard title="The Lost Kingdom" author="Bob Brown" rating={3.5} />
      <StoryCard title="Secrets of the Ocean" author="Mary White" rating={4.2} />
      <StoryCard title="The Lost Kingdom" author="Bob Brown" rating={3.5} />
      <StoryCard title="Secrets of the Ocean" author="Mary White" rating={4.2} />
      </div>
    </div>
  );
};

export default Stories;
