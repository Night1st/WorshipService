import { AnimatePresence, motion } from "framer-motion";
import { Data } from ".";
export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const wordAnimation = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};
interface Props {
  data: Data;
}

const ContentBanner = ({ data }: Props) => {
  const src = data.image
  return (
    <div className={`w-full flex min-h-screen flex-col justify-center items-center leading-[90%] tracking-wide ${src} bg-cover lg:left-0 lg:items-center`}>
      <div className="text-lg font-bold lg:text-6xl">
        {/* <h1 className="inline-block pr-2 text-4xl lg:text-6xl">Cải Tiến</h1> */}
        <AnimatePresence mode="wait">
          <motion.span variants={staggerChildren} animate="animate">
            {data.title}
          </motion.span>
        </AnimatePresence>
      </div>
      <motion.div className="text-sm text-center lg:text-2xl mt-5">
        {data.description}
      </motion.div>

    </div>
  );
};

export default ContentBanner;
