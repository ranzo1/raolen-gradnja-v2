export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction == "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const fadeInAnimation = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 3, // Duration in seconds (3000ms = 3s)
      delay: 0.6, // Delay in seconds (600ms = 0.6s)
    },
  },
};

export const slideInLeftAnimation = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const slideInRightAnimation = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const scaleAnimation = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

export const customAnimation = (duration, delay) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration, delay } },
});
