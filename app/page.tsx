'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts } from './data/posts';

type Category = 'all' | 'ui' | 'ux' | 'sc';

const categoryLabels: Record<Category, string> = {
  all: 'All',
  ui: 'User Interface',
  ux: 'User Experience',
  sc: 'Security',
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="container my-4">
      {/* Search Form */}
      <div className="row mb-4">
        <div className="col-12">
          <input
            type="text"
            id="search"
            className="form-control"
            placeholder="Search by article title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Category Buttons */}
      <div className="row mb-4">
        <div className="col-12">
          {(Object.keys(categoryLabels) as Category[]).map((category) => (
            <button
              key={category}
              className={`btn me-2 mb-2 ${
                selectedCategory === category ? 'btn-primary' : 'btn-secondary'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
      </div>

      {/* Post Grid */}
      <div className="row" id="post-grid">
        {filteredPosts.map((post, index) => (
          <div key={index} className="col-md-4 mb-4 post-card">
            <div className="card">
              <Link href={post.url} className="text-decoration-none">
                <img
                  src={post.image}
                  className="card-img-top"
                  alt={post.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title text-dark">{post.title}</h5>
                  <p className="card-text text-secondary">
                    Category: {capitalizeFirstLetter(post.category)}
                  </p>
                  <p className="card-text text-secondary">{post.description}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted">No results found.</p>
        </div>
      )}

      <style jsx>{`
        :global(a) {
          text-decoration: none !important;
          color: black !important;
        }
        :global(a:hover) {
          color: #007bff !important;
        }
      `}</style>
    </div>
  );
}
