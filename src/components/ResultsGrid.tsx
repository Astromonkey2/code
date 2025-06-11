'use client';

import React from 'react';
import { useSearch } from '@/lib/search-context';
import ResultCard, { ResultCardProps } from './ResultCard';

// Sample Data
const sampleResults: ResultCardProps[] = [
  {
    id: '1',
    title: 'Document Title One - Highlighting Keywords',
    snippet: 'This is a sample snippet for the first document. It contains several important keywords and details about the content within. The system should be able to effectively search and retrieve this. This snippet is intentionally made a bit longer to test the line-clamping functionality and ensure it works as expected across multiple lines.',
    type: 'PDF',
    author: 'Alice Wonderland'
  },
  {
    id: '2',
    title: 'Another Example Document: Analysis Report',
    snippet: 'This report provides an in-depth analysis of recent market trends, focusing on the impact of new technologies. It is a crucial piece of information for stakeholders. Click to view more details.',
    type: 'Report',
    author: 'Bob The Builder'
  },
  {
    id: '3',
    title: 'Presentation Slides - Q3 Review',
    snippet: 'Q3 review presentation slides covering performance, challenges, and future outlook. The slides are very concise and to the point, highlighting key achievements.',
    type: 'Slides',
    author: 'Carol Danvers'
  },
  {
    id: '4',
    title: 'Research Paper on AI Ethics and Governance',
    snippet: 'A comprehensive research paper exploring the ethical implications of artificial intelligence and proposing governance frameworks. This document delves into complex issues requiring careful consideration and discussion among experts and the public alike.',
    type: 'Research',
    author: 'Dr. Eva Rostova'
  }
];

export default function ResultsGrid() {
  const { query, data, isLoading, openModal } = useSearch(); // Added openModal

  // This component might not render if SearchContent itself isn't rendered due to no query.
  // This condition handles the case where the component *is* rendered but there's no active query
  // (e.g., if the query was cleared after results were shown, though SearchContent would likely unmount).
  if (!query && !isLoading) {
    // Avoid showing "No results for """ if query is empty from the start.
    // SearchContent's conditional rendering based on query should mostly handle initial state.
    return null; // Or a gentle prompt like "Enter a search term to begin."
  }

  // For this subtask, we use sampleResults. Later, this will use API data.
  const resultsToDisplay: ResultCardProps[] = sampleResults;
  // const actualResults = data?.hits || []; // Example for when API data is integrated

  return (
    <div className="w-full">
      <h2 className="text-pale_dogwood text-3xl font-semibold mb-6">
        {isLoading ? 'Searching...' : `Search Results for "${query}"`}
      </h2>

      {isLoading && (
        // Basic skeleton loader for cards
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-russian_violet/30 backdrop-blur-sm rounded-xl p-6 shadow-lg h-48 animate-pulse">
              <div className="h-6 bg-gray-500/30 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-500/30 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-500/30 rounded w-5/6 mb-2"></div>
              <div className="h-4 bg-gray-500/30 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      )}

      {!isLoading && resultsToDisplay.length > 0 && (
        <div className="flex flex-col gap-4">
          {resultsToDisplay.map((result) => (
            <ResultCard
              key={result.id}
              {...result} // Spread all props from the result object
              onView={openModal} // Use openModal directly
            />
          ))}
        </div>
      )}

      {!isLoading && resultsToDisplay.length === 0 && query && (
        <p className="text-center text-gray-400 py-8">
          No results found for "{query}". Try refining your search terms.
        </p>
      )}
    </div>
  );
}
