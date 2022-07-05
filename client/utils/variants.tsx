export const sliderVariants = {
  enter: (direction: number) => {
    return {
      // x: direction > 0 ? 1000 : -1000,
      x: 1000,
      opacity: 0,
      zIndex: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      // x: direction > 0 ? -1000 : 1000,
      x: -1000,
      opacity: 0,
    };
  },
};
