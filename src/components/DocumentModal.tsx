'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // AnimatePresence will be used in the parent
import { useSearch } from '@/lib/search-context';

// Placeholder SVGs
const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-700">
    <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-7.364a.75.75 0 00-.22-.53l-2.864-2.864A.75.75 0 0013.364 4H5.25zM12.75 5.136l1.114 1.114H12.75V5.136zM5.25 4.5h7V6h1.5V5.25c0-.414-.168-.79-.465-1.06l-2.864-2.865A1.493 1.493 0 009.136 1H5.25A2.25 2.25 0 003 3.25v11.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75V7.5h-2.25A2.25 2.25 0 0112.5 5.25V3H5.25A.75.75 0 014.5 3.75v-.5A.75.75 0 015.25 3z" />
  </svg>
);

const CloseXIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-700">
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
);

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } } // Delay exit slightly for panel to animate out
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 50 }, // Added y for a slight upward motion
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.95, y: 30, transition: { duration: 0.2, ease: 'easeIn' } } // Slight downward motion on exit
};

export default function DocumentModal() {
  const { isModalOpen, closeModal, modalContentId } = useSearch();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to ensure scroll is restored if component unmounts unexpectedly
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  if (!isModalOpen) {
    return null; // AnimatePresence in parent will handle exit animation
  }

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-40 bg-russian_violet/60 backdrop-blur-md"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={closeModal}
      />

      {/* Modal Panel Wrapper (for centering) */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          className="w-4/5 max-w-4xl max-h-[90vh] bg-pale_dogwood/90 backdrop-blur-lg rounded-xl shadow-2xl flex flex-col overflow-hidden"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on panel
          role="dialog"
          aria-modal="true"
          aria-labelledby="document-modal-title"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-400/50 shrink-0">
            <div className="flex items-center gap-2">
              <FileIcon />
              <span id="document-modal-title" className="text-lg font-semibold text-gray-800">
                {modalContentId ? `Document: ${modalContentId}` : 'Document'}
              </span>
            </div>
            <button
              onClick={closeModal}
              className="p-1 rounded-full hover:bg-gray-500/20 transition-colors"
              aria-label="Close document modal"
            >
              <CloseXIcon />
            </button>
          </div>

          {/* Body */}
          <div className="flex-grow p-6 overflow-y-auto text-gray-700">
            <p>Preview for document ID: <strong>{modalContentId}</strong> would be here.</p>
            <p>This area will eventually display the document content, such as a PDF viewer or an iframe rendering the document.</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-400/50 shrink-0">
            <p className="text-sm text-gray-600 text-center">Document actions or metadata could appear here.</p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
