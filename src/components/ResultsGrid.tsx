'use client';
import React from 'react';import {useSearch} from '@/lib/search-context';import ResultCard from './ResultCard';
export default function ResultsGrid(){const{data,isLoading}=useSearch();if(isLoading)return(<div className="space-y-6">{Array(6).fill(0).map((_,i)=><div key={i}className="h-28 rounded-xl shimmer"/>)}</div>);const hits=data?.hits||[];if(!hits.length)return(<div className="col-span-full text-center text-gray-500">No results found.</div>);return(<div className="space-y-6">{hits.map((doc:any)=><ResultCard key={doc.id}doc={doc}/> )}</div>);
}



