import { memo } from 'react';
import DarkSwitch from '../darkSwitch';
import GithubIcon from '../githubIcon';
import LogoBlock from '../logoBlock';
import Image from 'next/image';
import Link from 'next/link';
import MobileHeaderMenu from './mobileHeaderMenu';

export default memo(function Header() {
  return (
    <header className="sticky top-0 z-50 px-3 pt-4 sm:px-6">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center rounded-2xl border border-black/10 bg-white/75 px-3 shadow-[0_12px_35px_-25px_rgba(15,23,42,0.8)] backdrop-blur-none sm:px-5 sm:backdrop-blur-xl dark:border-white/15 dark:bg-black/35">
        <LogoBlock />
        <nav className="ml-4 hidden items-center gap-1 md:flex">
          <Link
            href="/docs/comp/general/button"
            className="rounded-lg px-3 py-1.5 text-sm text-black/65 transition hover:bg-black/5 hover:text-black dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
          >
            Components
          </Link>
          <Link
            href="/docs/article/directory"
            className="rounded-lg px-3 py-1.5 text-sm text-black/65 transition hover:bg-black/5 hover:text-black dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
          >
            Article
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
          <MobileHeaderMenu />
          <div className="hidden md:block">
            <GithubIcon />
          </div>
        </div>
      </div>
    </header>
  );
});
