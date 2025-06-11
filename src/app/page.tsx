'use client';
import React from 'react';
import TopNav from '@/components/TopNav';
import AnimatedBackground from '@/components/AnimatedBackground';
import HeroTitle from '@/components/HeroTitle';
import HeroSearch from '@/components/HeroSearch';
import SearchContent from '@/components/SearchContent';
import { SearchProvider } from '@/lib/search-context';
export default function SearchPage() {
  return (
    <SearchProvider>
      <AnimatedBackground />
      <div className="bg-dark text-light rounded-b-[3rem] overflow-hidden relative">
        <TopNav />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-20 text-center">
          <HeroTitle />
          <HeroSearch />
        </div>
      </div>
      <SearchContent />
    </SearchProvider>
  );
}


