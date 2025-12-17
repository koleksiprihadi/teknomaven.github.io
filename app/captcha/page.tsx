'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function CaptchaPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [captchaInput, setCaptchaInput] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');

  const getRandomFont = () => {
    const fonts = ['Arial', 'Courier', 'Georgia', 'Times New Roman', 'Verdana'];
    return fonts[Math.floor(Math.random() * fonts.length)];
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateCaptcha = () => {
    let captcha = '';
    for (let i = 0; i < 4; i++) {
      captcha += Math.floor(Math.random() * 10);
    }
    return captcha;
  };

  const drawCaptcha = (captcha: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set background
    ctx.fillStyle = '#f1f1f1';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw CAPTCHA text with random fonts and styles
    for (let i = 0; i < captcha.length; i++) {
      const x = 20 + i * 25;
      const y = 40;
      ctx.font = `bold 30px ${getRandomFont()}`;
      ctx.fillStyle = getRandomColor();
      ctx.fillText(captcha[i], x, y);
    }
  };

  const reloadCaptcha = () => {
    const newCaptcha = generateCaptcha();
    setGeneratedCaptcha(newCaptcha);
    drawCaptcha(newCaptcha);
    setMessage('');
    setCaptchaInput('');
  };

  const handleSubmit = () => {
    if (captchaInput === generatedCaptcha) {
      setMessage('CAPTCHA is correct');
      setMessageColor('green');
    } else {
      setMessage('CAPTCHA is incorrect, try again');
      setMessageColor('red');
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    reloadCaptcha();
    alert('CAPTCHA regenerated due to attempted download!');
  };

  useEffect(() => {
    const newCaptcha = generateCaptcha();
    setGeneratedCaptcha(newCaptcha);
    drawCaptcha(newCaptcha);
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="captcha-container card p-4 shadow-sm" style={{ maxWidth: '400px' }}>
        <Link href="/" className="btn btn-sm btn-outline-secondary mb-3">
          ← Back to Home
        </Link>
        <h2 className="text-center mb-4">CAPTCHA Verification</h2>
        <canvas
          ref={canvasRef}
          width="150"
          height="50"
          className="border mb-3"
          onContextMenu={handleContextMenu}
        />
        <div className="d-flex justify-content-between mb-3">
          <button onClick={reloadCaptcha} className="btn btn-outline-primary">
            Reload CAPTCHA
          </button>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter CAPTCHA"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </div>
        {message && (
          <p className="text-center mt-3" style={{ color: messageColor }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
