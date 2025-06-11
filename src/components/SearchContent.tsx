'use client';
import React from 'react';import {useSearch} from '@/lib/search-context';import FilterSidebar from './FilterSidebar';import ResultsGrid from './ResultsGrid';
export default function SearchContent(){const{query}=useSearch();if(!query)return null;return(<><FilterSidebar/><ResultsGrid/></>);
}