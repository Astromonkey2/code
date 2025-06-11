'use client';
import React, { useState } from 'react';

// SVG Icons (can be moved to separate components later if preferred)
const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-indian_red">
    <path d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601l.247.033a.25.25 0 00.228-.228l-.033-.247A11.953 11.953 0 0010 0a11.953 11.953 0 00-7.566 1.16L2.19 1.39a.25.25 0 00-.227.228l.033.247zM6.25 4.5A.75.75 0 005.5 5.25v3.242a.75.75 0 00.22.53l3.25 3.25a.75.75 0 001.06 0l3.25-3.25a.75.75 0 00.22-.53V5.25a.75.75 0 00-.75-.75h-7.5zM10 2.25a.75.75 0 01.75.75v1.559l4.06 3.702a.75.75 0 01-.01 1.186l-.001.001-1.07 1.07a.75.75 0 01-1.06 0l-.001-.001L10 8.382l-2.717 2.47a.75.75 0 01-1.06 0l-1.07-1.07a.75.75 0 01-.011-1.185l4.06-3.703V3a.75.75 0 01.75-.75z"/>
  </svg>
);

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 text-pale_dogwood transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>
);

const CheckboxTickIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-150">
    <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
  </svg>
);

export default function FilterSidebar() {
  const [authorOpen, setAuthorOpen] = useState(true);
  // const [typeOpen, setTypeOpen] = useState(true); // For future sections
  // const [dateOpen, setDateOpen] = useState(true); // For future sections

  const DUMMY_AUTHORS = ['Author Name 1', 'Author Name 2', 'Another Author'];
  // In a real app, these would come from props or context, along with filter state and handlers

  return (
    <div className="bg-pale_dogwood/10 backdrop-blur-md p-6 rounded-2xl">
      {/* Title Section */}
      <div className="flex items-center gap-2 mb-4">
        <FilterIcon />
        <h2 className="text-lg font-semibold text-pale_dogwood">Filters</h2>
      </div>

      {/* Author Section */}
      <div className="mb-4">
        <button
          onClick={() => setAuthorOpen(!authorOpen)}
          className="flex justify-between items-center w-full py-2 text-left text-pale_dogwood font-medium hover:opacity-80 transition-opacity"
          aria-expanded={authorOpen}
          aria-controls="author-filter-content" // For accessibility
        >
          <span>Author</span>
          <ChevronDownIcon isOpen={authorOpen} />
        </button>
        {authorOpen && (
          <div id="author-filter-content" className="mt-2 space-y-2 pl-2">
            {DUMMY_AUTHORS.map(author => (
              <label key={author} className="flex items-center space-x-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  // checked={...} // Manage checked state based on actual filters
                  // onChange={...} // Handle filter change
                />
                <div className="w-5 h-5 rounded-full border-2 border-pale_dogwood group-hover:border-indian_red flex items-center justify-center peer-checked:bg-indian_red peer-checked:border-indian_red shrink-0 transition-colors duration-150">
                  <CheckboxTickIcon />
                </div>
                <span className="text-sm text-pale_dogwood group-hover:text-indian_red/80 peer-checked:font-semibold peer-checked:text-indian_red transition-colors duration-150">{author}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Placeholder for Type Section (similar structure) */}
      {/* <div className="mb-4"> ... </div> */}

      {/* Placeholder for Date Range Section (similar structure) */}
      {/* <div className="mb-4"> ... </div> */}
    </div>
  );
}
