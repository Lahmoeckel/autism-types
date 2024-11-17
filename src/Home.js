import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button as ChakraButton } from '@chakra-ui/react'; // Usando Chakra Button
import "./App.css"; // Estilos importados do arquivo CSS



function Home() {
  const navigate = useNavigate();

  // Definindo estados para as curiosidades dos cards
  const [shuffleType1, setShuffleType1] = useState("Individuals with Level 1 autism often have mild challenges with social interaction and communication.");
  const [shuffleType2, setShuffleType2] = useState("Those with Level 2 autism experience more noticeable difficulties with communication and social interaction.");
  const [shuffleType3, setShuffleType3] = useState("Level 3 autism involves significant challenges in communication, social interaction, and daily functioning.");

  // Função para mudar a curiosidade apenas no card clicado
  const shuffleCuriosity = (level) => {
    const curiositiesLevel1 = [
      "Individuals with Level 1 autism often have mild challenges with social interaction and communication.",
      "They may struggle with understanding social cues and forming relationships but can usually function independently.",
      "People with Level 1 autism may have intense interests and repetitive behaviors.",
      "They might need support in making friends but can function well in structured environments."
    ];
    const curiositiesLevel2 = [
      "Those with Level 2 autism experience more noticeable difficulties with communication and social interaction.",
      "They may require some support to navigate daily activities and often have sensory sensitivities.",
      "People with Level 2 autism may engage in repetitive behaviors and need more assistance with routine changes.",
      "They often struggle with adapting to new environments or changes in routine."
    ];
    const curiositiesLevel3 = [
      "Level 3 autism involves significant challenges in communication, social interaction, and daily functioning.",
      "Individuals with Level 3 autism often need substantial support in everyday activities.",
      "They may have limited speech and struggle with self-care tasks.",
      "People with Level 3 autism may need constant support for their safety and well-being."
    ];

    if (level === 1) {
      setShuffleType1(curiositiesLevel1[Math.floor(Math.random() * curiositiesLevel1.length)]);
    } else if (level === 2) {
      setShuffleType2(curiositiesLevel2[Math.floor(Math.random() * curiositiesLevel2.length)]);
    } else if (level === 3) {
      setShuffleType3(curiositiesLevel3[Math.floor(Math.random() * curiositiesLevel3.length)]);
    }
  };

  return (
    <div className="App">
      {/* Título centralizado */}
      <header className="App-header">
        <h1 className="title">Autism Types</h1>
      </header>

      {/* Botões com lacunas (cards) */}
      <div className="buttonsDiv">

        {/* Card 1 - Autism Level 1 */}
        <div className="card">
          <h2>Autism Level 1 (Mild):</h2>
          <p>{shuffleType1}</p>
          <button onClick={() => shuffleCuriosity(1)}>Shuffle Curiosity</button>
          <ChakraButton
            onClick={() => { navigate("/button1"); }}
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="green.500"
          >
            Autism Level 1
          </ChakraButton>
        </div>

        {/* Card 2 - Autism Level 2 */}
        <div className="card">
          <h2>Autism Level 2 (Moderate):</h2>
          <p>{shuffleType2}</p>
          <button onClick={() => shuffleCuriosity(2)}>Shuffle Curiosity</button>
          <ChakraButton
            onClick={() => { navigate("/button2"); }}
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="green.500"
          >
            Autism Level 2
          </ChakraButton>
        </div>

        {/* Card 3 - Autism Level 3 */}
        <div className="card">
          <h2>Autism Level 3 (Severe):</h2>
          <p>{shuffleType3}</p>
          <button onClick={() => shuffleCuriosity(3)}>Shuffle Curiosity</button>
          <ChakraButton
            onClick={() => { navigate("/button3"); }}
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="green.500"
          >
            Autism Level 3
          </ChakraButton>
        </div>

      </div>

    </div>
  );
}

export default Home;
