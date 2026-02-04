'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { MenuItemProps } from '../menu';
import Link from 'next/link';
import { useDropdownMenu } from './dropdownMenuContext';
import clsx from 'clsx';
import AnimatedShow from '../framerMotions/animatedShow';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';

interface DropdownMenuClientProps {
  id: string;
  buttonLabel: string;
  items: MenuItemProps[];
  slug: string;
}

export default function DropdownMenuClient({ id, buttonLabel, items, slug }: DropdownMenuClientProps) {
  const pathname = usePathname();
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { openId, setOpenId } = useDropdownMenu();

  // 取当前路径的第x级
  // [0]           /[1] /[2] /[3]       /[4]
  // localhost:3000/docs/comp/navigation/dock
  const currentRoot = pathname.split('/')[3] ?? '';
  const currentItem = pathname.split('/')[4] ?? '';
  const isActive = currentRoot === slug;

  const isOpen = openId === id;

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ top: rect.bottom + 8, left: rect.left });
    }
    setOpenId(isOpen ? null : id);
  };

  useEffect(() => {
    const hide = () => setOpenId(null);
    window.addEventListener('click', hide);
    return () => window.removeEventListener('click', hide);
  }, [setOpenId]);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className={clsx(
          isOpen && 'bg-gray-500/15 dark:bg-white/20',
          isActive && 'bg-gray-500/10 dark:bg-white/15',
          'cursor-pointer rounded-[10px] px-2 py-1 transition-all hover:bg-gray-500/15 dark:hover:bg-white/20'
        )}
      >
        {buttonLabel}
      </button>

      {isOpen &&
        createPortal(
          <motion.div
            layout
            initial={{ opacity: 0, y: -50, scale: 0.5, origin: 'top' }}
            animate={{ opacity: 1, y: 0, scale: 1, origin: 'top' }}
            exit={{ opacity: 0, y: -50, scale: 0.5, origin: 'top' }}
            transition={{
              type: 'spring',
              duration: 0.6,
              bounce: 0.5
            }}
            className="fixed z-9999 w-56 rounded-2xl bg-white/60 p-3 text-sm text-gray-700 shadow-2xl ring-1 ring-gray-400/10 backdrop-blur-2xl dark:bg-black/20 dark:text-white dark:ring-white/10"
            style={{ top: position.top, left: position.left }}
          >
            <AnimatedShow staggerChildren={0.1} className="flex flex-col gap-1">
              {items.map(({ slug, title }) => {
                // slug = navigation/dock
                const url = `/docs/comp/${slug}`;
                const slugItem = slug.split('/')[1] ?? '';
                const isActiveItem = currentItem === slugItem;
                return (
                  <Link
                    href={url}
                    key={title}
                    className={clsx(
                      isActiveItem && 'bg-gray-500/10 dark:bg-white/15',
                      'group relative flex h-10 w-full cursor-pointer items-center gap-3 overflow-hidden rounded-lg p-2 transition-all duration-300 ease-in-out select-none hover:bg-gray-500/15 active:scale-90 dark:ring-white/30 dark:hover:bg-white/20'
                    )}
                  >
                    {title}
                  </Link>
                );
              })}
            </AnimatedShow>
          </motion.div>,
          document.body
        )}
    </>
  );
}
