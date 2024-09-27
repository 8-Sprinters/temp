import { motion, useAnimation, AnimationControls } from 'framer-motion';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface MotionWrapperProps {
  children: React.ReactNode;
  delay?: number;
  variantsType?: 'vertical' | 'horizontal' | 'reverseHorizontal' | 'popUp';
}

function MotionWrapper({ children, delay, variantsType = 'vertical' }: MotionWrapperProps) {
  const controls = useAnimation();

  const VARIANTS = {
    vertical: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    horizontal: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    reverseHorizontal: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 },
    },
    popUp: {
      hidden: { opacity: 0, x: 30, y: 0 },
      visible: { opacity: 1, x: 0, y: 20 },
    },
  };

  const ref = useIntersectionObserver(() => {
    controls.start('visible');
  }, [0.4]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls as AnimationControls}
      variants={VARIANTS[variantsType]}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

export default MotionWrapper;
