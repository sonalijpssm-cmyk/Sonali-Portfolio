import React from 'react';

export default function ProjectCard({ project }) {
  const { id, title, category, description, image, alt, link } = project;

  return (
    <article className="work-card" id={`project-${id}`}>
      {/* Mockup Column */}
      <div className="work-card__media">
        <div className="work-card__media-inner">
          <img 
            src={image} 
            alt={alt} 
            className="work-card__image"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Content Column */}
      <div className="work-card__content">
        <span className="work-card__category">{category}</span>
        <h3 className="work-card__title">{title}</h3>
        <p className="work-card__description">{description}</p>
        <a 
          href={link || `#project-${id}`} 
          className="btn btn--primary work-card__cta"
          aria-label={`View case study for ${title}`}
        >
          <span>VIEW MY WORK</span>
          <span className="btn__arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
