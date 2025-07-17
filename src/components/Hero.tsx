import './Hero.css';
import { links } from '../lib/links';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        {/* Text Section */}
        <div className="hero-text">
          <h1>Hi, I'm Thiago Vasconcelos</h1>
          <p>Full Stack Developer crafting modern, performant web applications.</p>

          {/* Social Icons */}
          <div className='social-row'>
            <div className="social-links">
              <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img className='white-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="Thiago Vasconcelos" width={32} height={32} />
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img className='white-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="Thiago Vasconcelos" width={32} height={32} />
              </a>
            </div>

            <div className="cv-download">
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/cv_english.pdf';
                  link.download = 'cv_english.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download CV (English)
              </button>
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/cv_portugues.pdf';
                  link.download = 'cv_portugues.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download CV (Português)
              </button>
            </div>

          </div>
        </div>

        {/* Image Section */}
        <div className="hero-image">
          <img src="/pfp.jpg" alt="Thiago Vasconcelos" width={400} height={400} />
        </div>
      </div>
    </section>
  );
}
