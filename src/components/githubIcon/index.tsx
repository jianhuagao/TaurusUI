import { memo } from 'react';
import Image from 'next/image';

export default memo(function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <a
      href="https://github.com/jianhuagao/TaurusUI"
      target="_blank"
      className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white/70 p-2 transition hover:border-black/20 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:border-white/30 dark:hover:bg-white/10"
    >
      <Image className="dark:invert" src="/icons/github.svg" width={size} height={size} alt="" />
    </a>
  );
});
