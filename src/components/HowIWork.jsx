import React from 'react';

const steps = [
  {
    number: '01',
    category: 'THE QUESTION',
    title: 'First, I listen.',
    description: 'I clarify requirements, understand stakeholder needs, and identify the real problem.',
    goal: 'Understand what actually needs solving.',
    variant: 'peach'
  },
  {
    number: '02',
    category: 'THE DISCOVERY',
    title: 'Then, I explore.',
    description: 'I examine references, study design patterns, and explore possible directions.',
    goal: 'Find opportunities worth exploring.',
    variant: 'gold'
  },
  {
    number: '03',
    category: 'THE THINKING',
    title: 'I connect the dots.',
    description: 'I organize information, map user journeys, and build clear wireframes.',
    goal: 'Make complex things easier to navigate.',
    variant: 'lilac'
  },
  {
    number: '04',
    category: 'THE CREATION',
    title: 'Ideas take shape.',
    description: 'Develop the interface, interactions, and reusable components.',
    goal: 'Turn ideas into tangible experiences.',
    variant: 'peach'
  },
  {
    number: '05',
    category: 'THE REFINEMENT',
    title: 'And I keep improving.',
    description: 'Review the design, gather feedback, test usability, and iterate to improve the experience.',
    goal: 'Make the solution work better for people.',
    variant: 'gold'
  }
];

export default function HowIWork() {
  return (
    <section className="how-i-work" id="process" aria-label="How I work">
      <div className="container how-i-work__container">
        
        {/* Section Header */}
        <div className="how-i-work__header">
          <span className="how-i-work__eyebrow">FROM QUESTIONS TO CLARITY</span>
          <h2 className="how-i-work__title">Good design starts with a question.</h2>
        </div>

        {/* 5-Column Process Steps Grid */}
        <div className="how-i-work__grid">
          {steps.map((step) => (
            <div className="process-step" key={step.number}>
              <span className="process-step__number">{step.number}</span>
              <span className="process-step__category">{step.category}</span>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__description">{step.description}</p>
              
              {/* Bottom Goal Pill Card */}
              <div className={`process-step__goal process-step__goal--${step.variant}`}>
                <span className="process-step__goal-dot" aria-hidden="true" />
                <span className="process-step__goal-text">
                  Goal: {step.goal}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
