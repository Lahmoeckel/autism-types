import React, { useState } from "react";
import Born from "./assets/Born.jpg";

function Button2Page() {
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
        Autism Level 2: Requires Substantial Support
      </h1>

      <p className="pageDescription mb-6">
        Individuals at this level require more substantial support. They may have
        more significant difficulties in social, communication, and behavioral
        areas.
      </p>

      <div className="imageContainer mb-6">
        <img
          src={Born}
          alt="Autism level 2"
          className="autismImage rounded-lg w-full max-w-md mx-auto shadow-md"
        />
      </div>

      <ul className="characteristicsList list-disc pl-5 space-y-3">
        <li>
          <strong>1. Communication and Social Interaction Difficulties:</strong> Individuals
          with autism type 2 may struggle with both verbal and nonverbal communication.
        </li>
        <li>
          <strong>2. Restricted Interests and Repetitive Behaviors:</strong> Similar to autism
          type 3, individuals with autism type 2 may exhibit intense interests in specific topics.
        </li>
        <li>
          <strong>3. Sensory Sensitivities:</strong> Many people with autism type 2 have atypical
          sensory sensitivities, being either hypersensitive or hyposensitive to stimuli.
        </li>
      </ul>
    </div>
  );
}

export default Button2Page;