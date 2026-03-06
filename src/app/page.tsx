import Link from 'next/link';

import ComponentPrev from '@/components/componentPrev';
import FadeIn from '@/components/framerMotions/fadeIn';
import AnimatedShow from '@/components/framerMotions/animatedShow';
import LayoutContent from '@/components/layoutContent';
import { MenuItemProps } from '@/components/menu';
import { getComponents } from '@/service/dataService';

import { geist, geistMomo } from './fonts';

const findFirstSlug = (menuItems: MenuItemProps[]) => {
  for (const item of menuItems) {
    const slug = item.children?.find(c => c.slug)?.slug;
    if (slug) {
      return slug;
    }
  }
  return null;
};

const featureItems = [
  {
    title: 'Production Ready',
    description: 'Built for real projects with accessibility-minded patterns, practical APIs, and stable defaults.'
  },
  {
    title: 'Composable System',
    description: 'Combine primitives quickly to ship polished pages without over-designing every small interaction.'
  },
  {
    title: 'Performance Focused',
    description: 'Lean styling and animation choices keep loading smooth across desktop and mobile environments.'
  }
];

const showcaseItems = [
  {
    id: '1',
    title: 'Notification Demo',
    defaultCfg: '11-12',
    slug: 'demo',
    category: 'demo',
    wrapper: 'h-72',
    creator: '',
    interactive: true,
    componentsName: ''
  },
  {
    id: '2',
    title: 'Switch Demo',
    slug: 'demo',
    defaultCfg: '10-13',
    category: 'demo',
    wrapper: 'h-52',
    creator: '',
    interactive: true,
    componentsName: ''
  },
  {
    id: '3',
    title: 'RadioGroup Demo',
    slug: 'demo',
    category: 'demo',
    defaultCfg: '16-14',
    wrapper: 'h-80',
    creator: '',
    innerWrapper: 'px-[20%] *:flex-1 flex-row!',
    interactive: true,
    componentsName: ''
  }
];

export default async function Home() {
  const componentsByCategory = await getComponents();
  const redirect = findFirstSlug(componentsByCategory);
  const docUrl = redirect ? `/docs/comp/${redirect}` : '/docs';

  return (
    <main className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_5%,rgba(59,130,246,0.16),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(15,23,42,0.14),transparent_36%)] dark:bg-[radial-gradient(circle_at_20%_5%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(148,163,184,0.14),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(15,23,42,0.02))] dark:bg-[linear-gradient(to_bottom,transparent,rgba(148,163,184,0.05))]" />
      <LayoutContent>
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-10 sm:py-16 lg:px-16">
          <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/80 p-8 shadow-[0_20px_80px_-40px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:p-12 dark:border-white/15 dark:bg-black/35">
            <div className="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-300/15" />
            <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-300/15" />
            <AnimatedShow inViewShow childDuration={0.55} scale={0.97} className="relative z-10 flex flex-col gap-8">
              <span className="inline-flex w-fit items-center rounded-full border border-black/10 bg-white/85 px-4 py-1.5 text-xs tracking-[0.18em] text-black/70 uppercase dark:border-white/20 dark:bg-white/5 dark:text-white/70">
                TAURUS UI SYSTEM
              </span>
              <div className="max-w-4xl space-y-6">
                <h1 className={`${geist.className} text-4xl leading-tight font-semibold text-balance sm:text-5xl lg:text-6xl`}>
                  Build polished interfaces with a modern Tailwind component platform.
                </h1>
                <p
                  className={`${geistMomo.className} max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base dark:text-white/70`}
                >
                  TaurusUI gives teams a focused library of composable blocks, refined interaction patterns, and practical
                  examples that feel production-ready from the first commit.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={docUrl}
                  className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/85"
                >
                  Get Started
                </Link>
                <Link
                  href="https://github.com/jianhuagao/TaurusUI"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white/70 px-5 py-2.5 text-sm font-medium text-black/80 transition hover:border-black/25 hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white/80 dark:hover:border-white/35 dark:hover:bg-white/10"
                >
                  GitHub
                </Link>
              </div>
              <div className="grid gap-3 text-xs text-black/65 sm:grid-cols-3 dark:text-white/65">
                <div className="rounded-xl border border-black/10 bg-white/70 px-4 py-3 dark:border-white/15 dark:bg-white/5">
                  80+ polished patterns
                </div>
                <div className="rounded-xl border border-black/10 bg-white/70 px-4 py-3 dark:border-white/15 dark:bg-white/5">
                  Built on Next.js + TailwindCSS
                </div>
                <div className="rounded-xl border border-black/10 bg-white/70 px-4 py-3 dark:border-white/15 dark:bg-white/5">
                  Responsive by default
                </div>
              </div>
            </AnimatedShow>
          </section>

          <section className="grid gap-4 md:grid-cols-3">
            {featureItems.map(item => (
              <FadeIn once={true} key={item.title} offscreenY={40} className="h-full">
                <article className="h-full rounded-2xl border border-black/10 bg-white/65 p-6 shadow-[0_16px_50px_-35px_rgba(15,23,42,0.6)] backdrop-blur-md dark:border-white/15 dark:bg-white/5">
                  <h2 className={`${geist.className} text-lg font-medium`}>{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-black/65 dark:text-white/65">{item.description}</p>
                </article>
              </FadeIn>
            ))}
          </section>

          <section className="space-y-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs tracking-[0.2em] text-black/45 uppercase dark:text-white/50">Showcase</p>
                <h2 className={`${geist.className} mt-2 text-3xl font-semibold sm:text-4xl`}>Interactive component previews</h2>
              </div>
              <Link
                href={docUrl}
                className="rounded-xl border border-black/15 px-4 py-2 text-sm text-black/80 transition hover:border-black/30 hover:bg-black/5 dark:border-white/20 dark:text-white/80 dark:hover:border-white/35 dark:hover:bg-white/8"
              >
                Explore all components
              </Link>
            </div>
            <div className="space-y-12">
              {showcaseItems.map(item => (
                <FadeIn key={item.id} once={true} offscreenY={30}>
                  <div className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-[0_12px_40px_-35px_rgba(15,23,42,0.8)] backdrop-blur-md sm:p-7 dark:border-white/15 dark:bg-white/4">
                    <ComponentPrev componentData={item} baseUrl="/homeDemo" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          <FadeIn once={true} offscreenY={35}>
            <section className="overflow-hidden rounded-3xl border border-black/10 bg-white/80 p-8 sm:p-10 dark:border-white/15 dark:bg-white/5">
              <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl space-y-4">
                  <p className="text-xs tracking-[0.2em] text-black/45 uppercase dark:text-white/50">Template</p>
                  <h2 className={`${geist.className} text-3xl leading-tight font-semibold sm:text-4xl`}>
                    Start from the official Taurus website template
                  </h2>
                  <p className="text-sm leading-relaxed text-black/65 dark:text-white/65">
                    The Libran template demonstrates how TaurusUI works with Next.js, TailwindCSS, and Motion to deliver a
                    clean, high-end product surface quickly.
                  </p>
                </div>
                <Link
                  target="_blank"
                  href="https://libran.jhub.space"
                  className="inline-flex w-fit items-center rounded-xl bg-black px-5 py-2.5 text-sm text-white transition hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/85"
                >
                  Open Template
                </Link>
              </div>
            </section>
          </FadeIn>
        </div>
      </LayoutContent>
    </main>
  );
}
