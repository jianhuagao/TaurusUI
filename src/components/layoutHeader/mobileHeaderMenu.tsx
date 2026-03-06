'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { headerNavItems } from './navConfig';

export default function MobileHeaderMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
        className="inline-flex size-10 items-center justify-center rounded-lg border border-black/10 bg-white/70 transition hover:border-black/20 hover:bg-white md:hidden dark:border-white/15 dark:bg-white/5 dark:hover:border-white/30 dark:hover:bg-white/10"
      >
        <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-2 w-64">
          <div className="rounded-2xl border border-black/10 bg-white/92 p-2 shadow-[0_14px_30px_-22px_rgba(15,23,42,0.75)] backdrop-blur-xl dark:border-white/15 dark:bg-black/62">
            {headerNavItems.map(item =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  onClick={() => setOpen(false)}
                  className="mt-1 flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-black/75 transition first:mt-0 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  {item.iconSrc && <Image src={item.iconSrc} width={12} height={12} alt="" />}
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-lg px-3 py-2 text-sm text-black/75 transition first:mt-0 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href="https://github.com/jianhuagao/TaurusUI"
              target="_blank"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-lg px-3 py-2 text-sm text-black/75 transition hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
