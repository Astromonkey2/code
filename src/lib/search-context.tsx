'use client';
import { createContext, useContext, useState, ReactNode } from 'react'; // Added ReactNode
import { useQuery } from '@tanstack/react-query';

export type Mode = 'exact'|'partial'|'semantic'|'regex'; // Ensure this is exported if not already by usage elsewhere
interface Filters { author: string[]; type: string[]; date: string[]; } // Ensure this is exported if needed elsewhere

interface Ctx {
  query: string;
  setQuery: (q: string) => void;
  mode: Mode;
  setMode: (m: Mode) => void;
  filters: Filters;
  toggleFilter: (k: keyof Filters, v: string) => void;
  data: any;
  isLoading: boolean;

  isModalOpen: boolean;
  modalContentId: string | null;
  openModal: (id: string) => void;
  closeModal: () => void;
}

const SearchCtx = createContext<Ctx | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) { // Used ReactNode explicitly
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState<Mode>('exact');
  const [filters, setFilters] = useState<Filters>({ author: [], type: [], date: [] });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContentId, setModalContentId] = useState<string | null>(null);

  const toggleFilter = (k: keyof Filters, v: string) => setFilters(f => {
    const s = new Set(f[k]);
    s.has(v) ? s.delete(v) : s.add(v);
    return { ...f, [k]: Array.from(s) };
  });

  const { data, isLoading } = useQuery({
    queryKey: ['search', query, mode, filters],
    enabled: !!query,
    queryFn: async () => {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&mode=${mode}&filters=${encodeURIComponent(JSON.stringify(filters))}`);
      if (!res.ok) {
        // Consider how to handle errors, maybe set an error state in context
        console.error('API Error:', res.status, await res.text());
        throw new Error('Search API request failed');
      }
      return res.json();
    },
  });

  const openModal = (id: string) => {
    setModalContentId(id);
    setIsModalOpen(true);
    // Optional: document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContentId(null);
    // Optional: document.body.style.overflow = '';
  };

  return (
    <SearchCtx.Provider value={{
      query, setQuery,
      mode, setMode,
      filters, toggleFilter,
      data, isLoading,
      isModalOpen, modalContentId,
      openModal, closeModal
    }}>
      {children}
    </SearchCtx.Provider>
  );
}

export const useSearch = () => {
  const ctx = useContext(SearchCtx);
  if (!ctx) throw new Error('useSearch must be inside SearchProvider');
  return ctx;
};
