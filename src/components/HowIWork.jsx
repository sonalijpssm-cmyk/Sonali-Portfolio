import React from 'react';
import flowchartImg from '../assets/process-flowchart.png';

const steps = [
  {
    number: '01',
    category: 'THE QUESTION',
    title: 'First, I listen.',
    description: 'I clarify requirements, understand stakeholder needs, and identify the real problem.',
    goal: 'Understand what actually needs solving.'
  },
  {
    number: '02',
    category: 'THE DISCOVERY',
    title: 'Then, I explore.',
    description: 'I examine references, study design patterns, and explore possible directions.',
    goal: 'Find opportunities worth exploring.'
  },
  {
    number: '03',
    category: 'THE THINKING',
    title: 'I connect the dots.',
    description: 'I organize information, map user journeys, and build clear wireframes.',
    goal: 'Make complex things easier to navigate.'
  },
  {
    number: '04',
    category: 'THE CREATION',
    title: 'Ideas take shape.',
    description: 'Develop the interface, interactions, and reusable components.',
    goal: 'Turn ideas into tangible experiences.'
  },
  {
    number: '05',
    category: 'THE REFINEMENT',
    title: 'And I keep improving.',
    description: 'Review the design, gather feedback, test usability, and iterate to improve the experience.',
    goal: 'Make the solution work better for people.'
  }
];

export default function HowIWork() {
  return (
    <section className="how-i-work" id="from-questions-to-clarity" aria-label="From Questions to Clarity - How I work">
      {/* Anchor aliases so #question-to-clarity, #questions-to-clarity and #process all navigate here */}
      <span id="question-to-clarity" className="sr-only" aria-hidden="true" />
      <span id="questions-to-clarity" className="sr-only" aria-hidden="true" />
      <span id="process" className="sr-only" aria-hidden="true" />
      <div className="container how-i-work__container">
        
        {/* Section Header */}
        <div className="how-i-work__header">
          <span className="how-i-work__eyebrow">FROM QUESTIONS TO CLARITY</span>
          <h2 className="how-i-work__title">Good design starts with a question.</h2>
        </div>

        {/* 3-Column Process Steps Grid with Visual Sitemap Card */}
        <div className="how-i-work__grid">
          {/* Card 01 */}
          <div className="process-step">
            <span className="process-step__number">{steps[0].number}</span>
            <span className="process-step__category">{steps[0].category}</span>
            <h3 className="process-step__title">{steps[0].title}</h3>
            <p className="process-step__description">{steps[0].description}</p>
            <div className="process-step__goal">
              <span className="process-step__goal-dot" aria-hidden="true" />
              <span className="process-step__goal-text">Goal: {steps[0].goal}</span>
            </div>
          </div>

          {/* Card 02 */}
          <div className="process-step">
            <span className="process-step__number">{steps[1].number}</span>
            <span className="process-step__category">{steps[1].category}</span>
            <h3 className="process-step__title">{steps[1].title}</h3>
            <p className="process-step__description">{steps[1].description}</p>
            <div className="process-step__goal">
              <span className="process-step__goal-dot" aria-hidden="true" />
              <span className="process-step__goal-text">Goal: {steps[1].goal}</span>
            </div>
          </div>

          {/* Card 03 */}
          <div className="process-step">
            <span className="process-step__number">{steps[2].number}</span>
            <span className="process-step__category">{steps[2].category}</span>
            <h3 className="process-step__title">{steps[2].title}</h3>
            <p className="process-step__description">{steps[2].description}</p>
            <div className="process-step__goal">
              <span className="process-step__goal-dot" aria-hidden="true" />
              <span className="process-step__goal-text">Goal: {steps[2].goal}</span>
            </div>
          </div>

          {/* Visual Sitemap Flowchart Card (Row 2, Column 1) */}
          <div className="how-i-work__visual-card">
            <img 
              src={flowchartImg} 
              alt="Healthcare application sitemap and information architecture flow mapped with sticky notes on a wall"
              className="how-i-work__visual-img"
              loading="lazy"
            />
          </div>

          {/* Card 04 */}
          <div className="process-step">
            <span className="process-step__number">{steps[3].number}</span>
            <span className="process-step__category">{steps[3].category}</span>
            <h3 className="process-step__title">{steps[3].title}</h3>
            <p className="process-step__description">{steps[3].description}</p>
            <div className="process-step__goal">
              <span className="process-step__goal-dot" aria-hidden="true" />
              <span className="process-step__goal-text">Goal: {steps[3].goal}</span>
            </div>
          </div>

          {/* Card 05 */}
          <div className="process-step">
            <span className="process-step__number">{steps[4].number}</span>
            <span className="process-step__category">{steps[4].category}</span>
            <h3 className="process-step__title">{steps[4].title}</h3>
            <p className="process-step__description">{steps[4].description}</p>
            <div className="process-step__goal">
              <span className="process-step__goal-dot" aria-hidden="true" />
              <span className="process-step__goal-text">Goal: {steps[4].goal}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
