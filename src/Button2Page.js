import React from 'react';
import Born from "./assets/Born.jpg";

function Button2Page() {
  return (
    <div className="buttonMaindiv">
      {/* Título */}
      <h1 className="pageTitle">Autism Level 2: Requires Substantial Support</h1>
      {/* Descrição */}
      <p className="pageDescription">
        Individuals at this level require more substantial support. They may have more significant difficulties in social, communication, and behavioral areas.
      </p>

      <div className="imageContainer">
        <img src={Born} alt="Autism level 2" className="autismImage" />
      </div>

      <ul className="characteristicsList">
        <li>1. Communication and Social Interaction Difficulties: Individuals with autism type 2 may struggle with both verbal and nonverbal communication.</li>
        <li>2. Restricted Interests and Repetitive Behaviors: Similar to autism type 3, individuals with autism type 2 may exhibit intense interests in specific topics.</li>
        <li>3. Sensory Sensitivities: Many people with autism type 2 have atypical sensory sensitivities, being either hypersensitive or hyposensitive to stimuli.</li>
      </ul>
    </div>
  );
}

export default Button2Page;
