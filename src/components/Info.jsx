import React from 'react';
import { Brain, Coffee, Zap } from 'lucide-react';

const Info = () => {
  const steps = [
    { icon: <Brain size={32} color="var(--focus)"/>, title: "25 Min Focus", desc: "Eliminate distractions and work on one task." },
    { icon: <Coffee size={32} color="var(--break)"/>, title: "5 Min Break", desc: "Step away. Stretch. Refresh your mind." },
    { icon: <Zap size={32} color="#f1c40f"/>, title: "Repeat Loop", desc: "After 4 cycles, take a longer 15-minute break." }
  ];

  return (
    <section id="info" style={{ minHeight: 'auto', padding: '100px 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>How It Works</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {steps.map((step, index) => (
            <div key={index} className="glass-card" style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '20px' }}>{step.icon}</div>
              <h3 style={{ marginBottom: '10px' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;