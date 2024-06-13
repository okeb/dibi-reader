"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from '@/utils/cn';

export const TextGenerateEffect = ({
  words,
  className,
  delay=0.02,
  duration=2
}: {
  words: string;
  className?: string;
  delay?: number;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: duration,
        delay: stagger(delay),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              style={{
                opacity: 0,
                fontStyle: 'italic',
              }}
              className="dark:text-white text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}  style={{ display: "inline-flex"}}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
