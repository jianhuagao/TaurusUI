import { memo } from 'react';
import DarkSwitch from '../darkSwitch';
import GithubIcon from '../githubIcon';
import LogoBlock from '../logoBlock';
import Image from 'next/image';
import Link from 'next/link';
import MobileHeaderMenu from './mobileHeaderMenu';
import { headerNavItems } from './navConfig';

export default memo(function Header() {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center rounded-2xl border border-black/10 bg-white/80 px-3 shadow-[0_8px_24px_-20px_rgba(15,23,42,0.55)] backdrop-blur-none sm:px-5 sm:backdrop-blur-xl dark:border-white/15 dark:bg-black/38 dark:shadow-[0_8px_26px_-18px_rgba(0,0,0,0.65)]">
        <LogoBlock />
        <nav className="ml-4 hidden items-center gap-1 rounded-xl bg-black/3 p-1 md:flex dark:bg-white/5">
          {headerNavItems.map(item =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-black/65 transition hover:bg-black/5 hover:text-black dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.iconSrc && <Image src={item.iconSrc} width={10} height={10} alt="" />}
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-1.5 text-sm text-black/65 transition hover:bg-black/5 hover:text-black dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <DarkSwitch />
          <MobileHeaderMenu />
          <div className="hidden md:block">
            <GithubIcon />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-2 hidden w-full max-w-7xl items-center justify-between rounded-xl border border-black/8 bg-white/70 px-4 py-2 text-xs text-black/60 backdrop-blur-xl md:flex dark:border-white/10 dark:bg-black/30 dark:text-white/60">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-emerald-500/90" />
          <span>Copy-ready component snippets for Tailwind projects</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/docs/comp/general/button"
            className="rounded-md px-2 py-1 transition hover:bg-black/5 dark:hover:bg-white/10"
          >
            Browse Components
          </Link>
          <Link
            href="/docs/article/directory"
            className="rounded-md px-2 py-1 transition hover:bg-black/5 dark:hover:bg-white/10"
          >
            Read Articles
          </Link>
          <a
            href="https://play.jhub.space"
            target="_blank"
            className="rounded-md px-2 py-1 transition hover:bg-black/5 dark:hover:bg-white/10"
          >
            Playground
          </a>
        </div>
      </div>
    </header>
  );
});
