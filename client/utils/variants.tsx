export const sliderVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export const fadeInInitial = {
  y: 100,
  opacity: 0,
};

export const fadeInAnimate = {
  y: 0,
  opacity: 1,
  transition: {
    duration: 1,
    type: "tween",
  },
};

export const pageTransition = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: ["-100%", "0%", "100%"],
    transition: { duration: 1 },
  },
};
