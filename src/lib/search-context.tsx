'use client';
import { createContext, useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
export type Mode = 'exact'|'partial'|'semantic'|'regex';
interface Filters { author: string[]; type: string[]; date: string[]; }
interface Ctx { query: string; setQuery: (q: string)=>void; mode: Mode; setMode: (m: Mode)=>void; filters: Filters; toggleFilter: (k:keyof Filters,v:string)=>void; data:any; isLoading:boolean; }
const SearchCtx = createContext<Ctx|null>(null);
export function SearchProvider({children}:{children:React.ReactNode}){
  const [query,setQuery]=useState('');
  const [mode,setMode]=useState<Mode>('exact');
  const [filters,setFilters]=useState<Filters>({author:[],type:[],date:[]});
  const toggleFilter=(k:keyof Filters,v:string)=>setFilters(f=>{const s=new Set(f[k]);s.has(v)?s.delete(v):s.add(v);return{...f,[k]:Array.from(s)}});
  const {data,isLoading}=useQuery({queryKey:['search',query,mode,filters],enabled:!!query,queryFn:async()=>{const res=await fetch(`/api/search?q=${encodeURIComponent(query)}&mode=${mode}&filters=${encodeURIComponent(JSON.stringify(filters))}`);return res.json();},});
  return <SearchCtx.Provider value={{query,setQuery,mode,setMode,filters,toggleFilter,data,isLoading}}>{children}</SearchCtx.Provider>;
}
export const useSearch=()=>{const ctx=useContext(SearchCtx);if(!ctx)throw new Error('useSearch must be inside SearchProvider');return ctx;};
