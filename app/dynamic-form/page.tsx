'use client';

import { useState } from 'react';
import Link from 'next/link';

interface HobbyInput {
  id: number;
  value: string;
}

export default function DynamicFormPage() {
  const [name, setName] = useState('');
  const [hobbies, setHobbies] = useState<HobbyInput[]>([{ id: 1, value: '' }]);

  const addHobby = () => {
    setHobbies([...hobbies, { id: Date.now(), value: '' }]);
  };

  const removeHobby = (id: number) => {
    setHobbies(hobbies.filter((hobby) => hobby.id !== id));
  };

  const updateHobby = (id: number, value: string) => {
    setHobbies(hobbies.map((hobby) => (hobby.id === id ? { ...hobby, value } : hobby)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      name,
      hobbies: hobbies.map((h) => h.value).filter((v) => v.trim()),
    };
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
        <Link href="/" className="btn btn-sm btn-outline-secondary mb-3">
          ← Back to Home
        </Link>
        <h2 className="text-center mb-4">Dynamic Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Hobbies</label>
            {hobbies.map((hobby, index) => (
              <div key={hobby.id} className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder={`Hobby ${index + 1}`}
                  value={hobby.value}
                  onChange={(e) => updateHobby(hobby.id, e.target.value)}
                />
                {hobbies.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeHobby(hobby.id)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button type="button" className="btn btn-outline-primary btn-sm" onClick={addHobby}>
              + Add Hobby
            </button>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
