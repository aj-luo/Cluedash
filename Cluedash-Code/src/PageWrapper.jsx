import { motion } from 'framer-motion';

// Define the animation behavior
const pageTransition = {
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
  }
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={{ duration: 0.5 }} // Smooth 0.5 second transition
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;