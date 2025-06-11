'use client';
import React,{useState}from 'react';import {motion}from 'framer-motion';import {Eye,MessageCircle,FileText}from 'lucide-react';import DetailDrawer from './DetailDrawer';
export default function ResultCard({doc}:{doc:any}) {
  const [open, setOpen] = useState(false);
  return (
	<>
	  <motion.div onClick={() => setOpen(true)} whileHover={{ scale: 1.02 }} className="card cursor-pointer group">
		<div className="flex items-start justify-between mb-4">
		  <div className="flex items-center gap-3">
			<FileText size={20} className="text-orange-400 bg-orange-500/20 p-2 rounded-lg"/>
			<div>
			  <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 truncate">{doc.filename}</h3>
			  <p className="text-sm text-gray-300">{doc.type} • {doc.author}</p>
			</div>
		  </div>
		</div>
		<p className="...">...</p>
	  </motion.div>
	  <DetailDrawer open={open} onOpenChange={setOpen} doc={doc}/>
	</>
  );
}


