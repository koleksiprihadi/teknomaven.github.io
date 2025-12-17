'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const codeText = `function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("World");`;

export default function TypingAnimationPage() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isTyping && currentIndex < codeText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + codeText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (currentIndex >= codeText.length) {
      setIsTyping(false);
    }
  }, [isTyping, currentIndex]);

  const startTyping = () => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsTyping(true);
  };

  const resetTyping = () => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsTyping(false);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '700px', width: '100%' }}>
        <Link href="/" className="btn btn-sm btn-outline-secondary mb-3">
          ← Back to Home
        </Link>
        <h2 className="text-center mb-4">Typing Animation</h2>

        <pre className="border p-3 bg-dark text-light rounded" style={{ minHeight: '200px' }}>
          <code>{displayedText}</code>
          {isTyping && <span className="cursor">|</span>}
        </pre>

        <div className="d-flex gap-2 mt-3">
          <button onClick={startTyping} className="btn btn-primary flex-fill" disabled={isTyping}>
            Start Typing
          </button>
          <button onClick={resetTyping} className="btn btn-secondary flex-fill">
            Reset
          </button>
        </div>

        <style jsx>{`
          .cursor {
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0%,
            50% {
              opacity: 1;
            }
            51%,
            100% {
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
