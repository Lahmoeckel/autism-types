import React from 'react';
import autism from "./assets/autism.jpg";

function Button1Page() {
  return (
    <div className="buttonMaindiv">
      {/* Título */}
      <h1 className="pageTitle">Autism Level 1: Key Areas of Assistance</h1>
      {/* Descrição */}
      <p className="pageDescription">
        The Autism Spectrum Disorder (ASD) is often classified into different severity levels, based on the degree of support needed to cope with symptoms and function in everyday life.
      </p>

      <div className="imageContainer">
        <img src={autism} alt="Autism level 1" className="autismImage" />
      </div>

      <ul className="characteristicsList">
        <li>1. Mild Communication and Social Difficulties: Individuals with autism type 1 may experience mild challenges in communication and social interaction.</li>
        <li>2. Restricted Interests and Repetitive Behaviors: Similar to other types of autism, individuals with autism type 1 may exhibit restricted interests and engage in repetitive behaviors.</li>
        <li>3. Sensory Sensitivities: Many people with autism type 1 have sensory sensitivities, such as being sensitive to loud noises, bright lights, certain textures, or strong smells.</li>
      </ul>
    </div>
  );
}

export default Button1Page;
