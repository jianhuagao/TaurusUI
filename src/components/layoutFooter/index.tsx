import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default memo(function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 border-t border-black/10 px-3 pb-6 sm:px-6 dark:border-white/10">
      <div className="mx-auto mt-8 w-full max-w-7xl overflow-hidden rounded-3xl border border-black/10 bg-white/75 backdrop-blur-xl dark:border-white/15 dark:bg-black/35">
        <div className="grid gap-8 border-b border-black/10 px-6 py-8 sm:px-8 lg:grid-cols-[1.2fr_1fr] dark:border-white/10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[11px] tracking-[0.16em] text-black/60 uppercase dark:border-white/20 dark:bg-white/5 dark:text-white/60">
              TaurusUI Library
            </div>
            <h2 className="max-w-xl text-2xl leading-tight font-semibold text-black/90 sm:text-3xl dark:text-white/90">
              Find a component, copy the code, and ship your interface faster.
            </h2>
            <p className="max-w-xl text-sm text-black/65 dark:text-white/65">
              No package publish flow, no installation steps. TaurusUI is designed as a practical component gallery for direct
              reuse.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/docs"
                className="rounded-lg bg-black px-3.5 py-2 text-sm text-white transition hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/85"
              >
                Browse Docs
              </Link>
              <a
                href="https://play.jhub.space"
                target="_blank"
                className="rounded-lg border border-black/15 bg-white/70 px-3.5 py-2 text-sm text-black/75 transition hover:border-black/25 hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white/75 dark:hover:border-white/30 dark:hover:bg-white/10"
              >
                Open Playground
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-3">
            <div>
              <p className="mb-3 text-xs tracking-[0.16em] text-black/50 uppercase dark:text-white/50">Product</p>
              <div className="space-y-2 text-black/70 dark:text-white/70">
                <Link href="/docs" className="block hover:underline">
                  Docs
                </Link>
                <Link href="/docs/comp" className="block hover:underline">
                  Components
                </Link>
                <a href="https://libran.jhub.space" target="_blank" className="block hover:underline">
                  Template
                </a>
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs tracking-[0.16em] text-black/50 uppercase dark:text-white/50">Resources</p>
              <div className="space-y-2 text-black/70 dark:text-white/70">
                <a href="https://nextjs.org" target="_blank" className="block hover:underline">
                  Next.js
                </a>
                <a href="https://tailwindcss.com" target="_blank" className="block hover:underline">
                  TailwindCSS
                </a>
                <a href="https://motion.dev" target="_blank" className="block hover:underline">
                  Motion
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-3 text-xs tracking-[0.16em] text-black/50 uppercase dark:text-white/50">Community</p>
              <div className="space-y-2 text-black/70 dark:text-white/70">
                <a href="https://github.com/jianhuagao/TaurusUI" target="_blank" className="block hover:underline">
                  GitHub Repo
                </a>
                <a href="https://github.com/jianhuagao" target="_blank" className="block hover:underline">
                  Author
                </a>
                <a href="mailto:jianhua.gao@foxmail.com" className="block hover:underline">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-6 py-4 text-xs text-black/55 sm:flex-row sm:items-center sm:justify-between sm:px-8 dark:text-white/55">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" className="opacity-70" width={16} height={16} alt="" />
            <span>TaurusUI</span>
            <span>v2.2.0 @{process.env.NEXT_PUBLIC_BUILD_VERSION}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span>© {year} TaurusUI</span>
            <span>/</span>
            <a
              href="https://github.com/jianhuagao/TaurusUI?tab=MIT-1-ov-file#readme"
              target="_blank"
              className="hover:underline"
            >
              MIT License
            </a>
            <span>/</span>
            <a href="https://github.com/jianhuagao" target="_blank" className="hover:underline">
              Jianhuagao
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
