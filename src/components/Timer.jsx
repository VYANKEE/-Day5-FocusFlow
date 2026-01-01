import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, CheckCircle } from 'lucide-react';

const Timer = () => {
  // --- CONFIGURATION ---
  const MODES = {
    focus: { time: 25 * 60, label: 'Focus Time', color: 'var(--focus)' },
    short: { time: 5 * 60, label: 'Short Break', color: 'var(--break)' },
    long: { time: 15 * 60, label: 'Long Break', color: 'var(--long-break)' }
  };

  // --- STATE ---
  const [mode, setMode] = useState('focus');
  const [timeLeft, setTimeLeft] = useState(MODES.focus.time);
  const [isRunning, setIsRunning] = useState(false);
  
  // Persistent Session Count
  const [sessions, setSessions] = useState(() => {
    return parseInt(localStorage.getItem('focusSessions') || '0');
  });

  // --- PERSISTENCE ---
  useEffect(() => {
    localStorage.setItem('focusSessions', sessions);
  }, [sessions]);

  // --- TIMER LOGIC ---
  useEffect(() => {
    let interval = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      if (mode === 'focus') {
        setSessions((prev) => prev + 1);
      }
      alert("Timer Finished! Time to switch.");
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, mode]);

  // --- HANDLERS ---
  const switchMode = (newMode) => {
    setMode(newMode);
    setTimeLeft(MODES[newMode].time);
    setIsRunning(false);
  };

  const toggleTimer = () => setIsRunning(!isRunning);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(MODES[mode].time);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentColor = MODES[mode].color;

  return (
    <section id="app" style={{ minHeight: '100vh', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
        
        {/* Session Counter */}
        <div style={{ marginBottom: '30px', display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.1)', padding: '8px 20px', borderRadius: '30px' }}>
          <CheckCircle size={18} color="var(--focus)" />
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Completed Sessions: <strong style={{ color: 'white' }}>{sessions}</strong>
          </span>
        </div>

        {/* Main Card */}
        <div className="glass-card" style={{ borderTop: `4px solid ${currentColor}` }}>
          
          {/* Mode Switchers */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px' }}>
            {Object.keys(MODES).map((m) => (
              <button
                key={m}
                onClick={() => switchMode(m)}
                className={`mode-btn ${mode === m ? 'active' : ''}`}
                style={mode === m ? { borderColor: MODES[m].color, background: `${MODES[m].color}20` } : {}}
              >
                {MODES[m].label}
              </button>
            ))}
          </div>

          {/* Huge Timer Display */}
          <div className="timer-display" style={{ color: currentColor, textShadow: `0 0 30px ${currentColor}40` }}>
            {formatTime(timeLeft)}
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
            <button 
              onClick={toggleTimer}
              className="btn-primary"
              style={{ background: currentColor, padding: '15px 40px', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              {isRunning ? <Pause /> : <Play />}
              {isRunning ? 'Pause' : 'Start'}
            </button>

            <button 
              onClick={resetTimer}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '10px' }}
              title="Reset Timer"
            >
              <RotateCcw size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timer;