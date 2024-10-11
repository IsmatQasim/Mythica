import React, { useState } from "react";
import "../Styles/Profile.css";
import Bookmarks from "../Components/Bookmarks";
import Drafts from "../Components/Drafts";
import Favorites from "../Components/Favorites";
import Saved from "../Components/Saved";

import BookmarkIcon from "../Icons/BookmarkIcon";
import DraftsIcon from "../Icons/DraftsIcon";
import FavoriteIcon from "../Icons/FavoriteIcon";
import SavedIcon from "../Icons/SavedIcon";
import UsernameIcon from "../Icons/UsernameIcon";

const Profile = () => {
  const [activeComponent, setActiveComponent] = useState("username");

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "bookmarks":
        return <Bookmarks />;
      case "drafts":
        return <Drafts />;
      case "favorites":
        return <Favorites />;
      case "saved":
        return <Saved />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <hr />
      <div className="myBackground p-6">
        <button
          type="submit"
          className="submit-button bg-transparent text-black border border-black rounded-full px-8 py-2 me-[300px] mt-2 mx-auto block text-2xl bold transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-95"
          style={{
            boxShadow:
              "0px 4px rgba(242, 189, 212, 0.5), 0px 4px rgba(233, 172, 232, 0.5), 0px 4px rgba(227, 160, 246, 0.5), 0px 4px rgba(237, 179, 224, 0.5)",
          }}
        >
          Log Out
        </button>
        <div className="flex ml-40 mt-15 p-10">
          <div className=" p-4">
            <ul className="space-y-10">
              <li
                className="menu-item cursor-pointer flex items-center space-x-2 "
                onClick={() => handleComponentChange("username")}
              >
                <UsernameIcon />
                <span className="section">Mythica</span>
              </li>
              <li
                className="menu-item cursor-pointer flex items-center space-x-2 "
                onClick={() => handleComponentChange("bookmarks")}
              >
                <BookmarkIcon />
                <span>Bookmarks</span>
              </li>
              <li
                className="menu-item cursor-pointer flex items-center space-x-2 "
                onClick={() => handleComponentChange("drafts")}
              >
                <DraftsIcon />
                <span>Drafts</span>
              </li>
              <li
                className="menu-item cursor-pointer flex items-center space-x-2 "
                onClick={() => handleComponentChange("favorites")}
              >
                <FavoriteIcon />
                <span>Favorites</span>
              </li>
              <li
                className="menu-item cursor-pointer flex items-center space-x-2 "
                onClick={() => handleComponentChange("saved")}
              >
                <SavedIcon />
                <span>Saved</span>
              </li>
            </ul>
          </div>
          <div className="w-3/4 p-4">{renderComponent()}</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
