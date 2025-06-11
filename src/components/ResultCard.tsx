'use client';
import React from 'react';

export interface ResultCardProps { // Added export
  id: string; // Added id for key prop if mapping
  title: string;
  snippet: string;
  type: string;
  author: string;
  onView?: (id: string) => void; // For click action -> open modal, pass id
}

// Placeholder SVGs - consider moving to a dedicated icons file if used elsewhere
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
    <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
  </svg>
);

const CommentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1H4a1 1 0 00-1 1v5a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

const ResultCard: React.FC<ResultCardProps> = ({ id, title, snippet, type, author, onView }) => {

  const handleCardClick = () => {
    if (onView) {
      onView(id);
    }
  };

  const cardBaseClasses = "group bg-russian_violet/50 backdrop-blur-md border border-russian_violet-600 hover:border-russian_violet-400 rounded-xl p-6 shadow-lg hover:shadow-glow transition-all duration-300 ease-in-out hover:scale-[1.02]";

  const cardContent = (
    <>
      <h3 className="text-light font-bold group-hover:bg-gradient-to-r group-hover:from-indian_red group-hover:to-indigo group-hover:text-transparent group-hover:bg-clip-text mb-2 text-xl">
        {title}
      </h3>
      <p className="text-gray-300 line-clamp-3 mb-4 text-sm">
        {snippet}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 text-xs rounded-full bg-indian_red text-light font-medium">
          {type}
        </span>
        <span className="px-3 py-1 text-xs rounded-full bg-indigo text-light font-medium">
          {author}
        </span>
      </div>
      <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-russian_violet-700/50"> {/* Added mt-auto, pt-4, border-t */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log('View icon clicked for card:', id);
            // Potentially a different action than card click, or trigger card click
            if (onView) onView(id); // Example: icon click also triggers onView
          }}
          className="text-light hover:text-indian_red cursor-pointer transition-colors duration-150"
          aria-label="View details"
        >
          <EyeIcon />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log('Comment icon clicked for card:', id);
          }}
          className="text-light hover:text-indian_red cursor-pointer transition-colors duration-150"
          aria-label="Comment"
        >
          <CommentIcon />
        </button>
      </div>
    </>
  );

  if (onView) {
    return (
      <button
        onClick={handleCardClick}
        className={`${cardBaseClasses} flex flex-col w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indian_red`} // Added focus-visible
        aria-label={`View details for ${title}`}
      >
        {cardContent}
      </button>
    );
  }

  return (
    <div className={`${cardBaseClasses} flex flex-col`}> {/* Added flex flex-col */}
      {cardContent}
    </div>
  );
};

export default ResultCard;
