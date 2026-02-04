'use client';

import { memo, ReactNode, useContext, useEffect, useState } from 'react';
import LayoutContext from '@/context/layoutContext';

interface LayoutModeContentProps {
  children: ReactNode;
  mode: 'horizontal' | 'vertical';
}

export default memo(function LayoutModeContent({ children, mode }: LayoutModeContentProps) {
  const layoutContext = useContext(LayoutContext);
  const [mounted, setMounted] = useState(false);

  if (!layoutContext) {
    throw new Error('useContext must be used within a LayoutProvider');
  }

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return layoutContext.layout === mode ? <>{children}</> : null;
});
