'use client';
import React, { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { useSearch, Mode } from '../lib/search-context';

export default function HeroSearch() {
  const { setQuery, mode, setMode } = useSearch();
  const [input, setInput] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setQuery(input.trim());
  };

  return (
    <motion.form onSubmit={submit}
                 className="flex flex-col sm:flex-row items-center gap-4 sm:max-w-2xl sm:mx-auto"
                 initial="hidden" animate="visible"
                 variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="relative flex-1 w-full">
        <input value={input} onChange={e => setInput(e.target.value)}
               placeholder="Search documents…"
               className="search-input" // Styles updated in globals.css
        />
        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">🔍︎</span>
      </motion.div>

      <motion.select variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                     value={mode} onChange={e => setMode(e.target.value as Mode)}
                     className="bg-indigo-600 text-light px-6 h-14 flex items-center rounded-pill border-transparent hover:border-brand-light">
        <option value="exact">Exact</option>
        <option value="partial">Partial</option>
        <option value="semantic">Semantic</option>
        <option value="regex">Regex</option>
      </motion.select>

      <motion.button variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                     type="submit" className="btn-primary">
        Search
      </motion.button>
    </motion.form>
  );
}
