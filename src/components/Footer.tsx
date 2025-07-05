import React from 'react';
import './Footer.css';
import { links } from '../lib/links';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <p className="text">
          © {new Date().getFullYear()} Thiago Vasconcelos. All rights reserved.
        </p>
        <div className="socialLinks">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="link"
            title="GitHub"
          >
            <img
              className="white-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="GitHub"
              width={32}
              height={32}
            />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="link"
            title="LinkedIn"
          >
            <img
              className="white-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
              alt="LinkedIn"
              width={32}
              height={32}
            />
          </a>
          <a
            href={`mailto:${links.email}`}
            aria-label="Email"
            className="link"
            title="Email"
          >
            <img
              className="white-icon"
              src="https://cdn.simpleicons.org/gmail/ea4335"
              alt="Email"
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
