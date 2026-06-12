import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 24,
  duration = 0.75,
  as: Component = motion.div,
  viewport = { once: true, amount: 0.25 },
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay,
            duration,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      {...rest}
    >
      {children}
    </Component>
  );
}
