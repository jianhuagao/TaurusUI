'use client';

import { memo, useState } from 'react';
import DarkSwitch from '../darkSwitch';
import GithubIcon from '../githubIcon';
import LogoBlock from '../logoBlock';
import Image from 'next/image';
import Link from 'next/link';

export default memo(function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-4 sm:px-6">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center rounded-2xl border border-black/10 bg-white/75 px-3 shadow-[0_12px_35px_-25px_rgba(15,23,42,0.8)] backdrop-blur-xl sm:px-5 dark:border-white/15 dark:bg-black/35">
        <LogoBlock />
        <nav className="ml-4 hidden items-center gap-1 md:flex">
          <Link
            href="/docs"
            className="rounded-lg px-3 py-1.5 text-sm text-black/65 transition hover:bg-black/5 hover:text-black dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
          >
            Docs
          </Link>
          <Link
            href="/docs/comp"
            className="rounded-lg px-3 py-1.5 text-sm text-black/65 transition hover:bg-black/5 hover:text-black dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
          >
            Components
          </Link>
          <a
            href="https://libran.jhub.space"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-black/65 transition hover:bg-black/5 hover:text-black dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <Image src="/icons/libran.svg" width={12} height={12} alt="" />
            Template
          </a>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <DarkSwitch />
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(prev => !prev)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-black/10 bg-white/70 transition hover:border-black/20 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:border-white/30 dark:hover:bg-white/10 md:hidden"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
          <div className="hidden md:block">
            <GithubIcon />
          </div>
        </div>
      </div>
      {open && (
        <div className="mx-auto mt-2 w-full max-w-7xl md:hidden">
          <div className="rounded-2xl border border-black/10 bg-white/90 p-2 shadow-[0_20px_40px_-30px_rgba(15,23,42,0.8)] backdrop-blur-xl dark:border-white/15 dark:bg-black/60">
            <Link
              href="/docs"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm text-black/75 transition hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
            >
              Docs
            </Link>
            <Link
              href="/docs/comp"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-lg px-3 py-2 text-sm text-black/75 transition hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
            >
              Components
            </Link>
            <a
              href="https://libran.jhub.space"
              target="_blank"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-black/75 transition hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
            >
              <Image src="/icons/libran.svg" width={12} height={12} alt="" />
              Template
            </a>
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
    </header>
  );
});
