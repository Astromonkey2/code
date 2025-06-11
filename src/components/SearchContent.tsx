'use client';
import React from 'react';
import FilterSidebar from './FilterSidebar';
import ResultsGrid from './ResultsGrid';

export default function SearchContent() {
  // const { query } = useSearch(); // This logic is in page.tsx
  // if (!query || query.trim() === '') return null; // This logic is in page.tsx

  return (
    <div className="bg-pale_dogwood text-gray-900 -mt-16 rounded-t-xl p-6 z-10 relative grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 min-h-[calc(100vh-4rem)]"> {/* Added min-h for testing scroll */}
      {/* Column 1: Filter Sidebar */}
      <div>
        <FilterSidebar />
      </div>

      {/* Column 2: Results Grid */}
      <div>
        <ResultsGrid />
      </div>
    </div>
  );
}
