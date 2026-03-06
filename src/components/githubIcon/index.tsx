import { memo } from 'react';
import Image from 'next/image';

export default memo(function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <a
      href="https://github.com/jianhuagao/TaurusUI"
      target="_blank"
      className="inline-flex items-center justify-center p-2 transition"
    >
      <Image className="dark:invert" src="/icons/github.svg" width={size} height={size} alt="" />
    </a>
  );
});
