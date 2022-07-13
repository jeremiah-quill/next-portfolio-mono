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

export const gridContainer = {
  // initial: { gap: "0px" },
  animate: {
    // gap: "20px",
    transition: {
      staggerChildren: 0.2,
      duration: 1,
      delay: 0.5,
    },
  },
};

export const gridItem = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

export const pageTransition = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.75,
    },
  },
};
