'use client';
import Link from 'next/link';
export default function TopNav(){return(<nav className="relative z-20 flex items-center justify-between px-8 py-6"><Link href="/"><img src="/indium-logo.jpeg" alt="Indium.tech" width={160} height={40} className="object-contain"/></Link><div className="flex space-x-8 text-light font-medium text-base"><Link href="/">Search</Link><Link href="/upload">Upload Files</Link></div></nav>);
}




