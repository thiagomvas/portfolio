import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Text Section */}
        <div className="hero-text">
          <h1>Hi, I'm Thiago Vasconcelos</h1>
          <p>Full Stack Developer crafting modern, performant web applications.</p>

          {/* Social Icons */}
          <div className='social-row'>
            <div className="social-links">
              <a href="https://github.com/thiagomvas" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img className='white-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="Thiago Vasconcelos" width={32} height={32} />
              </a>
              <a href="https://www.linkedin.com/in/thiago-m-vasconcelos/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img className='white-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="Thiago Vasconcelos" width={32} height={32} />
              </a>
            </div>

            <div className="cv-download">
              <select
                value="" // Always shows the default text
                onChange={(e) => {
                  const url = e.target.value;
                  if (url) {
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = url.split('/').pop()!; // sets filename
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }
                }}
              >
                <option value="" disabled>Download CV</option>
                <option value="/cv_english.pdf">English</option>
                <option value="/cv_portugues.pdf">Português</option>
              </select>
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
