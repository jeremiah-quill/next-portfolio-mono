import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { isDev } from "../utils/helpers";
import { sliderVariants } from "../utils/variants";
import { wrap } from "popmotion";
import ProgressiveImg from "./ProgressiveImg";

const Gallery = ({ projects }: any) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, projects.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="absolute w-full h-full"
          key={page}
          variants={sliderVariants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}>
          <Link href={`/${projects[imageIndex].slug}`}>
            <a className="h-full w-full flex items-center justify-center text-white">
              <div className="font-robot text-center">
                <h1 className="text-3xl">{projects[imageIndex].title}</h1>
                <h2 className="text-xl mb-2">{projects[imageIndex].subtitle}</h2>
                <img
                  src={`${isDev() ? process.env.NEXT_PUBLIC_STRAPI_URL : ""}${
                    projects[imageIndex].src
                  }`}
                  className="w-5/6 m-auto rounded"
                />
                {/* <ProgressiveImg
                  className="w-5/6 m-auto rounded"
                  aspectRatio="auto"
                  lowQualityImg={`${isDev() ? process.env.NEXT_PUBLIC_STRAPI_URL : ""}${
                    projects[imageIndex].thumbnail
                  }`}
                  highQualityImg={`${isDev() ? process.env.NEXT_PUBLIC_STRAPI_URL : ""}${
                    projects[imageIndex].src
                  }`}
                /> */}
              </div>
            </a>
          </Link>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={() => paginate(-1)}
        className="relative z-10 rotate-180 w-10 h-10 rounded-full bg-white m-3">
        {"‣"}
      </button>
      <button
        onClick={() => paginate(1)}
        className="relative z-10 w-10 h-10 rounded-full bg-white m-3">
        {"‣"}
      </button>
      {/* <div className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2">test</div> */}
    </>
  );
};

export default Gallery;
