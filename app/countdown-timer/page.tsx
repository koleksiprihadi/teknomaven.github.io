'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CountdownTimerPage() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            playSound();
            alert('Time is up!');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, timeLeft]);

  const playSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBix+zPDZjzgKHGu58+SXVxwJN5Pj9ctzLwUsg9Twzn0vBSd1xO/fjj8KF2S36+mcUxsKTKXh8bllHgg');
    audio.play().catch(() => {});
  };

  const startTimer = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    if (totalSeconds > 0) {
      setTimeLeft(totalSeconds);
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
        <Link href="/" className="btn btn-sm btn-outline-secondary mb-3">
          ← Back to Home
        </Link>
        <h2 className="text-center mb-4">Countdown Timer</h2>

        {!isRunning && timeLeft === 0 ? (
          <div>
            <div className="row mb-3">
              <div className="col-4">
                <label className="form-label">Hours</label>
                <input
                  type="number"
                  className="form-control"
                  value={hours}
                  onChange={(e) => setHours(Math.max(0, parseInt(e.target.value) || 0))}
                  min="0"
                />
              </div>
              <div className="col-4">
                <label className="form-label">Minutes</label>
                <input
                  type="number"
                  className="form-control"
                  value={minutes}
                  onChange={(e) => setMinutes(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
                  min="0"
                  max="59"
                />
              </div>
              <div className="col-4">
                <label className="form-label">Seconds</label>
                <input
                  type="number"
                  className="form-control"
                  value={seconds}
                  onChange={(e) => setSeconds(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
                  min="0"
                  max="59"
                />
              </div>
            </div>
            <button onClick={startTimer} className="btn btn-primary w-100">
              Start Timer
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-4">
              <h1 className="display-1">{formatTime(timeLeft)}</h1>
            </div>
            <button onClick={resetTimer} className="btn btn-danger w-100">
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
