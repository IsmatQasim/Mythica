import React from "react";

const StoryCard = ({ title, author, rating }) => {
  return (
    <div
      className="w-[170px] h-[180px] mx-10 my-2 border border-black bg-transparent p-4 rounded-lg "
      style={{
        boxShadow:
          "0px 4px rgba(242, 189, 212, 0.5), 0px 4px rgba(233, 172, 232, 0.5), 0px 4px rgba(227, 160, 246, 0.5), 0px 4px rgba(237, 179, 224, 0.5)",
      }}
    >
      <h5 className="text-xl font-semibold ">{title}</h5>
      <p className="text-gray-600">by {author}</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">
          {"★".repeat(Math.floor(rating))}
        </span>
        <span className="text-gray-500">
          {"☆".repeat(5 - Math.floor(rating))}
        </span>
      </div>
    </div>
  );
};

export default StoryCard;
