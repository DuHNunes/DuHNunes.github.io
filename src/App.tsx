import './App.css';
import photo from './assets/img/photo.jpg';
import { GithubLogo, EnvelopeSimple, LinkedinLogo } from '@phosphor-icons/react';

export function App() {
  return (
    <div className="container">
      <img src={photo} alt="DuH Nunes" className="avatar" />

      <section className="icons-area">
        <a href="https://github.com/duhnunes" className="icons" target="_blank" rel="noreferrer">
          <GithubLogo />
        </a>
        <a href="https://linkedin.com/in/duhnunes" target="_blank" className="icons" rel="noreferrer">
          <LinkedinLogo />
        </a>
        <a href="mailto:duhnunes.dev@gmail.com" className="icons">
          <EnvelopeSimple />
        </a>
      </section>
    </div>
  );
}
