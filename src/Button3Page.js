import React, { useState } from "react";
import diferences from "./assets/diferences.jpg";

function Button3Page() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`buttonMaindiv p-4 rounded-xl shadow-md transition-colors duration-300`}
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        position: "relative",
      }}
    >
      {/* Botão Dark Mode */}
      <div style={{ position: "absolute", top: 10, right: 10, zIndex: 10 }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "8px 12px",
            cursor: "pointer",
            backgroundColor: darkMode ? "#333" : "#eee",
            color: darkMode ? "#eee" : "#333",
            border: "1px solid",
            borderColor: darkMode ? "#eee" : "#333",
            borderRadius: "6px",
          }}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <h1 className="pageTitle text-3xl font-bold mb-4">
        Autism Level 3: Requires Very Substantial Support
      </h1>

      <p className="pageDescription mb-6">
        This is the most severe level of autism. Individuals at this level require very substantial support and often face major challenges in communication, social interaction, and behavior.
      </p>

      <div className="imageContainer mb-6">
        <img
          src={diferences}
          alt="Illustration representing autism level 3"
          className="autismImage rounded-lg w-full max-w-md mx-auto shadow-md"
        />
      </div>

      <ul className="characteristicsList list-disc pl-5 space-y-3">
        <li>
          <strong>1. Significant Communication Challenges:</strong> Individuals with level 3 autism often struggle with both verbal and nonverbal communication, sometimes being nonverbal.
        </li>
        <li>
          <strong>2. Repetitive Behavior Patterns:</strong> Repetitive, stereotyped behaviors are common and may interfere with everyday functioning.
        </li>
        <li>
          <strong>3. Narrow and Restricted Interests:</strong> Level 3 autism typically includes intense focus on specific activities or topics, often to the exclusion of everything else.
        </li>
      </ul>
    </div>
  );
}

export default Button3Page