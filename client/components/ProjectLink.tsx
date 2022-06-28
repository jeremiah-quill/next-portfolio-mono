import Link from "next/link";
import { motion } from "framer-motion";
import { Props } from "next/script";

const ProjectLink = ({
  // title,
  // subtitle,
  // src,
  // url,
  // key,
  project,
  currentSlide,
}: {
  // title: string;
  // subtitle: string;
  // src: string;
  // url: string;
  currentSlide: number;
  // key: any;
  project: any;
}) => {
  const variants = {
    enter: () => {
      return {
        x: 1000,
        opacity: 0,
        zIndex: 0,
      };
    },
    center: {
      // zIndex: 1,
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
    <motion.div
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
      <Link href={`/projects/${project.slug}`}>
        <a className="h-full w-full flex items-center justify-center">
          <div className="font-robot text-center">
            <h1 className="text-3xl">{project.title}</h1>
            <h2 className="text-xl mb-2">{project.subtitle}</h2>
            <img src={`http://localhost:1337${project.src}`} className="w-5/6 m-auto rounded" />
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

export default ProjectLink;
