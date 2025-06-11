'use client';
import React from 'react';
import TopNav from '@/components/TopNav';
import AnimatedBackground from '@/components/AnimatedBackground';
import HeroTitle from '@/components/HeroTitle';
import HeroSearch from '@/components/HeroSearch';
import SearchContent from '@/components/SearchContent';
import { SearchProvider, useSearch } from '@/lib/search-context';
import DocumentModal from '@/components/DocumentModal'; // Import DocumentModal
import { AnimatePresence } from 'framer-motion'; // Import AnimatePresence

// Component for the main page layout, excluding SearchProvider
function PageLayout() {
  const { query, isModalOpen } = useSearch(); // Get query and isModalOpen from context

  return (
    <>
      <AnimatedBackground />
      {/* This div is the main hero container */}
      <div className="rounded-b-[3rem] overflow-hidden relative">
        <TopNav />
        {/* This div is the content area within the hero */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-24 pt-24 pb-16 text-center">
          <HeroTitle />
          <HeroSearch />
        </div>
      </div>
      {query && query.trim() !== '' && <SearchContent />}

      <AnimatePresence>
        {isModalOpen && <DocumentModal />}
      </AnimatePresence>
    </>
  );
}

export default function SearchPage() {
  return (
    <SearchProvider>
      <PageLayout />
    </SearchProvider>
  );
}


