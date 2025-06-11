'use client';
import Link from 'next/link';

export default function TopNav() {
  return (
    <nav className="relative z-20 flex items-center justify-between h-14 md:h-16 px-4 md:px-8 bg-transparent">
      <div className="bg-pale_dogwood shadow-md p-1 rounded-md">
        <Link href="/">
          <img
            src="/indium-logo.jpeg"
            alt="Indium.tech"
            width={160}
            height={40}
            className="object-contain"
          />
        </Link>
      </div>
      {/* TODO: Implement hamburger menu for mobile navigation (Spec 6). Current links will be part of it. */}
      <div className="hidden md:flex space-x-8 text-light font-semibold text-base">
        <Link href="/" className="hover:underline decoration-indian_red">
          Search
        </Link>
        <Link href="/upload" className="hover:underline decoration-indian_red">
          Upload Files
        </Link>
      </div>
    </nav>
  );
}




