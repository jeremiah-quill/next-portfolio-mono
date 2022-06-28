import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface Project {
  slug: string;
  src: string;
  title: string;
  subtitle: string;
  id: number;
}

const Gallery = ({ projects }: Project[]) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isMouseOn, setIsMouseOn] = useState<boolean>(false);

  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      setCurrentSlide((curr) => {
        if (curr === projects.length - 1) {
          return 0;
        } else {
          return curr + 1;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: () => {
      return {
        x: 1000,
        opacity: 0,
        zIndex: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: () => {
      return {
        zIndex: 0,
        x: -1000,
        opacity: 0,
      };
    },
  };

  return (
    <>
      <AnimatePresence initial={false}>
        <motion.div
          onMouseEnter={() => setIsMouseOn(true)}
          onMouseLeave={() => setIsMouseOn(false)}
          className="absolute w-full h-full"
          key={currentSlide}
          // custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}>
          <Link href={`/projects/${projects[currentSlide].slug}`}>
            <a className="h-full w-full flex items-center justify-center text-white">
              <div className="font-robot text-center">
                <h1 className="text-3xl">{projects[currentSlide].title}</h1>
                <h2 className="text-xl mb-2">{projects[currentSlide].subtitle}</h2>
                <img
                  src={`http://localhost:1337${projects[currentSlide].src}`}
                  className="w-5/6 m-auto rounded"
                />
              </div>
            </a>
          </Link>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Gallery;
