import React, { useState, useEffect } from "react";
import autism from "./assets/autism.jpg";

function Button1Page() {
  // Controle local dark mode
  const [darkMode, setDarkMode] = useState(false);

  return (
    < div
      className={`buttonMaindiv p-4 rounded-xl shadow-md transition-colors duration-300`
      }
      style={{ backgroundColor: darkMode ? "black" : "white" }}
    >
      {/* Botão toggle dark mode */}
      < div style={{ position: "absolute", top: 10, right: 10, zIndex: 10 }}>
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
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div >

      <h1 className="pageTitle text-3xl font-bold mb-4">
        Autism Level 1: Key Areas of Assistance
      </h1>

      <p className="pageDescription mb-6">
        The Autism Spectrum Disorder (ASD) is often classified into different
        severity levels, based on the degree of support needed to cope with
        symptoms and function in everyday life.
      </p>

      <div className="imageContainer mb-6">
        <img
          src={autism}
          alt="Autism level 1"
          className="autismImage rounded-lg w-full max-w-md mx-auto shadow-md"
        />
      </div>

      <ul className="characteristicsList list-disc pl-5 space-y-3">
        <li>
          <strong>1. Mild Communication and Social Difficulties:</strong>{" "}
          Individuals with autism type 1 may experience mild challenges in
          communication and social interaction.
        </li>
        <li>
          <strong>2. Restricted Interests and Repetitive Behaviors:</strong>{" "}
          Similar to other types of autism, individuals with autism type 1 may
          exhibit restricted interests and engage in repetitive behaviors.
        </li>
        <li>
          <strong>3. Sensory Sensitivities:</strong> Many people with autism
          type 1 have sensory sensitivities, such as being sensitive to loud
          noises, bright lights, certain textures, or strong smells.
        </li>
      </ul>
    </div >
  );
}

export default Button1Page;