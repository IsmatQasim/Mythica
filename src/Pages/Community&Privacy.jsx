import React from "react";
import "../Styles/Privacy&Community.css";
import Community from "../Components/Community";
import Privacy from "../Components/Privacy";

const CommunityAndPrivacy = () => {
  return (
    <>
      <div className="communityBackground">
        <Community />
        <Privacy />
      </div>
    </>
  );
};

export default CommunityAndPrivacy;
