'use client';
import React, { useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { X, Download, Share2, FileText } from 'lucide-react';

export default function DetailDrawer({ doc, open, onOpenChange }: { doc:any; open:boolean; onOpenChange:(b:boolean)=>void }) {
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);
  if (!open) return null;
  return (
    <Dialog open={open} onClose={() => onOpenChange(false)} className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-full w-full max-w-4xl bg-light/90 backdrop-blur-lg rounded-l-2xl p-6 overflow-auto">
        <button onClick={() => onOpenChange(false)} className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg">
          <X size={20} />
        </button>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <FileText size={24} className="text-orange-400 bg-orange-500/20 p-2 rounded-lg" />
            <div>
              <h3 className="text-xl font-bold text-dark">{doc.filename}</h3>
              <p className="text-sm text-gray-600">{doc.type} • {doc.author}</p>
            </div>
          </div>
          <div className="flex gap-2 text-gray-600">
            <button className="p-2 hover:bg-gray-200 rounded-lg"><Download size={20} /></button>
            <button className="p-2 hover:bg-gray-200 rounded-lg"><Share2 size={20} /></button>
          </div>
        </div>
        <div className="p-6 bg-mid/20 rounded-lg text-sm text-gray-700 text-center">
          <FileText size={64} className="mx-auto mb-4 text-gray-400" />
          <p>Preview placeholder</p>
          <p className="mt-2 text-gray-600">{doc.snippet}</p>
        </div>
      </div>
    </Dialog>
  );
}
