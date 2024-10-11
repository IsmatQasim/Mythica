
import React, { useState } from 'react';
import "../Styles/Profile.css"; 
import Bookmarks from '../Components/Bookmarks';
import Drafts from '../Components/Drafts';
import Favorites from '../Components/Favorites';
import Saved from '../Components/Saved';
import Username from '../Components/Username';
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

            <div className="myBackground p-6">
                <div className="flex  mx-auto max-w-lg m-20">
                    <div className="w-1/4 p-4">
                        <ul className="space-y-4">
                            <li
                                className="menu-item cursor-pointer flex items-center space-x-2 hover:text-black-500"
                                onClick={() => handleComponentChange('username')}
                            >
                                <UsernameIcon />
                                <span>Mythica</span>
                            </li>
                            <li
                                className="menu-item cursor-pointer flex items-center space-x-2 hover:text-black-500"
                                onClick={() => handleComponentChange('bookmarks')}
                            >
                                <BookmarkIcon />
                                <span>Bookmarks</span>
                            </li>
                            <li
                                className="menu-item cursor-pointer flex items-center space-x-2 hover:text-black-500"
                                onClick={() => handleComponentChange('drafts')}
                            >
                                <DraftsIcon />
                                <span>Drafts</span>
                            </li>
                            <li
                                className="menu-item cursor-pointer flex items-center space-x-2 hover:text-black-500"
                                onClick={() => handleComponentChange('favorites')}
                            >
                                <FavoriteIcon />
                                <span>Favorites</span>
                            </li>
                            <li
                                className="menu-item cursor-pointer flex items-center space-x-2 hover:text-black-500"
                                onClick={() => handleComponentChange('saved')}
                            >
                                <SavedIcon />
                                <span>Saved</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/4 p-4">
                        {renderComponent()}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
