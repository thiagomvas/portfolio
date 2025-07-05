import './Experience.css';
import {experiences, formatDateRange} from './../lib/experience';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h1 className='section-header'>Work Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="company-block">
          <div className="experience-header">
            <img src={exp.logo} alt={`${exp.company} Logo`} className="experience-logo" />
            <h2 className="experience-title">{exp.company}</h2>
          </div>

          <div className="experience-timeline">
          {exp.positions.map((position, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-content">
                <h3>{position.title} <span className="period">— {formatDateRange(position.start, position.end)}</span></h3>
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
