import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Info from './components/Info';
import Timer from './components/Timer';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Info />
      <Timer />
      <footer style={{ textAlign: 'center', padding: '50px 20px', color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p>Day 5 • FocusFlow • 45 Days Challenge</p>
      </footer>
    </div>
  );
}

export default App;