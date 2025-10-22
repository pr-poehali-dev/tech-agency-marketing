import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  end: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({ end, duration = 2000, className = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateValue = () => {
    const numericEnd = parseInt(end.replace(/\D/g, ''));
    const suffix = end.replace(/\d/g, '');
    const increment = numericEnd / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericEnd) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current) + suffix);
      }
    }, 16);
  };

  return (
    <div ref={elementRef} className={className}>
      {count}
    </div>
  );
};

export default AnimatedCounter;
