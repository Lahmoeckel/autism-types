import React from 'react';
import diferences from "./assets/diferences.jpg";

function Button3Page() {
  return (
    <div className="buttonMaindiv">
      {/* Título */}
      <h1 className="pageTitle">Autism Level 3: Requires Very Substantial Support</h1>
      {/* Descrição */}
      <p className="pageDescription">
        This is the most severe level of autism, where individuals need very substantial support. Individuals at this level may have severe difficulties in social, communication, and behavioral areas.
      </p>

      <div className="imageContainer">
        <img src={diferences} alt="Autism level 3" className="autismImage" />
      </div>

      <ul className="characteristicsList">
        <li>1. Significant Communication Challenges: Individuals with level 3 autism often struggle with both verbal and nonverbal communication.</li>
        <li>2. Repetitive Behavior Patterns: People with level 3 autism frequently exhibit repetitive or stereotyped behaviors.</li>
        <li>3. Restricted Interests and Repetitive Activities: Level 3 autism is characterized by narrow and repetitive interests.</li>
      </ul>
    </div>
  );
}

export default Button3Page;
