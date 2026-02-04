'use client';

import { motion } from 'motion/react';
import React from 'react';
import { memo, useMemo } from 'react';

interface AnimatedShowProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  inViewShow?: boolean;
  scale?: number;
  duration?: number;
  childDuration?: number;
  staggerChildren?: number;
  itemClassNames?: string[];
  visibleDelay?: number;
  hiddenDelay?: number;
}

const AnimatedShow = ({
  children,
  className,
  scale = 0.98,
  duration = 1,
  childDuration = 0.4,
  staggerChildren = 0.2,
  itemClassNames = [],
  inViewShow = false,
  visibleDelay = 0,
  hiddenDelay = 0
}: AnimatedShowProps) => {
  const animationVariants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        transform: `scale(${scale})`,
        transition: {
          duration,
          staggerChildren,
          type: 'spring' as const,
          bounce: 0.4,
          delay: hiddenDelay
        }
      },
      visible: {
        opacity: 1,
        transform: 'scale(1)',
        transition: {
          duration,
          staggerChildren,
          type: 'spring' as const,
          bounce: 0.4,
          delay: visibleDelay
        }
      }
    }),
    [scale, duration, staggerChildren, visibleDelay, hiddenDelay]
  );

  const childVariants = useMemo(
    () => ({
      hidden: { opacity: 0, transform: `scale(${scale})` },
      visible: { opacity: 1, transform: 'scale(1)', transition: { duration: childDuration } }
    }),
    [scale, childDuration]
  );

  const arrChildren = React.Children.toArray(children);

  return (
    <motion.div
      initial="hidden"
      animate={inViewShow ? undefined : 'visible'}
      whileInView={inViewShow ? 'visible' : undefined}
      variants={animationVariants}
      className={className}
    >
      {arrChildren.map((child, index) => {
        return (
          <motion.span key={index} className={itemClassNames[index] || ''} variants={childVariants}>
            {child}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default memo(AnimatedShow);
