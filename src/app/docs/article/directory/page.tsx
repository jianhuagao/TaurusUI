import { memo } from 'react';
import Link from 'next/link';
import { getArticlesDic } from '@/service/dataService';
import AnimatedShow from '@/components/framerMotions/animatedShow';
import { geist, geistMomo } from '@/app/fonts';

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(date);
}

export default memo(async function Page() {
  const sortedArr = await getArticlesDic();

  const totalCount = sortedArr?.length || 0;
  const latestDate = sortedArr?.[0]?.pubDate ? formatDate(sortedArr[0].pubDate) : '-';

  return (
    <div className="mx-auto max-w-5xl px-4 pb-10 sm:px-6">
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/75 px-6 py-8 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.7)] backdrop-blur-xl sm:px-8 dark:border-white/15 dark:bg-black/30">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:26px_26px] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]" />
        <div className="relative z-10">
          <p className="text-xs tracking-[0.2em] text-black/50 uppercase dark:text-white/50">Blog Directory</p>
          <h1 className={`${geist.className} mt-3 text-3xl font-semibold sm:text-4xl`}>Articles & Notes</h1>
          <p className={`${geistMomo.className} mt-3 max-w-2xl text-sm text-black/65 sm:text-base dark:text-white/65`}>
            Browse all published articles about TaurusUI patterns, implementation notes, and practical UI engineering workflows.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-black/6 px-3 py-1.5 text-black/70 dark:bg-white/10 dark:text-white/70">
              {totalCount} published posts
            </span>
            <span className="rounded-full bg-black/6 px-3 py-1.5 text-black/70 dark:bg-white/10 dark:text-white/70">
              Latest: {latestDate}
            </span>
          </div>
        </div>
      </section>

      <AnimatedShow className="mt-8 flex flex-col gap-5">
        {sortedArr?.map(article => {
          const categoryArr = article.category.split(',');

          return (
            <div
              key={article.articleId}
              className="group rounded-2xl border border-black/10 bg-white/70 px-5 py-5 shadow-[0_12px_30px_-28px_rgba(15,23,42,0.9)] transition hover:border-black/20 hover:bg-white/85 dark:border-white/15 dark:bg-black/25 dark:hover:border-white/30 dark:hover:bg-black/35"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 space-y-3">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-black/55 dark:text-white/55">
                    <span>#{String(article.articleId).padStart(2, '0')}</span>
                    <span>{formatDate(article.pubDate)}</span>
                    <span>Updated {formatDate(article.lastModDate)}</span>
                  </div>
                  <Link
                    href={`/docs/article/${article.articleId}`}
                    className={`${geist.className} block text-balance text-xl leading-snug font-semibold no-underline transition group-hover:opacity-85`}
                  >
                    {article.artTitle}
                  </Link>
                  <div className="flex flex-wrap gap-2">
                    {categoryArr.map(cat => (
                      <span
                        key={cat}
                        className="rounded-full border border-black/10 bg-white/80 px-2.5 py-1 text-[11px] text-black/70 dark:border-white/15 dark:bg-white/8 dark:text-white/70"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/docs/article/${article.articleId}`}
                  className="inline-flex w-fit items-center gap-1 rounded-lg border border-black/10 bg-white/80 px-2.5 py-1.5 text-sm text-black/70 transition hover:border-black/20 hover:bg-white dark:border-white/15 dark:bg-white/8 dark:text-white/70 dark:hover:border-white/30 dark:hover:bg-white/14"
                >
                  Read
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </AnimatedShow>
    </div>
  );
});
