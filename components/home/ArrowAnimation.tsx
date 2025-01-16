import { motion } from "motion/react";

function ArrowAnimation() {
  return (
    <div className="relative h-24 w-24 rotate-45">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          translateX: 20,
          translateY: 20,
          opacity: 1,
          transition: {
            translateX: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            },
            translateY: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            },
            opacity: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            },
          },
        }}
        className="absolute top-0 left-0 h-10 w-10 border-r-2 border-b-2 border-white/50"
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          translateX: 20,
          translateY: 20,
          opacity: 1,
          transition: {
            translateX: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            },
            translateY: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            },
            opacity: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className="absolute top-3 left-3 h-10 w-10 border-r-2 border-b-2 border-white/50"
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          translateX: 20,
          translateY: 20,
          opacity: 1,
          transition: {
            translateX: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            },
            translateY: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            },
            opacity: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              delay: 0.4,
            },
          },
        }}
        className="absolute top-6 left-6 h-10 w-10 border-r-2 border-b-2 border-white/50"
      />
    </div>
  );
}
export default ArrowAnimation;
