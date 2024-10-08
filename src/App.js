import React from 'react';
import { Button } from '@mui/material';
import "./index.css";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 bold">Hello, World!</h1>
        <Button variant="contained" color="primary">
          MUI Button
        </Button>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Tailwind Button
        </button>
      </div>
    </div>
  );
}

export default App;
