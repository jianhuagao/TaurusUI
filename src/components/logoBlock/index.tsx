import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

const hoverClass =
  'rounded-xl border border-transparent px-2 py-1.5 transition hover:border-black/10 hover:bg-white/60 dark:hover:border-white/15 dark:hover:bg-white/5';

export default function LogoBlock() {
  return (
    <Link href="/">
      <div className={clsx('group flex cursor-pointer select-none items-center gap-2 text-lg font-semibold', hoverClass)}>
        <Image src="/logo.svg" className="transition-transform duration-500 group-hover:rotate-12" width={14} height={14} alt="" />
        <span>
          Taurus<span className="font-light">UI</span>
        </span>
      </div>
    </Link>
  );
}
