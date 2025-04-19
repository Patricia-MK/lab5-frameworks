import React, { useState } from "react";

// Component that accepts props
function Team({ name }) {
  return <h1 className="text-2xl font-bold mb-4">Welcome, {name}!</h1>;
}

export default function App() {
  const [showTeam, setShowTeam] = useState(true);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow mt-10">
      <Team name="Patricia" />

      <button
        onClick={() => setShowTeam(!showTeam)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {showTeam ? "Hide Team" : "Show Team"}
      </button>

      {showTeam && (
        <ul className="mt-4 space-y-2">
          <li className="bg-gray-100 p-2 rounded">Patricia Mboma Kashweka</li>
          <li className="bg-gray-100 p-2 rounded">Chaabilo Lubobya</li>
        </ul>
      )}
    </div>
  );
}


