import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" style={{ textAlign: 'center' }}>
      <div className="container">
        <div style={{ marginBottom: '20px', opacity: 0.8, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
          Productivity Redefined
        </div>
        <h1 style={{ fontSize: '5rem', marginBottom: '20px', lineHeight: '1.1' }}>
          Master Your <br />
          <span className="gradient-text">Focus Flow.</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 40px auto' }}>
          Stop multitasking. Start achieving. <br />
          Use the proven Pomodoro technique to work deeply and rest intentionally.
        </p>
        
        <a href="#app">
          <button className="btn-primary">Start Focusing Now</button>
        </a>

        <div style={{ marginTop: '80px', animation: 'bounce 2s infinite' }}>
          <ArrowDown color="var(--text-muted)" />
        </div>
      </div>
    </section>
  );
};

export default Hero;