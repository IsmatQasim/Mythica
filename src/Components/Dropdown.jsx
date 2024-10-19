import React, { useState } from "react";

const App = () => {
  const [year, setYear] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [genre, setGenre] = useState("");

  // Mock data for dropdown options
  const yearOptions = ["2022", "2023"];
  const authorOptions =
    year === "2022" ? ["Author A", "Author B"] : ["Author C", "Author D"];
  const categoryOptions = author === "Author A" ? ["Fiction"] : ["Non-Fiction"];
  const genreOptions =
    category === "Fiction" ? ["Drama", "Adventure"] : ["History", "Biography"];

  return (
    <div className="text-center storyParagraph p-6">
      {/* Reusing the dropdowns for Name, Year, Author, Category, Genre */}
      <div className="flex justify-center space-x-4">
        {/* Year Dropdown */}
        <Dropdown
          label="Year"
          options={yearOptions}
          selected={year}
          onChange={(e) => {
            setYear(e.target.value);
            setAuthor("");
            setCategory("");
            setGenre("");
          }}
        />
        <Dropdown
          label="Author"
          options={authorOptions}
          selected={author}
          onChange={(e) => {
            setAuthor(e.target.value);
            setCategory("");
            setGenre("");
          }}
        />

        <Dropdown
          label="Category"
          options={categoryOptions}
          selected={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setGenre("");
          }}
        />

        <Dropdown
          label="Genre"
          options={genreOptions}
          selected={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
    </div>
  );
};

// Reusable Dropdown Component
const Dropdown = ({ label, options, selected, onChange }) => {
  return (
    <div className="flex flex-col items-center mx-4">
      <label className="flex items-center space-x-2 storyParagraph">
        <span>{label}</span>
        <div className="relative">
          <select
            value={selected}
            onChange={onChange}
            className="block w-full px-3 py-2 border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </label>
    </div>
  );
};

export default App;
