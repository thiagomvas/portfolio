import './Skills.css';
import { skillCategories } from '../lib/skills';

export default function Skills() {
  return (
    <div className='skills'>
      <h1 className='section-header'>Skills & Technologies</h1>

    <section className="skills-grid">
      {skillCategories.map((category, i) => (
        <div className="skill-card" style={{background: category.background}} key={i}>
          <h3>{category.label}</h3>
          <div className="skill-items">
            {category.skills.map((skill, j) => (
              <div className="skill" key={j}>
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
    </div>

  );
}
