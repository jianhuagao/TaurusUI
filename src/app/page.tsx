import Link from 'next/link';
import Image from 'next/image';

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
    id: '01',
    title: 'Ship Faster',
    description: 'Compose production-grade UI with practical defaults and predictable behavior.'
  },
  {
    id: '02',
    title: 'Scale Consistently',
    description: 'A shared visual system keeps product surfaces aligned across teams and features.'
  },
  {
    id: '03',
    title: 'Stay Performant',
    description: 'Lean structure and motion choices maintain smooth performance on mobile and desktop.'
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
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-size-[32px_32px] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_0%,rgba(14,165,233,0.18),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(15,23,42,0.18),transparent_42%)] dark:bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.17),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(148,163,184,0.14),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.65),rgba(255,255,255,0.9))] dark:bg-[linear-gradient(to_bottom,rgba(2,6,23,0.45),rgba(2,6,23,0.9))]" />

      <LayoutContent>
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-5 py-10 sm:px-10 sm:py-16 lg:px-16">
          <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/75 shadow-[0_40px_90px_-55px_rgba(15,23,42,0.55)] backdrop-blur-xl dark:border-white/15 dark:bg-black/30">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-size-[28px_28px] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]" />
            <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
              <AnimatedShow inViewShow childDuration={0.55} scale={0.98} className="relative z-10 flex flex-col gap-8">
                <span className="inline-flex w-fit items-center rounded-full border border-black/15 bg-white/80 px-4 py-1.5 text-[11px] tracking-[0.24em] text-black/65 uppercase dark:border-white/20 dark:bg-white/5 dark:text-white/65">
                  TAURUS UI PLATFORM
                </span>
                <div className="space-y-6">
                  <h1
                    className={`${geist.className} max-w-4xl text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl`}
                  >
                    Components that feel like a premium product out of the box.
                  </h1>
                  <p
                    className={`${geistMomo.className} max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base dark:text-white/70`}
                  >
                    TaurusUI is a curated Tailwind component gallery. Open any component, copy the snippet you need, and paste
                    it directly into your project.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={docUrl}
                    className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/85"
                  >
                    Start Building
                  </Link>
                  <Link
                    href="https://github.com/jianhuagao/TaurusUI"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white/70 px-5 py-2.5 text-sm font-medium text-black/80 transition hover:border-black/25 hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white/80 dark:hover:border-white/35 dark:hover:bg-white/10"
                  >
                    View on GitHub
                  </Link>
                </div>
                <div className="grid gap-3 text-xs sm:grid-cols-3">
                  <div className="rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-black/65 dark:border-white/15 dark:bg-white/5 dark:text-white/65">
                    80+ reusable patterns
                  </div>
                  <div className="rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-black/65 dark:border-white/15 dark:bg-white/5 dark:text-white/65">
                    Next.js + TailwindCSS
                  </div>
                  <div className="rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-black/65 dark:border-white/15 dark:bg-white/5 dark:text-white/65">
                    Responsive by default
                  </div>
                </div>
              </AnimatedShow>

              <FadeIn once={true} offscreenY={20} className="relative z-10">
                <div className="h-full rounded-2xl border border-black/10 bg-white/85 p-4 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.8)] dark:border-white/15 dark:bg-white/5">
                  <div className="flex items-center justify-between border-b border-black/10 px-2 pb-3 dark:border-white/10">
                    <p className="text-xs tracking-[0.18em] text-black/50 uppercase dark:text-white/50">Taurus Console</p>
                    <span className="size-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="space-y-3 px-2 pt-4 text-xs">
                    <div className="rounded-lg border border-black/10 bg-black px-3 py-2 font-mono text-white dark:border-white/10">
                      Open component preview
                    </div>
                    <div className="rounded-lg border border-black/10 bg-white px-3 py-2 text-black/65 dark:border-white/10 dark:bg-white/5 dark:text-white/65">
                      Pick HTML, React, or Vue code mode.
                    </div>
                    <div className="rounded-lg border border-black/10 bg-white px-3 py-2 text-black/65 dark:border-white/10 dark:bg-white/5 dark:text-white/65">
                      Copy the snippet from the code panel.
                    </div>
                    <div className="rounded-lg border border-black/10 bg-white px-3 py-2 text-black/65 dark:border-white/10 dark:bg-white/5 dark:text-white/65">
                      Paste into your project and customize freely.
                    </div>
                  </div>
                  <div className="mt-4 space-y-3 border-t border-black/10 px-2 pt-4 dark:border-white/10">
                    <p className="text-[11px] tracking-[0.18em] text-black/45 uppercase dark:text-white/45">Ready to copy</p>
                    <div className="flex flex-wrap gap-2 text-[11px] text-black/70 dark:text-white/70">
                      <span className="rounded-md border border-black/10 bg-white px-2 py-1 dark:border-white/15 dark:bg-white/5">
                        Buttons
                      </span>
                      <span className="rounded-md border border-black/10 bg-white px-2 py-1 dark:border-white/15 dark:bg-white/5">
                        Cards
                      </span>
                      <span className="rounded-md border border-black/10 bg-white px-2 py-1 dark:border-white/15 dark:bg-white/5">
                        Forms
                      </span>
                      <span className="rounded-md border border-black/10 bg-white px-2 py-1 dark:border-white/15 dark:bg-white/5">
                        Navbars
                      </span>
                      <span className="rounded-md border border-black/10 bg-white px-2 py-1 dark:border-white/15 dark:bg-white/5">
                        Motion UI
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={docUrl}
                        className="rounded-lg border border-black/10 bg-white px-2.5 py-1.5 text-[11px] text-black/75 transition hover:border-black/20 hover:bg-black/5 dark:border-white/15 dark:bg-white/5 dark:text-white/75 dark:hover:border-white/30 dark:hover:bg-white/10"
                      >
                        Browse Components
                      </Link>
                      <a
                        href="https://play.jhub.space"
                        target="_blank"
                        className="rounded-lg border border-black/10 bg-white px-2.5 py-1.5 text-[11px] text-black/75 transition hover:border-black/20 hover:bg-black/5 dark:border-white/15 dark:bg-white/5 dark:text-white/75 dark:hover:border-white/30 dark:hover:bg-white/10"
                      >
                        Open Playground
                      </a>
                    </div>
                    <p className="text-[11px] text-black/50 dark:text-white/50">
                      No package install required. Copy what you need only.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          <section className="grid gap-4 border-y border-black/10 py-8 md:grid-cols-3 dark:border-white/10">
            {featureItems.map(item => (
              <FadeIn once={true} key={item.id} offscreenY={30} className="h-full">
                <article className="h-full rounded-2xl border border-black/10 bg-white/65 p-6 backdrop-blur-md transition hover:border-black/20 hover:bg-white/80 dark:border-white/15 dark:bg-white/5 dark:hover:border-white/25 dark:hover:bg-white/8">
                  <p className="text-xs tracking-[0.16em] text-black/45 dark:text-white/45">{item.id}</p>
                  <h2 className={`${geist.className} mt-3 text-lg font-medium`}>{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-black/65 dark:text-white/65">{item.description}</p>
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
                  <div className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-[0_16px_40px_-35px_rgba(15,23,42,0.85)] sm:p-7 sm:pt-5 dark:border-white/15 dark:bg-white/4">
                    <ComponentPrev componentData={item} baseUrl="/homeDemo" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          <FadeIn once={true} offscreenY={35}>
            <section className="overflow-hidden rounded-3xl border border-black/10 bg-white/80 p-8 sm:p-10 dark:border-white/15 dark:bg-white/5">
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="space-y-6">
                  <p className="text-xs tracking-[0.2em] text-black/45 uppercase dark:text-white/50">Template</p>
                  <h2 className={`${geist.className} max-w-2xl text-3xl leading-tight font-semibold sm:text-4xl`}>
                    Start from the official Taurus website template
                  </h2>
                  <p className="max-w-2xl text-sm leading-relaxed text-black/65 dark:text-white/65">
                    The Libran template demonstrates how TaurusUI works with Next.js, TailwindCSS, and Motion to deliver a
                    clean, high-end product surface quickly.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-lg border border-black/10 bg-white/70 px-3 py-1.5 text-xs text-black/70 dark:border-white/15 dark:bg-white/8 dark:text-white/70">
                      TaurusUI
                    </span>
                    <span className="rounded-lg border border-black/10 bg-white/70 px-3 py-1.5 text-xs text-black/70 dark:border-white/15 dark:bg-white/8 dark:text-white/70">
                      Next.js
                    </span>
                    <span className="rounded-lg border border-black/10 bg-white/70 px-3 py-1.5 text-xs text-black/70 dark:border-white/15 dark:bg-white/8 dark:text-white/70">
                      TailwindCSS
                    </span>
                    <span className="rounded-lg border border-black/10 bg-white/70 px-3 py-1.5 text-xs text-black/70 dark:border-white/15 dark:bg-white/8 dark:text-white/70">
                      Motion
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      target="_blank"
                      href="https://libran.jhub.space"
                      className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/85"
                    >
                      Open Libran
                    </Link>
                    <Link
                      href={docUrl}
                      className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white/70 px-5 py-2.5 text-sm font-medium text-black/80 transition hover:border-black/25 hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white/80 dark:hover:border-white/35 dark:hover:bg-white/10"
                    >
                      Explore Components
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="group relative mx-auto h-74 w-full max-w-120">
                    <div className="absolute inset-0 rounded-2xl border border-black/10 bg-white/45 dark:border-white/15 dark:bg-white/5" />
                    <Image
                      className="absolute top-3 left-3 w-[60%] rounded-xl border border-black/10 shadow-[0_20px_45px_-28px_rgba(15,23,42,0.8)] transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-1 group-hover:-rotate-3 dark:border-white/15"
                      src="/resource/template/t1.png"
                      width={420}
                      height={220}
                      alt="libran preview one"
                    />
                    <Image
                      className="absolute right-3 bottom-3 w-[70%] rounded-xl border border-black/10 shadow-[0_24px_50px_-30px_rgba(15,23,42,0.9)] transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-1 group-hover:rotate-2 dark:border-white/15"
                      src="/resource/template/t2.jpg"
                      width={420}
                      height={220}
                      alt="libran preview two"
                    />
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>
        </div>
      </LayoutContent>
    </main>
  );
}
