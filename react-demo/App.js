import React, { useState } from "react";

function WelcomeMessage({ name }) {
  return <h1>Welcome, {name}!</h1>;
}

function App() {
  const [showMsg, setShowMsg] = useState(true);

  return (
    <div className="App">
      <WelcomeMessage name="Patricia" />
      <button onClick={() => setShowMsg(!showMsg)}>
        {showMsg ? "Hide" : "Show"} Message
      </button>
      {showMsg && <p>This is a toggleable message!</p>}
    </div>
  );
}

export default App;
