import { AnimatePresence, motion } from "framer-motion";
import { Data } from ".";
import { Bungee } from 'next/font/google'
import IconArrowRight from "../../icon/IconArrowRight";
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
  text: string;
  handleClick?: any
}
const bungee = Bungee({ subsets: ["latin-ext"], display: 'swap', weight: ['400'] })
const ContentBanner = ({ data, text, handleClick }: Props) => {
  const src = data.image
  return (
    <div style={{backgroundImage: `url(${src})`}} className={`w-full flex min-h-screen flex-col justify-center items-center leading-[90%] tracking-wide bg-cover lg:left-0 lg:px-16 lg:items-start`}>
      <div className="text-left text-4xl font-bold capitalize lg:text-6xl">
        {/* <h1 className="inline-block pr-2 text-4xl lg:text-6xl">Cải Tiến</h1> */}
        <AnimatePresence mode="wait">
          <motion.span variants={staggerChildren} animate="animate" className={data.title == "METAVERSE" ? bungee.className : ""}>
            {data.title}
          </motion.span>
        </AnimatePresence>
      </div>
      <motion.div className="text-sm lg:text-lg mt-5">
        {data.description}
      </motion.div>
      {text && 
      <div className='mb-4 flex justify-end'>
    </div>
      }
      
    </div>
  );
};

export default ContentBanner;
