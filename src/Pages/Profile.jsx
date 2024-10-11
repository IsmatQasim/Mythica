import React from 'react'
import "../Styles/Profile.css"
import Bookmarks from '../Components/Bookmarks';
import Drafts from '../Components/Drafts';
import Favorites from '../Components/Favorites';
import Saved from '../Components/Saved';
import Username from '../Components/Username';
import { useState } from 'react';
import BookmarkIcon from '../Icons/BookmarkIcon';
import DraftsIcon from '../Icons/DraftsIcon';
import FavoriteIcon from '../Icons/FavoriteIcon';
import SavedIcon from '../Icons/SavedIcon';
import UsernameIcon from '../Icons/UsernameIcon';

const Profile = () => {
    const [activeComponent, setActiveComponent] = useState('username');

    
    const handleComponentChange = (component) => {
      setActiveComponent(component);
    };
  
    
    const renderComponent = () => {
      switch (activeComponent) {
        case 'bookmarks':
          return <Bookmarks />;
        case 'drafts':
          return <Drafts />;
        case 'favorites':
          return <Favorites />;
        case 'saved':
          return <Saved />;
        default:
          return <Username />;
      }
    };
  return (
    
    <>
    <hr />
    <div className='myBackground'>
    <div className="flex">
      <div className="w-1/4 p-4">
        <ul className="space-y-4">
          <li className="cursor-pointer" onClick={() => handleComponentChange('username')}><UsernameIcon/>Mythica</li>
          <li className="cursor-pointer" onClick={() => handleComponentChange('bookmarks')}><BookmarkIcon/>Bookmarks</li>
          <li className="cursor-pointer" onClick={() => handleComponentChange('drafts')}><DraftsIcon/>Drafts</li>
          <li className="cursor-pointer" onClick={() => handleComponentChange('favorites')}><FavoriteIcon/>Favorites</li>
          <li className="cursor-pointer" onClick={() => handleComponentChange('saved')}><SavedIcon/>Saved</li>
        </ul>
      </div>
      
      <div className="w-3/4 p-4">
        {renderComponent()}
      </div>
    </div>
    </div>
    </>
  )
}

export default Profile