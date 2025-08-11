import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import ChangeBg from '@/components/changeBg';
import ComponentPrev from '@/components/componentPrev';
import DarkSwitchBlock from '@/components/darkSwitchBlock';
import FadeIn from '@/components/framerMotions/fadeIn';
import LayoutContent from '@/components/layoutContent';
import { MenuItemProps } from '@/components/menu';
import { getComponents } from '@/service/dataService';
import EmojiHoverCard from '@/components/emojiHoverCard';
import HomepageBg from '@/components/homepageBg';
import AnimatedShow from '@/components/framerMotions/animatedShow';

import { geistMomo } from './fonts';

// import { Geist_Mono } from 'next/font/google';

// const geist = Geist_Mono({
//   subsets: ['latin']
// });

const findFirstSlug = (menuItems: MenuItemProps[]) => {
  for (const item of menuItems) {
    const slug = item.children?.find(c => c.slug)?.slug;
    if (slug) {
      return slug;
    }
  }
  return null;
};

export default async function Home() {
  const componentsByCategory = await getComponents();
  const redirect = findFirstSlug(componentsByCategory);
  const docUrl = redirect ? `/docs/comp/${redirect}` : '/docs';

  return (
    <main className="relative">
      <HomepageBg />
      <LayoutContent>
        <div className="mx-auto mt-9 flex max-w-7xl flex-col p-5 sm:p-20">
          <AnimatedShow inViewShow childDuration={0.6} scale={0.95} className="flex flex-col gap-12">
            <h1 className="group z-10 bg-gradient-to-b bg-clip-text text-center text-6xl font-bold transition-all dark:from-white/80 dark:via-white dark:to-white/60 dark:text-transparent">
              <ChangeBg className="cursor-pointer leading-20 select-none">
                <span className="group-hover:ml-0">Component </span>
                library built with TailwindCSS
              </ChangeBg>
            </h1>
            <h1 className={clsx('text-center text-xl', geistMomo.className)}>
              Free open source <span className="cursor-pointer text-[#38bdf8] transition-all hover:text-3xl">TailwindCSS</span>{' '}
              component library
            </h1>
            <div className="mt-16 mb-24 flex items-center justify-center gap-5">
              <Link
                href="https://github.com/jianhuagao/TwinkleUI"
                target="_blank"
                className="group relative inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-white/60 px-4 py-2 text-sm ring-1 ring-gray-300/50 backdrop-blur-md transition-all duration-300 hover:shadow-lg active:scale-90 dark:bg-[rgba(255,255,255,0.15)] dark:text-white dark:shadow-white/10 dark:ring-white/20 dark:hover:ring-white/50"
              >
                Github
                <Image className="dark:invert" src="/icons/github.svg" width={16} height={16} alt="" />
              </Link>
              <Link
                href={docUrl}
                className="group relative inline-flex cursor-pointer items-center justify-center rounded-xl bg-white/60 px-4 py-2 text-sm text-purple-800 no-underline ring-1 ring-gray-300/50 backdrop-blur-md transition-all duration-300 hover:shadow-lg active:scale-90 dark:bg-[rgba(255,255,255,0.15)] dark:text-white dark:shadow-white/10 dark:ring-white/20 dark:hover:ring-white/50"
              >
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4 w-0 transition-all group-hover:w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <span className="pointer-events-none absolute right-2 bottom-2 z-0 size-5 rounded-full bg-purple-400/50 blur-[6px] transition-transform duration-300 ease-in-out group-hover:translate-1/2 dark:bg-purple-400/40"></span>
              </Link>
            </div>
          </AnimatedShow>
          <div className="flex flex-col gap-8">
            <AnimatedShow inViewShow childDuration={0.6} scale={0.95} className="mt-16 mb-6 grid gap-6 md:grid-cols-3">
              <DarkSwitchBlock />
              <EmojiHoverCard
                emojis={['🧪', '🧬', '🔬', '⚗️', '🧫']}
                href="https://play.cloveui.asia"
                title="Playground"
                description="在线试验你的组件组合"
              />
              <EmojiHoverCard
                emojis={['📦', '📣', '📤', '🌆', '🗯️', '📊', '💰']}
                href={docUrl}
                title="More Components"
                description="探索更多开箱即用组件"
              />
            </AnimatedShow>
            <FadeIn once={true}>
              <ComponentPrev
                componentData={{
                  id: '1',
                  title: 'Notification Demo',
                  defaultCfg: '11-12',
                  slug: 'demo',
                  category: 'demo',
                  wrapper: 'h-72',
                  creator: '',
                  interactive: true,
                  componentsName: ''
                }}
                baseUrl={`/homeDemo`}
              />
            </FadeIn>
            <FadeIn once={true}>
              <ComponentPrev
                componentData={{
                  id: '2',
                  title: 'Card Demo',
                  slug: 'demo',
                  defaultCfg: '10-12',
                  category: 'demo',
                  wrapper: 'h-[500px]',
                  creator: '',
                  innerWrapper: '1 !px-0 !block',
                  interactive: true,
                  componentsName: ''
                }}
                baseUrl={`/homeDemo`}
              />
            </FadeIn>
            <FadeIn once={true}>
              <ComponentPrev
                componentData={{
                  id: '3',
                  title: 'RadioGroup Demo',
                  slug: 'demo',
                  category: 'demo',
                  defaultCfg: '16-14',
                  wrapper: 'h-96',
                  creator: '',
                  innerWrapper: 'px-[20%] *:flex-1 !flex-row',
                  interactive: true,
                  componentsName: ''
                }}
                baseUrl={`/homeDemo`}
              />
            </FadeIn>
            <FadeIn once={true}>
              <div className="mt-10 flex items-center justify-center opacity-70">
                <Link href={docUrl} className="text-lg hover:text-blue-500 hover:underline">
                  More Components ...
                </Link>
              </div>
            </FadeIn>
            <FadeIn once={true}>
              <div className="my-40 border-l border-dashed border-gray-400/40 dark:border-gray-500/60">
                <div className="flex items-baseline gap-4 border-b border-dashed border-gray-400/40 px-16 py-14 dark:border-gray-500/60">
                  <p className="bg-gradient-to-b bg-clip-text text-3xl font-bold dark:from-white/80 dark:via-white dark:to-white/60 dark:text-transparent">
                    Templates using this UI
                  </p>
                  <p className="text-xl text-gray-500 dark:text-gray-400">Libran</p>
                </div>
                <div className="flex flex-col gap-10 px-16 py-14 md:flex-row">
                  <div className="flex flex-1 flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <span className="relative inline-block shrink-0 rounded-full bg-white/70 px-3.5 py-1.5 text-xs text-purple-800 shadow ring-1 shadow-black/10 ring-white/30 backdrop-blur-md dark:bg-[rgba(255,255,255,0.15)] dark:text-white dark:shadow-white/10 dark:ring-white/20">
                        <span className="relative z-10">TwinkleUI</span>
                        <span className="pointer-events-none absolute right-1.5 bottom-1.5 z-0 size-4 rounded-full bg-purple-400/50 blur-[5px] dark:bg-purple-400/40"></span>
                      </span>

                      <span className="relative inline-block shrink-0 rounded-full bg-white/70 px-3.5 py-1.5 text-xs text-emerald-800 shadow ring-1 shadow-black/10 ring-white/30 backdrop-blur-md dark:bg-[rgba(255,255,255,0.15)] dark:text-white dark:shadow-white/10 dark:ring-white/20">
                        <span className="relative z-10">NextJS</span>
                        <span className="pointer-events-none absolute right-1.5 bottom-1.5 z-0 size-4 rounded-full bg-emerald-400/50 blur-[5px] dark:bg-emerald-400/40"></span>
                      </span>

                      <span className="relative inline-block shrink-0 rounded-full bg-white/70 px-3.5 py-1.5 text-xs text-red-800 shadow ring-1 shadow-black/10 ring-white/30 backdrop-blur-md dark:bg-[rgba(255,255,255,0.15)] dark:text-white dark:shadow-white/10 dark:ring-white/20">
                        <span className="relative z-10">TailwindCSS</span>
                        <span className="pointer-events-none absolute right-1.5 bottom-1.5 z-0 size-4 rounded-full bg-red-400/50 blur-[5px] dark:bg-red-400/40"></span>
                      </span>

                      <span className="relative inline-block shrink-0 rounded-full bg-white/70 px-3.5 py-1.5 text-xs text-cyan-800 shadow ring-1 shadow-black/10 ring-white/30 backdrop-blur-md dark:bg-[rgba(255,255,255,0.15)] dark:text-white dark:shadow-white/10 dark:ring-white/20">
                        <span className="relative z-10">Framer-motion</span>
                        <span className="pointer-events-none absolute right-1.5 bottom-1.5 z-0 size-4 rounded-full bg-cyan-400/50 blur-[5px] dark:bg-cyan-400/40"></span>
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      This official website template is built with TwinkleUI, Next.js, Tailwind CSS, and Framer-motion,
                      combining modern UI components with powerful frameworks to create a stunning and responsive web
                      experience. Leverage these technologies to build your own professional website with ease and efficiency.
                    </p>

                    <Link
                      target="_blank"
                      href="https://libran.cloveui.asia"
                      className="group relative inline-flex w-32 cursor-pointer items-center justify-center rounded-xl bg-white/60 px-4 py-2 text-sm text-purple-800 no-underline ring-1 ring-gray-300/50 backdrop-blur-md transition-all duration-300 hover:shadow-lg active:scale-90 dark:bg-[rgba(255,255,255,0.15)] dark:text-white dark:shadow-white/10 dark:ring-white/20 dark:hover:ring-white/50"
                    >
                      Go to Libran
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4 w-0 transition-all group-hover:w-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                      <span className="pointer-events-none absolute right-2 bottom-2 z-0 size-5 rounded-full bg-purple-400/50 blur-[6px] transition-transform duration-300 ease-in-out group-hover:translate-1/2 dark:bg-purple-400/40"></span>
                    </Link>
                  </div>
                  <div className="flex-1">
                    <div className="group relative">
                      <Image
                        className="absolute top-0 left-0 rounded-lg shadow-2xl"
                        src="/resource/template/t2.jpg"
                        width={400}
                        height={200}
                        alt="libran"
                      />
                      <Image
                        className="absolute top-0 left-1/5 rounded-lg shadow-2xl transition-transform duration-500 ease-in-out group-hover:translate-y-[40px]"
                        src="/resource/template/t1.png"
                        width={400}
                        height={200}
                        alt="libran"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </LayoutContent>
    </main>
  );
}
