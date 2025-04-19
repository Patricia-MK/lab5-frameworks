import React, { useState } from "react";

function Team({ name }) {
  return <h1>Welcome, {name}!</h1>;
}

export default function App() {
  const [showTeam, setShowTeam] = useState(true);

  return (
    <div className="App">
      <Team name="Patricia" />
      <button onClick={() => setShowTeam(!showTeam)}>
        {showTeam ? "Hide Team" : "Show Team"}
      </button>
      {showTeam && (
        <ul>
          <li>Patricia Mboma Kashweka</li>
          <li>Chaabilo Lubobya </li>
        </ul>
      )}
    </div>
  );
}

