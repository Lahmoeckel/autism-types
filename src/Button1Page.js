import React from 'react';
import autism from "./assets/autism.jpg";

function Button1Page() {
  return (
    <div>
      {/* Título */}
      <h1>Autism Level 1: Key Areas of Assistance</h1>
      {/* Descrição */}
      <p>The Autism Spectrum Disorder (ASD) is often classified into different severity levels, based on the degree of support needed to cope with symptoms and function in everyday life. The classification into levels is commonly referred to as "support levels". Here are the three main levels:</p>
      <h1>Characteristics of autism type 1:</h1>
      
      <img src={autism} alt="" width="460" height="345"/>

<p><li>1. Mild Communication and Social Difficulties: Individuals with autism type 1 may experience mild challenges in communication and social interaction. They may have difficulty with aspects such as understanding nonverbal cues, initiating and maintaining conversations, and interpreting social norms, but these difficulties are typically less severe compared to other types of autism.</li>

<li>2. Restricted Interests and Repetitive Behaviors: Similar to other types of autism, individuals with autism type 1 may exhibit restricted interests and engage in repetitive behaviors. However, these interests and behaviors may be less pronounced or intense compared to individuals with more severe forms of autism.</li>

<li>3. Sensory Sensitivities: Many people with autism type 1 have sensory sensitivities, such as being sensitive to loud noises, bright lights, certain textures, or strong smells. However, these sensitivities may not be as extreme as those seen in individuals with more severe forms of autism.</li>

<li>4. Varied Verbal Abilities: Verbal abilities can vary widely among individuals with autism type 1. Some may have strong verbal skills and communicate effectively, while others may struggle with language development, speech articulation, or understanding conversational nuances.</li>

<li>5. Independence and Functioning: Individuals with autism type 1 may have relatively good adaptive functioning and independence compared to those with more severe forms of autism. They may be able to live independently, hold down a job, and engage in social activities with appropriate support.</li>

<li>6. Diagnosis and Intervention: Autism type 1 is often diagnosed later in childhood or adolescence, as the symptoms may be less noticeable or may overlap with other conditions. Early intervention services, such as speech therapy, occupational therapy, and social skills training, can be beneficial in addressing the specific needs of individuals with autism type 1.</li>

These are general characteristics, and it's important to remember that autism is a spectrum disorder, so individuals with autism type 1 can have a wide range of abilities and challenges.
      </p>
      {/* Lista de descrição */}
      <ul>
        <li>Individuals at this level typically need relatively minimal support. They may have social, communication, and behavioral difficulties, but are able to function independently in many areas of daily life. They may need occasional help or targeted support in specific situations.</li>
      </ul>
    </div>
  );
}

export default Button1Page;
