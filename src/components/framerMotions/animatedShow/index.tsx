'use client';

import { motion } from 'motion/react';
import { isValidElement, memo, useMemo } from 'react';

type WithDataOriginalClassName = {
  'data-originalClassName'?: string;
};

interface AnimatedShowProps {
  children: React.ReactNode[];
  className?: string;
  inViewShow?: boolean;
  scale?: number;
  duration?: number;
  childDuration?: number;
  staggerChildren?: number;
}

const AnimatedShow = ({
  children,
  className,
  scale = 0.98,
  duration = 1,
  childDuration = 0.4,
  staggerChildren = 0.2,
  inViewShow = false
}: AnimatedShowProps) => {
  const animationVariants = useMemo(
    () => ({
      hidden: { opacity: 0, transform: `scale(${scale})` },
      visible: {
        opacity: 1,
        transform: 'scale(1)',
        transition: {
          duration,
          staggerChildren
        }
      }
    }),
    [scale, duration, staggerChildren]
  );

  const childVariants = useMemo(
    () => ({
      hidden: { opacity: 0, transform: `scale(${scale})` },
      visible: { opacity: 1, transform: 'scale(1)', transition: { duration: childDuration } }
    }),
    [scale, childDuration]
  );

  return (
    <motion.div
      initial="hidden"
      animate={inViewShow ? undefined : 'visible'}
      whileInView={inViewShow ? 'visible' : undefined}
      variants={animationVariants}
      className={className}
    >
      {children.map((child, index) => {
        let originalClassName = '';
        if (isValidElement(child)) {
          const props = child.props as unknown as WithDataOriginalClassName;
          originalClassName = props['data-originalClassName'] ?? '';
        }
        return (
          <motion.span key={index} className={originalClassName} variants={childVariants}>
            {child}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default memo(AnimatedShow);
