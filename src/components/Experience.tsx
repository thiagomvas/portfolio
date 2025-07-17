import { useEffect, useRef } from 'react';
import './Experience.css';
import { experiences, formatDateRange } from './../lib/experience';

export default function Experience() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="experience" id="experience">
      <h1 className="section-header">Work Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="company-block">
          <div className="experience-header">
            <img src={exp.logo} alt={`${exp.company} Logo`} className="experience-logo" />
            <h2 className="experience-title">{exp.company}</h2>
          </div>

          <div className="experience-timeline">
            {exp.positions.map((position, i) => (
              <div
                className="timeline-item"
                key={i}
                ref={el => {
                  itemsRef.current[index * 10 + i] = el; // unique ref per item
                }}
              >
                <div className="timeline-content">
                  <h3>
                    {position.title} <span className="period">— {formatDateRange(position.start, position.end)}</span>
                  </h3>
                  <div className="type">{position.type}</div>
                  <p>{position.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
