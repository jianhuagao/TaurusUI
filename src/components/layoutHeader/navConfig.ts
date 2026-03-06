export interface HeaderNavItem {
  label: string;
  href: string;
  external?: boolean;
  iconSrc?: string;
}

export const headerNavItems: HeaderNavItem[] = [
  {
    label: 'Components',
    href: '/docs/comp/general/button'
  },
  {
    label: 'Article',
    href: '/docs/article/directory'
  },
  {
    label: 'Template',
    href: 'https://libran.jhub.space',
    external: true,
    iconSrc: '/icons/libran.svg'
  }
];
