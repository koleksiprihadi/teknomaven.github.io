'use client';

import { useState } from 'react';
import Link from 'next/link';

const emailDomains = [
  'gmail.com',
  'yahoo.com',
  'outlook.com',
  'hotmail.com',
  'icloud.com',
  'protonmail.com',
];

export default function EmailAutocompletePage() {
  const [email, setEmail] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleEmailChange = (value: string) => {
    setEmail(value);

    if (value.includes('@')) {
      const [username, domain] = value.split('@');
      if (domain && domain.length > 0) {
        const filteredDomains = emailDomains
          .filter((d) => d.startsWith(domain.toLowerCase()))
          .map((d) => `${username}@${d}`);
        setSuggestions(filteredDomains);
      } else {
        setSuggestions(emailDomains.map((d) => `${username}@${d}`));
      }
    } else {
      setSuggestions([]);
    }
  };

  const selectSuggestion = (suggestion: string) => {
    setEmail(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <Link href="/" className="btn btn-sm btn-outline-secondary mb-3">
          ← Back to Home
        </Link>
        <h2 className="text-center mb-4">Email Autocomplete</h2>
        <div className="mb-3 position-relative">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            placeholder="Enter your email"
          />
          {suggestions.length > 0 && (
            <ul className="list-group position-absolute w-100" style={{ zIndex: 1000 }}>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="list-group-item list-group-item-action"
                  style={{ cursor: 'pointer' }}
                  onClick={() => selectSuggestion(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="btn btn-primary w-100">Submit</button>
      </div>
    </div>
  );
}
